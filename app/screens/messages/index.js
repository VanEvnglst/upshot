import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper, Text, MessageItem, Loader } from 'app/components';
import MessagesActions from 'app/store/MessagesRedux';
import { getMessagesFetching, getMessages } from 'app/store/selectors';
import labels from 'app/locales/en';
import styles from './styles';

const Messages = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const isLoading = useSelector(getMessagesFetching);
  const messagesList = useSelector(getMessages);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function retrieveMessages() {
      await dispatch(MessagesActions.fetchMessages());
    }
    retrieveMessages();
  }, []);

  useEffect(() => {
    setMessages(messagesList);
  }, [messagesList]);

  const handleNavigation = item => {
    // messagesList.forEach((element, index) => {
    //   if (element.id === item.id)
    //     messagesList[index] = { ...item, isMessageRead: true };
    // });
    if (item.type === 'survey')
      navigateSurvey(item);
    else
      navigation.navigate('MessageThreadScreen', {
        message: item,
      });
  };

  const navigateSurvey = item => {
    if(item.is_survey_valid)
      if(item.survey_id === null)
        navigation.navigate('SurveyDiscussion', {
          message: item,
        });
      else {
        dispatch(SurveyActions.setDRSurveyStatus('id', item.survey_id))
        navigation.navigate('FrontlinerSurvey');
      }
    else
      navigation.navigate('SurveyConfirmation', {
        type: 'survey invalid',
      });
  }

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
    <View style={styles.container}>
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
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            bounces={false}
            renderItem={({ item, index }) => {
              return (
                <MessageItem
                  item={item}
                  onPress={() => handleNavigation(item)}
                />
              );
            }}
          />
        </View>
      </Wrapper>
      {isLoading && <Loader />}
    </View>
  );
};

export default Messages;

Messages.propTypes = {
  getMessagesFetching: PropTypes.bool,
  getMessages: PropTypes.array,
  fetchMessages: PropTypes.func
};

Messages.defaultProps = {
  getMessagesFetching: false,
  getMessages: [],
  fetchMessages: () => {},
};
