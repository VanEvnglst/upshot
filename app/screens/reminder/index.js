import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { Wrapper } from '../../components';
import Images from '../../assets/images';
import labels from '../../locales/en';

const ReminderScreen = () => {
  const { triviaReminder, morningReminder, morningContent } = labels.reminders;
  const [currentTime, setTime] = useState(new Date().getHours());
  const [content, setContent] = useState({
    image: '',
    title: '',
    content: '',
  });

  handleContent = () => {
    if (currentTime >= 15) {
      setContent({
        image: Images.pmReminder,
        title: triviaReminder,
        content: morningContent,
      });
    } else {
      setContent({
        image: Images.amReminder,
        title: morningReminder,
        content: morningContent,
      });
    }
  };

  useEffect(() => {
    handleContent();
  }, [currentTime]);

  return (
    <Wrapper>
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <Image source={content.image} resizeMode="contain" />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 32, marginBottom: 20 }}>{content.title}</Text>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text>{content.content}</Text>
        </View>
      </View>
      <Text>Give Feedback</Text>
    </Wrapper>
  );
};

export default ReminderScreen;
