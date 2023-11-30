import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Colors, Images, Icons} from '../Constants';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {isRightIcon, onBackPress, onMenuPress} = this.props;
    return (
      <View
        style={{
          height: 70,
          backgroundColor: Colors.white,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 20,
          shadowColor: Colors.black,
          shadowOffset: {width: 10, height: 10},
          shadowOpacity: 3,
          shadowRadius: 5,
          elevation: 5,
        }}>
        {isRightIcon ? (
          <TouchableOpacity onPress={onBackPress}>
            <Image
              source={Icons.icon_leftArrow}
              style={{height: 24, width: 24}}
            />
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
        <Image source={Images.app_logo} style={{height: 24, width: 24}} />
        <TouchableOpacity onPress={onMenuPress}>
          <Image
            source={Icons.icon_menu}
            style={{
              height: 26,
              width: 26,
              tintColor: Colors.primary,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
