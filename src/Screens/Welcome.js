import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors, Images} from '../Constants';
import Button from '../Components/Button';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeTxt}>{'WELCOME'}</Text>
        <Image source={Images.success_tick} style={styles.welcomeImg} />
        <Text style={styles.userText}>
          {'Welcome Viren to TROIS Reservation app'}
        </Text>
        <Text style={styles.casualText}>{'Your Customer id: R1033'}</Text>
        <Text style={styles.casualText}>{'Phone No:- 519-000-000'}</Text>

        <Button
          title={'next'}
          buttonWidth={'100%'}
          paddingVertical={20}
          marginVertical={30}
          onPress={() => this.props.navigation.navigate('Drawer')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  welcomeTxt: {
    fontSize: 24,
    color: Colors.primary,
    textAlign: 'center',
  },

  welcomeImg: {
    height: 150,
    width: '70%',
    resizeMode: 'contain',
    marginVertical: 40,
  },

  userText: {
    marginHorizontal: 80,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 30,
    color: Colors.texts,
    letterSpacing: 0.5,
  },

  casualText: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 30,
    color: Colors.texts,
    letterSpacing: 0.5,
  },
});
