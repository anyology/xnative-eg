import React, {Component} from 'react';
import {InteractionManager} from 'react-native';
import {Splash} from "xnative";
import welcomeImage from "../../../assets/landscape.jpg";

export default class Welcome extends Component {
  onPressCount = () => {
    InteractionManager.runAfterInteractions(() => {
      this.props.navigation.navigate('StackNavigator');
    });
  }

  render() {
    return (
      <Splash
        source={welcomeImage}
        buttonText="关闭"
        duration={0}
        onPress={this.onPressCount}
      />
    );
  }
}
