import React, { useState, useEffect } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getSharingStep,
  getSharingStep2Data,
  getStaffName,
} from 'app/store/selectors';
import SharingActions from 'app/store/feedback/SharingRedux';
import { Text, TextInput } from 'app/components';
import { DeviceUtil } from 'app/utils';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const SharingStep2 = () => {
  const { writeMessage } = labels.feedbackSharing;
  const dispatch = useDispatch();
  const activeStep = useSelector(getSharingStep);
  const stepData = useSelector(getSharingStep2Data);
  const staffName = useSelector(getStaffName);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (stepData.data) setMessage(stepData.data);
  }, [stepData]);

  const handleTextChange = text => {
    setMessage(text);
  };

  const handleBack = () => {
    dispatch(SharingActions.setSharingActiveStep(activeStep - 1));
    dispatch(SharingActions.setSharingData('step2', message));
  };

  const handleNext = () => {
    dispatch(SharingActions.setSharingActiveStep(activeStep + 1));
    dispatch(SharingActions.setSharingData('step2', message));
  };

  return (
    <KeyboardAvoidingView 
      behavior={DeviceUtil.isIos() ? "padding" : null}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={[containerStyles.descriptionContainer]}>
          <Text
            type="h6"
            style={containerStyles.stepTitleText}
            testID={'txt-sharingStep2-title'}>
            {writeMessage.step}: {writeMessage.title}
          </Text>
          <Text
            type="body1"
            style={containerStyles.stepDescriptionText}
            testID={'txt-sharingStep2-description'}>
            {writeMessage.content} {staffName.firstName}?
          </Text>
        </View>
        <View style={{ marginBottom: 30 }}>
          <TextInput
            placeholder={'Hi'}
            value={message}
            onChangeText={text => handleTextChange(text)}
            multiline
            numberOfLines={15}
            theme={{
              fonts: {
                regular: {
                  fontFamily: 'Raleway-Regular',
                },
              },
            }}
            testID={'input-sharingStep2-message'}
          />
        </View>
        <View style={[containerStyles.btnContainer]}>
          <Button
            onPress={() => handleBack()}
            mode="text"
            testID={'btn-sharingStep2-back'}>
            {labels.common.back}
          </Button>
          <Button
            onPress={() => handleNext()}
            mode="contained"
            testID={'btn-sharingStep2-next'}>
            {labels.common.next}
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SharingStep2;

SharingStep2.propTypes = {
  getSharingStep: PropTypes.number,
  getSharingStep2Data: PropTypes.object,
  getStaffName: PropTypes.object,
  setSharingActiveStep: PropTypes.func,
  setSharingData: PropTypes.func,
};

SharingStep2.defaultProps = {
  getSharingStep: 1,
  getSharingStep2Data: {},
  getStaffName: {},
  setSharingActiveStep: () => {},
  setSharingData: () => {},
};
