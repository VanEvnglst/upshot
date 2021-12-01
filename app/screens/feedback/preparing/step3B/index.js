import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PreparingActions from 'app/store/feedback/preparingRedux';
import { getPreparingStep } from 'app/store/selectors';
import { Text, ButtonSelection } from 'app/components';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const PreparingStep3B = () => {
  const { describeDiscuss } = labels.feedbackPreparing;
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
            {describeDiscuss.step}: {describeDiscuss.title}
          </Text>
          <Text type="body1" style={containerStyles.stepDescriptionText}>
            {describeDiscuss.observationQuestion}
          </Text>
        </View>
        <ButtonSelection
          type={'Check'}
          title={describeDiscuss.observeOption1}
        />
        <ButtonSelection
          type={'Check'}
          title={describeDiscuss.observeOption2}
        />
        <TextInput placeholder={labels.common.somethingElse} />
      </KeyboardAvoidingView>
      <View style={containerStyles.btnContainer}>
      <Button
          mode='text'
          onPress={() => handleBack()}
          testID={'btn-preparingStep3B-back'}
        >
          {labels.common.back}
        </Button>
        <Button
          onPress={() => handleNext()}
          mode={isCompleted ? 'contained' : 'text'}
          testID={'btn-preparingStep3B-next'}
        >
          {labels.common.next}
        </Button>
      </View>
    </ScrollView>
  );
};

export default PreparingStep3B;

PreparingStep3B.propTypes= {};

PreparingStep3B.defaultProps = {};