import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  FeedbackFlow,
  FeedbackGuide,
  FeedbackDocumenting,
  FeedbackSignPost,
  ActiveFeedbackJourney,
} from '../screens';

const FeedbackStack = createStackNavigator();

export default function FeedbackStackScreen() {
  return (
    <>
      <FeedbackStack.Navigator headerMode="none">
        {/* <FeedbackStack.Screen
          name={'ActiveFeedbackJourney'}
          component={ActiveFeedbackJourney}
        /> */}
        {/* <FeedbackStack.Screen
          name={'FeedbackSignPost'}
          component={FeedbackSignPost}
        /> */}
        <FeedbackStack.Screen name={'FeedbackFlow'} component={FeedbackFlow} />
        {/* Only appears when starting a new journey */}
        <FeedbackStack.Screen
          name={'FeedbackGuide'}
          component={FeedbackGuide}
        />
        <FeedbackStack.Screen
          name={'FeedbackDocumenting'}
          component={FeedbackDocumenting}
        />
      </FeedbackStack.Navigator>
    </>
  );
}