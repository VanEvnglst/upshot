import React, { useState, useEffect } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PreparingActions from 'app/store/feedback/PreparingRedux';
import { getPreparingStep, getPrepStep4BData } from 'app/store/selectors';
import { Text, ButtonSelection, TextInput } from 'app/components';
import { preparingSuggestions } from 'app/models/PreparingModel';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const PreparingStep4B = () => {
  const { createActionPlan } = labels.feedbackPreparing;
  const dispatch = useDispatch();
  const activeStep = useSelector(getPreparingStep);
  const stepData = useSelector(getPrepStep4BData);
  const [suggestionList, setSuggestionList] = useState([]);
  const [additionalSuggestion, setAdditionalSuggestion] = useState('');
  const [isCompleted, setCompletion] = useState(false);

  useEffect(() => {
    TODO: if (stepData.data) handleSelectedSuggestion(stepData.data);
  }, [stepData]);

  const handleBack = () => {
    dispatch(PreparingActions.setPrepActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    dispatch(
      PreparingActions.setPreparingData('step4B', {
        suggestionList,
        additionalSuggestion,
      }),
    );
    dispatch(PreparingActions.setPrepActiveStep(activeStep + 1));
  };

  const handleAdditionalSuggestionText = text => {
    setAdditionalSuggestion(text);
  };

  const checkSelectedSuggestion = item => {
    return suggestionList.some(suggestion => suggestion === item.title);
  };

  const handleSelectedSuggestion = item => {
    let newList = suggestionList;
    if (checkSelectedSuggestion(item))
      newList = newList.filter(newSuggestion => newSuggestion.id !== item.id);
    else newList = [...newList, item.title];
    setSuggestionList(newList);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
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
          value={additionalSuggestion}
        />
      </KeyboardAvoidingView>
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
