import React, { useEffect } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import {
  Wrapper,
  Text,
  Header,
  SignPostIndicator,
  JourneyIndicator,
} from 'app/components';
import feedbackJourneySteps from 'app/models/FeedbackJourney';
import labels from 'app/locales/en';
import styles from './styles';

const JourneyCard = () => {
  return <View></View>;
};

const ActiveFeedbackJourney = props => {
  const { navigation } = props;

  return (
    <Wrapper>
      <ScrollView>
        <Header headerLeft= {{
          onPress: () => navigation.goBack() 
        }} />
        <View style={styles.nameContainer}>
          <Text type="h4" style={styles.teammateName}>Ferdie A</Text>
        </View>
        <View>
          {feedbackJourneySteps.map((item, i) => {
            return (
              <View style={styles.signPost}>
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
}

export default ActiveFeedbackJourney;
