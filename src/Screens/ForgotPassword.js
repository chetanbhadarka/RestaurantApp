import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Icons} from '../Constants';
import InputText from '../Components/Inputs';
import Button from '../Components/Button';
import OTPPopup from '../Components/OTPPopup';

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
      loading: false,
      forgot_password_visible: false,
      isLoginSuccess: false,
    };
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }

  handleClearValue = (inputName) => {
    this.setState((prevState) => ({
      ...prevState,
      [inputName]: '',
    }));
  };

  forgotPassword = () => {
    this.setState({forgot_password_visible: true});
  };

  onCofirmOTP = () => {
    this.setState({isLoginSuccess: true});
  };

  onDonePress = () => {
    this.setState({forgot_password_visible: false}, () =>
      this.props.navigation.navigate('SignIn'),
    );
  };

  render() {
    const {password, confirmPassword, isLoginSuccess} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text>{'Logo will be shown here!'}</Text>
        </View>
        <Text style={styles.signInText}>{'Reset Password'}</Text>

        <InputText
          onRef={(ref) => {
            this.inputs.password = ref;
          }}
          value={password}
          returnKeyType={'next'}
          onSubmitEditing={() => {
            this.focusNextField('confirmPassword');
          }}
          onClearValue={() => this.handleClearValue('password')}
          placeholder={'Create New Password'}
          keyboardType={'email-address'}
          secureTextEntry={true}
          source={Icons.icon_password}
          onChangeText={(password) => this.setState({password})}
          blurOnSubmit={false}
        />

        <InputText
          onRef={(ref) => {
            this.inputs.confirmPassword = ref;
          }}
          value={confirmPassword}
          returnKeyType={'done'}
          onSubmitEditing={() => {}}
          onClearValue={() => this.handleClearValue('confirmPassword')}
          placeholder={'Re-Enter Password'}
          source={Icons.icon_password}
          secureTextEntry={true}
          onChangeText={(confirmPassword) => this.setState({confirmPassword})}
        />

        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Button
            loading={this.state.loading}
            title={'reset password'}
            buttonWidth={'100%'}
            paddingVertical={20}
            onPress={() => this.forgotPassword()}
          />
        </View>

        <OTPPopup
          visible={this.state.forgot_password_visible}
          onRequestClose={() => this.setState({forgot_password_visible: false})}
          onCofirmOTP={() => this.onCofirmOTP()}
          isAuthSuccess={isLoginSuccess}
          onDonePress={() => this.onDonePress()}
        />
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
});
