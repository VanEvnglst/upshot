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
import OverviewStep1 from './overview/overviewStep1';
import OverviewStep2 from './overview/overviewStep2';
import OverviewStep3 from './overview/overviewStep3';
import OverviewStep4 from './overview/overviewStep4';
import OverviewStep5 from './overview/overviewStep5';
import OverviewStep6 from './overview/overviewStep6';
import OverviewStep7 from './overview/overviewStep7';
import OverviewStep8 from './overview/overviewStep8';
import OverviewStep9 from './overview/overviewStep9';
import OverviewStep10 from './overview/overviewStep10';
import OverviewStep11 from './overview/overviewStep11';
import OverviewStep12 from './overview/overviewStep12';
import OverviewStep13 from './overview/overviewStep13';
import OverviewStep14 from './overview/overviewStep14';
import OverviewStep15 from './overview/overviewStep15';
//import OverviewOverall from './overview';

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
            return <OverviewStep1 />;
        case 2:
            return <OverviewStep2 />;
        case 3:
            return <OverviewStep3 />;
        case 4:
            return <OverviewStep4 />;
        case 5:
            return <OverviewStep5 />;
        case 6:
            return <OverviewStep6 />;
        case 7:
            return <OverviewStep7 />;
        case 8:
            return <OverviewStep8 />;
        case 9:
            return <OverviewStep9 />;
        case 10:
            return <OverviewStep10 />;
        case 11:
            return <OverviewStep11 />;
        case 12:
            return <OverviewStep12 />;
        case 13:
            return <OverviewStep13 />;
        case 14:
            return <OverviewStep14 />;
        case 15:
            return <OverviewStep15 />;
        case 16:
            return <OverviewOverall />;
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
