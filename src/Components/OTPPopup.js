import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import Modal from 'react-native-modal';
import SuccessMessage from './SuccessMessage';
import Button from './Button';
import {Colors} from '../Constants';

export default class OTPPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  confirmOTP() {
    this.props.onCofirmOTP();
    this.setState({isAuthSuccess: true});
  }

  render() {
    const {visible, onRequestClose, isAuthSuccess, onDonePress} = this.props;

    return (
      <Modal
        isVisible={visible}
        animationIn="zoomIn"
        animationOut="zoomOut"
        animationInTiming={500}
        animationOutTiming={500}
        backdropTransitionInTiming={0}
        backdropTransitionOutTiming={0}
        backdropOpacity={0.4}
        onBackButtonPress={isAuthSuccess ? onRequestClose : () => null}
        onBackdropPress={isAuthSuccess ? onRequestClose : () => null}
        style={styles.modalBackground}>
        <View>
          {isAuthSuccess ? (
            <SuccessMessage
              title={'Password Change Successfully'}
              btnTitle={'done'}
              onBtnPress={onDonePress}
            />
          ) : (
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

              <Text style={styles.resetPwdText}>
                {'Please enter OTP for Reset Password'}
              </Text>

              <Button
                title={'confirm otp'}
                buttonWidth={'80%'}
                paddingVertical={15}
                onPress={this.confirmOTP.bind(this)}
              />
            </View>
          )}
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
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

  resetPwdText: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal: 80,
    color: Colors.texts,
  },
});
