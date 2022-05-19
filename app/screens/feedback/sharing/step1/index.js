import React, { useState, useEffect } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SharingActions from 'app/store/feedback/SharingRedux';
import { Text, TextInput } from 'app/components';
import { getSharingStep, getSharingStep1Data } from 'app/store/selectors';
import { DeviceUtil } from 'app/utils';
import labels from 'app/locales/en';
import containerStyles from '../styles';
import styles from './styles';

const SharingStep1 = props => {
  const { describeDiscuss, checkIn } = labels.feedbackPreparing;
  const dispatch = useDispatch();
  const activeStep = useSelector(getSharingStep);
  const stepData = useSelector(getSharingStep1Data);
  const [details, setDetails] = useState({
    event: '',
    action: '',
    result: '',
  });

  useEffect(() => {
    if (stepData.data)
      setDetails({
        event: stepData.data.event,
        action: stepData.data.action,
        result: stepData.data.result,
      });
  }, [stepData]);

  const handleTextChange = (key, text) => {
    setDetails(prevState => ({
      ...prevState,
      [key]: text,
    }));
  };

  const handleNext = () => {
    dispatch(SharingActions.setSharingActiveStep(activeStep + 1));
    dispatch(SharingActions.setSharingData('step1', details));
  };

  return (
    <ScrollView 
      bounces={false}
    showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView
        behavior={DeviceUtil.isIos() ? 'padding' : null}
      >
        <View style={containerStyles.descriptionContainer}>
          <Text
            type="h6"
            style={containerStyles.stepTitleText}
            testID={'txt-sharingStep1-title'}>
            {checkIn.step}: {describeDiscuss.title}
          </Text>
          <Text
            type="body1"
            style={containerStyles.stepDescriptionText}
            testID={'txt-sharingStep1-describeEvent'}>
            {describeDiscuss.describeEvent}
          </Text>
        </View>
        <TextInput
          testID={'input-sharingStep1-event'}
          type="flat"
          label={describeDiscuss.describeEventHint}
          placeholder={describeDiscuss.describeEventHint}
          value={details.event}
          onChangeText={text => handleTextChange('event', text)}
        />

        <View style={containerStyles.descriptionContainer}>
          <Text
            type="body1"
            style={containerStyles.stepDescriptionText}
            testID={'txt-sharingStep1-describeAction'}>
            {describeDiscuss.describeAction}
          </Text>
          </View>
          <TextInput
            testID={'input-sharingStep1-action'}
            type="flat"
            label={describeDiscuss.describeActionHint}
            placeholder={describeDiscuss.describeActionHint}
            value={details.action}
            onChangeText={text => handleTextChange('action', text)}
          />
        
        <View style={containerStyles.descriptionContainer}>
          <Text
            type="body1"
            style={containerStyles.stepDescriptionText}
            testID={'txt-sharingStep1-describeResult'}>
            {describeDiscuss.describeImpact}
          </Text>
          </View>
          <TextInput
            testID={'input-sharingStep1-result'}
            type="flat"
            label={describeDiscuss.describeImpactHint}
            placeholder={describeDiscuss.describeImpactHint}
            value={details.result}
            onChangeText={text => handleTextChange('result', text)}
          />
      </KeyboardAvoidingView>
      <View style={styles.btnContainer}>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => handleNext()}
          testID={'btn-sharingStep1-next'}>
          {labels.common.next}
        </Button>
      </View>
    </ScrollView>
  );
};

export default SharingStep1;

SharingStep1.propTypes = {
  getSharingStep: PropTypes.number,
  getSharingStep1Data: PropTypes.object,
  setSharingData: PropTypes.func,
  setSharingActiveStep: PropTypes.func,
};

SharingStep1.defaultProps = {
  getSharingStep: 1,
  getSharingStep1Data: {},
  setSharingData: () => {},
  setSharingActiveStep: () => {},
};
