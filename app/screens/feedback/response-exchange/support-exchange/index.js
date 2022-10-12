import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView, 
  Animated,
  Image,
  BackHandler,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import PropTypes from 'prop-types';
import FeedbackActions from 'app/store/feedback/FeedbackRedux';
import { GradientBackground, StoryProgress, UserAvatar } from 'app/components';
import {
  getCurrentJourney,
  getUserName,
  getExchangeMaxStep,
  getExchangeActiveStep,
} from 'app/store/selectors';
import { DeviceUtil } from 'app/utils';
import Images from 'app/assets/images';
import styles from '../styles';

const SupportExchange = props => {
  const { navigation, route } = props;
  const dispatch = useDispatch();
  const maxStep = useSelector(getExchangeMaxStep);
  const activeStep = useSelector(getExchangeActiveStep);
  const feedbackData = useSelector(getCurrentJourney);
  const { managerInput, frontlinerInput } =
    feedbackData;
  const user = useSelector(getUserName);
  const senderName = feedbackData.frontliner.split(' ');
  const senderInitials = `${senderName[0].charAt(0)}${senderName[1].charAt(0)}`;
  const dateLogged = moment(route.params.feedbackDate).format('llll');
  const translation = useRef(new Animated.Value(0)).current;
  const [showAnswerContainer, setShowAnswerContainer] = useState(false);
  const [storedText, setStoredText] = useState('');
  const [othersValue, setOthersValue] = useState('');
  const [isInputActive, setIsInputActive] = useState(false);
  const [supportValue, setSupportValue] = useState('');

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      // if (activeStep === 1)
      //   dispatch(ResponseActions.setResponseActiveStep(activeStep - 1));
      // else
      //   navigation.goBack();
      return true;
    });

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => {
        return true;
      });
  }, []);

  const handleTextChange = () => {
    setSupportValue(storedText);
  };

  const handleGoBack = () => {
    dispatch(FeedbackActions.setExchangeActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    dispatch(FeedbackActions.setExchangeActiveStep(activeStep + 1))

  }

  const SupportItem = () => {
    return <View style={{ flexDirection: 'row', alignItems: 'center' }}></View>;
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.coverCardContainer,
          {
            transform: [{ translateY: translation }],
          },
        ]}>
        <GradientBackground
          colors={['#23262F', '#23262F']}
          style={styles.gradientContainer}>
          {!showAnswerContainer && (
            <>
              <View style={styles.headerContainer}>
                <TouchableOpacity
                  accessibilityRole="button"
                  onPress={() => handleGoBack()}>
                  <Icon name="chevron-back-outline" size={24} color={'white'} />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                  <Text style={styles.titleText}>
                    {route.params.type} Feedback
                  </Text>
                  <Text style={styles.subtitleText}>{dateLogged}</Text>
                </View>
                <View>
                  <TouchableOpacity
                    accessibilityRole="button"
                    onPress={() => navigation.navigate('Explore')}>
                    <Icon name={'close-outline'} size={24} color={'white'} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.stepContainer}>
                <StoryProgress length={maxStep} activeStep={activeStep} />
              </View>
              <View style={styles.contentContainer}>
                <View style={[styles.questionContainer, { width: '60%'}]}>
                  <Text style={[styles.questionText, { color: '#23262F' }]}>
                    May I get help with...
                  </Text>
                </View>
                <View style={{ marginTop: 60 }}>
                <View
                  // key={i}
                  style={styles.supportItemContainer}
                >
                <View
                style={styles.supportMarker}
                ><Icon name="checkmark-outline" size={18} color={'#23262F'} /></View>
                  <Text style={styles.supportItemText}>{frontlinerInput.support}</Text>
                </View>
                </View>
                <View style={styles.nameContainer}>
                  <UserAvatar
                    initials={senderInitials}
                    name={`${senderName[0]} ${senderName[1]}`}
                    position={'Team Member'}
                  />
                </View>
              </View>
            </>
          )}
        </GradientBackground>
      </Animated.View>
      <View style={styles.callToActionContainer}>
        <KeyboardAvoidingView behavior={DeviceUtil.isIos() ? 'padding' : null}>
          <View style={styles.actionContainer}>
            <TextInput
              onFocus={() => setShowAnswerContainer(true)}
              onBlur={() => Keyboard.dismiss}
              onChangeText={text => setStoredText(text)}
              value={storedText}
              onSubmitEditing={() => handleTextChange()}
              style={[
                styles.textInputContainer,
                {
                  width: showAnswerContainer ? '82%' : '70%',
                  color: 'white',
                },
              ]}
              placeholder="I can help you by..."
              placeholderTextColor={'#B1B5C3'}
            />
            {showAnswerContainer && (
              <TouchableOpacity
                onPress={() => handleTextChange()}
                style={styles.sendButton}>
                <Icon name={'checkmark-sharp'} size={24} color={'black'} />
              </TouchableOpacity>
            )}
            {!showAnswerContainer && (
              <TouchableOpacity
                onPress={() => handleNext()}
                style={styles.nextButton}>
                <Text style={styles.nextButtonText}>{`Next`}</Text>
                <Icon
                  style={{ paddingBottom: 3 }}
                  name={'arrow-forward-outline'}
                  size={16}
                  color={'#353945'}
                />
              </TouchableOpacity>
            )}
          </View>
        </KeyboardAvoidingView>
      </View>
      {showAnswerContainer && (
        <View style={styles.answerContainer}>
          <Text style={styles.userGreetingText}>Hi {user},</Text>
          <Text style={styles.guideQuestionText}>What do you think?</Text>
          {supportValue !== '' && (
            <View style={styles.bubbleContainer}>
              <Text style={styles.bubbleText}>{supportValue}</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default SupportExchange;

SupportExchange.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
  maxStep: PropTypes.number,
  activeStep: PropTypes.number,
  user: PropTypes.string,
  feedbackData: PropTypes.object
};

SupportExchange.defaultProps = {
  navigation: {},
  route: {},
  maxStep: 7,
  activeStep: 1,
  user: '',
  feedbackData: {},
};