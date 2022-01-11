import React, { useState, useEffect } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import PreparingActions from 'app/store/feedback/preparingRedux';
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
  const [isCompleted, setCompletion] = useState(false);

  const handleText = text => {
    setCheckInValue(text);
    // setTimeout(() => {
    //   if (checkInValue !== '') setCompletion(true);
    //   else setCompletion(false);
    // }, 300);
  };

  useEffect(() => {
    if (stepData.data) handleText(stepData.data);
  }, [stepData]);

  const handleNext = () => {
    // if (checkInValue === '') setCompletion(false);
    dispatch(PreparingActions.setPreparingData('step1', checkInValue));
    // else 
    dispatch(PreparingActions.setPrepActiveStep(activeStep + 1));
  };

  return (
    // 
    <View>
      <ScrollView 
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
          <View style={{ marginBottom: 30}}>
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
        {/* <KeyboardAvoidingView>
          
         
        </KeyboardAvoidingView> */}

        <View style={styles.btnContainer}>
          <Button
            style={styles.button}
            // disabled={!isCompleted}
            onPress={() => handleNext()}
            mode={'contained'}
            testID={'btn-preparingStep1-next'}>
            {labels.common.next}
          </Button>
        </View>
        </ScrollView>
    </View>
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
