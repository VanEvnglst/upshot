import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FeedbackResponse } from 'app/screens';


const FrontlinerStack = createStackNavigator();
export default function FrontlinerNavigator() {
  return (
    <FrontlinerStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <FrontlinerStack.Screen
        name={'Feedback Response'}
        component={FeedbackResponse}
      />
    </FrontlinerStack.Navigator>
  )
}