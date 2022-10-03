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
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { GradientBackground, StoryProgress } from 'app/components';
import ResponseActions from 'app/store/frontliner/ResponseRedux';
import { DeviceUtil } from 'app/utils';
import Images from 'app/assets/images';
import styles from './styles';

const ContinueResponse = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const maxStep = useSelector(state => state.frontlinerResponse.get('maxStep'));
  const activeStep = useSelector(state =>
    state.frontlinerResponse.get('activeStep'),
  );
  const user = useSelector(state => state.user.get('userName'));
  const translation = useRef(new Animated.Value(0)).current;
  const [showAnswerContainer, setShowAnswerContainer] = useState(false);
  const [storedText, setStoredText] = useState('');
  const [continueClarification, setContinueClarification] = useState('');
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
    setContinueClarification(storedText);
  };

  const handleGoBack = () => {
    dispatch(ResponseActions.setResponseActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    dispatch(ResponseActions.setResponseActiveStep(activeStep + 1));
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
          colors={['#6ED3EA', '#416FC9']}
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
                  <Text style={styles.titleText}>Corrective Feedback</Text>
                  <Text style={styles.subtitleText}>Date logged</Text>
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
                    I would like you to continue and do more...
                  </Text>
                </View>
                <View style={{ marginTop: 30 }}>
                  <Image
                    source={Images.quotationEmoji}
                    resizeMode="contain"
                    style={styles.image}
                  />
                  <Text style={styles.entryText}>
                    Is everything alright? I noticed that you lacked enthusiasm
                    when you greeted the customers this morning and don't seem
                    like your usual self today."
                  </Text>
                </View>
                <View style={styles.nameContainer}>
                  <View style={styles.nameAvatar}>
                    <LinearGradient
                      style={styles.nameAvatar}
                      colors={['#C883FF', '#6587FF']}
                      start={{ x: 0.2, y: 0 }}
                      end={{ x: 0.7, y: 1 }}>
                      <Text style={styles.avatarText}>MN</Text>
                    </LinearGradient>
                  </View>
                  <View>
                    <Text style={styles.managerNameText}>Manager name</Text>
                    <Text style={styles.descriptionText}>Shift Manager</Text>
                  </View>
                </View>
              </View>
            </>
          )}
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
          {continueClarification !== '' && (
            <View
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
              }}>
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 24,
                  color: 'white',
                  fontWeight: '400',
                }}>
                {continueClarification}
              </Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default ContinueResponse;

ContinueResponse.propTypes = {};

ContinueResponse.defaultPropst = {};
