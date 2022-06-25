import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text, Slider } from 'app/components';
import SurveyActions from 'app/store/frontliner/SurveyRedux';
import { getSurveyStep, getDRCriteria, getSelfEval, getSurveyId } from 'app/store/selectors';
import Images from 'app/assets/images';
import labels from 'app/locales/en';
import containerStyles from '../styles';


const FrontlinerEvaluation = props => {
  const { navigation } = props;
  const { survey } = labels.frontliner;
  const dispatch = useDispatch();
  const activeStep = useSelector(getSurveyStep);
  const criteriaList = useSelector(getDRCriteria);
  const stepData = useSelector(getSelfEval);
  const surveyId = useSelector(getSurveyId);
  const [drCriteria, setDRCriteria] = useState([]);
  const [drCriteriaScore, setDRCriteriaScore] = useState([]);

  useEffect(() => {
    handleContent();
  }, []);

  useEffect(() => {
    if(stepData.data && stepData.data.length !== 0) {
      const existingDataArr = stepData.data;
      setDRCriteria(existingDataArr);
    }
  }, []);

  const handleContent = () => {
    let newList = [];
    criteriaList.forEach(item => {
      newList.push({
        ...item,
        score: 1,
      });
    });
    setDRCriteria(newList);
  }

  const handleBack = () => {
    dispatch(SurveyActions.setDRSurveyData('selfEvaluation', drCriteriaScore));
    dispatch(SurveyActions.setSurveyActiveStep(activeStep - 1));
  }

  const handleNext = () => {
    dispatch(SurveyActions.setDRSurveyData('selfEvaluation', drCriteriaScore));
    dispatch(SurveyActions.updateDRSurvey({
      getSurveyId,
      shouldClose: true,
    }));
    dispatch(SurveyActions.setSurveyActiveStep(activeStep + 1));
  }

  const checkSliderValue = item => {
    return drCriteriaScore.some(value => value.id === item.id);
  }

  const handleSliderValue = (item, value) => {
    let scores = drCriteriaScore;
    if (checkSliderValue(item)) {
      scores = scores.filter(newValue =>
        newValue.id !== item.id);
      scores = [...scores, { id: item.id, criteria: item.criteria, score: value }];
    } else scores = [...scores, { id: item.id, criteria: item.criteria, score: value }];

    setDRCriteriaScore(scores);
  }

  return (
    <View style={containerStyles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
      <View style={containerStyles.headerContainer}>
        <Text
          type='h6'
          style={containerStyles.stepTitleText}
          testID={'txt-frontlinerSurvey-frontlinerEval'}
        >{survey.selfSurvey}</Text>
      </View>
      <View style={containerStyles.content}>
        {drCriteria.map((item, i) => (
          <View key={item.id}>
            <View style={containerStyles.questionContainer}>
              <Text type='body1' style={containerStyles.questionText}>
                {item.criteria}
              </Text>
            </View>
            <View style={containerStyles.sliderContainer}>
              <Slider
                leftImage={Images.thumbsDownEmoji}
                rightImage={Images.thumbsUpEmoji}
                minValue={1}
                maxValue={10}
                step={1}
                value={item.score}
                onSlidingComplete={value => handleSliderValue(item, value)}
              />
            </View>
            <View style={containerStyles.spacer} />
          </View>
        ))}
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
      </ScrollView>
    </View>
  )
}

export default FrontlinerEvaluation;


FrontlinerEvaluation.propTypes = {
  getSurveyStep: PropTypes.number,
  getDRCriteria: PropTypes.array,
  getSelfEval: PropTypes.object,
  setSurveyActiveStep: PropTypes.func,
  setDRSurveyData: PropTypes.func,
};

FrontlinerEvaluation.defaultProps = {
  getSurveyStep: 1,
  getDRCriteria: [],
  getSelfEval: {},
  setSurveyActiveStep: () => {},
  setDRSurveyData: () => {},
};