import React from 'react';
import { StyleSheet,View  } from 'react-native';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label,Body,Title } from 'native-base';
import Payment from './PaymentPlan';
export default class SignUp extends React.Component {
  static navigationOptions = {
    title: 'General Information',
  };

  constructor(props) {
    super(props);
    this.state = {
        UserName: '',
        UserRoomNumber: '',
        UserphoneNumber: ' ',

        CardNumber: 0,
        SecurityCode: 0,
        Name: ' ',
        Exp1:0,
        Exp2:0,
    };
    this.GetName = this.GetName.bind(this)
    this.GetCardNumber = this.GetCardNumber.bind(this)
    this.GetSSCode = this.GetSSCode.bind(this)
    this.GetExp1 = this.GetExp1.bind(this)
    this.GetExp2 = this.GetExp2.bind(this)
  }
 
  GetName(Name){
 
    this.props.GetNameHome(Name)
   //console.log(Name)

   //this.setState({Name : Name})
  }
  GetCardNumber(CardNumber){
 
    this.props.GetCardNumberHome(CardNumber)
    //console.log(CardNumber)
  }
  GetSSCode(SecurityCode){
 
    this.props.GetSSCodeHome(SecurityCode)
    //console.log(SecurityCode)
  }
  GetExp1(Exp1){
 
   this.props.GetExp1Home(Exp1)
    //console.log(Exp1)
  }
  GetExp2(Exp2){
    //console.log("test" +Exp2)
   this.props.GetExp2Home(Exp2)

  }
  render() {
    
    this.props.UserRoomNumber(this.state.UserRoomNumber)
    this.props.UserName(this.state.UserName)
    this.props.UserphoneNumber(this.state.UserphoneNumber)
  
    return (
        
        <View style={styles.containers}>
      
        <Content>
          <Form>
          <Title> GENERAL INFROMATON</Title>
            <Item floatingLabel>
              <Label>prefer Name</Label>
              <Input
               onChangeText={(UserName) => this.setState({UserName})}
               //value = {this.state.UserName}
               />
                
            </Item>
            
            <Item floatingLabel last>
              <Label>Room Number</Label>
              <Input 
               onChangeText={(UserRoomNumber) => this.setState({UserRoomNumber})}
             //  value = {this.state.UserRoomNumber}
               />

            </Item>
            <Item floatingLabel last>
              <Label>Phone Number</Label>
              <Input
               onChangeText={(UserphoneNumber) => this.setState({UserphoneNumber})}
               
               //value = {this.state.UserphoneNumber}
               />
            </Item>
          </Form>
          
         <Payment GetName ={this.GetName} GetCardNumber ={this.GetCardNumber} GetSSCode ={this.GetSSCode} GetExp1 ={this.GetExp1} GetExp2 ={this.GetExp2}/>
        
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
   // backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

