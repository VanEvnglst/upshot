import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Wrapper } from '../../components';

const ReminderScreen = () => {
  return (
    <Wrapper>
      <View style={{ flex: 1, backgroundColor: 'red' }}></View>
      <Text style={{ fontSize: 32, margin: 20 }}>
        Today is a new day, User!
      </Text>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Content area</Text>
      </View>
      <Text>Call to Action</Text>
    </Wrapper>
  );
};

export default ReminderScreen;
