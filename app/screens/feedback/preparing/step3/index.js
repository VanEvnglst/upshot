import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PreparingActions from 'app/store/feedback/preparingRedux';
import { getPreparingStep } from 'app/store/selectors';  
import { Text } from 'app/components';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const PreparingStep3 = props => {
  const { describeDiscuss } = labels.feedbackPreparing;
  const dispatch = useDispatch();
  const activeStep = useSelector(getPreparingStep);
  const [isEventFocused, setEventFocus] = useState(false);
  const [isActionFocused, setActionFocus] = useState(false);
  const [isResultFocused, setResultFocus] = useState(false);
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
            {describeDiscuss.describeEvent}
          </Text>
        </View>
        <TextInput
          type="flat"
          label={isEventFocused ? describeDiscuss.describeEventHint : null}
          placeholder={
            isEventFocused ? null : describeDiscuss.describeEventHint
          }
          onBlur={() => setEventFocus(false)}
          onFocus={() => setEventFocus(true)}
        />
        <View style={containerStyles.descriptionContainer}>
          <Text type="body1" style={containerStyles.stepDescriptionText}>
            {describeDiscuss.describeAction}
          </Text>
        </View>
        <TextInput
          type="flat"
          label={isActionFocused ? describeDiscuss.describeActionHint : null}
          placeholder={
            isActionFocused ? null : describeDiscuss.describeActionHint
          }
          onBlur={() => setActionFocus(false)}
          onFocus={() => setActionFocus(true)}
        />
        <View style={containerStyles.descriptionContainer}>
          <Text type="body1" style={containerStyles.stepDescriptionText}>
            {describeDiscuss.describeImpact}
          </Text>
        </View>
        <TextInput
          type="flat"
          label={isResultFocused ? describeDiscuss.describeResultHint : null}
          placeholder={
            isResultFocused ? null : describeDiscuss.describeImpactHint
          }
          onBlur={() => setResultFocus(false)}
          onFocus={() => setResultFocus(true)}
        />
      </KeyboardAvoidingView>
      <View style={containerStyles.btnContainer}>
        <Button
          mode='text'
          onPress={() => handleBack()}
          testID={'btn-preparingStep3-back'}
        >
          {labels.common.back}
        </Button>
        <Button
          onPress={() => handleNext()}
          mode={isCompleted ? 'contained' : 'text'}
          testID={'btn-preparingStep3-next'}
        >
          {labels.common.next}
        </Button>
      </View>
    </ScrollView>
  );
};

export default PreparingStep3;

PreparingStep3.propTypes = {};

PreparingStep3.defaultProps = {};