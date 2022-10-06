import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FeedbackResponse, FrontlinerFeedbackList, FrontlinerResponseConfirmation } from 'app/screens';


const FrontlinerStack = createStackNavigator();
export default function FrontlinerNavigator() {
  return (
    <FrontlinerStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <FrontlinerStack.Screen
        name={'Frontliner Feedback List'}
        component={FrontlinerFeedbackList}
      />
      <FrontlinerStack.Screen
        name={'Feedback Response'}
        component={FeedbackResponse}
      />
      <FrontlinerStack.Screen
        name={'FL Response Confirmation'}
        component={FrontlinerResponseConfirmation}
      />
    </FrontlinerStack.Navigator>
  )
}