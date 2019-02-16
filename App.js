import React, {Component} from 'react';
import {Theme} from "xnative";
import SwitchNavigator from "./src/pages/Layout/SwitchNavigator";
import lollipop from "./src/themes/lollipop";

export default class App extends Component {
  render() {
    return (
      <Theme value={lollipop}>
        <SwitchNavigator />
      </Theme>
    );
  }
}
