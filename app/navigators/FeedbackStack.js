import React from 'react';
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
  CaptureFeedbackRecap,
  EMJourneyCloseout,
  JourneyDetails,
  FeedbackChecklist,
  RecordDiscussion,
  OngoingJourneyList
} from 'app/screens';

const FeedbackStack = createStackNavigator();
const FeedbackNavigator = () => {
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
        <FeedbackStack.Screen
          name={'EM Journey Closeout'}
          component={EMJourneyCloseout}
        />
        <FeedbackStack.Screen
          name={'Journey Details'}
          component={JourneyDetails}
        />
        <FeedbackStack.Screen
          name={'Ongoing Journeys List'}
          component={OngoingJourneyList}
        />
        <FeedbackStack.Screen
          name={'Feedback Checklist'}
          component={FeedbackChecklist}
        />
         <FeedbackStack.Screen
          name={'Record Discussion'}
          component={RecordDiscussion}
        />
      </FeedbackStack.Navigator>
    </>
  );
};

export default FeedbackNavigator;