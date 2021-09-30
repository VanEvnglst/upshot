import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Text } from '../../components';
import Images from '../../assets/images';
import styles from './styles';

const CalendarPicker = ({ onPress, text }) => {
  return (
    <TouchableOpacity accessibilityRole="button" onPress={onPress}>
      <View style={styles.container}>
        <Text type="subtitle1">
          {text === '' ? `On a different date` : text}
        </Text>
        <Image source={Images.calendar} />
      </View>
    </TouchableOpacity>
  );
};

export default CalendarPicker;
