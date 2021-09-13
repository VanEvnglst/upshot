import React from 'react';
import { View, ScrollView } from 'react-native';
import { FAB as FloatingAction } from 'react-native-paper';
import { Wrapper, Text, Header, SignPostIndicator } from '../../../components';
import feedbackJourneySteps from '../../../enums/feedback-journey';
import labels from '../../../locales/en';
import styles from './styles';

const FeedbackGuide = props => {
  const { navigation } = props;
  const { feedbackSignPost, common } = labels;
  return (
    <Wrapper>
      <ScrollView>
        <Header headerLeft />
        <View style={styles.container}>
          <Text type="h4" style={styles.textTitle}>
            {feedbackSignPost.title}
          </Text>
          <Text type="body1">{feedbackSignPost.description}</Text>
        </View>
        <View style={styles.signPostContainer}>
          {feedbackJourneySteps.map((item, i) => {
            return (
              <View style={styles.contentContainer}>
                <SignPostIndicator
                  isLastItem={i === feedbackJourneySteps.length - 1}
                />
                <View style={styles.textContainer}>
                  <Text type="subtitle1">{item.title}</Text>
                  <Text type="body2">{item.description}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <FloatingAction
        label={common.start}
        icon="play"
        style={styles.fabStyle}
        uppercase
        onPress={() => navigation.navigate('FeedbackDocumenting')}
      />
    </Wrapper>
  );
};

export default FeedbackGuide;
