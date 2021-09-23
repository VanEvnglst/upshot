import React, { useState, useEffect, useRef } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Wrapper, Text } from '../../components';
import labels from '../../locales/en';

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

const MessageCard = ({ unread }) => {
  return (
    <View style={styles.messageCard}>
      <Icon name={'person-circle-outline'} size={50} color={'#212121'} />
      <View style={styles.content}>
        <Text
          type={unread ? 'subtitle2' : 'body2'}
          style={styles.messageHeader}>
          Welcome to Upshot!
        </Text>
        <Text
          type="caption"
          style={[
            unread && styles.unreadTextMessage,
            !unread && styles.textMessage,
          ]}>
          this is a system generated message
        </Text>
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
        <MessageCard unread />
      </View>
    </Wrapper>
  );
};

export default Messages;
