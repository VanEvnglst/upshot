import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const HintIndicator = props => {
  const { onPress, showHint, style } = props;
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      style={[style, styles.container, showHint && styles.showHintContainer]}>
      <Icon
        name={'help-outline'}
        size={18}
        style={[styles.iconStyle, showHint && styles.showHintIcon]}
      />
    </TouchableOpacity>
  );
};

export default HintIndicator;

HintIndicator.propTypes = {
  showHint: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
};

HintIndicator.defaultProps = {
  showHint: false,
  onPress: () => {},
  style: {},
};
