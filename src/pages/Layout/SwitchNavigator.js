import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Welcome from './Welcome';
import StackNavigator from './StackNavigator';

// 路由配置，告诉导航器该路由要呈现的内容
const routeConfig = {
  Welcome: {
    screen: Welcome,
  },
  StackNavigator: {
    screen: StackNavigator,
  },
};

// 导航器配置，除路由外的其他可选配置
const switchNavigatorConfig = {
  initialRouteName: 'Welcome',
};

const SwitchNavigator = createSwitchNavigator(routeConfig, switchNavigatorConfig);

export default createAppContainer(SwitchNavigator);
