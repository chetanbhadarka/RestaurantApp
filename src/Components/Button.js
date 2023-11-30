import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableHighlight,
  View,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import {Colors} from '../Constants';

// Custom Button component to use as per need
export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      title,
      onPress,
      buttonWidth,
      disabled,
      paddingVertical,
      marginVertical,
      loading,
      isIcon,
      icon,
      fontSize,
    } = this.props;

    return (
      <TouchableHighlight
        disabled={disabled}
        style={[
          styles.container,
          {
            width: buttonWidth,
            paddingVertical: paddingVertical,
            marginVertical: marginVertical,
          },
        ]}
        onPress={onPress}>
        {loading ? (
          <ActivityIndicator size={'small'} color={Colors.white} />
        ) : (
          <View style={{flexDirection: 'row'}}>
            {isIcon ? <Image source={icon} style={styles.iconStyle} /> : null}

            <Text
              style={[
                styles.buttonTitle,
                {
                  fontSize: fontSize || 16,
                },
              ]}>
              {title.toUpperCase()}
            </Text>
          </View>
        )}
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: 10,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    alignSelf: 'center',
  },

  buttonTitle: {
    color: Colors.white,
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginEnd: 10,
    tintColor: Colors.white,
  },
});

Button.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  isIcon: PropTypes.bool,
  icon: PropTypes.any,

  /**
   * StyleSheet props
   */
  buttonWidth: PropTypes.any,
  borderColor: PropTypes.string,
  paddingVertical: PropTypes.number,
  marginVertical: PropTypes.number,

  /**
   * Callbacks
   */
  onPress: PropTypes.func,
};

Button.defaultProps = {
  title: 'Submit',
  disabled: false,
  loading: false,
  isIcon: false,
  onPress: null,
  //   buttonWidth: '100%',
  //   paddingVertical: 12,
};
