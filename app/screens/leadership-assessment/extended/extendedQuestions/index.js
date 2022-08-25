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
import { getOverviewStep, getOverviewMaxStep, getExtendedStep, getExtendedMaxStep } from 'app/store/selectors';
import containerStyles from 'app/screens/leadership-assessment/styles';

const ExtendedStep = () => {
  const dispatch = useDispatch();
  //const activeStep = useSelector(getOverviewStep);
  //const maxStep = useSelector(getOverviewMaxStep);
  const extendedActiveStep = useSelector(getExtendedStep);
  const extendedMaxStep = useSelector(getExtendedMaxStep);
  const questionTitle = useSelector(
    state => state.leadershipSkillArea.get('extendedQuestions')['empathyList'][extendedActiveStep - 1],
  );
  // const questionTitle = useSelector(
  //   state => state.leadershipSkillArea.get('empathyList')[0],
  // );
 
 
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

    dispatch(leadershipSkillAreaActions.setAssessmentData('step1', data));
    if (extendedActiveStep < extendedMaxStep)
      dispatch(leadershipSkillAreaActions.setAssessmentExtendedActiveStep(extendedActiveStep + 1));
    else
          NavigationService.navigate('Assessment End Line');
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
        <Text style={containerStyles.counterGuideText}>💓 Empathy</Text>
        <View style={containerStyles.questionCounterContainer}>
          <Text style={containerStyles.questionCounterText}>{extendedActiveStep}</Text>
          <Text style={containerStyles.maxQuestionCounterText}>
            {`/${extendedMaxStep}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ExtendedStep;
