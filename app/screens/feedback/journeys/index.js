import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import {
  Wrapper,
  Text,
  SignPostIndicator,
  Header,
  JourneyIndicator,
} from 'app/components';
import feedbackJourneySteps from 'app/models/FeedbackJourney';
import labels from 'app/locales/en';
import styles from './styles';

const ActiveFeedbackJourney = () => {
  return (
    <Wrapper>
      <ScrollView>
        <Header headerLeft />
        <View style={{ flex: 1, marginBottom: 20 }}>
          <Text type="h4">Ferdie A</Text>
        </View>
        <View style={{ flex: 4 }}>
          {feedbackJourneySteps.map((item, i) => {
            return (
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <SignPostIndicator
                  isLastItem={i === feedbackJourneySteps.length - 1}
                  isCompleted={item.id === 1}
                  disabled={item.id > 2}
                  current={item.id === 2}
                />
                <JourneyIndicator
                  style={{ flex: 2 }}
                  disabled={item.id > 2}
                  done={item.id === 1}
                  current={item.id === 2}
                  item={item}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default ActiveFeedbackJourney;
