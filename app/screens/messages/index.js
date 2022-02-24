import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper, Text, MessageItem } from 'app/components';
import MessagesActions from 'app/store/MessagesRedux';
import labels from 'app/locales/en';
import styles from './styles';

const Messages = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await dispatch(MessagesActions.fetchMessages());
      setMessages(data);
    })();
  }, []);
  const ReminderSection = props => {
    return (
      <View style={styles.reminderContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.reminderHeaderContainer}>
            <Text type="h5" style={styles.reminderTitle}>
              {labels.reminders.morningCardHeader}
            </Text>
            <Text type="body2" style={styles.textSnippet}>
              Be mindful of moments throughout your day where you can help
              someone do better...
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
  return (
    <Wrapper>
      {/* <Text type="overline" style={styles.labelStyle}>
        Reminders
      </Text>
      <ReminderSection /> */}
      <View style={styles.messagesContainer}>
        <Text type="overline" style={styles.labelStyle}>
          Messages
        </Text>
        <FlatList
          data={messages}
          keyExtractor={item => item.key}
          showsVerticalScrollIndicator={false}
          bounces={false}
          renderItem={({ item, index}) => {
            return <MessageItem
              onPress={() => navigation.navigate('ResponseScreen')}
            />;
          }}
        />
      </View>
    </Wrapper>
  );
};

export default Messages;

Messages.propTypes = {};

Messages.defaultProps = {};