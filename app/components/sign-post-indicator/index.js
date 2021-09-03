import React from 'react';
import { View, Text } from 'react-native';

const SignPostIndicator = props => {
  return (
    <View style={{ alignItems: 'center', alignSelf: 'flex-start' }}>
      <View
        style={{
          width: 24,
          height: 24,
          borderRadius: 24,
          backgroundColor: 'red',
        }}
      />
      <View
        style={{
          width: 2,
          height: 70,
          backgroundColor: 'gray',
          opacity: 0.3,
        }}
      />
    </View>
  );
};

export default SignPostIndicator;
