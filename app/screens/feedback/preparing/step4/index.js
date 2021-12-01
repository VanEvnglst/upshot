import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PreparingActions from 'app/store/feedback/preparingRedux';
import { getPreparingStep } from 'app/store/selectors';
import { Text, ButtonSelection } from 'app/components';
import containerStyles from '../styles';
import labels from 'app/locales/en';

const PreparingStep4 = props => {
  const { createActionPlan } = labels.feedbackPreparing;
  const dispatch = useDispatch();
  const activeStep = useSelector(getPreparingStep);
  const [isCompleted, setCompletion] = useState(false);

  const handleBack = () => {
    dispatch(PreparingActions.setPrepActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    dispatch(PreparingActions.setPrepActiveStep(activeStep + 1));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        <View style={containerStyles.descriptionContainer}>
          <Text type="h6" style={containerStyles.stepTitleText}>
            {createActionPlan.step}: {createActionPlan.title}
          </Text>
          <Text type="body1" style={containerStyles.stepDescriptionText}>
            {createActionPlan.content}
          </Text>
        </View>
        <ButtonSelection
          type={'Check'}
          title={createActionPlan.brainstormOption1}
        />
        <ButtonSelection
          type={'Check'}
          title={createActionPlan.brainstormOption2}
        />
        <TextInput placeholder={labels.common.somethingElse} />
      </KeyboardAvoidingView>
      <View style={containerStyles.btnContainer}>
        <Button
          mode="text"
          onPress={() => handleBack()}
          testID={'btn-preparingStep3B-back'}>
          {labels.common.back}
        </Button>
        <Button
          onPress={() => handleNext()}
          mode={isCompleted ? 'contained' : 'text'}
          testID={'btn-preparingStep3B-next'}>
          {labels.common.next}
        </Button>
      </View>
    </ScrollView>
  );
};

export default PreparingStep4;

PreparingStep4.propTypes = {};

PreparingStep4.defaultProps = {};
