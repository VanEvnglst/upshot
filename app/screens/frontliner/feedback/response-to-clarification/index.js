import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import FrontlinerFeedbackActions from 'app/store/frontliner/FLFeedbackRedux';
import { getManagerFeedbackResponse } from 'app/store/selectors';
import { DeviceUtil } from 'app/utils';
import Images from 'app/assets/images';
import styles from './styles';

const FLResponseToClarification = props => {
  const { navigation, route } = props;
  const dispatch = useDispatch();
  // const feedbackData = useSelector(getManagerFeedbackResponse);
  // const { managerInput, frontlinerInput } = feedbackData;
  const senderName = route.params.manager.split(' ');
  const senderInitials = `${senderName[0].charAt(0)}${senderName[1].charAt(0)}`;
  const [isObservationActive, setIsObservationActive] = useState(false);
  const [isImpactActive, setIsImpactActive] = useState(false);
  const [isContinueActive, setIsContinueActive] = useState(false);
  const [isDoLessActive, setIsDoLessActive] = useState(false);
  const [isStopDoingActive, setIsStopDoingActive] = useState(false);
  const [isAdditionalNotesActive, setIsAdditionalNotesActive] = useState(false);

  useEffect(() => {
    async function retrieveData() {
      dispatch(FrontlinerFeedbackActions.fetchManagerFeedbackResponse(route.params.id));
    }
    retrieveData();
  }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleMarkAsRead = () => {
    navigation.navigate('Frontliner Feedback List');
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => handleGoBack()}>
          <Icon name="chevron-back-outline" size={24} color={'white'} />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitleText}>Response to Clarifications</Text>
        </View>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => handleGoBack()}>
          <Icon name={'close-outline'} size={24} color={'white'} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {senderName && (
          <LinearGradient
            style={styles.nameAvatar}
            colors={['#C883FF', '#6587FF']}
            start={{ x: 0.2, y: 0 }}
            end={{ x: 0.7, y: 1 }}>
            <Text style={styles.avatarText}>{senderInitials}</Text>
          </LinearGradient>
        )}
        <Text style={styles.responderText}>{route.params.manager}</Text>
        <Text style={styles.responderDescription}>
          responded to your clarification requests:
        </Text>
        <View style={styles.cardContainer}>
          <Animated.View style={styles.card}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              onPress={() => setIsObservationActive(!isObservationActive)}>
              <View style={styles.cardHeader}>
                {/* <View
                  style={[
                    styles.cardStatus,
                    managerInput.employee_do === ''
                      ? styles.disabledCardStatus
                      : styles.enabledCardStatus,
                  ]}>
                  <Icon
                    name={
                      managerInput.employee_do === ''
                        ? 'close-outline'
                        : 'checkmark-outline'
                    }
                    size={16}
                    style={{ color: '#353945' }}
                  />
                </View> */}
                {/* <Text
                  style={[
                    styles.cardTitleText,
                    managerInput.employee_do === '' &&
                      styles.disabledCardTitleText,
                  ]}>
                  observation
                </Text> */}
                <Icon
                  name={
                    isObservationActive
                      ? 'chevron-up-outline'
                      : 'chevron-down-outline'
                  }
                  style={{ color: '#B1B5C3' }}
                  size={24}
                />
              </View>
            </TouchableWithoutFeedback>
            {isObservationActive && (
              <View style={styles.inputContainer}>
                {/* {managerInput.employee_do === '' ? (
                  <Text style={styles.noneProvidedText}>None provided</Text>
                ) : (
                  <>
                    <Text style={styles.managerInputText}>
                      What you asked...
                    </Text>
                    <Text style={styles.managerInputContent}>
                      {managerInput.employee_do}
                    </Text>
                    <View style={styles.clarificationContainer}>
                      <Text style={styles.managerInputText}>
                        Your manager replied...
                      </Text>
                      <Text style={styles.managerInputContent}>
                        {frontlinerInput.event_clarification === ''
                          ? 'None provided.'
                          : frontlinerInput.event_clarification}
                      </Text>
                    </View>
                  </>
                )} */}
              </View>
            )}
          </Animated.View>
          <View style={styles.card}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              onPress={() => setIsImpactActive(!isImpactActive)}
              style={styles.card}>
              <View style={styles.cardHeader}>
                {/* <View
                  style={[
                    styles.cardStatus,
                    managerInput.impact === ''
                      ? styles.disabledCardStatus
                      : styles.enabledCardStatus,
                  ]}>
                  <Icon
                    name={
                      managerInput.impact === ''
                        ? 'close-outline'
                        : 'checkmark-outline'
                    }
                    size={16}
                    style={{ color: '#353945' }}
                  />
                </View> */}
                {/* <Text
                  style={[
                    styles.cardTitleText,
                    managerInput.impact === '' && styles.disabledCardTitleText,
                  ]}>
                  impact of the behavior
                </Text> */}
                <Icon
                  name={
                    isImpactActive
                      ? 'chevron-up-outline'
                      : 'chevron-down-outline'
                  }
                  style={{ color: '#B1B5C3' }}
                  size={24}
                />
              </View>
            </TouchableWithoutFeedback>
            {isImpactActive && (
              <View style={styles.inputContainer}>
                {/* {managerInput.impact === '' ? (
                  <Text style={styles.noneProvidedText}>None provided</Text>
                ) : (
                  <>
                    <Text style={styles.managerInputText}>
                      What you asked...
                    </Text>
                    <Text style={styles.managerInputContent}>
                      {managerInput.impact}
                    </Text>
                    <View style={styles.clarificationContainer}>
                      <Text style={styles.managerInputText}>
                        Your manager replied...
                      </Text>
                      <Text style={styles.managerInputContent}>
                        {frontlinerInput.impact_clarification === ''
                          ? 'None provided.'
                          : frontlinerInput.impact_clarification}
                      </Text>
                    </View>
                  </>
                )} */}
              </View>
            )}
          </View>
          <View style={styles.card}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              onPress={() => setIsContinueActive(!isContinueActive)}
              style={styles.card}>
              <View style={styles.cardHeader}>
                {/* <View
                  style={[
                    styles.cardStatus,
                    managerInput.do_more === ''
                      ? styles.disabledCardStatus
                      : styles.enabledCardStatus,
                  ]}>
                  <Icon
                    name={
                      managerInput.do_more === ''
                        ? 'close-outline'
                        : 'checkmark-outline'
                    }
                    size={16}
                    style={{ color: '#353945' }}
                  />
                </View> */}
                {/* <Text
                  style={[
                    styles.cardTitleText,
                    managerInput.do_more === '' && styles.disabledCardTitleText,
                  ]}>
                  Items to continue and do more of
                </Text> */}
                <Icon
                  name={
                    isContinueActive
                      ? 'chevron-up-outline'
                      : 'chevron-down-outline'
                  }
                  style={{ color: '#B1B5C3' }}
                  size={24}
                />
              </View>
            </TouchableWithoutFeedback>
            {isContinueActive && (
              <View style={styles.inputContainer}>
                {/* {managerInput.do_more === '' ? (
                  <Text style={styles.noneProvidedText}>None provided</Text>
                ) : (
                  <>
                    <Text style={styles.managerInputText}>
                      Clarification you needed...
                    </Text>
                    <Text style={styles.managerInputContent}>
                      {managerInput.do_more}
                    </Text>
                    <View style={styles.clarificationContainer}>
                      <Text style={styles.managerInputText}>
                        Your manager replied...
                      </Text>
                      <Text style={styles.managerInputContent}>
                        {frontlinerInput.continue_clarification === ''
                          ? 'None provided.'
                          : frontlinerInput.continue_clarification}
                      </Text>
                    </View>
                  </>
                )} */}
              </View>
            )}
          </View>
          <View style={styles.card}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              onPress={() => setIsDoLessActive(!isDoLessActive)}
              style={styles.card}>
              <View style={styles.cardHeader}>
                {/* <View
                  style={[
                    styles.cardStatus,
                    managerInput.do_less === ''
                      ? styles.disabledCardStatus
                      : styles.enabledCardStatus,
                  ]}>
                  <Icon
                    name={
                      managerInput.do_less === ''
                        ? 'close-outline'
                        : 'checkmark-outline'
                    }
                    size={16}
                    style={{ color: '#353945' }}
                  />
                </View> */}
                {/* <Text
                  style={[
                    styles.cardTitleText,
                    managerInput.do_less === '' && styles.disabledCardTitleText,
                  ]}>
                  Items to do less of...
                </Text> */}
                <Icon
                  name={
                    isDoLessActive
                      ? 'chevron-up-outline'
                      : 'chevron-down-outline'
                  }
                  style={{ color: '#B1B5C3' }}
                  size={24}
                />
              </View>
            </TouchableWithoutFeedback>
            {isDoLessActive && (
              <View style={styles.inputContainer}>
                {/* {managerInput.do_less === '' ? (
                  <Text style={styles.noneProvidedText}>None provided</Text>
                ) : (
                  <>
                    <Text style={styles.managerInputText}>
                      Clarification you needed...
                    </Text>
                    <Text style={styles.managerInputContent}>
                      {managerInput.do_less}
                    </Text>
                    <View style={styles.clarificationContainer}>
                      <Text style={styles.managerInputText}>
                        Your manager replied...
                      </Text>
                      <Text style={styles.managerInputContent}>
                        {frontlinerInput.do_less_clarification === ''
                          ? 'None provided.'
                          : frontlinerInput.do_less_clarification}
                      </Text>
                    </View>
                  </>
                )} */}
              </View>
            )}
          </View>
          <View style={styles.card}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              onPress={() => setIsStopDoingActive(!isStopDoingActive)}
              style={styles.card}>
              <View style={styles.cardHeader}>
                {/* <View
                  style={[
                    styles.cardStatus,
                    managerInput.stop_doing === ''
                      ? styles.disabledCardStatus
                      : styles.enabledCardStatus,
                  ]}>
                  <Icon
                    name={
                      managerInput.stop_doing === ''
                        ? 'close-outline'
                        : 'checkmark-outline'
                    }
                    size={16}
                    style={{ color: '#353945' }}
                  />
                </View> */}
                {/* <Text
                  style={[
                    styles.cardTitleText,
                    managerInput.stop_doing === '' &&
                      styles.disabledCardTitleText,
                  ]}>
                  Items to stop doing
                </Text> */}
                <Icon
                  name={
                    isStopDoingActive
                      ? 'chevron-up-outline'
                      : 'chevron-down-outline'
                  }
                  style={{ color: '#B1B5C3' }}
                  size={24}
                />
              </View>
            </TouchableWithoutFeedback>
            {isStopDoingActive && (
              <View style={styles.inputContainer}>
                {/* {managerInput.stop_doing === '' ? (
                  <Text style={styles.noneProvidedText}>None provided</Text>
                ) : (
                  <>
                    <Text style={styles.managerInputText}>
                      Clarification you needed...
                    </Text>
                    <Text style={styles.managerInputContent}>
                      {managerInput.stop_doing}
                    </Text>
                    <View style={styles.clarificationContainer}>
                      <Text style={styles.managerInputText}>
                        Your manager replied...
                      </Text>
                      <Text style={styles.managerInputContent}>
                        {frontlinerInput.stop_doing_clarification === ''
                          ? 'None provided.'
                          : frontlinerInput.stop_doing_clarification}
                      </Text>
                    </View>
                  </>
                )} */}
              </View>
            )}
          </View>
          <View style={styles.card}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              onPress={() =>
                setIsAdditionalNotesActive(!isAdditionalNotesActive)
              }
              style={styles.card}>
              <View style={styles.cardHeader}>
                {/* <View
                  style={[
                    styles.cardStatus,
                    managerInput.additional_notes === ''
                      ? styles.disabledCardStatus
                      : styles.enabledCardStatus,
                  ]}>
                  <Icon
                    name={
                      managerInput.additional_notes === ''
                        ? 'close-outline'
                        : 'checkmark-outline'
                    }
                    size={16}
                    style={{ color: '#353945' }}
                  />
                </View> */}
                {/* <Text
                  style={[
                    styles.cardTitleText,
                    managerInput.additional_notes === '' &&
                      styles.disabledCardTitleText,
                  ]}>
                  others
                </Text> */}
                <Icon
                  name={
                    isAdditionalNotesActive
                      ? 'chevron-up-outline'
                      : 'chevron-down-outline'
                  }
                  style={{ color: '#B1B5C3' }}
                  size={24}
                />
              </View>
            </TouchableWithoutFeedback>
            {isAdditionalNotesActive && (
              <View style={styles.inputContainer}>
                {/* {managerInput.additional_notes === '' ? (
                  <Text style={styles.noneProvidedText}>None provided</Text>
                ) : (
                  <>
                    <Text style={styles.managerInputText}>
                      What you asked...
                    </Text>
                    <Text style={styles.managerInputContent}>
                      {managerInput.additional_notes}
                    </Text>
                    <View style={styles.clarificationContainer}>
                      <Text style={styles.managerInputText}>
                        Your manager replied...
                      </Text>
                      <Text style={styles.managerInputContent}>
                        {frontlinerInput.additional_clarification === ''
                          ? 'None provided.'
                          : frontlinerInput.additional_clarification}
                      </Text>
                    </View>
                  </>
                )} */}
              </View>
            )}
          </View>
        </View>
      </View>
      <View
        style={styles.btnContainer}>
        <Button
          mode="contained"
          onPress={() => handleMarkAsRead()}
          style={styles.button}>
          <View
            style={styles.btnContent}>
              <Image
                source={Images.fileCheckIcon}
                resizeMode='contain'
                style={styles.readIcon}
              />
            <Text
              style={styles.buttonText}>{`Mark as Read`}</Text>
          </View>
        </Button>
      </View>
    </ScrollView>
  );
};

export default FLResponseToClarification;

FLResponseToClarification.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object
  // feedbackData: PropTypes.object,
};

FLResponseToClarification.defaultProps = {
  navigation: {},
  route: {},
  // feedbackData: {},
};