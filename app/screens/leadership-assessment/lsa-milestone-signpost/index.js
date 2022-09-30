import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import Images from 'app/assets/images';
import styles from './styles';

const ExtendedAssessmentConfirmation = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const completedTests = useSelector(state => state.leadershipSkillArea.get('testFinishedCount'));
  const [content, setContent] = useState({
    id: 0,
    title: '',
    image: '',
    description: '',
  });

  const checkInContent = [
    {
      id: 1,
      title: "You're doing well!",
      image: Images.coolEmoji,
      description:
        "Better leadership begins with self-awareness. Leverage on the skills that you're good at, and build on the skills that have room for improvement.",
      bgColor: '#FFF0C3',
    },
    {
      id: 2,
      title: 'On the path to becoming a great leader',
      image: Images.stockEmoji,
      description: `Like with any skill or talent it takes time and practice to get better as a leader. We're off to a good start. Keep going!`,
      bgColor: '#F7EEFF',
    },
    {
      id: 3,
      title: 'Almost there!',
      image: Images.purpleHeartEmoji,
      description:
        "Becoming a better leader takes practice, but where do we start? We'll know what to focus on by seeing how you answer the questions.",
      bgColor: '#F0E0FF',
    },
    {
      id: 4,
      title: 'Way to go!',
      image: Images.muscleEmoji,
      description:
        "We're starting to get a better idea what kid of leader you are. Finish strong and let's see what you get!",
      bgColor: '#FFE8E3',
    },
    {
      id: 5,
      title: 'You completed all tests!',
      image: Images.popperEmoji,
      description:
        "You should be proud of yourself. You're making progress by completing all of the Leadership Skill Area tests.\n\nNow, are you ready to see your profile?",
      bgColor: '#FFE8C8',
    },
  ];

  useEffect(() => {
    handleContent();
  }, []);

  const handleContent = () => {
    switch (completedTests) {
      case 1:
        setContent(checkInContent[0]);
        break;
      case 2:
        setContent(checkInContent[1]);
        break;
      case 3:
        setContent(checkInContent[2]);
        break;
      case 4:
        setContent(checkInContent[3]);
        break;
      case 5:
        setContent(checkInContent[4]);
        break;
    }
  };

  const handleNavigation = () => {
    if (completedTests === 5) navigation.navigate('Calculate Assessment Score');
    else navigation.navigate('Assessment break down');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View
          style={[styles.imageContainer, { backgroundColor: content.bgColor }]}>
          <Image
            source={content.image}
            resizeMethod="contain"
            style={styles.image}
          />
        </View>
        <Text style={[styles.completionText, styles.addedMargin]}>
          {content.id === 5 ? 'Congratulations!' : 'You completed the test'}
        </Text>
        <Text style={styles.titleText}>{content.title}</Text>
        <Text style={styles.descriptionText}>{content.description}</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button
          mode="contained"
          onPress={() => handleNavigation()}
          style={styles.button}>
          <Text style={styles.buttonText}>
            {content.id === 5 ? 'Recalculate Indicator Levels' : 'Continue'}
          </Text>
        </Button>
        <Button mode="text" onPress={() => {}} style={{ marginTop: 24 }}>
          <Text style={[styles.completionText, { textTransform: 'none' }]}>
            {content.id === 5 ? 'Cancel' : 'Retake Test'}
          </Text>
        </Button>
      </View>
      <View style={styles.spacer} />
    </SafeAreaView>
  );
};

export default ExtendedAssessmentConfirmation;

ExtendedAssessmentConfirmation.propTypes = {};

ExtendedAssessmentConfirmation.defaultProps = {};
