import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import {Button, Footer, Icon, Text} from 'xnative';
import Home from '../Home/Home';
import About from '../Home/About';

// 路由配置，告诉导航器该路由要呈现的内容
const routeConfig = {
  Home: {screen: Home},
  About: {screen: About},
};

// 导航器配置，除路由外的其他可选配置，此处使用了定制组件
const tabNavigatorConfig = {
  tabBarComponent: props => (
    <Footer>
      <Button
        type="Ripple"
        active={props.navigation.state.index === 0}
        onPress={() => props.navigation.navigate('Home')}
      >
        <Icon name={`${props.navigation.state.index === 0 ? 'home' : 'home-outline'}`} inherit />
        <Text>主页</Text>
      </Button>
      <Button
        type="Ripple"
        active={props.navigation.state.index === 1}
        onPress={() => props.navigation.navigate('About')}
      >
        <Icon name={`${props.navigation.state.index === 1 ? 'cube' : 'cube-outline'}`} inherit />
        <Text>关于</Text>
      </Button>
    </Footer>
  ),
};

const TabNavigator = createBottomTabNavigator(routeConfig, tabNavigatorConfig);

export default TabNavigator;
