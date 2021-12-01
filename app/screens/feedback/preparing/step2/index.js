import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PreparingActions from 'app/store/feedback/preparingRedux';
import { getPreparingStep } from 'app/store/selectors';
import PropTypes from 'prop-types';
import { Text, ButtonSelection } from 'app/components';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const PreparingStep2 = props => {
  const dispatch = useDispatch();
  const { statePurpose } = labels.feedbackPreparing;
  const activeStep = useSelector(getPreparingStep);
  const [step2Data, setStep2Data] = useState();
  const [isFocused, setFocus] = useState(false);
  const [isCompleted, setCompletion] = useState(false);

  const handleBack = () => {
    dispatch(PreparingActions.setPrepActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    dispatch(PreparingActions.setPrepActiveStep(activeStep + 1));
  }


  return (
    <View style={containerStyles.container}>
      <KeyboardAvoidingView>
        <View style={containerStyles.descriptionContainer}>
          <Text
            type="h6"
            testID={'txt-preparingStep2-label'}
            style={containerStyles.stepTitleText}>
            {statePurpose.step}: {statePurpose.title}
          </Text>
          <Text
            type="body1"
            testID={'txt-preparingStep2-description'}
            style={containerStyles.stepDescriptionText}>
            {statePurpose.content}
          </Text>
        </View>
        <ButtonSelection
          type={'Radio'}
          title={statePurpose.statePurposeBtn}
          onPress={() => console.log('press')}
          selected={false}
        />
        <TextInput
          value={step2Data}
          onChangeText={text => setStep2Data(text)}
          placeholder={labels.common.inputHint}
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          style={{ marginTop: 10 }}
        />
      </KeyboardAvoidingView>
      <View style={containerStyles.btnContainer}>
        <Button
          mode="text"
          onPress={() => handleBack()}
          testID={'btn-preparingStep2-back'}>
          {labels.common.back}
        </Button>
        <Button
          //disabled={!isCompleted}
          onPress={() => handleNext()}
          mode={isCompleted ? 'contained' : 'text'}
          testID={'btn-preparingStep2-next'}>
          {labels.common.next}
        </Button>
      </View>
    </View>
  );
};

export default PreparingStep2;

PreparingStep2.propTypes = {};

PreparingStep2.defaultProps = {};
