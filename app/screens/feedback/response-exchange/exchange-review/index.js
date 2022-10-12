import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { UserAvatar } from 'app/components';
import FeedbackActions from 'app/store/feedback/FeedbackRedux';
import { getFeedbackExchange, getFLResponseData,   getCurrentJourney,
  getUserName,
  getExchangeMaxStep,
  getExchangeActiveStep, } from 'app/store/selectors';
import { DeviceUtil } from 'app/utils';
import styles from './styles';

const FeedbackExchangeReview = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const maxStep = useSelector(getExchangeMaxStep);
  const activeStep = useSelector(getExchangeActiveStep);
  const feedbackData = useSelector(getCurrentJourney);
  const { managerInput, frontlinerInput } =
  feedbackData;
  const feedbackExchange = useSelector(getFeedbackExchange);
  const memberName = feedbackData.frontliner.split(' ');
  const memberInitials = `${memberName[0].charAt(0)}${memberName[1].charAt(
    0,
  )}`;
  const {
    event_clarification: eventClarification,
    impact_clarification: impactClarification,
    continue_clarification: continueClarification,
    do_less_clarification: doLessClarification,
    stop_doing_clarification: stopDoingClarification,
    additional_clarification: additionalClarification,
    support: supportClarification,
    // requires_face_to_face: requiresF2F,
  } = frontlinerInput;
  const [state, setState] = useState({
    eventResponse: feedbackExchange.event,
    impactResponse: feedbackExchange.impact,
    continueResponse: feedbackExchange.continue,
    doLessResponse: feedbackExchange.doLess,
    stopDoingResponse: feedbackExchange.stopDoing,
    additionalResponse: feedbackExchange.additionalNotes,
    supportResponse: feedbackExchange.support
  });

  const handleGoBack = () => {
    dispatch(FeedbackActions.setExchangeActiveStep(activeStep - 1));
  };

  const handleTextChange = (key, data) => {
    setState({
      ...state,
      [key]: data,
    });
  };

  const handleSendResponse = () => {
    const data = {
      id: feedbackData.id,
      ...state,
    };
    console.warn('data', data);
    dispatch(FeedbackActions.postFeedbackExchange(data));
  };

  console.log('state', state);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          accessibilityRole="button"
          style={styles.backButton}
          onPress={() => handleGoBack()}>
          <Icon name="chevron-back-outline" size={24} color={'#667080'} />
        </TouchableOpacity>
        <View style={styles.reviewHeaderContainer}>
          <Text style={styles.headerTitleText}>Review and Send</Text>
          <Text style={styles.headerSubtitleText}>
            Review your responses before sending it to your team member.
          </Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.avatarContainer}>
          <UserAvatar
            initials={memberInitials}
            name={`${memberName[0]} ${memberName[1]}`}
            position='Team Member'
            textStyle={{ color: '#667080'}}
          />
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.cardLabelText}>Response to the event observed...</Text>
          <Text style={styles.cardContentText}>
            {eventClarification === '' ? 'N/A' : eventClarification}
          </Text>
          {eventClarification !== '' && (
            <View style={styles.replyContainer}>
              <Text style={[styles.cardLabelText, styles.labelAlignEnd]}>
                You replied...
              </Text>
              <TextInput
                style={styles.inputContainer}
                value={state.eventResponse}
                onChangeText={text => handleTextChange('eventResponse', text)}
                textAlignVertical="top"
                multiline
              />
            </View>
          )}
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.cardLabelText}>
            Response to the impact...
          </Text>
          <Text style={styles.cardContentText}>
            {impactClarification === '' ? 'N/A' : impactClarification}
          </Text>
          {impactClarification !== '' && (
            <View style={styles.replyContainer}>
              <Text style={[styles.cardLabelText, styles.labelAlignEnd]}>
                You replied...
              </Text>
              <TextInput
                style={styles.inputContainer}
                value={state.impactResponse}
                onChangeText={text => handleTextChange('impactResponse', text)}
                textAlignVertical="top"
                multiline
              />
            </View>
          )}
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.cardLabelText}>
            Response to what to continue / do more of...
          </Text>
          <Text style={styles.cardContentText}>
            {continueClarification === '' ? 'N/A' : continueClarification}
          </Text>
          {continueClarification !== '' && (
            <View style={styles.replyContainer}>
              <Text style={[styles.cardLabelText, styles.labelAlignEnd]}>
                You replied...
              </Text>
              <TextInput
                style={styles.inputContainer}
                value={state.continueResponse}
                onChangeText={text => handleTextChange('continueResponse', text)}
                textAlignVertical="top"
                multiline
              />
            </View>
          )}
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.cardLabelText}>Response to what to do less of...</Text>
          <Text style={styles.cardContentText}>
            {doLessClarification === '' ? 'N/A' : doLessClarification}
          </Text>
          {doLessClarification !== '' && (
            <View style={styles.replyContainer}>
              <Text style={[styles.cardLabelText, styles.labelAlignEnd]}>
                You replied...
              </Text>
              <TextInput
                style={styles.inputContainer}
                value={state.doLessResponse}
                onChangeText={text => handleTextChange('doLessResponse', text)}
                textAlignVertical="top"
                multiline
              />
            </View>
          )}
        </View>
        {/* {requiresF2F && ( */}
          <View style={styles.cardContainer}>
            <Text style={styles.cardLabelText}>Response to what to stop doing...</Text>
            <Text style={styles.cardContentText}>
              {stopDoingClarification === '' ? 'N/A' : stopDoingClarification}
            </Text>
            {stopDoingClarification !== '' && (
              <View style={styles.replyContainer}>
                <Text style={[styles.cardLabelText, styles.labelAlignEnd]}>
                  You replied...
                </Text>
                <TextInput
                  style={styles.inputContainer}
                  value={state.stopDoingResponse}
                  onChangeText={text => handleTextChange('stopDoingResponse', text)}
                  textAlignVertical="top"
                  multiline
                />
              </View>
            )}
          </View>
        {/* )} */}
        <View style={styles.cardContainer}>
          <Text style={styles.cardLabelText}>Response to additional details</Text>
          <Text style={styles.cardContentText}>
            {additionalClarification === '' ? 'N/A' : additionalClarification}
          </Text>
          {additionalClarification !== '' && (
            <View style={styles.replyContainer}>
              <Text style={[styles.cardLabelText, styles.labelAlignEnd]}>
                You replied...
              </Text>
              <TextInput 
                style={styles.inputContainer}
                value={state.additionalResponse}
                onChangeText={text => handleTextChange('additionalResponse', text)}
                textAlignVertical='top'
                multiline
              />
            </View>
          )}
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.cardLabelText}>May I get help with...</Text>
          {supportClarification !== '' && (
          <View
                  // key={i}
                  style={{
                    marginTop: 16,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 4,
                  backgroundColor: '#667080',
                  marginRight: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                ><Icon name="checkmark-outline" size={16} color={'white'} /></View>
                  <Text style={[styles.cardContentText, { maxWidth: '85%'}]}>{supportClarification}</Text>
                </View>
                )}
          {/* {frontlinerResponse.support.map((item, i) => (
               
              ))} */}
          <View style={styles.replyContainer}>
            <Text style={[styles.cardLabelText, styles.labelAlignEnd]}>
              You replied...
            </Text>
            <TextInput 
              style={styles.inputContainer}
              value={state.supportResponse}
              onChangeText={text => handleTextChange('supportResponse', text)}
              textAlignVertical='top'
              multiline
            />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Button mode="contained" onPress={() => handleSendResponse()} style={styles.button}>
            Send Response
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default FeedbackExchangeReview;

FeedbackExchangeReview.propTypes = {};

FeedbackExchangeReview.defaultProps = {};
