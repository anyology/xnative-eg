import React, {Component} from 'react';
import {Container, Statusbar, Text} from "xnative";

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Statusbar barStyle="dark-content" />
        <Text>Login</Text>
      </Container>
    );
  }
}
