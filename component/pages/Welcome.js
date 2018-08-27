import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, Button, Text,Title, Form, Item, Input, Label } from 'native-base';
import Home from './Home'


export default class Welcome extends React.Component {
      state = {
       Loading : false,
     } 
     
  constructor(){
     super()
    this.waitTime = this.waitTime.bind(this)
    this.waitTime(v => this.setState({Loading: true}))
    this.CallHome = this.CallHome.bind(this)
    }
     

   waitTime (cd){

    setInterval(cd, 3000)
   }

   CallHome(navigate){
    return navigate('Home')
   }
  render() {
    
    return (
        
        <View style={styles.containers}>
     
        
        <Content>
        {this.state.Loading ? navigate('Home') : <Text>false </Text> }

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


