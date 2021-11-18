import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { useSelector } from 'react-redux';

import { Wrapper, Header, Text } from '../../components';
import Images from 'app/assets/images';
import labels from 'app/locales/en';
import { getUserFirstName } from 'app/store/selectors';
import styles from './styles';

const ReminderScreen = props => {
  const { navigation } = props;
  const { triviaReminder, morningReminder, morningContent } = labels.reminders;
  const userFirstName = useSelector(getUserFirstName);
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
      <Header
        headerLeft={{
          onPress: () => navigation.goBack(),
        }}
      />
      <View style={styles.imageContainer}>
        <Image source={content.image} resizeMode="contain" />
      </View>
      <View style={styles.titleContainer}>
        <Text type="h4">
          {userFirstName} {content.title}
        </Text>
        <View style={styles.contentContainer}>
          <Text type="body1">{content.content}</Text>
        </View>
      </View>
      <Text type="button">Give Feedback</Text>
    </Wrapper>
  );
};

export default ReminderScreen;
