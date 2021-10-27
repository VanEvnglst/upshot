import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import {
  FeedbackFlow,
  FeedbackGuide,
  FeedbackDocumenting,
  ActiveFeedbackJourney,
  FeedbackJourneyList,
  PreparingGuide,
  FeedbackPreparing,
} from '../screens';
import { getActiveJourneyLength } from 'app/store/selectors';

const FeedbackStack = createStackNavigator();

export default function FeedbackStackScreen() {
  const activeJourneyLength = useSelector(getActiveJourneyLength);
  
  return (
    <>
      <FeedbackStack.Navigator 
        headerMode="none"
        initialRouteName={activeJourneyLength > 0 ? 'FeedbackJourneyList' : 'FeedbackFlow'}
      >
        <FeedbackStack.Screen name={'FeedbackFlow'} component={FeedbackFlow} />
        {/* Only appears when starting a new journey */}
        <FeedbackStack.Screen
          name={'FeedbackGuide'}
          component={FeedbackGuide}
        />
        {/* Shows the user's current journey */}
        <FeedbackStack.Screen
          name={'ActiveFeedbackJourney'}
          component={ActiveFeedbackJourney}
        />
        {/* Shows the user's journey list if there are any in progress */}
        <FeedbackStack.Screen
          name={'FeedbackJourneyList'}
          component={FeedbackJourneyList}
        />
        <FeedbackStack.Screen
          name={'FeedbackDocumenting'}
          component={FeedbackDocumenting}
        />
        <FeedbackStack.Screen
          name="PreparingGuide"
          component={PreparingGuide}
        />
        <FeedbackStack.Screen
          name={'FeedbackPreparing'}
          component={FeedbackPreparing}
        />
      </FeedbackStack.Navigator>
    </>
  );
}
