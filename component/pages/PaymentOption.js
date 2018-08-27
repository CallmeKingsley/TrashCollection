import React, { Component } from "react";
import { StyleSheet,View,TextInput,Text  } from 'react-native';
import { Container, Header, Content, Icon, Picker, Form } from "native-base";
export default class paymentOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
  }
  onValueChange(value) {
    this.setState({ 
      selected: value,
    });
    
    if(this.state.selected == 'key0'){
      this.props.getCost(0.00)
    }else{
      this.props.getCost(12.00)
    }
    this.props.MemberInstruction(value)
  }
  render() {
    return (
        <View>
          <Form>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              headerBackButtonText="Back"
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
            
            <Picker.Item label="Paid PickUp " value="key0" />
              <Picker.Item label="FREE PickUp   $0.0" value="key1" />
            </Picker>
          </Form>
           </View>
    );
  }
}