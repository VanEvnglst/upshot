import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text, TextInput } from 'app/components';
import { getReflectingStep } from 'app/store/selectors';
import ReflectingActions from 'app/store/feedback/ReflectingRedux';
import labels from 'app/locales/en';
import containerStyles from '../styles';


const ReflectingStep4 = props => {
  const { route } = props;
  const { feedbackReflecting } = labels;
  const dispatch = useDispatch();
  const activeStep = useSelector(getReflectingStep);
  const [developmentPlan, setDevelopmentPlan] = useState({
    stopDoing: '',
    startDoing: '',
    continueDoing: '',
  })
  
  const handleBack = () => {
    dispatch(ReflectingActions.setReflectingActiveStep(activeStep - 1));
  }

  const handleNext = () => {
    dispatch(ReflectingActions.setReflectingData('step4',developmentPlan));
    dispatch(ReflectingActions.setReflectingActiveStep(activeStep + 1));
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
            Back
          </Button>
        <Button
          mode='contained'
          onPress={() => handleNext()}
        >
          Next
        </Button>
      </View>
      </ScrollView>      
    </View>
  );
};

export default ReflectingStep4;


ReflectingStep4.propTypes = {};

ReflectingStep4.defaultProps = {};