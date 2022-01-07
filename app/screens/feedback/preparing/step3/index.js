import React, { useState, useEffect } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PreparingActions from 'app/store/feedback/preparingRedux';
import { getPreparingStep, getPrepStep3Data } from 'app/store/selectors';
import { Text, TextInput } from 'app/components';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const PreparingStep3 = props => {
  const { describeDiscuss } = labels.feedbackPreparing;
  const dispatch = useDispatch();
  const activeStep = useSelector(getPreparingStep);
  const stepData = useSelector(getPrepStep3Data);
  const [details, setDetails] = useState({
    event: '',
    action: '',
    result: '',
  });
  const [event, setEvent] = useState();
  const [action, setAction] = useState();
  const [result, setResult] = useState();
  const [isCompleted, setCompletion] = useState(false);

  useEffect(() => {
    if (stepData.data) handleDescriptionText(stepData.data);
    //TODO: fix function call
  }, [stepData]);

  const handleDescriptionText = (key, text) => {
    setDetails(prevState => ({
      ...prevState,
      [key]: text,
    }));
    // setTimeout(() => {
    //   console.log(details);
    // }, 200)
    // if (details.event && details.action && details.result)
    //   setCompletion(true);
  };

  const handleBack = () => {
    dispatch(PreparingActions.setPrepActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    dispatch(PreparingActions.setPreparingData('step3', details));
    dispatch(PreparingActions.setPrepActiveStep(activeStep + 1));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        <View style={containerStyles.descriptionContainer}>
          <Text
            type="h6"
            style={containerStyles.stepTitleText}
            testID={'txt-preparingStep3-title'}>
            {describeDiscuss.step}: {describeDiscuss.title}
          </Text>
          <Text
            type="body1"
            style={containerStyles.stepDescriptionText}
            testID={'txt-preparingStep3-describeEvent'}>
            {describeDiscuss.describeEvent}
          </Text>
        </View>
        <TextInput
          testID={'input-preparingStep3-eventDesc'}
          type="flat"
          label={describeDiscuss.describeEventHint}
          placeholder={describeDiscuss.describeEventHint}
          value={details.event}
          onChangeText={text => handleDescriptionText('event', text)}
        />
        <View style={containerStyles.descriptionContainer}>
          <Text
            type="body1"
            style={containerStyles.stepDescriptionText}
            testID={'txt-preparingStep3-describeAction'}>
            {describeDiscuss.describeAction}
          </Text>
        </View>
        <TextInput
          testID={'input-preparingStep3-actionDesc'}
          type="flat"
          label={describeDiscuss.describeActionHint}
          placeholder={describeDiscuss.describeActionHint}
          value={details.action}
          onChangeText={text => handleDescriptionText('action', text)}
        />
        <View style={containerStyles.descriptionContainer}>
          <Text
            type="body1"
            style={containerStyles.stepDescriptionText}
            testID={'txt-preparingStep3-describeResult'}>
            {describeDiscuss.describeImpact}
          </Text>
        </View>
        <TextInput
          testID={'input-preparingStep3-resultDesc'}
          type="flat"
          label={describeDiscuss.describeImpactHint}
          placeholder={describeDiscuss.describeImpactHint}
          value={details.result}
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
          // disabled={!isCompleted}
          onPress={() => handleNext()}
          mode={'contained'}
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
  setPreparingData: PropTypes.func,
  activeStep: PropTypes.number,
  stepData: PropTypes.object,
};

PreparingStep3.defaultProps = {
  setPrepActiveStep: () => {},
  setPreparingData: () => {},
  activeStep: 1,
  stepData: {},
};
