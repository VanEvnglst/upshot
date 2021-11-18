import React from 'react';
import { Button as Btn } from 'react-native-paper';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Button = props => {
  const { block, disabled, secondary, style, textStyle, onPress, children } =
    props;
  return (
    <Btn
      onPress={onPress}
    >{children}</Btn>
    // <TouchableOpacity
    //   accessibilityRole="button"
    //   style={[
    //     styles.buttonContainer,
    //     block && styles.buttonBlock,
    //     disabled && styles.buttonDisable,
    //     // secondary && styles.secondary,
    //     style,
    //   ]}
    //   onPress={onPress}>
    //   <View style={styles.buttonContent}>
    //     <Text
    //       style={[
    //         // styles.textStyle,
    //         textStyle,
    //       ]}>
    //       {children}
    //     </Text>
    //   </View>
    // </TouchableOpacity>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  block: PropTypes.bool,
  style: PropTypes.any,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  block: false,
  disabled: false,
};

export default Button;
