import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Animated,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import FeedbackActions from 'app/store/feedback/FeedbackRedux';
import { getCurrentJourney } from 'app/store/selectors';
import { DataUtil } from 'app/utils';
import { UserAvatar, Text } from 'app/components';
import styles from './styles';

const FeedbackOverview = props => {
  const { navigation, route } = props;
  const dispatch = useDispatch();
  const feedbackData = useSelector(getCurrentJourney);
  const scaleValue = useRef(new Animated.Value(0)).current;
  // const { managerInput, frontlinerInput } = feedbackData;
  const [isObservationActive, setIsObservationActive] = useState(false);
  const [isImpactActive, setIsImpactActive] = useState(false);
  const [isContinueActive, setIsContinueActive] = useState(false);
  const [isDoLessActive, setIsDoLessActive] = useState(false);
  const [isStopDoingActive, setIsStopDoingActive] = useState(false);
  const [isAdditionalNotesActive, setIsAdditionalNotesActive] = useState(false);

  // useEffect(() => {
  //   async function retrieveData() {
  //     dispatch(FeedbackActions.fetchCurrentFeedback(route.params.id));
  //   }
  //   retrieveData();
  // }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleNavigation = () => {
    navigation.navigate('Response Exchange', {
      sender: feedbackData.frontliner,
      feedbackDate: route.params.feedbackDate,
      type: route.params.feedbackType,
    });
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
          <Text type="body2" weight="bold" style={styles.headerTitleText}>
            Overview
          </Text>
        </View>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => handleGoBack()}>
          <Icon name={'close-outline'} size={24} color={'white'} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <UserAvatar
          style={styles.nameAvatar}
          initials={DataUtil.parseInitials(feedbackData.frontliner)}
        />
        <Text type="body1" weight="bold" style={styles.responderText}>
          {feedbackData.frontliner}
        </Text>
        <Text type="body2" weight="regular" style={styles.responderDescription}>
          needs clarification on the following:
        </Text>
        <View style={styles.cardContainer}>
          <Animated.View style={styles.card}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              onPress={() => setIsObservationActive(!isObservationActive)}>
              <View style={styles.cardHeader}>
                <View
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
                </View>
                <Text
                  type="caption2"
                  weight="bold"
                  style={[
                    styles.cardTitleText,
                    managerInput.employee_do === '' &&
                      styles.disabledCardTitleText,
                  ]}>
                  observation
                </Text>
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
                {managerInput.employee_do === '' ? (
                  <Text
                    type="caption1"
                    weight="bold"
                    style={styles.noneProvidedText}>
                    None provided
                  </Text>
                ) : (
                  <>
                    <Text
                      type="caption1"
                      weight="regular"
                      style={styles.managerInputText}>
                      What you wrote...
                    </Text>
                    <Text
                      type="caption1"
                      weight="regular"
                      style={styles.managerInputContent}>
                      {managerInput.employee_do}
                    </Text>
                    <View style={styles.clarificationContainer}>
                      <Text
                        type="caption1"
                        weight="regular"
                        style={styles.managerInputText}>
                        Clarification needed...
                      </Text>
                      <Text
                        type="caption1"
                        weight="regular"
                        style={styles.managerInputContent}>
                        {frontlinerInput.event_clarification === ''
                          ? 'None provided.'
                          : frontlinerInput.event_clarification}
                      </Text>
                    </View>
                  </>
                )}
              </View>
            )}
          </Animated.View>
          <View style={styles.card}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              onPress={() => setIsImpactActive(!isImpactActive)}
              style={styles.card}>
              <View style={styles.cardHeader}>
                <View
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
                </View>
                <Text
                  type="caption2"
                  weight="bold"
                  style={[
                    styles.cardTitleText,
                    managerInput.impact === '' && styles.disabledCardTitleText,
                  ]}>
                  impact of the behavior
                </Text>
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
                {managerInput.impact === '' ? (
                  <Text
                    type="caption1"
                    weight="bold"
                    style={styles.noneProvidedText}>
                    None provided
                  </Text>
                ) : (
                  <>
                    <Text
                      type="caption1"
                      weight="regular"
                      style={styles.managerInputText}>
                      What you wrote...
                    </Text>
                    <Text
                      type="caption1"
                      weight="regular"
                      style={styles.managerInputContent}>
                      {managerInput.impact}
                    </Text>
                    <View style={styles.clarificationContainer}>
                      <Text
                        type="caption1"
                        weight="regular"
                        style={styles.managerInputText}>
                        Clarification needed...
                      </Text>
                      <Text
                        type="caption1"
                        weight="regular"
                        style={styles.managerInputContent}>
                        {frontlinerInput.impact_clarification === ''
                          ? 'None provided.'
                          : frontlinerInput.impact_clarification}
                      </Text>
                    </View>
                  </>
                )}
              </View>
            )}
          </View>
          <View style={styles.card}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              onPress={() => setIsContinueActive(!isContinueActive)}
              style={styles.card}>
              <View style={styles.cardHeader}>
                <View
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
                </View>
                <Text
                  type="caption2"
                  weight="bold"
                  style={[
                    styles.cardTitleText,
                    managerInput.do_more === '' && styles.disabledCardTitleText,
                  ]}>
                  Items to continue and do more of
                </Text>
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
                {managerInput.do_more === '' ? (
                  <Text
                    type="caption1"
                    weight="bold"
                    style={styles.noneProvidedText}>
                    None provided
                  </Text>
                ) : (
                  <>
                    <Text
                      type="caption1"
                      weight="regular"
                      style={styles.managerInputText}>
                      What you wrote...
                    </Text>
                    <Text
                      type="caption1"
                      weight="regular"
                      style={styles.managerInputContent}>
                      {managerInput.do_more}
                    </Text>
                    <View style={styles.clarificationContainer}>
                      <Text
                        type="caption1"
                        weight="regular"
                        style={styles.managerInputText}>
                        Clarification needed...
                      </Text>
                      <Text
                        type="caption1"
                        weight="regular"
                        style={styles.managerInputContent}>
                        {frontlinerInput.continue_clarification === ''
                          ? 'None provided.'
                          : frontlinerInput.continue_clarification}
                      </Text>
                    </View>
                  </>
                )}
              </View>
            )}
          </View>
          <View style={styles.card}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              onPress={() => setIsDoLessActive(!isDoLessActive)}
              style={styles.card}>
              <View style={styles.cardHeader}>
                <View
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
                </View>
                <Text
                  type="caption2"
                  weight="bold"
                  style={[
                    styles.cardTitleText,
                    managerInput.do_less === '' && styles.disabledCardTitleText,
                  ]}>
                  Items to do less of...
                </Text>
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
                {managerInput.do_less === '' ? (
                  <Text
                    type="caption1"
                    weight="bold"
                    style={styles.noneProvidedText}>
                    None provided
                  </Text>
                ) : (
                  <>
                    <Text
                      type="caption1"
                      weight="regular"
                      style={styles.managerInputText}>
                      What you wrote...
                    </Text>
                    <Text
                      type="caption1"
                      weight="regular"
                      style={styles.managerInputContent}>
                      {managerInput.do_less}
                    </Text>
                    <View style={styles.clarificationContainer}>
                      <Text
                        type="caption1"
                        weight="regular"
                        style={styles.managerInputText}>
                        Clarification needed...
                      </Text>
                      <Text
                        type="caption1"
                        weight="regular"
                        style={styles.managerInputContent}>
                        {frontlinerInput.do_less_clarification === ''
                          ? 'None provided.'
                          : frontlinerInput.do_less_clarification}
                      </Text>
                    </View>
                  </>
                )}
              </View>
            )}
          </View>
          <View style={styles.card}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              onPress={() => setIsStopDoingActive(!isStopDoingActive)}
              style={styles.card}>
              <View style={styles.cardHeader}>
                <View
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
                </View>
                <Text
                  type="caption2"
                  weight="bold"
                  style={[
                    styles.cardTitleText,
                    managerInput.stop_doing === '' &&
                      styles.disabledCardTitleText,
                  ]}>
                  Items to stop doing
                </Text>
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
                {managerInput.stop_doing === '' ? (
                  <Text
                    type="caption1"
                    weight="bold"
                    style={styles.noneProvidedText}>
                    None provided
                  </Text>
                ) : (
                  <>
                    <Text
                      type="caption1"
                      weight="regular"
                      style={styles.managerInputText}>
                      What you wrote...
                    </Text>
                    <Text
                      type="caption1"
                      weight="regular"
                      style={styles.managerInputContent}>
                      {managerInput.stop_doing}
                    </Text>
                    <View style={styles.clarificationContainer}>
                      <Text
                        type="caption1"
                        weight="regular"
                        style={styles.managerInputText}>
                        Clarification needed...
                      </Text>
                      <Text
                        type="caption1"
                        weight="regular"
                        style={styles.managerInputContent}>
                        {frontlinerInput.stop_doing_clarification === ''
                          ? 'None provided.'
                          : frontlinerInput.stop_doing_clarification}
                      </Text>
                    </View>
                  </>
                )}
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
                <View
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
                </View>
                <Text
                  type="caption2"
                  weight="bold"
                  style={[
                    styles.cardTitleText,
                    managerInput.additional_notes === '' &&
                      styles.disabledCardTitleText,
                  ]}>
                  others
                </Text>
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
                {managerInput.additional_notes === '' ? (
                  <Text
                    type="caption1"
                    weight="bold"
                    style={styles.noneProvidedText}>
                    None provided
                  </Text>
                ) : (
                  <>
                    <Text
                      type="caption1"
                      weight="regular"
                      style={styles.managerInputText}>
                      What you wrote...
                    </Text>
                    <Text
                      type="caption1"
                      weight="regular"
                      style={styles.managerInputContent}>
                      {managerInput.additional_notes}
                    </Text>
                    <View style={styles.clarificationContainer}>
                      <Text
                        type="caption1"
                        weight="regular"
                        style={styles.managerInputText}>
                        Clarification needed...
                      </Text>
                      <Text
                        type="caption1"
                        weight="regular"
                        style={styles.managerInputContent}>
                        {frontlinerInput.additional_clarification === ''
                          ? 'None provided.'
                          : frontlinerInput.additional_clarification}
                      </Text>
                    </View>
                  </>
                )}
              </View>
            )}
          </View>
        </View>
      </View>
      <View style={styles.btnCotnainer}>
        <Button
          mode="contained"
          onPress={() => handleNavigation()}
          style={styles.button}>
          <View style={styles.buttonContent}>
            <Text
              type="body2"
              weight="bold"
              style={styles.buttonText}>{`Next`}</Text>
            <Icon name={'arrow-forward-outline'} size={16} color={'#353945'} />
          </View>
        </Button>
      </View>
    </ScrollView>
  );
};

export default FeedbackOverview;

FeedbackOverview.propTypes = {
  feedbackData: PropTypes.object,
};

FeedbackOverview.defaultProps = {
  feedbackData: {},
};
