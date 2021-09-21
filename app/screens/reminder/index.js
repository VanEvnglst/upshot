import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import { Wrapper, Header, Text } from '../../components';
import Images from '../../assets/images';
import labels from '../../locales/en';
import { getFirstName } from '../../store/userRedux';

const ReminderScreen = props => {
  const { navigation } = props;
  const { triviaReminder, morningReminder, morningContent } = labels.reminders;
  const firstName = useSelector(getFirstName)
  console.log('fi', firstName);
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
          {firstName} {content.title}
        </Text>
        <View style={styles.contentContainer}>
          <Text type="body1">{content.content}</Text>
        </View>
      </View>
      <Text type='button'>Give Feedback</Text>
    </Wrapper>
  );
};

export default ReminderScreen;
