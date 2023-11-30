import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors, Images} from '../Constants';
import Button from '../Components/Button';

export default class SuccessMessage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, btnTitle, onBtnPress} = this.props;
    return (
      <View style={styles.container}>
        <Image source={Images.success_tick} style={styles.imageTick} />
        <Text style={styles.title}>{title || 'Success'}</Text>
        <Button
          // loading={}
          title={btnTitle}
          buttonWidth={'80%'}
          paddingVertical={15}
          onPress={onBtnPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: Colors.inputBg,
  },

  imageTick: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
  },

  title: {
    marginTop: 50,
    color: Colors.primary,
    fontSize: 20,
    textAlign: 'center',
  },
});
