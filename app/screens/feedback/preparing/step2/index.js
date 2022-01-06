import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PreparingActions from 'app/store/feedback/preparingRedux';
import { getPreparingStep, getPrepStep2Data } from 'app/store/selectors';
import PropTypes from 'prop-types';
import { Text, ButtonSelection, TextInput } from 'app/components';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const PreparingStep2 = props => {
  const dispatch = useDispatch();
  const { statePurpose } = labels.feedbackPreparing;
  const activeStep = useSelector(getPreparingStep);
  const stepData = useSelector(getPrepStep2Data);
  const [discussionPurpose, setDiscussionPurpose] = useState();
  const [isCompleted, setCompletion] = useState(false);
  const [additionalPurpose, setAdditionalPurpose] = useState();

  useEffect(() => {
    if (stepData.data) handleDiscussionPurpose(stepData.data);
  }, [stepData]);

  const handleDiscussionPurpose = text => {
    setDiscussionPurpose(text);
    setCompletion(true);
  };

  const handleAdditionalPurpose = text => {
    setAdditionalPurpose(text);
    // if(additionalPurpose !== '') setCompletion(true)
  };

  const handleBack = () => {
    dispatch(PreparingActions.setPrepActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    if (additionalPurpose !== '')
      dispatch(PreparingActions.setPreparingData('step2', additionalPurpose));
    else
      dispatch(PreparingActions.setPreparingData('step2', discussionPurpose));
    dispatch(PreparingActions.setPrepActiveStep(activeStep + 1));
  };

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
          onPress={() => handleDiscussionPurpose(statePurpose.statePurposeBtn)}
          selected={discussionPurpose === statePurpose.statePurposeBtn}
          style={{ height: 120 }}
        />
        <TextInput
          label={labels.common.inputHint}
          placeholder={labels.common.inputHint}
          value={additionalPurpose}
          onChangeText={text => handleAdditionalPurpose(text)}
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
          // disabled={!isCompleted}
          onPress={() => handleNext()}
          mode={'contained'}
          testID={'btn-preparingStep2-next'}>
          {labels.common.next}
        </Button>
      </View>
    </View>
  );
};

export default PreparingStep2;

PreparingStep2.propTypes = {
  setPrepActiveStep: PropTypes.func,
  setPreparingData: PropTypes.func,
  activeStep: PropTypes.number,
  stepData: PropTypes.object,
};

PreparingStep2.defaultProps = {
  setPrepActiveStep: () => {},
  setPreparingData: () => {},
  activeStep: 1,
  stepData: {},
};
