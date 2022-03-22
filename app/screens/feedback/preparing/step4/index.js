import React, { useState, useEffect } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PreparingActions from 'app/store/feedback/PreparingRedux';
import { getPreparingStep, getPrepStep4Data } from 'app/store/selectors';
import { Text, ButtonSelection, TextInput } from 'app/components';
import { preparingActionPlan } from 'app/models/PreparingModel';
import containerStyles from '../styles';
import labels from 'app/locales/en';

const PreparingStep4 = () => {
  const { createActionPlan } = labels.feedbackPreparing;
  const dispatch = useDispatch();
  const activeStep = useSelector(getPreparingStep);
  const stepData = useSelector(getPrepStep4Data);
  const [actionPlanList, setActionPlanList] = useState([]);
  const [additionalPlan, setAdditionalPlan] = useState('');

  useEffect(() => {
    if (stepData.data) 
    if (typeof stepData.data.actionPlanList === 'string') {
      const dataArr = stepData.data.actionPlanList.split(',');
      setActionPlanList(dataArr);
    } else {
      setActionPlanList(stepData.data.actionPlanList);
    }
    setAdditionalPlan(stepData.data.additionalPlan);
  }, [stepData]);

  const handleData = () => {
    dispatch(
      PreparingActions.setPreparingData('step4', {
        actionPlanList,
        additionalPlan,
      }),
    );
  };
  const handleBack = () => {
    handleData();
    dispatch(PreparingActions.setPrepActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    handleData();
    dispatch(PreparingActions.setPrepActiveStep(activeStep + 1));
  };

  const handleAdditionalPlanText = text => {
    setAdditionalPlan(text);
  };

  const handleSelectedActionPlan = item => {
    let newList = actionPlanList;
    if (checkSelectedActionPlan(item))
      newList = newList.filter(newAction => newAction !== item.title);
    else newList = [...newList, item.title];
    setActionPlanList(newList);
  };

  const checkSelectedActionPlan = item => {
    return actionPlanList.some(action => action === item.title);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        <View style={containerStyles.descriptionContainer}>
          <Text
            type="h6"
            style={containerStyles.stepTitleText}
            testID={'txt-preparingStep4-title'}>
            {createActionPlan.step}: {createActionPlan.title}
          </Text>
          <Text
            type="body1"
            style={containerStyles.stepDescriptionText}
            testID={'txt-preparingStep4-description'}>
            {createActionPlan.content}
          </Text>
        </View>
        {preparingActionPlan.map((item, i) => (
          <ButtonSelection
            key={item.id}
            testID={'btn-preparingStep4-action'}
            type={'Check'}
            title={item.title}
            onPress={() => handleSelectedActionPlan(item)}
            selected={checkSelectedActionPlan(item)}
          />
        ))}
        <TextInput
          label={labels.common.inputHint}
          placeholder={labels.common.inputHint}
          style={{ marginTop: 15 }}
          testID={'input-preparingStep4-additional'}
          onChangeText={text => handleAdditionalPlanText(text)}
          value={additionalPlan}
          description={labels.common.ownQuestionDesc}
        />
      </KeyboardAvoidingView>
      <View style={containerStyles.btnContainer}>
        <Button
          mode="text"
          onPress={() => handleBack()}
          testID={'btn-preparingStep4-back'}>
          {labels.common.back}
        </Button>
        <Button
          onPress={() => handleNext()}
          mode={'contained'}
          testID={'btn-preparingStep4-next'}>
          {labels.common.next}
        </Button>
      </View>
    </ScrollView>
  );
};

export default PreparingStep4;

PreparingStep4.propTypes = {
  setPrepActiveStep: PropTypes.func,
  setPreparingData: PropTypes.func,
  activeStep: PropTypes.number,
  stepData: PropTypes.object,
};

PreparingStep4.defaultProps = {
  setPrepActiveStep: () => {},
  setPreparingData: () => {},
  activeStep: 1,
  stepData: {},
};
