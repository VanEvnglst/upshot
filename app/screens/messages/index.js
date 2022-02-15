import React, { useState, useEffect, useRef } from 'react';
import { View, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Wrapper, Text, MessageItem } from 'app/components';
import labels from 'app/locales/en';

import styles from './styles';

const ReminderSection = props => {
  const { navigation } = props;
  console.log('nav', navigation);
  return (
    <View style={styles.reminderContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.reminderHeaderContainer}>
          <Text type="h5" style={styles.reminderTitle}>
            {labels.reminders.morningCardHeader}
          </Text>
          <Text type="body2" style={styles.textSnippet}>
            Be mindful of moments throughout your day where you can help someone
            do better...
          </Text>
        </View>
        <View style={styles.readMoreContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Reminders')}>
            <Text type="button">{labels.common.readMore}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const Messages = props => {
  return (
    <Wrapper>
      <Text type="overline" style={styles.labelStyle}>
        Reminders
      </Text>
      <ReminderSection {...props} />
      <View style={styles.messagesContainer}>
        <Text type="overline" style={styles.labelStyle}>
          Messages
        </Text>
        {/* TODO: should be a Flatlist */}
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
      </View>
    </Wrapper>
  );
};

export default Messages;
