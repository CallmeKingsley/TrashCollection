import React from 'react';
import { StyleSheet,} from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
import * as firebase from "firebase";

export default class Confirmation extends React.Component {

  constructor(props){
    super(props)


    }
    StoreInDataBase(email, password){


    }

  render() {
     const { navigate } = this.props.navigation;
      const {params} = this.props.navigation.state;
    return (
        <Container style={styles.containers}>

        <Content>
          <Text> HELP IS ON THE WAY</Text>
          <Text>{params.Day}</Text>
          <Text>{params.Hour}</Text>
          <Text>{params.Minutes}</Text>
          <Button round dark onPress={() =>navigate('Welcome') }> <Text>confirm and proceed</Text></Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
