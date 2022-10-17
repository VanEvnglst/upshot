import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import {
  CaptureFeedbackMoment,
  RecordFeedbackEntry,
  EntryConfirmation,
  ReviewFeedbackEntry,
  ScheduleDiscussion,
  FeedbackOverview,
  ResponseExchange,
  FeedbackExchangeConfirmation,
  CaptureFeedbackRecap
} from '../screens';
import { getActiveJourneys } from 'app/store/selectors';

const FeedbackStack = createStackNavigator();

export default function FeedbackNavigator() {
  const activeJourneyLength = useSelector(getActiveJourneys);

  return (
    <>
      <FeedbackStack.Navigator
        headerMode="none"
      >
        <FeedbackStack.Screen
          name={'Capture Feedback Moment'}
          component={CaptureFeedbackMoment}
        />
        <FeedbackStack.Screen
          name={'Capture Feedback Recap'}
          component={CaptureFeedbackRecap}
        />
        <FeedbackStack.Screen
          name={'Record Feedback Entry'}
          component={RecordFeedbackEntry}
        />
        <FeedbackStack.Screen
          name={'Schedule Discussion'}
          component={ScheduleDiscussion}
        />
        <FeedbackStack.Screen
          name={'Feedback Entry Confirmation'}
          component={EntryConfirmation}
        />
        <FeedbackStack.Screen
          name={'Review Entry'}
          component={ReviewFeedbackEntry}
        />
        <FeedbackStack.Screen
          name={'Feedback Overview'}
          component={FeedbackOverview}
        />
        <FeedbackStack.Screen
          name={'Response Exchange'}
          component={ResponseExchange}
        />
        <FeedbackStack.Screen
          name={'Exchange Confirmation'}
          component={FeedbackExchangeConfirmation}
        />
      </FeedbackStack.Navigator>
    </>
  );
}
