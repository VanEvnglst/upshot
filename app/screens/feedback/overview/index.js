import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import FeedbackActions from 'app/store/feedback/FeedbackRedux';
import { getCurrentJourney } from 'app/store/selectors';
import { DeviceUtil } from 'app/utils';
import styles from './styles';
import { Button } from 'react-native-paper';

const FeedbackOverview = props => {
  const { navigation, route } = props;
  const dispatch = useDispatch();
  const feedbackData = useSelector(getCurrentJourney);
  const { ["FB Entry"]: managerInput, ["FL Response"]: frontlinerInput } = feedbackData;
  const managerName = feedbackData.frontliner.split(" ");
  const managerInitials = `${managerName[0].charAt(0)}${managerName[1].charAt(0)}`;
  const [isObservationActive, setIsObservationActive] = useState(false);
  const [isImpactActive, setIsImpactActive] = useState(false);
  const [isContinueActive, setIsContinueActive] = useState(false);
  const [isDoLessActive, setIsDoLessActive] = useState(false);
  const [isStopDoingActive, setIsStopDoingActive] = useState(false);
  const [isAdditionalNotesActive, setIsAdditionalNotesActive] = useState(false);

  useEffect(() => {
    dispatch(FeedbackActions.fetchCurrentFeedback(route.params.id));
  }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleNavigation = () => {
    navigation.navigate('Response Exchange');
  }

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
          <Text style={styles.headerTitleText}>Overview</Text>
        </View>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => handleGoBack()}>
          <Icon name={'close-outline'} size={24} color={'white'} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {managerName && <LinearGradient
          style={styles.nameAvatar}
          colors={['#C883FF', '#6587FF']}
          start={{ x: 0.2, y: 0 }}
          end={{ x: 0.7, y: 1 }}>
          <Text style={styles.avatarText}>{managerInitials}</Text>
        </LinearGradient>}
        <Text style={styles.responderText}>{feedbackData.frontliner}</Text>
        <Text style={styles.responderDescription}>
          needs clarification on the following:
        </Text>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              onPress={() => setIsObservationActive(!isObservationActive)}>
              <View style={styles.cardHeader}>
                <View style={styles.cardStatus}>
                  <Icon
                    name="checkmark-outline"
                    size={12}
                    style={{ color: '#777E90' }}
                  />
                </View>
                <Text style={styles.cardTitleText}>observation</Text>
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
            {isObservationActive &&
            <View style={styles.inputContainer}>
              <Text style={styles.managerInputText}>What you wrote...</Text>
              <Text style={styles.managerInputContent}>{managerInput.employee_do}</Text>
              <View style={styles.clarificationContainer}>
              <Text style={styles.managerInputText}>Clarification needed...</Text>
              <Text style={styles.managerInputContent}>{frontlinerInput.event_clarification}</Text>
              </View>
              </View>}
          </View>
          <View style={styles.card}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              onPress={() => setIsImpactActive(!isImpactActive)}
              style={styles.card}>
              <View style={styles.cardHeader}>
                <View style={styles.cardStatus}>
                  <Icon
                    name="checkmark-outline"
                    size={12}
                    style={{ color: '#777E90' }}
                  />
                </View>
                <Text style={styles.cardTitleText}>impact of the behavior</Text>
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
            {isImpactActive &&
            <View style={styles.inputContainer}>
              <Text style={styles.managerInputText}>What you wrote...</Text>
              <Text style={styles.managerInputContent}>{managerInput.impact}</Text>
              <View style={styles.clarificationContainer}>
              <Text style={styles.managerInputText}>Clarification needed...</Text>
              <Text style={styles.managerInputContent}>{frontlinerInput.impact_clarification}</Text>
              </View>
              </View>}
          </View>
          <View style={styles.card}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              onPress={() => setIsContinueActive(!isContinueActive)}
              style={styles.card}>
              <View style={styles.cardHeader}>
                <View style={styles.cardStatus}>
                  <Icon
                    name="checkmark-outline"
                    size={12}
                    style={{ color: '#777E90' }}
                  />
                </View>
                <Text style={styles.cardTitleText}>
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
            {isContinueActive &&
            <View style={styles.inputContainer}>
              <Text style={styles.managerInputText}>What you wrote...</Text>
              <Text style={styles.managerInputContent}>{managerInput.do_more}</Text>
              <View style={styles.clarificationContainer}>
              <Text style={styles.managerInputText}>Clarification needed...</Text>
              <Text style={styles.managerInputContent}>{frontlinerInput.continue_clarification}</Text>
              </View>
              </View>}
          </View>
          <View style={styles.card}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              onPress={() =>  setIsDoLessActive(!isDoLessActive)}
              style={styles.card}>
              <View style={styles.cardHeader}>
                <View style={styles.cardStatus}>
                  <Icon
                    name="checkmark-outline"
                    size={12}
                    style={{ color: '#777E90' }}
                  />
                </View>
                <Text style={styles.cardTitleText}>Items to do less of...</Text>
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
            {isDoLessActive &&
            <View style={styles.inputContainer}>
              <Text style={styles.managerInputText}>What you wrote...</Text>
              <Text style={styles.managerInputContent}>{managerInput.do_less}</Text>
              <View style={styles.clarificationContainer}>
              <Text style={styles.managerInputText}>Clarification needed...</Text>
              <Text style={styles.managerInputContent}>{frontlinerInput.do_less_clarification}</Text>
              </View>
              </View>}
          </View>
          <View style={styles.card}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              onPress={() =>  setIsStopDoingActive(!isStopDoingActive)}
              style={styles.card}>
              <View style={styles.cardHeader}>
                <View style={styles.cardStatus}>
                  <Icon
                    name="checkmark-outline"
                    size={12}
                    style={{ color: '#777E90' }}
                  />
                </View>
                <Text style={styles.cardTitleText}>Items to stop doing</Text>
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
            {isStopDoingActive &&
            <View style={styles.inputContainer}>
              <Text style={styles.managerInputText}>What you wrote...</Text>
              <Text style={styles.managerInputContent}>{managerInput.stop_doing}</Text>
              <View style={styles.clarificationContainer}>
              <Text style={styles.managerInputText}>Clarification needed...</Text>
              <Text style={styles.managerInputContent}>{frontlinerInput.stop_doing_clarification}</Text>
              </View>
              </View>}
          </View>
          <View style={styles.card}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              onPress={() => setIsAdditionalNotesActive(!isAdditionalNotesActive)}
              style={styles.card}>
              <View style={styles.cardHeader}>
                <View style={styles.cardStatus}>
                  <Icon
                    name="checkmark-outline"
                    size={12}
                    style={{ color: '#777E90' }}
                  />
                </View>
                <Text style={styles.cardTitleText}>others</Text>
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
            {isAdditionalNotesActive &&
            <View style={styles.inputContainer}>
              <Text style={styles.managerInputText}>What you wrote...</Text>
              <Text style={styles.managerInputContent}>{managerInput.additional_notes}</Text>
              <View style={styles.clarificationContainer}>
              <Text style={styles.managerInputText}>Clarification needed...</Text>
              <Text style={styles.managerInputContent}>{frontlinerInput.additional_clarification}</Text>
              </View>
              </View>}
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 24, borderTopWidth: 0.3, borderTopColor: '#777E90',backgroundColor: '#353945', height: 100, justifyContent: 'center', alignItems: 'center', marginTop: 30,}}>
        <Button
          mode='contained'
          onPress={() => handleNavigation()}
          style={{  borderRadius: 12, height: 48, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', width: '100%'}}>
            <View style={{ paddingTop: 5, flexDirection: 'row', alignItems: 'center'}}>
            <Text
                  style={{
                    fontSize: 16,
                    lineHeight: 16,
                    marginRight: 4, 
                    fontWeight: '700',
                    color: '#353945',
                  }}>{`Next`}</Text>
                <Icon
                  // style={{ paddingTop: 2 }}
                  name={'arrow-forward-outline'}
                  size={16}
                  color={'#353945'}
                />
            </View>
          </Button>
      </View>
    </ScrollView>
  );
};

export default FeedbackOverview;

FeedbackOverview.propTypes = {};

FeedbackOverview.defaultProps = {};
