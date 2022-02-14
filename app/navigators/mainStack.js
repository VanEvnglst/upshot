import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStackScreen from './TabRoutes';
import FrontlinerStackScreen from './FrontlinerStack';
import { getUserRole } from 'app/store/selectors';

// const MainStack = createStackNavigator();

export default function (Stack) {
  const userRole = useSelector(getUserRole);
  return (
    <>
      <Stack.Navigator>
        {userRole === 3 ? (
          <Stack.Screen
            name={'Frontliner'}
            component={FrontlinerStackScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name={'Main'}
            component={HomeStackScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </>
  );
}
