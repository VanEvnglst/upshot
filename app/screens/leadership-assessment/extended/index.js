import React, { useEffect } from 'react';
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
import leadershipSkillAreaActions from 'app/store/LSARedux';
import ExtendedStep from './extendedQuestions';


import { getOverviewStep, getOverviewMaxStep, getExtendedStep, getExtendedMaxStep } from 'app/store/selectors';
import containerStyles from './styles';

const ExtendedLeadershipAssessment = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  //const activeStep = useSelector(getOverviewStep);
  //const maxStep = useSelector(getOverviewMaxStep);
  const extendedActiveStep = useSelector(getExtendedStep);
  const extendedMaxStep = useSelector(getExtendedMaxStep);
  //const categoryActiveStep = useSelector(getCategoryStep);
  //const categoryMaxStep = useSelector(getCategoryMaxStep);
  const indexValue = extendedActiveStep / extendedMaxStep;

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => {
        return true;
      });
  }, []);

  // useEffect(() => {
  //   async function retrieveData() {
  //     await dispatch(LSAOverviewActions.fetchOverviewAssessment());
  //   }
  //   retrieveData();
  // }, []);

  const handleGoBack = () => {
    if (extendedActiveStep === 1) navigation.goBack();
    else dispatch(leadershipSkillAreaActions.setAssessmentExtendedActiveStep(extendedActiveStep - 1));
  };

  const handleStepContent = () => {
    //if (categoryActiveStep <= categoryMaxStep)
    if (extendedActiveStep <= extendedMaxStep)
      return <ExtendedStep />
    else
      console.warn('Error-activeStep', extendedActiveStep);
    
    // switch (activeStep) {
    //   case 1:
    //     return <ExtendedStep />;
    //    case 2:
    //     return <ExtendedStep />;
    //    case 3:
    //     return <ExtendedStep />;
    //    case 4:
    //     return <ExtendedStep />;
    // }
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
            <Text style={containerStyles.guideQuestionText}>
              Which option sounds more like you? 🤔
            </Text>
          </View>
          <View style={containerStyles.contentContainer}>
            {handleStepContent()}
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
