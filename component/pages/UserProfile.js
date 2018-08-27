import React, { Component } from 'react';

import { Container, Header, Content, Text, Button, Toast } from "native-base";

export default class ToastPosition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
  }
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Button
            onPress={() =>
              Toast.show({
                text: "Wrong password!",
                buttonText: "Okay",
                position: "top"
              })}
          >
            <Text>Top Toast</Text>
          </Button>
          <Button
            onPress={() =>
              Toast.show({
                text: "Wrong password!",
                buttonText: "Okay",
                position: "bottom"
              })}
          >
            <Text>Bottom Toast</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}