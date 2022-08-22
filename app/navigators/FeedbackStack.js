import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import {
  FeedbackFlow,
  FeedbackGuide,
  FeedbackType,
  FeedbackDocumenting,
  DocumentingReview,
  ActiveFeedbackJourney,
  FeedbackJourneyList,
  PreparingGuide,
  FeedbackPreparing,
  FeedbackConfirmation,
  PreparingSchedule,
  PreparingReview,
  DiscussingGuide,
  DiscussingMeeting,
  ActionPlanScreen,
  DiscussingReview,
  FeedbackDiscussing,
  FeedbackReflecting,
  ReflectingGuide,
  SharingGuide,
  FeedbackSharing,
  SharingReview,
  CaptureFeedbackMoment,
} from '../screens';
import { getActiveJourneys } from 'app/store/selectors';

const FeedbackStack = createStackNavigator();

export default function FeedbackNavigator() {
  const activeJourneyLength = useSelector(getActiveJourneys);

  return (
    <>
      <FeedbackStack.Navigator
        headerMode="none"
        // initialRouteName={
        //   activeJourneyLength.length > 0
        //     ? 'FeedbackJourneyList'
        //     : 'FeedbackFlow'
        // }
        >
          <FeedbackStack.Screen
        name={'Capture Feedback Moment'}
        component={CaptureFeedbackMoment}
      />
        <FeedbackStack.Screen name={'FeedbackFlow'} component={FeedbackFlow} />
        <FeedbackStack.Screen name={'FeedbackType'} component={FeedbackType} />
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
          name={'FeedbackConfirmation'}
          component={FeedbackConfirmation}
        />
        <FeedbackStack.Screen
          name={'FeedbackDocumenting'}
          component={FeedbackDocumenting}
        />
        <FeedbackStack.Screen
          name={'DocumentingReview'}
          component={DocumentingReview}
        />
        <FeedbackStack.Screen
          name={'PreparingGuide'}
          component={PreparingGuide}
        />
        <FeedbackStack.Screen
          name={'FeedbackPreparing'}
          component={FeedbackPreparing}
        />
        <FeedbackStack.Screen
          name={'PreparingSchedule'}
          component={PreparingSchedule}
        />
        <FeedbackStack.Screen
          name={'PreparingReview'}
          component={PreparingReview}
        />
        <FeedbackStack.Screen
          name={'DiscussingGuide'}
          component={DiscussingGuide}
        />
        <FeedbackStack.Screen
          name={'DiscussingMeeting'}
          component={DiscussingMeeting}
        />
        <FeedbackStack.Screen
          name={'FeedbackDiscussing'}
          component={FeedbackDiscussing}
        />
        <FeedbackStack.Screen
          name={'ActionPlanScreen'}
          component={ActionPlanScreen}
        />
        <FeedbackStack.Screen
          name={'DiscussingReview'}
          component={DiscussingReview}
        />
        <FeedbackStack.Screen
          name={'ReflectingGuide'}
          component={ReflectingGuide}
        />
        <FeedbackStack.Screen
          name={'FeedbackReflecting'}
          component={FeedbackReflecting}
        />
        <FeedbackStack.Screen name={'SharingGuide'} component={SharingGuide} />
        <FeedbackStack.Screen
          name={'FeedbackSharing'}
          component={FeedbackSharing}
        />
        <FeedbackStack.Screen
          name={'SharingReview'}
          component={SharingReview}
        />
      </FeedbackStack.Navigator>
    </>
  );
}
