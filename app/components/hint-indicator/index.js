import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const HintIndicator = props => {
  const { onPress, showHint } = props;
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      style={[styles.container, showHint && styles.showHintContainer]}>
      <Icon
        name={'help-outline'}
        size={18}
        style={[styles.iconStyle, showHint && styles.showHintIcon]}
      />
    </TouchableOpacity>
  );
};

export default HintIndicator;

HintIndicator.PropTypes = {
  showHint: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

HintIndicator.defaultProps = {
  showHint: false,
  onPress: () => {},
};
