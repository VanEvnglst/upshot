import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { Messages } from '../screens';

const FrontlinerStack = createStackNavigator();

export default function (Stack) {
  return (
    <>
        <Stack.Screen
          name={'Messages'}
          component={Messages}
          options={{ headerShown: false }}
        />
        {/* <FrontlinerStack.Screen
          name={'Message'}
          component={Message}
        /> */}
    </>
  );
}