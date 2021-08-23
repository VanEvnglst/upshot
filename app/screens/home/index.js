import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';
import { LearningCard, Wrapper } from '../../components';
import { data } from './data';
import Images from '../../assets/images';

const HomeContainer = props => {
  const { navigation } = props;

  const AlertCard = () => {
    return (
      <View
        style={{
          height: 60,
          borderWidth: 0.6,
          borderRadius: 8,
          marginBottom: 12,
          justifyContent: 'center',
          paddingHorizontal: 20,
        }}>
        <Text>You have one upcoming event</Text>
      </View>
    );
  };

  return (
    <Wrapper>
      <ScrollView contentContainerStyle={styles.container}>
        {/* <View style={{ width: '95%', marginBottom: 20 }}>
          <Text style={{ paddingLeft: 25, marginBottom: 10 }}>Alerts</Text>
          {/* map data for alerts */}
        {/*  <AlertCard />
          <AlertCard />
        </View> */}
        <View>
          <Text
            style={{
              alignSelf: 'flex-start',
              paddingLeft: 25,
              marginBottom: 10,
            }}>
            Guided Journeys
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
        </View>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              alignSelf: 'flex-start',
              paddingLeft: 25,
              marginBottom: 10,
            }}>
            Coming soon
          </Text>
          <ScrollView horizontal>
            <LearningCard
              onPress={() => navigation.navigate('Feedback')}
              image={Images.feedbackCoaching}
              headline={'Enabling Engagement'}
              smallCard
            />
            <LearningCard
              onPress={() => navigation.navigate('Feedback')}
              image={Images.feedbackCoaching}
              headline={'Managing Conflicts'}
              smallCard
            />
          </ScrollView>
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default HomeContainer;
