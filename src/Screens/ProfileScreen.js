import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import Header from '../Components/Header';
import {DrawerActions} from 'react-navigation-drawer';
import {Images, Colors} from '../Constants';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Header
          onMenuPress={() =>
            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
          isRightIcon={true}
          onBackPress={() => this.props.navigation.goBack()}
        />
        <View
          style={{padding: 20, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={Images.app_logo} style={styles.profileView} />

          <InputText title={'ASD'} />
        </View>
      </View>
    );
  }
}

export const InputText = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
      <View>
        <TextInput
          style={{}}
          onChangeText={props.onChangeText}
          value={props.value}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileView: {
    height: 120,
    width: 120,
    borderRadius: 60,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
});
