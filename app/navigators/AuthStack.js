import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn, StartingLineScreen } from '../screens';

const AuthStack = createStackNavigator();
export default function AuthNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <AuthStack.Screen
        name={'Starting line'}
        component={StartingLineScreen}
      />
      <AuthStack.Screen
        name={'Sign in'}
        component={SignIn}
      />
    </AuthStack.Navigator>
  );
}
