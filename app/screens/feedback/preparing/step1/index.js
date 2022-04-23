import React, { useState, useEffect } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import PreparingActions from 'app/store/feedback/PreparingRedux';
import { getPreparingStep, getPrepStep1Data } from 'app/store/selectors';
import { Text, TextInput } from 'app/components';
import labels from 'app/locales/en';
import containerStyles from '../styles';
import styles from './styles';

const PreparingStep1 = () => {
  const { checkIn } = labels.feedbackPreparing;
  const dispatch = useDispatch();
  const activeStep = useSelector(getPreparingStep);
  const stepData = useSelector(getPrepStep1Data);
  const [checkInValue, setCheckInValue] = useState('');

  useEffect(() => {
    if (stepData.data) handleText(stepData.data);
  }, [stepData]);

  const handleText = text => {
    setCheckInValue(text);
  };

  const handleNext = () => {
    dispatch(PreparingActions.setPreparingData('step1', checkInValue));
    dispatch(PreparingActions.setPrepActiveStep(activeStep + 1));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <ScrollView
        style={{marginBottom:  Platform.OS === 'ios' ? 130 : 30 }}
        showsVerticalScrollIndicator={false}>
      <View style={containerStyles.descriptionContainer}>
            <Text
              type="h6"
              style={containerStyles.stepTitleText}
              testID={'txt-preparingStep1-title'}>
              {checkIn.step}: {checkIn.title}
            </Text>
            <Text
              type="body1"
              style={containerStyles.stepDescriptionText}
              testID={'txt-preparingStep1-description'}>
              {checkIn.content}
            </Text>
          </View>
          <View style={containerStyles.multilineTextInput}>
            <TextInput
              label={checkIn.checkInHint}
              placeholder={checkIn.checkInHint}
              value={checkInValue}
              onChangeText={text => handleText(text)}
              multiline
              numberOfLines={10}
              theme={{ fonts: { regular: { fontFamily: 'Raleway-Regular' } } }}
              testID={'input-preparingStep1-checkIn'}
            />
          </View>
        <View style={styles.btnContainer}>
          <Button
            style={styles.button}
            onPress={() => handleNext()}
            mode={'contained'}
            testID={'btn-preparingStep1-next'}>
            {labels.common.next}
          </Button>
        </View>
        </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PreparingStep1;

PreparingStep1.propTypes = {
  setPrepActiveStep: PropTypes.func,
  setPreparingData: PropTypes.func,
  activeStep: PropTypes.number,
  stepData: PropTypes.object,
};

PreparingStep1.defaultProps = {
  setPrepActiveStep: () => {},
  setPreparingData: () => {},
  activeStep: 1,
  stepData: {},
};
