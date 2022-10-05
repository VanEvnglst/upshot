import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Image,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import PropTypes from 'prop-types';
import { GradientBackground, StoryProgress } from 'app/components';
import FrontlinerFeedbackActions from 'app/store/frontliner/FLFeedbackRedux';
import { getFLFeedbackData } from 'app/store/selectors';
import { DeviceUtil } from 'app/utils';
import Images from 'app/assets/images';
import styles from './styles';

const DoLessResponse = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const maxStep = useSelector(state => state.frontlinerFeedback.get('maxStep'));
  const activeStep = useSelector(state =>
    state.frontlinerFeedback.get('activeStep'),
  );
  const user = useSelector(state => state.user.get('userName'));
  const frontlinerFeedback = useSelector(getFLFeedbackData);
  const dateLogged = moment(frontlinerFeedback.date).format('llll');
  const managerName = frontlinerFeedback.em_name.split(" ");
  const managerInitials = `${managerName[0].charAt(0)}${managerName[1].charAt(0)}`;
  const translation = useRef(new Animated.Value(0)).current;
  const [showAnswerContainer, setShowAnswerContainer] = useState(false);
  const [storedText, setStoredText] = useState('');
  const [doLessClarification, setDoLessClarification] = useState('');
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
    setDoLessClarification(storedText);
    setTimeout(() => {
      setStoredText('');
    }, 200);
  };

  const handleGoBack = () => {
    dispatch(FrontlinerFeedbackActions.setResponseActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    dispatch(FrontlinerFeedbackActions.setResponseData('doLess', doLessClarification))
    dispatch(FrontlinerFeedbackActions.setResponseActiveStep(activeStep + 1));
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          height: '88%',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          transform: [{ translateY: translation }],
        }}>
        <GradientBackground
          colors={['#A88EF4', '#7F3CB4']}
          style={styles.gradientContainer}>
             {!showAnswerContainer &&
          (<>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              accessibilityRole="button"
              onPress={() => handleGoBack()}>
              <Icon name="chevron-back-outline" size={24} color={'white'} />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{frontlinerFeedback.cor_or_pos} Feedback</Text>
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
            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>
                I would like you to do less...
              </Text>
            </View>
            <View style={{ marginTop: 30, minHeight: 300 }}>
              <Image
                source={Images.quotationEmoji}
                resizeMode="contain"
                style={styles.image}
              />
              <Text style={styles.entryText}>
                {frontlinerFeedback.employee_do_less === '' ? 'None provided.': frontlinerFeedback.employee_do_less}
              </Text>
            </View>
            <View style={styles.nameContainer}>
              <View style={styles.nameAvatar}>
                <LinearGradient
                  style={styles.nameAvatar}
                  colors={['#C883FF', '#6587FF']}
                  start={{ x: 0.2, y: 0 }}
                  end={{ x: 0.7, y: 1 }}>
                  <Text style={styles.avatarText}>{managerInitials}</Text>
                </LinearGradient>
              </View>
              <View>
                <Text style={styles.managerNameText}>{frontlinerFeedback.em_name}</Text>
                <Text style={styles.descriptionText}>Manager</Text>
              </View>
            </View>
          </View>
          </>)}
        </GradientBackground>
      </Animated.View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
          justifyContent: 'center',
          position: 'absolute',
          bottom: 30,
          left: 0,
          right: 0,
        }}>
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
              placeholder="I need clarifications about..."
              placeholderTextColor={'#B1B5C3'}
            />
            {showAnswerContainer && (
              <TouchableOpacity
                onPress={() => handleTextChange()}
                style={{
                  height: 50,
                  width: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  borderRadius: 25,
                }}>
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
                style={{
                  height: 48,
                  width: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  borderRadius: 12,
                  flexDirection: 'row',
                }}>
                   <Text
                  style={{
                    fontSize: 16,
                    lineHeight: 16,
                    marginRight: 4, 
                    fontWeight: '700',
                    color: '#353945',
                  }}>{`Next`}</Text>
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
        <View
          style={{
            zIndex: -1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: '30%',
            flex: 1,
          }}>
            <Text
            style={{
              fontSize: 16,
              lineHeight: 24,
              fontWeight: '400',
              textAlign: 'center',
              color: 'white',
              marginBottom: 8,
            }}>
            Hi {user},
          </Text>
          <Text
            style={{
              fontSize: 24,
              lineHeight: 32,
              fontWeight: '400',
              textAlign: 'center',
              color: 'white',
            }}>
            What do you think about the observation?
          </Text>
          {doLessClarification !== '' &&
           ( <View
            style={{
              flex: 1,
              alignSelf: 'flex-end',
              justifyContent: 'flex-start',
              backgroundColor: '#23262F',
              borderBottomLeftRadius: 24,
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              maxHeight: 100,
              width: 320,
              marginRight: 16,
              marginTop: 30,
              paddingVertical: 12,
              paddingHorizontal: 16,
              marginBottom: 30,
            }}
          >
            <Text style={{ fontSize: 14, lineHeight: 24, color:"white", fontWeight: '400'}}>{doLessClarification}</Text>
          </View>
)}
        </View>
      )}
    </View>
  );
};

export default DoLessResponse;

DoLessResponse.propTypes = {};

DoLessResponse.defaultPropst = {};
