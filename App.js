import React, { Component } from 'react';
import {
  Container, Header, Content, Footer, Input, Button, Item, Icon,  Form, Label,
  Card, CardItem, Left, Right, Thumbnail, Body, View, List, ListItem, Title,
} from 'native-base'
import { Text, Image } from 'react-native'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      berat: 0,
      tinggi: 0,
      imt: 0,
      diagnosa: '',
      show: false
    }
  }
  render() {
    let hitung = () => {
      let berat = this.state.berat;
      let tinggi = this.state.tinggi / 100;
      this.setState({
        tinggi: tinggi
      });
      let hasil = berat / (tinggi * tinggi);
      this.setState({
        imt: hasil
      });
      if (hasil < 18.5) {
        this.setState({
          diagnosa: 'BB Anda Kurang!'
        })
      } else if (hasil >= 18.5 && hasil <= 24.9) {
        this.setState({
          diagnosa: 'BB Anda Ideal!'
        })
      } else if (hasil >= 25.0 && hasil <= 29.9) {
        this.setState({
          diagnosa: 'BB Anda Berlebih!'
        })
      } else if (hasil >= 30.0 && hasil <= 39.9) {
        this.setState({
          diagnosa: 'BB Anda Sangat Berlebih!'
        })
      } else if (hasil > 40) {
        this.setState({
          diagnosa: 'Anda Obesitas! '
        })
      }
      this.setState({
        show: true
      })
    }

    return (
      <Container style={{ backgroundColor: 'lightblue', width: '100%' }}>
        <Header style={{ backgroundColor: 'blue' }}>
          <Title style={{justifyContent: "center"}}>INDEKS MASSA TUBUH</Title>
        </Header>
        <Content>
          <Form>
            <View style={{ flex: 1, flexDirection: 'row', }}>
              <Item floatingLabel style={{ width: 300, height: 100 }}>
                <Label> Massa (Kg) </Label>
                <Input onChangeText={(e) => { this.setState({ berat: e }) }} />
              </Item>
              <Item floatingLabel style={{ width: 300, height: 100 }}>
                <Label> Tinggi (cm) </Label>
                <Input onChangeText={(e) => { this.setState({ tinggi: e }) }} />
              </Item>
            </View>
          </Form>
          <Button block primary onPress={hitung}><Text>HITUNG IMT</Text></Button>
          {this.state.show &&
            <Body>
              <Text> Berat Badan: </Text>
              <Text style={{ fontWeight: 'bold' }}> {this.state.berat} Kilo Gram</Text>
              <Text> Tinggi Badan: </Text>
              <Text style={{ fontWeight: 'bold' }}> {this.state.tinggi} Meter </Text>
              <Text> IMT: </Text>
              <Text style={{ fontWeight: 'bold' }}> {this.state.imt} </Text>
              <Text> Diagnosa: </Text>
              <Text style={{ fontWeight: 'bold' }}> {this.state.diagnosa} </Text>
            </Body>
          }
        </Content>
      </Container>
    )
  }
}