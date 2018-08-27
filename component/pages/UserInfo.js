import React from 'react';
import { StyleSheet,View  } from 'react-native';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label,Body,Title } from 'native-base';
import Payment from './PaymentPlan';
export default class UserInfo extends React.Component {
  static navigationOptions = {
    title: 'General Information',
  };

  constructor(props) {
    super(props);
    this.state = {
        Name: '',
        RoomNumber: '',
        phoneNumber: ' '
    };
  }
  render() {
    //console.log(this.state.Name)
    return (
        
        <View style={styles.containers}>
      
       
      <Form>
          <Title> GENERAL INFROMATION</Title>
            <Item floatingLabel>
              <Label>prefer Name</Label>
              <Input
               onChangeText={(Name) => this.setState({Name})}
              />
            </Item>
            
            <Item floatingLabel last>
              <Label>Room Number</Label>
              <Input
               onChangeText={(RoomNumber) => this.setState({RoomNumber})} />
            </Item>
            <Item floatingLabel last>
              <Label>Phone Number</Label>
              <Input 
               onChangeText={(phoneNumber) => this.setState({phoneNumber})}
              />
            </Item>
          </Form>
        
       
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

