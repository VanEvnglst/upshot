import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { FAB as FloatingAction, ProgressBar } from 'react-native-paper';
import {
  Wrapper,
  Text,
  Header,
} from 'app/components';

import labels from 'app/locales/en';
import styles from './styles';

const FeedbackJourneyList = props => {
  const { navigation } = props;
  const HistoryCard = ({ navigation, name, date }) => {
    return (
      <TouchableOpacity
        accessibilityRole={'button'}
        style={styles.historyCard}
        onPress={() => console.log('sadsadd')}>
        <View style={styles.historyCardContent}>
          <Text type="subtitle1" style={styles.historyTeammateText}>
            ABC D.
          </Text>
          <Text type="body2" style={styles.historyDateText}>
            2 weeks ago
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const InProgressCard = ({ name, progress, date }) => {
    return (
      <TouchableOpacity
        accessibilityRole={'button'}
        style={styles.inProgressCard}
        onPress={() => console.log('in progress')}>
        <View style={styles.inProgressContent}>
          <ProgressBar />
          <View style={styles.inProgressText}>
            <Text type="h6" style={styles.feedbackForText}>
              Feedback for A
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
        <InProgressCard />
        <InProgressCard />

        <Text type="overline" style={[styles.overlineText, styles.addedMargin]}>
          {labels.feedbackIntro.history}
        </Text>
        <ScrollView horizontal>
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
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
