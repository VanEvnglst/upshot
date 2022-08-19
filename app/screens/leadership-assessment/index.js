import { useNavigation } from '@react-navigation/native';
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
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import LSAOverviewActions from 'app/store/LSAOverviewRedux';
import OverallStep1 from './overall/overallStep1';
import { LsaTestSign1 } from '../leadership-assessment/lsa-test-signpost1';

const LeadershipAssessment = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const overviewQuestions = useSelector(state => state.lsaOverview.get('overviewQuestions'));
  const activeStep = useSelector(state => state.lsaOverview.get('activeStep'));
  const maxStep = 16;
  const indexValue = activeStep / maxStep;

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => {
        return true;
      });
  }, []);

  useEffect(() => {
    async function retrieveData() {
      await dispatch(LSAOverviewActions.fetchOverviewAssessment());
    }
    retrieveData();
  }, []);

  const handleGoBack = () => {
    if (activeStep === 1)
    navigation.goBack()
    else
    dispatch(LSAOverviewActions.setAssessmentActiveStep(activeStep - 1));
}

  const handleStepContent = () => {
    switch (activeStep) {
      case 1:
        return <OverallStep1 />;
      // Add all steps here pati overall confirmation
    }
  }

  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 24 }}>
        <TouchableOpacity
          accessibilityRole="button"
          style={{ paddingLeft: 13 }}>
          <Icon
            name="chevron-back-outline"
            size={24}
            font-size="6px"
            onPress={() => handleGoBack()}></Icon>
        </TouchableOpacity>
        <ProgressBar
          progress={indexValue}
          color={'#667080'}
          style={styles.progressBar}></ProgressBar>
        <View style={{ marginTop: 46 }}>
          <Text>Which option sounds more like you?</Text>
        </View>
        <View style={{ marginTop: 24 }}>
          {handleStepContent()}
        </View>
      </View>
    </SafeAreaView>
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
