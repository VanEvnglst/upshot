import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { Messages } from '../screens';

const FrontlinerStack = createStackNavigator();

export default function FrontlinerStackScreen() {
  return (
    <>
      <FrontlinerStack.Navigator
        headerMode='none'
        initialRouteName={'Messages'}
      >
        <FrontlinerStack.Screen
          name={'Messages'}
          component={Messages}
        />
        {/* <FrontlinerStack.Screen
          name={'Message'}
          component={Message}
        /> */}
      </FrontlinerStack.Navigator>
    </>
  );
}