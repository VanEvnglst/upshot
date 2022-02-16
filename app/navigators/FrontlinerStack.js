import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { Messages, ResponseScreen } from '../screens';

const FrontlinerStack = createStackNavigator();

export default function (Stack) {
  return (
    <>
        <Stack.Screen
          name={'ResponseScreen'}
          component={ResponseScreen}
          options={{ headerShown: false }}
        />
        <FrontlinerStack.Screen
          name={'Messages'}
          component={Messages }
        />
    </>
  );
}