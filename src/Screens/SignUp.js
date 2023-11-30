import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-community/async-storage';
import {Colors, Icons} from '../Constants';
import InputText from '../Components/Inputs';
import Button from '../Components/Button';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      loading: false,
      nameErr: '',
      emailErr: '',
      phoneErr: '',
      passwordErr: '',
      otp_modal_visible: false,
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

  // SignUp user
  onSignUp() {
    const {name, email, phone, password} = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let isValid = true;
    let emailErr = '';
    let phoneErr = '';
    let passwordErr = '';
    let nameErr = '';

    if (name.length <= 0) {
      isValid = false;
      nameErr = 'name must not be empty';
    }

    if (email.length <= 0) {
      isValid = false;
      emailErr = 'email address must not be empty';
    } else if (reg.test(email) === false) {
      isValid = false;
      emailErr = 'invalid email address';
    }

    if (phone.length < 10) {
      isValid = false;
      phoneErr = 'Phone number must be of 10 digits';
    }

    if (password.length < 6) {
      isValid = false;
      passwordErr = 'password must be 6 characters long';
    }

    this.setState({
      nameErr: nameErr,
      emailErr: emailErr,
      phoneErr: phoneErr,
      passwordErr: passwordErr,
    });

    if (isValid) {
      this.setState({loading: true, otp_modal_visible: true});
    } else {
      alert('please enter valid details.!');
      this.setState({loading: false});
    }
  }

  // Submit Otp
  onSubmitOTP() {
    this.setState({otp_modal_visible: false}, () => {
      AsyncStorage.setItem('userToken', this.state.email);
      this.props.navigation.navigate('Welcome');
    });
  }

  render() {
    const {
      name,
      email,
      confirmPassword,
      password,
      phone,
      otp_modal_visible,
    } = this.state;
    return (
      <View style={styles.container}>
        <Modal
          isVisible={otp_modal_visible}
          animationIn="zoomIn"
          animationOut="zoomOut"
          animationInTiming={500}
          animationOutTiming={500}
          backdropTransitionInTiming={0}
          backdropTransitionOutTiming={0}
          backdropOpacity={0.4}
          onBackButtonPress={() => this.setState({otp_modal_visible: false})}
          onBackdropPress={() => this.setState({otp_modal_visible: false})}
          style={styles.modalBackground}>
          <View style={styles.Wrapper}>
            <Text style={styles.modalTitle}>{'Submit OTP'}</Text>

            <CodeInput
              ref="codeInputRef2"
              secureTextEntry={false}
              // compareWithCode="AsDW"
              activeColor={Colors.black}
              inactiveColor={Colors.black}
              autoFocus={false}
              ignoreCase={true}
              codeLength={4}
              inputPosition="center"
              className={'border-b'}
              size={50}
              onFulfill={(isValid) => alert(isValid)}
              // onFulfill={(isValid) => this._onFinishCheckingCode1(isValid)}
              containerStyle={{marginTop: 40}}
              codeInputStyle={{}}
            />

            <Button
              title={'confirm otp'}
              buttonWidth={'80%'}
              paddingVertical={15}
              onPress={() => this.onSubmitOTP()}
            />
          </View>
        </Modal>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.logoContainer}>
            <Text>{'Logo will be shown here!'}</Text>
          </View>
          <Text style={styles.signInText}>{'Sign Up'}</Text>

          <InputText
            onRef={(ref) => {
              this.inputs.name = ref;
            }}
            value={name}
            returnKeyType={'next'}
            onSubmitEditing={() => {
              this.focusNextField('email');
            }}
            onClearValue={() => this.handleClearValue('name')}
            placeholder={'Name'}
            source={Icons.icon_user}
            onChangeText={(name) => this.setState({name})}
            blurOnSubmit={false}
          />

          <InputText
            onRef={(ref) => {
              this.inputs.email = ref;
            }}
            value={email}
            returnKeyType={'next'}
            onSubmitEditing={() => {
              this.focusNextField('phone');
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
              this.inputs.phone = ref;
            }}
            value={phone}
            returnKeyType={'next'}
            onSubmitEditing={() => {
              this.focusNextField('password');
            }}
            onClearValue={() => this.handleClearValue('phone')}
            placeholder={'Phone'}
            keyboardType={'phone-pad'}
            source={Icons.icon_phone}
            onChangeText={(phone) => this.setState({phone})}
            blurOnSubmit={false}
          />

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
            placeholder={'Password'}
            source={Icons.icon_password}
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            blurOnSubmit={false}
          />

          <InputText
            onRef={(ref) => {
              this.inputs.confirmPassword = ref;
            }}
            value={confirmPassword}
            returnKeyType={'done'}
            onSubmitEditing={() => {
              // this.focusNextField('email');
            }}
            onClearValue={() => this.handleClearValue('confirmPassword')}
            placeholder={'Re-Enter password'}
            source={Icons.icon_password}
            secureTextEntry={true}
            onChangeText={(confirmPassword) => this.setState({confirmPassword})}
          />

          <Button
            isIcon={true}
            loading={this.state.loading}
            icon={Icons.icon_rightArrow}
            title={'sign up'}
            buttonWidth={'100%'}
            paddingVertical={20}
            onPress={() => this.onSignUp()}
          />

          <Text
            style={styles.createAccText}
            onPress={() => this.props.navigation.navigate('SignIn')}>
            {'ALREADY HAVE AN ACCOUNT?'}
          </Text>
        </ScrollView>
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

  createAccText: {
    textAlign: 'center',
    marginVertical: 20,
    color: Colors.texts,
  },

  modalBackground: {
    flex: 1,
  },

  Wrapper: {
    width: '100%',
    height: 300,
    padding: 20,
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 20,
    backgroundColor: Colors.inputBg,
  },

  modalTitle: {
    textAlign: 'center',
    fontSize: 22,
    color: Colors.texts,
  },
});
