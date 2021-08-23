import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Wrapper } from '../../components';

import styles from './styles';

const ReminderSection = props => {
  const { navigation } = props;
  return (
    <View style={styles.reminderContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.reminderHeaderContainer}>
          <Text style={{ fontSize: 24 }}>Today's mindful moment</Text>
          <Text style={{ marginTop: 20 }}>
            Be mindful of moments throughout your day where you can help someone
            do better...
          </Text>
        </View>
        <View style={styles.readMoreContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Reminders')}>
            <Text>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const MessageCard = () => {
  return (
    <View style={styles.messageCard}>
      <Icon name={'person-circle-outline'} size={50} color={'#212121'} />
      <View style={styles.content}>
        <Text style={styles.messageHeader}>Welcome to Upshot!</Text>
        <Text style={styles.textMessage}>
          this is a system generated message
        </Text>
      </View>
    </View>
  );
};

const Messages = props => {
  return (
    <Wrapper>
      <Text style={styles.labelStyle}>Reminders</Text>
      <ReminderSection {...props} />
      <View style={styles.messagesContainer}>
        <Text style={styles.labelStyle}>Messages</Text>
        <MessageCard />
      </View>
    </Wrapper>
  );
};

export default Messages;
