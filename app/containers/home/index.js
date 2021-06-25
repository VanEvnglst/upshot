import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';
import { LearningCard } from '../../components';
import { data } from './data';

const HomeContainer = () => {
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
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ width: '95%', marginBottom: 20 }}>
          <Text style={{ paddingLeft: 25, marginBottom: 10 }}>Alerts</Text>
          <AlertCard />
          <AlertCard />
        </View>
        <Text
          style={{
            alignSelf: 'flex-start',
            paddingLeft: 25,
            marginBottom: 10,
          }}>
          Learning
        </Text>
        {data.map((item, index) => {
          return (
            <LearningCard
              image={item.image}
              header={item.header}
              subtitle={item.subtitle}
              key={item.id}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeContainer;
