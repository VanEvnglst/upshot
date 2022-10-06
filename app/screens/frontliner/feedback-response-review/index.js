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
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import FrontlinerFeedbackActions from 'app/store/frontliner/FLFeedbackRedux';
import { getFLFeedbackData, getFLResponseData } from 'app/store/selectors';
import styles from './styles';

const FrontlinerResponseReview = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const maxStep = useSelector(state => state.frontlinerFeedback.get('maxStep'));
  const activeStep = useSelector(state =>
    state.frontlinerFeedback.get('activeStep'),
  );
  const frontlinerFeedback = useSelector(getFLFeedbackData);
  const frontlinerResponse = useSelector(getFLResponseData);
  const managerName = frontlinerFeedback.em_name.split(' ');
  const managerInitials = `${managerName[0].charAt(0)}${managerName[1].charAt(
    0,
  )}`;
  const {
    employee_do: employeeDo,
    employee_impact: employeeImpact,
    employee_do_more: employeeContinue,
    employee_do_less: employeeDoLess,
    employee_stop_doing: employeeStopDoing,
    additional_notes: additionalNotes,
    requires_face_to_face: requiresF2F,
  } = frontlinerFeedback;
  const [state, setState] = useState({
    eventClarification: frontlinerResponse.event,
    impactClarification: frontlinerResponse.impact,
    continueClarification: frontlinerResponse.continue,
    doLessClarification: frontlinerResponse.doLess,
    stopDoingClarification: frontlinerResponse.stopDoing,
    additionalClarification: frontlinerResponse.additionalNotes,
    supportClarification: frontlinerResponse.support
  });

  const handleGoBack = () => {
    dispatch(FrontlinerFeedbackActions.setResponseActiveStep(activeStep - 1));
  };

  const handleTextChange = (key, data) => {
    setState({
      ...state,
      [key]: data,
    });
  };

  const handleSendResponse = () => {
    const data = {
      id: frontlinerFeedback.id,
      ...state,
    };
    console.warn('data', data);
    dispatch(FrontlinerFeedbackActions.postFLFeedbackResponse(data));
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
            Review your responses before sending it to your manager.
          </Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.avatarContainer}>
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
            <Text style={styles.managerNameText}>
              {frontlinerFeedback.em_name}
            </Text>
            <Text style={styles.roleText}>Manager</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.cardLabelText}>The event observed...</Text>
          <Text style={styles.cardContentText}>
            {employeeDo === '' ? 'N/A' : employeeDo}
          </Text>
          {employeeDo !== '' && (
            <View style={styles.replyContainer}>
              <Text style={[styles.cardLabelText, styles.labelAlignEnd]}>
                You replied...
              </Text>
              <TextInput
                style={styles.inputContainer}
                value={state.eventClarification}
                onChangeText={text => handleTextChange('eventClarification', text)}
                textAlignVertical="top"
                multiline
              />
            </View>
          )}
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.cardLabelText}>
            The impact to the business / team...
          </Text>
          <Text style={styles.cardContentText}>
            {employeeImpact === '' ? 'N/A' : employeeImpact}
          </Text>
          {employeeImpact !== '' && (
            <View style={styles.replyContainer}>
              <Text style={[styles.cardLabelText, styles.labelAlignEnd]}>
                You replied...
              </Text>
              <TextInput
                style={styles.inputContainer}
                onChangeText={text => handleTextChange('impactClarification', text)}
                textAlignVertical="top"
                multiline
              />
            </View>
          )}
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.cardLabelText}>
            What to continue / do more of...
          </Text>
          <Text style={styles.cardContentText}>
            {employeeContinue === '' ? 'N/A' : employeeContinue}
          </Text>
          {employeeContinue !== '' && (
            <View style={styles.replyContainer}>
              <Text style={[styles.cardLabelText, styles.labelAlignEnd]}>
                What you need clarified...
              </Text>
              <TextInput
                style={styles.inputContainer}
                onChangeText={text => handleTextChange('continueClarification', text)}
                textAlignVertical="top"
                multiline
              />
            </View>
          )}
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.cardLabelText}>What to do less of...</Text>
          <Text style={styles.cardContentText}>
            {employeeDoLess === '' ? 'N/A' : employeeDoLess}
          </Text>
          {employeeDoLess !== '' && (
            <View style={styles.replyContainer}>
              <Text style={[styles.cardLabelText, styles.labelAlignEnd]}>
                What you need clarified...
              </Text>
              <TextInput
                style={styles.inputContainer}
                onChangeText={text => handleTextChange('doLessClarification', text)}
                textAlignVertical="top"
                multiline
              />
            </View>
          )}
        </View>
        {requiresF2F && (
          <View style={styles.cardContainer}>
            <Text style={styles.cardLabelText}>What to stop doing...</Text>
            <Text style={styles.cardContentText}>
              {employeeStopDoing === '' ? 'N/A' : employeeStopDoing}
            </Text>
            {employeeStopDoing !== '' && (
              <View style={styles.replyContainer}>
                <Text style={[styles.cardLabelText, styles.labelAlignEnd]}>
                  What you need clarified...
                </Text>
                <TextInput
                  style={styles.inputContainer}
                  onChangeText={text => handleTextChange('stopDoingClarification', text)}
                  textAlignVertical="top"
                  multiline
                />
              </View>
            )}
          </View>
        )}
        <View style={styles.cardContainer}>
          <Text style={styles.cardLabelText}>Additional Details</Text>
          <Text style={styles.cardContentText}>
            {additionalNotes === '' ? 'N/A' : additionalNotes}
          </Text>
          {additionalNotes !== '' && (
            <View style={styles.replyContainer}>
              <Text style={[styles.cardLabelText, styles.labelAlignEnd]}>
                You replied...
              </Text>
              <TextInput 
                style={styles.inputContainer}
                onChangeText={text => handleTextChange('additionalClarification', text)}
                textAlignVertical='top'
                multiline
              />
            </View>
          )}
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.cardLabelText}>How to support you by...</Text>
          <Text style={styles.cardContentText}>How can I support you to be better?</Text>
          <View style={styles.replyContainer}>
            <Text style={[styles.cardLabelText, styles.labelAlignEnd]}>
              What you need...
            </Text>
            <View style={styles.inputContainer}>
              {frontlinerResponse.support.map((item, i) => (
                <View
                  key={i}
                  style={{
                    marginTop: 16,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 4,
                  backgroundColor: '#667080',
                  marginRight: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                ><Icon name="checkmark-outline" size={20} color={'white'} /></View>
                  <Text style={[styles.cardContentText, { maxWidth: '85%'}]}>{item.suggestion}</Text>
                </View>
              ))}
            </View>
            {/* <TextInput style={styles.inputContainer} /> */}
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

export default FrontlinerResponseReview;

FrontlinerResponseReview.propTypes = {};

FrontlinerResponseReview.defaultProps = {};
