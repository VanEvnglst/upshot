import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '../../components';
const CalendarPicker = () => {
  return (
    <TouchableOpacity>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.04)',
          height: 60,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
          borderBottomColor: 'rgba(0,0,0,0.87)',
          borderBottomWidth: 1,
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 16,
          justifyContent: 'space-between',
        }}>
        <Text type="subtitle1">On a different date</Text>
        <View style={{ width: 24, height: 24, backgroundColor: 'red' }} />
      </View>
    </TouchableOpacity>
  );
};

export default CalendarPicker;
