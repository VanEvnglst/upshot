import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from 'app/components';
import Images from 'app/assets/images';
import styles from './styles';

const CalendarPicker = ({ onPress, text }) => {
  return (
    <TouchableOpacity accessibilityRole="button" onPress={onPress}>
      <View style={styles.container}>
        <Text type="subtitle1" style={styles.placeholderText}>
          {text === '' ? `On a different date` : text}
        </Text>
        <Image source={Images.calendar} />
      </View>
    </TouchableOpacity>
  );
};

export default CalendarPicker;

CalendarPicker.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string,
};

CalendarPicker.defaultProps = {
  onPress: () => {},
  text: '',
};
