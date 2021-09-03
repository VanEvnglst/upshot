import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { FAB as FloatingAction } from 'react-native-paper';
import { Wrapper, Header, SignPostIndicator } from '../../../components';
import feedbackJourneySteps from '../../../enums/feedback-journey';
import labels from '../../../locales/en';

const FeedbackGuide = props => {
  const { navigation } = props;
  const { feedbackSignPost } = labels;
  return (
    <Wrapper>
      <ScrollView>
        <Header headerLeft />
        <View style={{ flex: 1, borderWidth: 1 }}>
          <Text style={{ fontSize: 36, marginBottom: 10 }}>
            {feedbackSignPost.title}
          </Text>
          <Text style={{ fontSize: 20 }}>{feedbackSignPost.description}</Text>
        </View>
        <View style={{ marginTop: 20, flex: 2, borderWidth: 1 }}>
          {feedbackJourneySteps.map((item, i) => {
            return (
              <View style={{ flexDirection: 'row' }}>
                <SignPostIndicator />
                <View
                  style={{ flex: 2, marginLeft: 20, paddingHorizontal: 10 }}>
                  <Text>{item.title}</Text>
                  <Text>{item.description}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <FloatingAction
        label="Start"
        icon='play'
        style={{
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
          backgroundColor: 'red',
        }}
        uppercase
        onPress={() => navigation.navigate('FeedbackDocumenting')}
      />
    </Wrapper>
  );
};

export default FeedbackGuide;
