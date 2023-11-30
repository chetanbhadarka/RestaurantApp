import React, {Component} from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Colors} from '../Constants';

// Custom TextInput

export default class InputText extends Component {
  static propTypes = {
    value: PropTypes.any,
    source: PropTypes.any,
    onChangeText: PropTypes.func,
    onClearValue: PropTypes.func,
    placeholder: PropTypes.string,
    returnKeyType: PropTypes.string,
    keyboardType: PropTypes.string,
    maxLength: PropTypes.number,
    editable: PropTypes.bool,
    secureTextEntry: PropTypes.bool,
    iconRightUrl: PropTypes.any,
  };

  static defaultProps = {
    onChangeText: () => null,
    onClearValue: () => null,
    placeholder: 'Placeholder',
    returnKeyType: 'next',
  };

  constructor(props) {
    super(props);
    this.state = {
      isFocus: false,
    };
  }

  componentDidMount() {
    if (this.props.onRef != null) {
      this.props.onRef(this);
    }
  }

  onSubmitEditing() {
    this.props.onSubmitEditing();
  }

  focus() {
    this.textInput.focus();
  }

  onFocus() {
    this.setState({isFocus: true});
  }

  onBlur() {
    this.setState({isFocus: false});
  }

  render() {
    const {
      source,
      placeholder,
      onChangeText,
      value,
      returnKeyType,
      editable,
      keyboardType,
      maxLength,
      secureTextEntry,
      onClearValue,
      placeholderStyle,
      ...rest
    } = this.props;

    return (
      <View style={styles.container}>
        <Image source={source} style={styles.icon} />
        <TextInput
          {...rest}
          editable={editable}
          // style={styles.inputStyle}
          style={
            !value
              ? [styles.inputStyle, styles.placeholderStyle]
              : styles.inputStyle
          }
          placeholderTextColor={Colors.texts}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          ref={(input) => (this.textInput = input)}
          onSubmitEditing={this.onSubmitEditing.bind(this)}
          returnKeyType={returnKeyType}
          keyboardType={keyboardType}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry}
          onFocus={() => this.onFocus()}
          onBlur={() => this.onBlur()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: Colors.inputBg,
  },

  icon: {
    height: 24,
    width: 24,
    marginLeft: 30,
    marginRight: 10,
    tintColor: Colors.texts,
  },

  inputStyle: {
    flex: 1,
    fontSize: 18,
    color: Colors.texts,
  },

  placeholderStyle: {
    fontSize: 18,
  },

  titleTxt: {
    fontSize: 16,
    margin: 5,
  },
});
