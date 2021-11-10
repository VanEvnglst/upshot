import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LearningCard, Wrapper, Text } from 'app/components';
import FeedbackActions from 'app/store/feedback/feedbackRedux';
import FeedbackHistoryActions from 'app/store/feedback/feedbackHistoryRedux';
import { getActiveJourneys } from 'app/store/selectors';
import labels from 'app/locales/en';
import Images from 'app/assets/images';
import styles from './styles';

const HomeScreen = props => {
  const { homeScreen } = labels;
  const { navigation } = props;

  const dispatch = useDispatch();
  const activeJourneyLength = useSelector(getActiveJourneys);

  useEffect(() => {
    dispatch(FeedbackActions.fetchFeedbackFlow());
    dispatch(FeedbackActions.fetchFeedbackType());
    dispatch(FeedbackActions.fetchFeedbackTopics());
    dispatch(FeedbackHistoryActions.fetchActiveJourneys());
  }, []);

  // const AlertCard = () => {
  //   return (
  //     <View
  //       style={{
  //         height: 60,
  //         borderWidth: 0.6,
  //         borderRadius: 8,
  //         marginBottom: 12,
  //         justifyContent: 'center',
  //         paddingHorizontal: 20,
  //       }}>
  //       <Text>You have one upcoming event</Text>
  //     </View>
  //   );
  // };

  const handleNavigation = () => {
    navigation.navigate('Feedback');
  };

  return (
    <Wrapper>
      <ScrollView bounces={false} contentContainerStyle={styles.container}>
        {/* <View style={{ width: '95%', marginBottom: 20 }}>
          <Text style={{ paddingLeft: 25, marginBottom: 10 }}>Alerts</Text>
          {/* map data for alerts */}
        {/*  <AlertCard />
          <AlertCard />
        </View> */}
        <View>
          <Text type="overline" style={styles.overlineText}>
            {homeScreen.guidedJourney}
          </Text>
          <LearningCard
            onPress={() => handleNavigation()}
            image={Images.feedbackCoaching}
            headline={'Feedback Coaching'}
            subtitle={
              activeJourneyLength.length > 0
                ? `${activeJourneyLength.length} feedback journey in progress`
                : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
            }
            hasInProgress={activeJourneyLength.length > 0}
            mainCard
          />
          <LearningCard
            onPress={() => console.log('Employee Engagement')}
            image={Images.feedbackCoaching}
            headline={'Employee Engagement'}
            subtitle={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
            }
            mainCard
            style={{ marginTop: 15 }}
          />
        </View>
        <View style={styles.horizontalCardContainer}>
          <Text type="overline" style={styles.overlineText}>
            {homeScreen.comingSoon}
          </Text>
          <ScrollView horizontal>
            <LearningCard
              onPress={() => navigation.navigate('Feedback')}
              image={Images.feedbackCoaching}
              headline={'Enabling Engagement'}
              smallCard
              disabled
            />
            <LearningCard
              onPress={() => navigation.navigate('Feedback')}
              image={Images.feedbackCoaching}
              headline={'Managing Conflicts'}
              smallCard
              disabled
            />
          </ScrollView>
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default HomeScreen;
