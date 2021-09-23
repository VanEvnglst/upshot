import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { LearningCard, Wrapper, Text } from '../../components';
import FeedbackActions from '../../store/feedbackRedux';
import UserActions from '../../store/userRedux';
import labels from '../../locales/en';
import Images from '../../assets/images';
import styles from './styles';

const HomeScreen = props => {
  const { homeScreen } = labels;
  const { navigation } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FeedbackActions.fetchFeedbackFlow());
    dispatch(FeedbackActions.fetchFeedbackType());
    dispatch(FeedbackActions.fetchFeedbackTopics());
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
            onPress={() => navigation.navigate('Feedback')}
            image={Images.feedbackCoaching}
            headline={'Feedback Coaching'}
            subtitle={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
            }
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
