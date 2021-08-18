import React from 'react';
import { SignIn, Onboarding } from '../screens';

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
    </>
  )
}