import React, { useState, useEffect } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PreparingActions from 'app/store/feedback/PreparingRedux';
import { getPreparingStep, getPrepStep4BData } from 'app/store/selectors';
import { Text, ButtonSelection, TextInput } from 'app/components';
import { preparingSuggestions } from 'app/models/PreparingModel';
import { DeviceUtil } from 'app/utils';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const PreparingStep4B = () => {
  const { createActionPlan } = labels.feedbackPreparing;
  const dispatch = useDispatch();
  const activeStep = useSelector(getPreparingStep);
  const stepData = useSelector(getPrepStep4BData);
  const [evaluateOptions, setEvaluateOptions] = useState([]);
  const [additionalOptions, setAdditionalOptions] = useState('');

  useEffect(() => {
    if (stepData.data)
      setEvaluateOptions(stepData.data.evaluateOptions);
    setAdditionalOptions(stepData.data.additionalOptions);
  }, [stepData]);

  const setData = () => {
    dispatch(
      PreparingActions.setPreparingData('step4B', {
        evaluateOptions,
        additionalOptions,
      }),
    );
  }

  const handleBack = () => {
    setData();
    dispatch(PreparingActions.setPrepActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    setData();
    dispatch(PreparingActions.setPrepActiveStep(activeStep + 1));
  };

  const handleAdditionalSuggestionText = text => {
    setAdditionalOptions(text);
  };

  const checkSelectedSuggestion = item => {
    return evaluateOptions.some(suggestion => suggestion === item.title);
  };

  const handleSelectedSuggestion = item => {
    let newList = evaluateOptions;
    if (checkSelectedSuggestion(item))
      newList = newList.filter(newSuggestion => newSuggestion !== item.title);
    else newList = [...newList, item.title];
    setEvaluateOptions(newList);
  };

  return (
    <KeyboardAvoidingView
        behavior={DeviceUtil.isIos() ? 'padding' : null}
      >
    <ScrollView 
      contentContainerStyle={{ paddingBottom: 70}}
      showsVerticalScrollIndicator={false}>
        <View style={containerStyles.descriptionContainer}>
          <Text
            type="h6"
            style={containerStyles.stepTitleText}
            testID={'txt-preparingStep4B-title'}>
            {createActionPlan.step}: {createActionPlan.title}
          </Text>
          <Text
            type="body1"
            style={containerStyles.stepDescriptionText}
            testID={'txt-preparingStep4B-content'}>
            {createActionPlan.getSuggestions}
          </Text>
        </View>
        {preparingSuggestions.map((item, i) => (
          <ButtonSelection
            key={item.id}
            testID={'btn-preparingStep4B-action'}
            type={'Check'}
            title={item.title}
            onPress={() => handleSelectedSuggestion(item)}
            selected={checkSelectedSuggestion(item)}
          />
        ))}
        <TextInput
          label={labels.common.inputHint}
          placeholder={labels.common.inputHint}
          style={{ marginTop: 15 }}
          testID={'input-preparingStep4B-additional'}
          onChangeText={text => handleAdditionalSuggestionText(text)}
          value={additionalOptions}
          description={labels.common.ownQuestionDesc}
        />
     
      <View style={containerStyles.btnContainer}>
        <Button
          mode="text"
          onPress={() => handleBack()}
          testID={'btn-preparingStep4B-back'}>
          {labels.common.back}
        </Button>
        <Button
          onPress={() => handleNext()}
          mode={'contained'}
          testID={'btn-preparingStep4B-next'}>
          {labels.common.next}
        </Button>
      </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PreparingStep4B;

PreparingStep4B.propTypes = {
  setPrepActiveStep: PropTypes.func,
  setPreparingData: PropTypes.func,
  activeStep: PropTypes.number,
  stepData: PropTypes.object,
};

PreparingStep4B.defaultProps = {
  setPrepActiveStep: () => {},
  setPreparingData: () => {},
  activeStep: 1,
  stepData: {},
};
