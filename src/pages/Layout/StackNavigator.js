import {createStackNavigator} from 'react-navigation';
import TabNavigator from './TabNavigator';
import Login from '../Home/Login';


// 路由配置，告诉导航器该路由要呈现的内容
const routeConfig = {
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: {
      header: null,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: '登录',
    },
  },
};

// 导航器配置，除路由外的其他可选配置
const stackNavigatorConfig = {
  // 定义渲染和页面切换的风格，card（默认）、modal
  mode: 'modal',
  // 指定标题栏的渲染方式，float、screen、none
  headerMode: 'none',
  // 重写或继承栈中单个页面的默认样式
  cardStyle: {},
  // 过渡效果相关配置
  transitionConfig: () => ({}),
  // 导航器内部页面的统一配置
  navigationOptions: {},
};


const StackNavigator = createStackNavigator(routeConfig, stackNavigatorConfig);

export default StackNavigator;
