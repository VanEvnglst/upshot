import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const ShowHintIndicator = props => {
  const { onPress, showHint } = props;
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      style={styles(showHint).container}>
      <Icon name={'help-outline'} style={styles(showHint).iconStyle} />
    </TouchableOpacity>
  );
};

export default ShowHintIndicator;
