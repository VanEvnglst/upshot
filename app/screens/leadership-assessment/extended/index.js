import React, { useEffect, useState } from 'react';
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
import ExtendedStep from './extendedQuestions';
import * as NavigationService from 'app/services/NavigationService';
import lsaOptions from 'app/models/LSAOptionsModel';
import lsaTypes from 'app/models/LSATypes';



import { getExtendedStep, getExtendedMaxStep, getCategoryStep, getCategoryMaxStep } from 'app/store/selectors';
import containerStyles from './styles';

const ExtendedLeadershipAssessment = props => {
  const { navigation, route } = props;
  //route.params.category
  const dispatch = useDispatch();
  const extendedActiveStep = useSelector(getExtendedStep);
  const extendedMaxStep = useSelector(getExtendedMaxStep);
  const categoryActiveStep = useSelector(getCategoryStep);
  const categoryMaxStep = useSelector(getCategoryMaxStep);
  const indexValue = extendedActiveStep / extendedMaxStep;
  
  const questionTitle = useSelector(
      state => state.leadershipSkillArea.get('extendedQuestions')[route.params.questionValue][extendedActiveStep - 1],
    );
  const extended = useSelector(state => state.leadershipSkillArea.get('extendedData'));

    const [optionSelection, setOptionSelection] = useState({
      key: 0,
      title: '',
      value: 0,
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
    if (extendedActiveStep === 1) navigation.goBack();
    else dispatch(LeadershipSkillAreaActions.setAssessmentExtendedActiveStep(extendedActiveStep - 1));
  };

  const handleSelection = option => {
    setOptionSelection(option);

    const data = {
      option,
      question: questionTitle,
    };

    //dispatch(LeadershipSkillAreaActions.setExtendedAssessmentData(`${categorySelection.dataValue}Answer${extendedActiveStep}`, data));
    dispatch(LeadershipSkillAreaActions.setExtendedAssessmentData(`answer${route.params.title}${extendedActiveStep}`, data));

    if (extendedActiveStep < extendedMaxStep) {
      dispatch(LeadershipSkillAreaActions.setAssessmentExtendedActiveStep(extendedActiveStep + 1));
  
      }
    else if (extendedActiveStep == extendedMaxStep && categoryActiveStep < categoryMaxStep) {
     
      dispatch(LeadershipSkillAreaActions.postExtendedTest(extended));
      
      dispatch(LeadershipSkillAreaActions.setAssessmentCategoryActiveStep(categoryActiveStep + 1));
      dispatch(LeadershipSkillAreaActions.resetStep('extendedActiveStep', 1));
      
    }
    else if (extendedActiveStep == extendedMaxStep && categoryActiveStep == categoryMaxStep) {
      dispatch(LeadershipSkillAreaActions.postExtendedTest(extended));
      dispatch(LeadershipSkillAreaActions.resetStep('categoryActiveStep', 1));
      dispatch(LeadershipSkillAreaActions.resetStep('extendedActiveStep', 1));
      //NavigationService.navigate('Assessment', { screen: 'Milestone Signpost5' });
      
      
    }

  };

  // const handleStepContent = () => {
  //   console.warn('render', route.params.category);
  //   switch(route.params.category) {
  //     case "Empathy 💓":
  //       console.warn('render empathy');
  //   }
  //   // handle Content should return questions based on category passed in


  //   // if (categoryActiveStep <= categoryMaxStep) {
  //   //   debugger;
  //   //   if (extendedActiveStep <= extendedMaxStep)
  //       // return <ExtendedStep />
  //   //   else
  //   //     console.warn('Error-activeStep', extendedActiveStep);
  //   // }
  //   // else
  //   //   console.warn('Error-categoryStep', categoryActiveStep);
  // };


  return (
    <View style={containerStyles.container}>
      <View style={{ paddingHorizontal: 24, marginTop: 30}}>
        <SafeAreaView>
          <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => handleGoBack()}>
            <Icon name="chevron-back-outline" size={24} font-size="6px" />
            </TouchableOpacity>
            <Text style={{fontWeight: '700', fontSize: 16, lineHeight: 22, color: "#667080", minWidth: 172, textAlign: 'center'}}>Leadership Skill Areas</Text>
            <TouchableOpacity
            accessibilityRole='button'>
              <Text style={{fontWeight: '500', fontSize: 16, lineHeight: 22, color: "#667080"}}>Cancel</Text>
              </TouchableOpacity>
          </View>
          <ProgressBar
            progress={indexValue}
            color={'#667080'}
            style={styles.progressBar}></ProgressBar>
          <View style={containerStyles.questionHeader}>
            <Text style={containerStyles.guideQuestionText}>
              Which option sounds more like you? 🤔
            </Text>
          </View>
          <View style={containerStyles.contentContainer}>
            {/* {handleStepContent()} */}
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
        <Text style={containerStyles.counterGuideText}>{route.params.icon} {route.params.title}</Text>
        <View style={containerStyles.questionCounterContainer}>
          <Text style={containerStyles.questionCounterText}>{extendedActiveStep}</Text>
          <Text style={containerStyles.maxQuestionCounterText}>
            {`/${extendedMaxStep}`}
          </Text>
        </View>
      </View>

          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default ExtendedLeadershipAssessment;

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
