import React, {Component} from 'react';
import {Container, Statusbar, Text} from "xnative";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Statusbar barStyle="dark-content" />
        <Text>About</Text>
      </Container>
    );
  }
}
