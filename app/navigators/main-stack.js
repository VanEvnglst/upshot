import React from 'react';
import HomeStackScreen from './tab-routes';

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
