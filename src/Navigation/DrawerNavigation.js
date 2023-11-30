import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Home from '../Screens/Home';
import DrawerContent from '../Screens/DrawerContent';

const DrawerNavigation = createDrawerNavigator(
  {
    Home: Home,
  },
  {
    initialRouteName: 'Home',
    contentComponent: DrawerContent,
    drawerPosition: 'right',
    drawerWidth: 250,

    // contentComponent: (props) => {
    //   return <DrawerContent {...props} />;
    // },
  },
);

export default createAppContainer(DrawerNavigation);
