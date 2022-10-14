import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import { GradientBackground, StoryProgress, UserAvatar } from 'app/components';
import FeedbackActions from 'app/store/feedback/FeedbackRedux';
import {
  getCurrentJourney,
  getUserName,
  getExchangeMaxStep,
  getExchangeActiveStep,
} from 'app/store/selectors';
import { DeviceUtil } from 'app/utils';
import Images from 'app/assets/images';
import styles from '../styles';

const AdditionalExchange = props => {
  const { navigation, route } = props;
  const dispatch = useDispatch();
  const maxStep = useSelector(getExchangeMaxStep);
  const activeStep = useSelector(getExchangeActiveStep);
  const translation = useRef(new Animated.Value(0)).current;
  const user = useSelector(getUserName);
  const feedbackData = useSelector(getCurrentJourney);
  const { managerInput, frontlinerInput } =
    feedbackData;
  const dateLogged = moment(route.params.feedbackDate).format('llll');
  const senderName = feedbackData.frontliner.split(' ');
  const senderInitials = `${senderName[0].charAt(0)}${senderName[1].charAt(0)}`;
  const [showAnswerContainer, setShowAnswerContainer] = useState(false);
  const [storedText, setStoredText] = useState('');
  const [additionalResponse, setAdditionalResponse] = useState('');
  const [keyboardStatus, setKeyboardStatus] = useState('didShow');

  useEffect(() => {
    const subscribeKeyboard = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('didShow');
      setShowAnswerContainer(true);
    });
    const unsubscribeKeyboard = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('didHide');
      setShowAnswerContainer(false);
    });

    return () => {
      subscribeKeyboard.remove();
      unsubscribeKeyboard.remove();
    };
  }, []);

  useEffect(() => {
    Animated.timing(translation, {
      toValue: showAnswerContainer
        ? keyboardStatus === 'didShow'
          ? -400
          : -600
        : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [showAnswerContainer]);

  const handleTextChange = () => {
    setAdditionalResponse(storedText);
    setTimeout(() => {
      setStoredText('');
    }, 200);
  };

  const handleGoBack = () => {
    dispatch(FeedbackActions.setExchangeActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    dispatch(FeedbackActions.setExchangeData('additionalNotes', additionalResponse))
    dispatch(FeedbackActions.setExchangeActiveStep(activeStep + 1));
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
          colors={['#90D0C5', '#47A9A3']}
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
                  <Text style={styles.titleText}>{route.params.type} Feedback</Text>
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
                <TouchableWithoutFeedback onPress={() => {}}>
                  <View style={styles.originalFeedbackContainer}>
                    <Text style={styles.originalFeedbackText}>
                      Show your original feedback
                    </Text>
                    <Icon
                      name="chevron-forward-outline"
                      size={12}
                      color={'white'}
                    />
                  </View>
                </TouchableWithoutFeedback>
                <View style={styles.questionContainer}>
                  <Text style={[styles.questionText, { color: '#4EACA6' }]}>
                    I need clarity on the additional details you provided...
                  </Text>
                </View>
                <View style={styles.entryContainer}>
                  <Image
                    source={Images.quotationEmoji}
                    resizeMode="contain"
                    style={styles.image}
                  />
                  <Text style={[styles.entryText, frontlinerInput.additional_clarification === '' && styles.noneProvidedText]}>
                    {frontlinerInput.additional_clarification === ''
                      ? 'None provided.'
                      : frontlinerInput.additional_clarification}
                  </Text>
                </View>
                <View style={styles.nameContainer}>
                  <UserAvatar
                    initials={senderInitials}
                    name={`${senderName[0]} ${senderName[1]}`}
                    position="Team Member"
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
                },
              ]}
              placeholder="What I want to say is..."
              placeholderTextColor={'#B1B5C3'}
            />
            {showAnswerContainer && (
              <TouchableOpacity
                onPress={() => handleTextChange()}
                style={styles.sendButton}>
                <Icon
                  name={'arrow-forward-outline'}
                  size={24}
                  color={'#353945'}
                />
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
          <Text style={styles.guideQuestionText}>Share your thoughts</Text>
          {additionalResponse !== '' && (
            <View style={styles.bubbleContainer}>
              <Text style={styles.bubbleText}>{additionalResponse}</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default AdditionalExchange;

AdditionalExchange.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
  maxStep: PropTypes.number,
  activeStep: PropTypes.number,
  user: PropTypes.string,
  feedbackData: PropTypes.object
};

AdditionalExchange.defaultProps = {
  navigation: {},
  route: {},
  maxStep: 7,
  activeStep: 1,
  user: '',
  feedbackData: {},
};