import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, Button, Text,Title,Right,Body, Form, Item, Input, Label } from 'native-base';

export default class Login extends React.Component {
  static navigationOptions = {

  
    title: 'TRASH COLLECTION',
    headerTintColor: '#fff',
   
    headerStyle: {
      backgroundColor: 'rgba(97, 193, 103, 1.0)',
      
    },

    header: null,
  
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        
        <View style={styles.containers}>
     <Header style={styles.Header}>
      <Right>
      </Right>
          <Body style={styles.HeaderTitlebtn}>
            <Title style={styles.HeaderTitle}>LOGIN</Title>
          </Body>
          <Right>
        
          </Right>
        </Header>
        
        <Content>
          <Form>
      
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button full success onPress={()=> navigate('Profile')}>
            <Text>Login</Text>
          </Button>
          <Button transparent danger  onPress={()=> navigate('SignUp2')}>
            <Text>Sign up</Text>
          </Button>
          </Form>

        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
  },
  Header:{
    backgroundColor: 'rgba(97, 193, 103, 1.0)'

  },
});

