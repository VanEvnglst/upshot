import React from 'react';
import HomeStackScreen from './tabRoutes';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={'Main'}
        component={HomeStackScreen}
        options={{ headerShown: false }}
      />
    </>
  );
}
