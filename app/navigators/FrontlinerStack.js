import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  FeedbackResponse,
  FrontlinerFeedbackList,
  FrontlinerResponseConfirmation,
  FrontlinerFeedbackAssessment,
  FLResponseToClarification,
  FLJourneyCloseout
} from 'app/screens';


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
       <FrontlinerStack.Screen
        name={'FL Feedback Assessment'}
        component={FrontlinerFeedbackAssessment}
      />
      <FrontlinerStack.Screen
        name={'FL Response To Clarification'}
        component={FLResponseToClarification}
      />
      <FrontlinerStack.Screen
        name={'FL Journey Closeout'}
        component={FLJourneyCloseout}
      />
    </FrontlinerStack.Navigator>
  )
}