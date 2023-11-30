import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Icons} from '../Constants';
import InputText from '../Components/Inputs';
import Button from '../Components/Button';
import AsyncStorage from '@react-native-community/async-storage';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailErr: '',
      passwordErr: '',
      loading: false,
    };
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

  // to focus TextInput
  focusNextField(id) {
    this.inputs[id].focus();
  }

  // to clear TextInput
  handleClearValue = (inputName) => {
    this.setState((prevState) => ({
      ...prevState,
      [inputName]: '',
    }));
  };

  // SignIn user
  onSignIn = () => {
    const {email, password} = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let isValid = true;
    let emailErr = '';
    let passwordErr = '';

    if (email.length <= 0) {
      isValid = false;
      emailErr = 'email address must not be empty';
    } else if (reg.test(email) === false) {
      isValid = false;
      emailErr = 'invalid email address';
    }

    if (password.length < 6) {
      isValid = false;
      passwordErr = 'password must be 6 characters long';
    }

    this.setState({
      emailErr: emailErr,
      passwordErr: passwordErr,
    });

    if (isValid) {
      AsyncStorage.setItem('userToken', email);
      this.setState({loading: true});
      this.props.navigation.navigate('Drawer');
    } else {
      alert('please enter valid details.!');
      this.setState({loading: false});
    }
  };

  render() {
    const {email, password} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text>{'Logo will be shown here!'}</Text>
        </View>
        <Text style={styles.signInText}>{'Sign in'}</Text>

        <InputText
          onRef={(ref) => {
            this.inputs.email = ref;
          }}
          value={email}
          returnKeyType={'next'}
          onSubmitEditing={() => {
            this.focusNextField('password');
          }}
          onClearValue={() => this.handleClearValue('email')}
          placeholder={'Email'}
          keyboardType={'email-address'}
          source={Icons.icon_email}
          onChangeText={(email) => this.setState({email})}
          blurOnSubmit={false}
        />

        <InputText
          onRef={(ref) => {
            this.inputs.password = ref;
          }}
          value={password}
          returnKeyType={'done'}
          onSubmitEditing={() => {}}
          onClearValue={() => this.handleClearValue('password')}
          placeholder={'Password'}
          source={Icons.icon_password}
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
        />

        <Text
          style={styles.forgotPwdText}
          onPress={() => this.props.navigation.navigate('ForgotPassword')}>
          {'Forgot Password?'}
        </Text>

        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Button
            isIcon={true}
            loading={this.state.loading}
            icon={Icons.icon_rightArrow}
            title={'sign in'}
            buttonWidth={'100%'}
            paddingVertical={20}
            onPress={() => this.onSignIn()}
          />

          <Text
            style={styles.createAccText}
            onPress={() => this.props.navigation.navigate('SignUp')}>
            {'CREATE ACCOUNT?'}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  logoContainer: {
    height: 80,
    width: '100%',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  signInText: {
    textAlign: 'center',
    fontSize: 26,
    color: Colors.primary,
    marginVertical: 10,
  },

  forgotPwdText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
    color: Colors.texts,
  },

  createAccText: {
    textAlign: 'center',
    marginVertical: 20,
    color: Colors.texts,
  },
});
