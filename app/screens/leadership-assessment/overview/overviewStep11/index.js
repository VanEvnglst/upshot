import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import leadershipSkillAreaActions from 'app/store/LSARedux';
import { getOverviewStep, getOverviewMaxStep, getOverviewQuestions } from 'app/store/selectors';
import containerStyles from 'app/screens/leadership-assessment/styles';

const OverviewStep11 = () => {
  const dispatch = useDispatch();
  const questionTitle = useSelector(state => state.leadershipSkillArea.get('overviewQuestions')[10]);
  const activeStep = useSelector(getOverviewStep);
  const maxStep = useSelector(getOverviewMaxStep);
  const [optionSelection, setOptionSelection] = useState({
    key: 0,
    title: '',
    value: 0,
  });

  const questionOption = [
    {
      key: '1',
      title: 'Always',
      value: '5',
    },
    {
      key: '2',
      title: 'Often',
      value: '4',
    },
    {
      key: '3',
      title: 'Sometimes',
      value: '3',
    },
    {
      key: '4',
      title: 'Rarely',
      value: '2',
    },
    {
      key: '5',
      title: 'Never',
      value: '1',
    },
  ];

  const handleSelection = option => {
    setOptionSelection(option);

    const data = {
      option,
      question: questionTitle,
    };

    dispatch(leadershipSkillAreaActions.setAssessmentData('step11', data));
    setTimeout(() => {
      dispatch(leadershipSkillAreaActions.setAssessmentActiveStep(activeStep + 1)); 
    }, 300);
  };

  return (
    <View>
      <View style={containerStyles.questionContainer}>
        <Text style={containerStyles.questionText}>
          {questionTitle.question}
        </Text>
      </View>
      {questionOption.map(element => {
        return (
          <Button
            mode="outlined"
            onPress={() => handleSelection(element)}
            key={element.key}
            style={[
              containerStyles.optionsButton,
              {
                borderWidth: element.key === optionSelection.key ? 2 : 1,
              },
            ]}>
            <Text
              style={[
                containerStyles.optionsText,
                {
                  fontWeight:
                    element.key === optionSelection.key ? '700' : '400',
                },
              ]}>
              {element.title}
            </Text>
          </Button>
        );
      })}
      <View style={containerStyles.counterContainer}>
        <Text style={containerStyles.counterGuideText}>Questions</Text>
        <View style={containerStyles.questionCounterContainer}>
          <Text style={containerStyles.questionCounterText}>{activeStep}</Text>
          <Text style={containerStyles.maxQuestionCounterText}>
            {`/${maxStep}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OverviewStep11;
