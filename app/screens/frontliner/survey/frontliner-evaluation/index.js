import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text, Slider } from 'app/components';
import Images from 'app/assets/images';
import { frontlinerEval } from 'app/models/FrontlinerEvalModel';
import SurveyActions from 'app/store/frontliner/SurveyRedux';
import { getSurveyStep } from 'app/store/frontliner/SurveyRedux';
import labels from 'app/locales/en';
import containerStyles from '../styles';


const FrontlinerEvaluation = props => {
  const { survey } = labels.frontliner;
  const dispatch = useDispatch();
  const activeStep = useSelector(getSurveyStep);


  const handleBack = () => {
    dispatch(SurveyActions.setSurveyActiveStep(activeStep - 1));
  }

  const handleNext = () => {
    dispatch(SurveyActions.setSurveyActiveStep(activeStep + 1));
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 30 }}>
        <Text
          type='h6'
          style={containerStyles.stepTitleText}
          testID={'txt-frontlinerSurvey-frontlinerEval'}
        >{survey.selfSurvey}</Text>
      </View>
      <View style={containerStyles.btnContainer}>
        <Button
          mode='text'
          onPress={() => handleBack()}
        >{labels.common.back}</Button>
        <Button
          mode='contained'
          onPress={() => handleNext()}
        >{labels.common.next}</Button>
      </View>
    </View>
  )
}

export default FrontlinerEvaluation;


FrontlinerEvaluation.propTypes = {
  getSurveyStep: PropTypes.number,
  setSurveyActiveStep: PropTypes.func,
  // setSurveyData: PropTypes.func,
};

FrontlinerEvaluation.defaultProps = {
  getSurveyStep: 1,
  setSurveyActiveStep: () => {},
  //setSurveyData: () => {},
};