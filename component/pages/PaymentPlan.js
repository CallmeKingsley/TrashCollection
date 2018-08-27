import React from 'react';
import { StyleSheet,View,TextInput,Text,Image,AsyncStorage  } from 'react-native';
import { Container, Header, Content,Body, Button,Title, Form, Item, Input, Label } from 'native-base';
import image from '../Assets/image2.png'
export default class Payment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        CardNumber: 0,
        SecurityCode: 0,
        Name: ' ',
        Exp1:0,
        Exp2:0,
    };
  }
  render() {

        this.props.GetName(this.state.Name)
        this.props.GetCardNumber(this.state.CardNumber)
        this.props.GetSSCode(this.state.SecurityCode)
        this.props.GetExp1(this.state.Exp1)
        this.props.GetExp2(this.state.Exp2)
    return (
        
        <View style={styles.containers}>
        <Header>
          <Body>
            <Text>PAYMENT</Text>
          </Body>
         </Header>
         <Image
          style={{width: 230, height: 50}}
          source={require('../Assets/image2.png')}
        />
        <Label>Credit Card</Label>
         <View style={styles.payment}>
         
         <View  style={styles.paymentBoxView}>
         <Label>Card Number</Label>
        <TextInput
          style={styles.paymentBox1}
          placeholder="4444444444444"
          onChangeText={(CardNumber) => this.setState({CardNumber})}
         // value = {this.state.CardNumber}
        />
         </View>
        
         <View  style={styles.paymentBoxView}>
         <Label>Security Code</Label>
        <TextInput
          style={styles.paymentBox2}
          placeholder="654"
          onChangeText={(SecurityCode) => this.setState({SecurityCode})}
        //  value = {this.state.SecurityCode}
        />
         </View>
         <View  style={styles.paymentBoxView}>
         <Label>Name on Card</Label>
        <TextInput
          style={styles.paymentBox3}
          placeholder="John Doe"
          onChangeText={(Name) => this.setState({Name})}
          //value = {this.state.Name}
        />
         </View>
         <View  style={styles.paymentBoxView}>
         <Label>Exp</Label>
        <TextInput
          style={styles.paymentBox4}
          placeholder="03"
          onChangeText={(Exp1) => this.setState({Exp1})}
          //value = {this.state.Exp1}
        />
         </View>
        <View style={styles.paymentBoxView1}>
        <Label>   </Label>
        <Text style={styles.slash}>/</Text>
        </View>
        <View  style={styles.paymentBoxView}>
        <Label>   </Label>
        <TextInput
          style={styles.paymentBox5}
          placeholder="23"
          onChangeText={(Exp2) => this.setState({Exp2})}
          //value = {this.state.Exp2}
        />
         </View>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
  },
  payment:{
  flexDirection: 'row',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  marginTop:20,
  marginBottom: 5,
  },
  paymentBox1:{
   borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(231, 236, 237, 1.0)',
    width: 200,
    height: 40,
  

},
paymentBoxView1:{

    height: 40,
},
paymentBoxView:{

    padding: 5,
},
paymentBox2:{
    borderRadius: 5,
     borderWidth: 1,
     borderColor: 'rgba(231, 236, 237, 1.0)',
     width: 100,
     height: 40,
   
     color: 'black'
 },
 paymentBox3:{
  color: 'black',
    borderRadius: 5,
     borderWidth: 1,
     borderColor: 'rgba(231, 236, 237, 1.0)',
     width: 150,
     height: 40,
   
 },
 paymentBox4:{
    borderRadius: 5,
     borderWidth: 1,
     borderColor:'rgba(231, 236, 237, 1.0)',
     width: 80,
     height: 40,

     color: 'black'
 },
 paymentBox5:{
    borderRadius: 5,
     borderWidth: 1,
     borderColor: 'rgba(231, 236, 237, 1.0)',
     width: 80,
     height: 40,

     color: 'black'
 },
 slash:{
    padding: 0,
    fontSize: 40,
    height: 40,
 }
});


