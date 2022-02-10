import React from 'react';
import { View } from 'react-native';
import { Chip as RNChip } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text } from 'app/components';
import styles from './styles';

const Chip = props => {
  const { testID, onPress, mode, style, children, isSelected } = props;
  return (
  <RNChip
    testID={testID}
    onPress={onPress}
    mode={mode}
    style={[styles.container, isSelected && styles.selectedChip]}
  >
    <Text
      type='body2'
      style={isSelected ? styles.selectedChipText : styles.chipText}
    >{children}
    </Text>
  </RNChip>
  );
}

export default Chip;

Chip.propTypes = {
  key: PropTypes.number,
  testID: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

Chip.defaultProps = {
  key: 1,
  testID: 'chip-testId',
  onPress: () => {},
  mode: 'flat',
  style: {},
  children: {},
  isSelected: false,
};
