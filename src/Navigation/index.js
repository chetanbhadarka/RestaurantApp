import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import AuthLoading from '../Screens/AuthLoading';
import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';
import ForgotPassword from '../Screens/ForgotPassword';
import ProfileScreen from '../Screens/ProfileScreen';
import Welcome from '../Screens/Welcome';
import Drawer from './DrawerNavigation';

const AppStack = createStackNavigator({
  Drawer: {
    screen: Drawer,
    navigationOptions: {
      headerShown: false,
    },
  },
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      headerShown: false,
    },
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const AuthStack = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        headerShown: false,
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        headerShown: false,
      },
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'SignIn',
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
