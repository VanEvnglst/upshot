import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  BackHandler,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import PropTypes from 'prop-types';
import { GradientBackground, StoryProgress, UserAvatar } from 'app/components';
import { DeviceUtil } from 'app/utils';
import FeedbackActions from 'app/store/feedback/FeedbackRedux';
import {
  getCurrentJourney,
  getUserName,
  getExchangeMaxStep,
  getExchangeActiveStep,
} from 'app/store/selectors';
import Images from 'app/assets/images';
import styles from '../styles';

const ImpactExchange = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const maxStep = useSelector(getExchangeMaxStep);
  const activeStep = useSelector(getExchangeActiveStep);
  const user = useSelector(getUserName);
  const feedbackData = useSelector(getCurrentJourney);
  const { ['FB Entry']: managerInput, ['FL Response']: frontlinerInput } =
    feedbackData;
  // const dateLogged = moment(frontlinerFeedback.date).format('llll');
  const senderName = feedbackData.frontliner.split(' ');
  const senderInitials = `${senderName[0].charAt(0)}${senderName[1].charAt(0)}`;
  const translation = useRef(new Animated.Value(0)).current;
  const [showAnswerContainer, setShowAnswerContainer] = useState(false);
  const [storedText, setStoredText] = useState('');
  const [impactResponse, setImpactResponse] = useState('');
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
    setImpactResponse(storedText);
  };

  const handleGoBack = () => {
    dispatch(FeedbackActions.setExchangeActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    // dispatch(FrontlinerFeedbackActions.setResponseData('impact', impactResponse))
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
          colors={['#8ED475', '#539B47']}
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
                  <Text style={styles.titleText}>Feedback</Text>
                  {/*  <Text style={styles.subtitleText}>{dateLogged}</Text> */}
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
                  <Text style={[styles.questionText, { color: '#569E49' }]}>
                    The impact of this observation/behavior to the business or
                    the team...
                  </Text>
                </View>
                <View style={styles.entryContainer}>
                  <Image
                    source={Images.quotationEmoji}
                    resizeMode="contain"
                    style={styles.image}
                  />
                  <Text style={styles.entryText}>
                    {frontlinerInput.impact_clarification === ''
                      ? 'None provided.'
                      : frontlinerInput.impact_clarification}
                  </Text>
                </View>
                <View style={styles.nameContainer}>
                  <UserAvatar
                    initials={senderInitials}
                    name={senderName}
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
              placeholder="What I want to say is..."
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
          <Text style={styles.guideQuestionText}>Share your thoughts</Text>
          {impactResponse !== '' && (
            <View style={styles.bubbleContainer}>
              <Text style={styles.bubbleText}>{impactResponse}</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default ImpactExchange;

ImpactExchange.propTypes = {};

ImpactExchange.defaultProps = {};
