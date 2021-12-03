import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PreparingActions from 'app/store/feedback/preparingRedux';
import { getPreparingStep } from 'app/store/selectors';
import { Text, TextInput } from 'app/components';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const PreparingStep3 = props => {
  const { describeDiscuss } = labels.feedbackPreparing;
  const dispatch = useDispatch();
  const activeStep = useSelector(getPreparingStep);
  //TODO: useSeletor for stepData
  const [eventDescription, setEventDescription] = useState();
  const [actionDescription, setActionDescription] = useState();
  const [resultDescription, setResultDescription] = useState();
  const [isCompleted, setCompletion] = useState(false);

  const handleDescriptionText = (key, text) => {
    switch (key) {
      case 'event':
        setEventDescription(text);
        break;
      case 'action':
        setActionDescription(text);
        break;
      case 'result':
        setResultDescription(text);
    }
    if (eventDescription && actionDescription && resultDescription)
      setCompletion(true);
  };

  const handleBack = () => {
    dispatch(PreparingActions.setPrepActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    //TODO: add dispatch for saving data
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
          label={describeDiscuss.describeEventHint}
          placeholder={describeDiscuss.describeEventHint}
          value={eventDescription}
          onChangeText={text => handleDescriptionText('event', text)}
        />
        <View style={containerStyles.descriptionContainer}>
          <Text type="body1" style={containerStyles.stepDescriptionText}>
            {describeDiscuss.describeAction}
          </Text>
        </View>
        <TextInput
          type="flat"
          label={describeDiscuss.describeActionHint}
          placeholder={describeDiscuss.describeActionHint}
          value={actionDescription}
          onChangeText={text => handleDescriptionText('action', text)}
        />
        <View style={containerStyles.descriptionContainer}>
          <Text type="body1" style={containerStyles.stepDescriptionText}>
            {describeDiscuss.describeImpact}
          </Text>
        </View>
        <TextInput
          type="flat"
          label={describeDiscuss.describeResultHint}
          placeholder={describeDiscuss.describeImpactHint}
          value={resultDescription}
          onChangeText={text => handleDescriptionText('result', text)}
        />
      </KeyboardAvoidingView>
      <View style={containerStyles.btnContainer}>
        <Button
          mode="text"
          onPress={() => handleBack()}
          testID={'btn-preparingStep3-back'}>
          {labels.common.back}
        </Button>
        <Button
          disabled={!isCompleted}
          onPress={() => handleNext()}
          mode={isCompleted ? 'contained' : 'text'}
          testID={'btn-preparingStep3-next'}>
          {labels.common.next}
        </Button>
      </View>
    </ScrollView>
  );
};

export default PreparingStep3;

PreparingStep3.propTypes = {
  setPrepActiveStep: PropTypes.func,
  activeStep: PropTypes.number,
};

PreparingStep3.defaultProps = {
  setPrepActiveStep: () => {},
  activeStep: 1
};
