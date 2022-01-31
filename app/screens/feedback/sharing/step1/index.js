import React, { useState, useEffect } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, TextInput } from 'app/components';
import { getSharingStep } from 'app/store/selectors';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const SharingStep1 = props => {
  const { describeDiscuss } = labels.feedbackPreparing;
  const dispatch = useDispatch();
  // const activeStep = useSelector(getSharingStep);
  // const stepData = useSelector(getSharingStep1Data);
  const [details, setDetails] = useState({
    event: '',
    action: '',
    result: '',
  });

  const handleTextChange = (key, text) => {
    setDetails(prevState => ({
      ...prevState,
      [key]: text,
    }));
  };

  const handleBack = () => {
    // dispatch(SharingActions.setSharingActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    // dispatch(SharingActions.setSharingActiveStep(activeStep + 1));
    // dispatch(SharingActions.setSharingData('step1', details));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        <View style={containerStyles.descriptionContainer}>
          <Text
            type="h6"
            style={containerStyles.stepTitleText}
            testID={'txt-sharingStep1-title'}>
            {describeDiscuss.step}: {describeDiscuss.title}
          </Text>
          <Text
            type="body1"
            style={containerStyles.stepDescriptionText}
            testID={'txt-sharingStep1-describeEvent'}>
            {describeDiscuss.describeEvent}
          </Text>
          <TextInput
            testID={'input-sharingStep1-event'}
            type="flat"
            label={describeDiscuss.describeEventHint}
            placeholder={describeDiscuss.describeEventHint}
            value={details.event}
            onChangeText={text => handleTextChange('event', text)}
          />
        </View>
        <View style={containerStyles.descriptionContainer}>
          <Text
            type="body1"
            style={containerStyles.stepDescriptionText}
            testID={'txt-sharingStep1-describeAction'}>
            {describeDiscuss.describeAction}
          </Text>
          <TextInput
            testID={'input-sharingStep1-action'}
            type="flat"
            label={describeDiscuss.describeActionHint}
            placeholder={describeDiscuss.describeActionHint}
            value={details.action}
            onChangeText={text => handleTextChange('action', text)}
          />
        </View>
        <View style={containerStyles.descriptionContainer}>
          <Text
            type="body1"
            style={containerStyles.stepDescriptionText}
            testID={'txt-sharingStep1-describeResult'}>
            {describeDiscuss.describeImpact}
          </Text>
          <TextInput
            testID={'input-sharingStep1-result'}
            type="flat"
            label={describeDiscuss.describeImpactHint}
            placeholder={describeDiscuss.describeImpactHint}
            value={details.result}
            onChangeText={text => handleTextChange('result', text)}
          />
        </View>
      </KeyboardAvoidingView>
      <View style={containerStyles.btnContainer}>
        <Button
          mode="text"
          onPress={() => handleBack()}
          testID={'btn-sharingStep1-back'}>
          {labels.common.back}
        </Button>
        <Button
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

SharingStep1.propTypes = {};

SharingStep1.defaultProps = {};
