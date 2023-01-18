import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigator from './HomeStack';

const MainStack = createStackNavigator();

export default function MainNavigator() {
  return (
    <MainStack.Navigator 
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen 
        name={'Home'} 
        component={HomeNavigator} 
      />
    </MainStack.Navigator>
  );
}
