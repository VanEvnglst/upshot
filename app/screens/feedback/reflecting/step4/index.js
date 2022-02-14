import React, { useState, useEffect, forwardRef } from 'react';
import { View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text, TextInput } from 'app/components';
import { getReflectingStep, getReflectStep4Data, getChosenType, getChosenFlow } from 'app/store/selectors';
import ReflectingActions from 'app/store/feedback/ReflectingRedux';
import labels from 'app/locales/en';
import containerStyles from '../styles';
import FeedbackFlow from '../../flow';


const ReflectingStep4 = props => {
  const { route } = props;
  const { feedbackReflecting } = labels;
  const dispatch = useDispatch();
  const activeStep = useSelector(getReflectingStep);
  const stepData = useSelector(getReflectStep4Data);
  const type = useSelector(getChosenType);
  const flow = useSelector(getChosenFlow);
  const [developmentPlan, setDevelopmentPlan] = useState({
    stopDoing: '',
    startDoing: '',
    continueDoing: '',
  });

  useEffect(() => {
    if(stepData.data) {
    const { stopDoing, startDoing, continueDoing} = stepData.data
      setDevelopmentPlan({
        stopDoing: stopDoing === null ? '' : stopDoing,
        startDoing: startDoing === null ? '' : startDoing,
        continueDoing: continueDoing === null ? '' : continueDoing,
      })
    }
  },[stepData]);
  
  const handleBack = () => {
    dispatch(ReflectingActions.setReflectingData('step4', developmentPlan));
    dispatch(ReflectingActions.setReflectingActiveStep(activeStep - 1));
  }

  const handleNext = () => {
    dispatch(ReflectingActions.setReflectingData('step4',developmentPlan));
    if (flow.id === 1 && type.id === 2)
    dispatch(ReflectingActions.setReflectingActiveStep(activeStep + 1));
    else 
    dispatch(ReflectingActions.updateFeedbackReflecting())
    
  }

  const handleDevelopmentText = (key, text) => {
    setDevelopmentPlan(prevState => ({
      ...prevState,
      [key]: text,
    }));
  }

  return (
    <View style={{ flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View>
      <Text type='h6' style={containerStyles.stepTitleText}>{feedbackReflecting.developmentPlan}</Text>
      <Text type='body1' style={containerStyles.stepDescriptionText}>{feedbackReflecting.developmentPlanDesc}</Text>
      </View>
      <View style={{ marginVertical: 20 }}>
        <TextInput
          label={feedbackReflecting.stopDoing}
          placeholder={feedbackReflecting.stopDoing}
          value={developmentPlan.stopDoing}
          onChangeText={text => handleDevelopmentText('stopDoing', text)}
          style={{ marginBottom: 20 }}
        />
        <TextInput
          label={feedbackReflecting.startDoing}
          placeholder={feedbackReflecting.startDoing}
          value={developmentPlan.startDoing}
          onChangeText={text => handleDevelopmentText('startDoing', text)}
          style={{ marginBottom: 20 }}
        />
        <TextInput
          label={feedbackReflecting.continueDoing}
          placeholder={feedbackReflecting.continueDoing}
          value={developmentPlan.continueDoing}
          onChangeText={text => handleDevelopmentText('continueDoing', text)}
        />
      </View>
      <View style={containerStyles.btnContainer}>
        <Button
          mode='text'
          onPress={() => handleBack()}>
            {labels.common.back}
          </Button>
        <Button
          mode='contained'
          onPress={() => handleNext()}
        >
          {labels.common.next}
        </Button>
      </View>
      </ScrollView>      
    </View>
  );
};

export default ReflectingStep4;


ReflectingStep4.propTypes = {
  getReflectingStep: PropTypes.number,
  getReflectStep4Data: PropTypes.object,
  setReflectingActiveStep: PropTypes.func,
  setReflectingData: PropTypes.func,
};

ReflectingStep4.defaultProps = {
  getReflectingStep: 1,
  getReflectStep4Data: {},
  setReflectingActiveStep: () => {},
  setReflectingData: () => {}
};