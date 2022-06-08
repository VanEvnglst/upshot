import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text, Slider } from 'app/components';
import SurveyActions from 'app/store/frontliner/SurveyRedux';
import { getSurveyStep, getManagerCriteria, getManagerEval } from 'app/store/selectors';
import Images from 'app/assets/images';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const ManagerEvaluation = props => {
  const { survey } = labels.frontliner;
  const { navigation } = props;
  const dispatch = useDispatch();
  const activeStep = useSelector(getSurveyStep);
  const criteria = useSelector(getManagerCriteria);
  const stepData = useSelector(getManagerEval);
  const [managerEval, setManagerEval] = useState([]);
  const [managerEvalScore, setManagerEvalScore] = useState([]);

  useEffect(() => {
    handleContent();
  }, []);

  useEffect(() => {
    if(stepData.data && stepData.data.length !== 0) {
      const existingDataArr = stepData.data;
      setManagerEval(existingDataArr);
    }
  }, []);


  const handleContent = () => {
    let criteriaStr = "I ", newList = [];
    criteria.forEach(item => {
      newList.push({
        ...item,
        displayName: (criteriaStr += item.criteria),
        score: 1,
      });
      criteriaStr = 'I ';
    });
    setManagerEval(newList);
  }


  const handleBack = () => {
    dispatch(SurveyActions.setDRSurveyData('managerEvaluation', managerEvalScore));
    dispatch(SurveyActions.setSurveyActiveStep(activeStep - 1));
  }

  const handleNext = () => {
    dispatch(SurveyActions.setDRSurveyData('managerEvaluation', managerEvalScore));
    dispatch(SurveyActions.setSurveyActiveStep(activeStep + 1));
  }

  const checkSliderValue = item => {
    return managerEvalScore.some(value => value.id === item.id);
  }

  const handleSliderValue = (item, value) => {
    let scores = managerEvalScore;
    if(checkSliderValue(item)) {
      scores = scores.filter(newValue => newValue.id !== item.id);
      scores = [...scores, { id: item.id, displayName: item.displayName, score: value }];
    } else scores = [...scores, { id: item.id, displayName: item.displayName, score: value }];
    setManagerEvalScore(scores);
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
          testID={'txt-frontlinerSurvey-managerEval'}
        >{survey.howDidManagerDo} {survey.howDidManagerDoCont}</Text>
      </View>
      <View style={containerStyles.content}>
        {managerEval.map((item, i) => (
          <View key={item.id}>
            <View style={containerStyles.questionContainer}>
              <Text type='body1' style={containerStyles.questionText}>
                {item.displayName}
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


export default ManagerEvaluation;


ManagerEvaluation.propTypes = {
  getSurveyStep: PropTypes.number,
  getManagerCriteria: PropTypes.array,
  getManagerEval: PropTypes.object,
  setSurveyActiveStep: PropTypes.func,
  setDRSurveyData: PropTypes.func,
};

ManagerEvaluation.defaultProps = {
  getSurveyStep: 1,
  getManagerCriteria: [],
  getManagerEval: {},
  setSurveyActiveStep: () => {},
  setDRSurveyData: () => {},
};