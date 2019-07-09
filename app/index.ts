import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  NavigationContainer,
} from '@react-navigation/native';
import { createSwitchNavigator } from '@react-navigation/core';
import Screen1 from './screens/Screen1';

const AppNavigator = createSwitchNavigator({
  Screen1: { screen: Screen1 },
});

export default createAppContainer(AppNavigator);
