import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text, Slider } from 'app/components';
import SurveyActions from 'app/store/frontliner/SurveyRedux';
import {
  getSurveyStep,
  getSatisfactionData,
  getSurveyId,
} from 'app/store/selectors';
import Images from 'app/assets/images';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const OverallSatisfaction = props => {
  const { survey } = labels.frontliner;
  const dispatch = useDispatch();
  const activeStep = useSelector(getSurveyStep);
  const stepData = useSelector(getSatisfactionData);
  const [satisfactionValue, setSatisfactionValue] = useState(1);
  const [didSliderMove, setDidSliderMove] = useState(false);
  // useEffect(() => {
  // if(stepData.data)
  // TODO: load data from store
  //}, [stepData]);

  const handleSliderValue = () => {
    setSatisfactionValue(value);
    setDidSliderMove(true);
  };

  const handleNext = () => {
    if (didSliderMove)
      dispatch(SurveyActions.setDRSurveyData('overallSatisfaction', satisfactionValue));
    else
      dispatch(SurveyActions.setDRSurveyData('overallSatisfaction', 0));
    dispatch(SurveyActions.setSurveyActiveStep(activeStep + 1))
  }

  return (
    <View style={containerStyles.container}>
      <View style={containerStyles.headerContainer}>
        <Text
          type="h6"
          style={containerStyles.stepTitleText}
          testID={'txt-frontlinerSurvey-satisfaction'}>
          {survey.overallSatisfaction}
        </Text>
      </View>
      <View style={{
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
        <Slider
          leftImage={Images.thumbsDownEmoji}
          rightImage={Images.thumbsUpEmoji}
          minValue={1}
          maxValue={10}
          step={1}
          value={satisfactionValue}
          onSlidingStart={value =>
          handleSliderValue(value)}
          onSlidingComplete={value => handleSliderValue(value)}
        />
      </View>
      <View style={containerStyles.soloBtnContainer}>
        <Button
          mode='contained'
          onPress={() => handleNext()}
          testID={'btn-directReportSurvey-next'}
        >{labels.common.next}</Button>
      </View>
    </View>
  );
};

export default OverallSatisfaction;

OverallSatisfaction.propTypes = {
  getSurveyStep: PropTypes.number,
  getSatisfactionData: PropTypes.object,
  setSurveyActiveStep: PropTypes.func,
  setDRSurveyData: PropTypes.func,
};

OverallSatisfaction.defaultProps = {
  getSurveyStep: 1,
  getSatisfactionData: {},
  setSurveyActiveStep: () => {},
  setDRSurveyData: () => {},
};
