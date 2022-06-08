import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text, Slider } from 'app/components';
import SurveyActions from 'app/store/frontliner/SurveyRedux';
import { getSurveyStep, getFeelingData } from 'app/store/selectors';
import Images from 'app/assets/images';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const FeelingQuestion = props => {
  const { survey } = labels.frontliner;
  const dispatch = useDispatch();
  const activeStep = useSelector(getSurveyStep);
  const stepData = useSelector(getFeelingData)
  const [feelingValue, setFeelingValue] = useState(1);
  const [didSliderMove, setDidSliderMove] = useState(false);

  useEffect(() => {
    if(stepData.data)
    setFeelingValue(stepData.data)
  }, [stepData]);
  
  const handleSliderValue = value => {
    setFeelingValue(value);
    setDidSliderMove(true);
  };

  const handleData = () => {
    if (didSliderMove)
    dispatch(SurveyActions.setDRSurveyData('howDidYouFeel', feelingValue));
    else
    dispatch(SurveyActions.setDRSurveyData('howDidYouFeel', 0));
  };

  const handleBack = () => {
    handleData();
    dispatch(SurveyActions.setSurveyActiveStep(activeStep - 1));
  }

  const handleNext = () => {
    handleData();
    dispatch(SurveyActions.setSurveyActiveStep(activeStep + 1));
  }

  return (
    <View style={containerStyles.container}>
      <View style={containerStyles.headerContainer}>
        <Text 
          type="h6" 
          style={containerStyles.stepTitleText}
          testID={'txt-feelingQuestion-label'}
        >
          {survey.feeling}
        </Text>
      </View>
      <View
        style={containerStyles.centeredContainer}
      >
        <Slider
          leftImage={Images.thumbsDownEmoji}
          rightImage={Images.thumbsUpEmoji}
          minValue={1}
          maxValue={10}
          step={1}
          value={feelingValue}
          onSlidingStart={value => handleSliderValue(value)}
          onSlidingComplete={value => handleSliderValue(value)}
        />
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
  );
};

export default FeelingQuestion;

FeelingQuestion.propTypes = {
  getSurveyStep: PropTypes.number,
  getFeelingData: PropTypes.object,
  setSurveyActiveStep: PropTypes.func,
  setDRSurveyData: PropTypes.func
};

FeelingQuestion.defaultProps = {
  getSurveyStep: 1,
  getFeelingData: {},
  setSurveyActiveStep: () => {},
  setDRSurveyData: () => {},
};
