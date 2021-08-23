import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FeedbackPreparation, Onboarding } from '../screens';

const FeedbackStack = createStackNavigator();

export default function FeedbackStackScreen() {
  return (
    <>
      <FeedbackStack.Navigator>
        <FeedbackStack.Screen
          name={'FeedbackPrep'}
          component={FeedbackPreparation}
          options={{ headerShown: false }}
        />
      </FeedbackStack.Navigator>
    </>
  );
}
