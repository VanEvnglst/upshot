import React from 'react';

import { SignIn, Onboarding } from '../containers';
export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={'Sign in'}
        component={SignIn}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name={'Onboarding'}
        component={Onboarding}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name={}
        component={}
        options={{ headerShown: false}}
      /> */}
    </>
  )
}