import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {DrawerActions} from 'react-navigation-drawer';
import {Colors, Icons, Images} from '../Constants';

export default class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image source={Images.app_logo} style={styles.profileView} />
        </View>
        <ItemHolder
          onIemPress={() =>
            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
          IconSource={Icons.icon_home}
          Title={'Home'}
        />
        <ItemHolder
          onIemPress={() => {
            this.props.navigation.dispatch(DrawerActions.toggleDrawer());
            this.props.navigation.navigate('ProfileScreen');
          }}
          IconSource={Icons.icon_user}
          Title={'Profile'}
        />
        <ItemHolder
          onIemPress={() => {}}
          IconSource={Icons.icon_reservation}
          Title={'Reservations'}
        />
        <ItemHolder
          onIemPress={() => {}}
          IconSource={Icons.icon_support}
          Title={'Support'}
        />
        <ItemHolder
          onIemPress={() => {}}
          IconSource={Icons.icon_settings}
          Title={'Settings'}
        />
        <ItemHolder
          onIemPress={() => {}}
          IconSource={Icons.icon_rate}
          Title={'Rate Us'}
        />
        <ItemHolder
          onIemPress={() => {
            AsyncStorage.clear();
            this.props.navigation.dispatch(DrawerActions.toggleDrawer());
            this.props.navigation.navigate('SignIn');
          }}
          IconSource={Icons.icon_logout}
          Title={'Log Out'}
        />
      </View>
    );
  }
}

export const ItemHolder = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onIemPress}
      style={styles.menuContainer}>
      <Image source={props.IconSource} style={styles.icon} />
      <Text style={styles.label}>{props.Title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },

  profileContainer: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileView: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: Colors.white,
    borderWidth: 1,
  },

  menuContainer: {
    padding: 15,
    borderTopColor: Colors.white,
    borderTopWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    height: 20,
    width: 20,
    tintColor: Colors.white,
    marginLeft: 10,
    marginRight: 20,
  },

  label: {
    color: Colors.white,
    fontSize: 18,
  },
});
