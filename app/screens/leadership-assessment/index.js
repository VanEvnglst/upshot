import React, { useState, useEffect } from 'react';
import {
  View,
  BackHandler,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import LeadershipSkillAreaActions from 'app/store/LSARedux';
import OverviewConfirmation from './overview/overview-confirmation';
import { getOverviewStep, getOverviewMaxStep } from 'app/store/selectors';
import lsaOptions from 'app/models/LSAOptionsModel';
import containerStyles from './styles';

const LeadershipAssessment = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const activeStep = useSelector(getOverviewStep);
  const maxStep = useSelector(getOverviewMaxStep);
  const indexValue = activeStep / maxStep;
  const questionTitle = useSelector(
    state => state.leadershipSkillArea.get('overviewQuestions')[activeStep - 1],
  );
  const overview = useSelector(state => state.leadershipSkillArea.get('overviewData'));
  const [selectedOption, setSelectedOption] = useState({
    id: 0,
    title: '',
    value: '',
  });

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => {
        return true;
      });
  }, []);

  const handleGoBack = () => {
    if (activeStep === 1) navigation.goBack();
    else
      dispatch(
        LeadershipSkillAreaActions.setAssessmentActiveStep(
          'overviewActiveStep',
          activeStep - 1,
        ),
      );
  };

  const handleSelection = item => {
    setSelectedOption(item);
    const data = {
      option: item,
      question: questionTitle,
    };

    dispatch(
      LeadershipSkillAreaActions.setAssessmentData(`step${activeStep}`, data),
    );
    setTimeout(() => {
      setSelectedOption({
        id: 0,
        title: '',
        value: '',
      })
    }, 300);
    if (activeStep === maxStep) 
    dispatch(LeadershipSkillAreaActions.postOverviewTest(overview))
    else
    setTimeout(() => {
      dispatch(
        LeadershipSkillAreaActions.setAssessmentActiveStep(
          'overviewActiveStep',
          activeStep + 1,
        ),
      );
      
     
    }, 500);
    
  };

  return (
    <View style={containerStyles.container}>
      <View style={{ paddingHorizontal: 24 }}>
        <SafeAreaView>
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => handleGoBack()}>
            <Icon name="chevron-back-outline" size={24} font-size="6px" />
          </TouchableOpacity>
          <ProgressBar
            progress={indexValue}
            color={'#667080'}
            style={styles.progressBar}></ProgressBar>
          <View style={containerStyles.questionHeader}>
            <View>
              <Text style={containerStyles.guideQuestionText}>
                Which option sounds more like you? 🤔
              </Text>
            </View>
          </View>
          </SafeAreaView>
          <View style={containerStyles.contentContainer}>
            <View style={containerStyles.questionContainer}>
              <Text style={containerStyles.questionText}>
                {questionTitle.question}
              </Text>
            </View>
            {lsaOptions.map(element => {
              return (
                <Button
                  mode="outlined"
                  onPress={() => handleSelection(element)}
                  key={element.key}
                  style={[
                    containerStyles.optionsButton,
                    {
                      borderWidth: element.key === selectedOption.key ? 2 : 1,
                    },
                  ]}>
                  <Text
                    style={[
                      containerStyles.optionsText,
                      {
                        fontWeight:
                          element.key === selectedOption.key ? '700' : '400',
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
                <Text style={containerStyles.questionCounterText}>
                  {activeStep}
                </Text>
                <Text style={containerStyles.maxQuestionCounterText}>
                  {`/${maxStep}`}
                </Text>
              </View>
            </View>
          </View>
      </View>
    </View>
  );
};

export default LeadershipAssessment;

const styles = StyleSheet.create({
  progressBar: {
    marginVertical: 10,
    borderRadius: 4,
    height: 4,
    marginLeft: 3,
    paddingRight: 19,
    marginTop: 8,
  },
});
