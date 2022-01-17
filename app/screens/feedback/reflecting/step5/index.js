import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text } from 'app/components';
import { getReflectingStep } from 'app/store/selectors';
import ReflectingActions from 'app/store/feedback/ReflectingRedux';
import labels from 'app/locales/en';
import containerStyles from '../styles';


const ReflectingStep5 = () => {
  const { feedbackReflecting } = labels;
  const dispatch = useDispatch();
  const activeStep = useSelector(getReflectingStep);

  const handleBack = () => {
    dispatch(ReflectingActions.setReflectingActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    dispatch(ReflectingActions.updateFeedbackReflecting());
  };

  // TODO: Fix data handling for action plan
  const ActionPlanItem = () => {
    return (
    <View style={{ flexDirection: 'row', marginTop: 30 }}>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
        <View style={{ alignItems: 'center', marginLeft: 5}}>
        <View style={{ width: 24, height: 24, borderRadius: 12, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text type='overline'>1</Text>
        </View>
        <View
          style={{
            width: 2,
            backgroundColor: '#f5f5f5',
            height: 75
          }} 
        />
        </View>
      </View>
      <View style={{ flex: 3}}>
        <Text type='body1'>Attend additional training</Text>
        <Text type='body1' style={{ marginTop: 20}}>Next Tuesday @ Head Office</Text>
        <Text type='body1' style={{ marginTop: 20}}>Request with HR</Text>
      </View>
    </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text type="h6" style={containerStyles.stepTitleText}>
          {feedbackReflecting.reviewActionPlan}
        </Text>
        <Text type="body1" style={containerStyles.stepDescriptionText}>
          {feedbackReflecting.reviewActionPlanDesc}
        </Text>
      </View>
      <View
        style={{ marginVertical: 20, flex: 1 }}>
          <Text type='overline'>action plan</Text>
          <ActionPlanItem/>
        </View>
      <View style={containerStyles.btnContainer}>
        <Button mode="text" onPress={() => handleBack()}>
          Back
        </Button>
        <Button mode='contained' onPress={() => handleNext()}>
          Next
        </Button>
      </View>
    </View>
  );
};

export default ReflectingStep5;

ReflectingStep5.propTypes = {};
ReflectingStep5.defaultProps = {};
