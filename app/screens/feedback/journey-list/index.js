import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FAB as FloatingAction, ProgressBar } from 'react-native-paper';
import { Wrapper, Text, Header } from 'app/components';
import FeedbackHistoryActions from 'app/store/feedback/feedbackHistoryRedux';
import { getRecentJourneys, getActiveJourneys } from 'app/store/selectors';
import labels from 'app/locales/en';
import styles from './styles';

const FeedbackJourneyList = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const recentJourneys = useSelector(getRecentJourneys);
  const activeJourneys = useSelector(getActiveJourneys);

  useEffect(() => {
    dispatch(FeedbackHistoryActions.fetchRecentJourneys());
  }, []);

  const HistoryCard = ({ item }) => {
    const nameArr = item.member.split(/[ ,]+/);
    const lastName = nameArr[1].charAt(0);
    const memberName = `${nameArr[0]} ${lastName}.`; 
    return (
      <TouchableOpacity
        accessibilityRole={'button'}
        style={styles.historyCard}
        onPress={() => console.log('sadsadd')}>
        <View style={styles.historyCardContent}>
          <Text type="subtitle1" style={styles.historyTeammateText}>
            {memberName}
          </Text>
          <Text type="body2" style={styles.historyDateText}>
            2 weeks ago
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const InProgressCard = ({ activeJourney }) => {
    const { percent_complete: percent } = activeJourney;
    const nameArr = activeJourney.member.split(/[ ,]+/);
    const lastName = nameArr[1].charAt(0);
    const memberName = `${nameArr[0]} ${lastName}.`; 
    const progressValue = percent / 100;

    return (
      <TouchableOpacity
        accessibilityRole={'button'}
        style={styles.inProgressCard}
        onPress={() => handleNavigation('ActiveFeedbackJourney')}>
        <View style={styles.inProgressContent}>
          <ProgressBar
            progress={progressValue}
          />
          <View style={styles.inProgressText}>
            <Text type="h6" style={styles.feedbackForText}>
              Feedback for {memberName}
            </Text>
            <Text type="body2" style={styles.feedbackForDateText}>
              Last worked on ....
            </Text>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              accessibilityRole={'button'}
              onPress={() => handleNavigation('ActiveFeedbackJourney')}>
              <Text type="button" style={styles.inProgressBtn}>
                {labels.common.continue}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const handleNavigation = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <Wrapper>
      <ScrollView>
        <Header
          headerLeft={{
            onPress: () => navigation.goBack(),
          }}
        />
        <Text type="h3" style={styles.screenTitle}>
          {labels.feedbackIntro.feedbackCoaching}
        </Text>
        <View style={{ marginTop: 40 }}>
          <Text type="overline" style={styles.overlineText}>
            {labels.common.inProgress}
          </Text>
        </View>
        {activeJourneys &&
          activeJourneys.map((item, i) => (
            <InProgressCard key={item.id} activeJourney={item} />
          ))}
        <Text type="overline" style={[styles.overlineText, styles.addedMargin]}>
          {labels.feedbackIntro.history}
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {recentJourneys &&
            recentJourneys.map((item, i) => (
              <HistoryCard key={item.id} item={item} />
            ))}
        </ScrollView>
      </ScrollView>
      <FloatingAction
        style={styles.floatingAction}
        label={labels.common.giveFeedback}
        icon={'plus'}
        uppercase
        onPress={() => handleNavigation('FeedbackFlow')}
      />
    </Wrapper>
  );
};

export default FeedbackJourneyList;