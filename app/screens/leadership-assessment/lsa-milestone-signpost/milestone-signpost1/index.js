import { CardStyleInterpolators } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Button, ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Images from 'app/assets/images';
import LeadershipSkillAreaActions from 'app/store/LSARedux';
import { useDispatch, useSelector } from 'react-redux';
//import { getCategoryStep, getCategoryMaxStep } from 'app/store/selectors';

const MilestoneSignpost1 = props => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const extendedTestAns = useSelector(
    state => state.leadershipSkillArea.get('extendedData'));
  const testing = Object.keys(extendedTestAns);
  const value = testing.length;
  const testing1 = Object.values(extendedTestAns);
  const extendedAns = Object.values(testing1)['data'];
  //const trial = Object.values(extendedAns);
    //qid: extendedTestAns.map((data) => { return data.testing.questions.qid })

    useEffect(() => {
      handleData();
    }, []);

  const handleData = () => {
    let newArr =[];
  for (let i = 0; i < testing1.length; i++) {
    
    const extendedAns1 = Object.values(testing1)[i]['data'];
    let dataObj = { qid: extendedAns1.question.qid, value: extendedAns1.option.value};
    newArr = [...newArr, dataObj];
    debugger;
  }
  console.warn('arr', newArr);
  debugger;
}

  const handleDataAndNext = () => {
    //dispatch(LeadershipSkillAreaActions.postExtendedTest(extendedTestAns.data.question.id));
    debugger;
    setTimeout(() => {
      navigation.navigate('Leadership Assessment Extended');
    }, 200);
  }
  //const categoryActiveStep = useSelector(getCategoryStep);
  //const categoryMaxStep = useSelector(getCategoryMaxStep);

  // const handleNextCategory = () => {
  //   if (categoryActiveStep < categoryMaxStep)
  //   {
  //     dispatch(LeadershipSkillAreaActions.setAssessmentCategoryActiveStep(categoryActiveStep + 1));
  //     navigation.navigate('Leadership Assessment Results');
  //   }
  //   else if (categoryActiveStep === categoryMaxStep)
  //     dispatch(LeadershipSkillAreaActions.resetCategoryActiveStep());
  // }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* <ProgressBar
          progress={1}
          color={'#667080'}
          style={styles.progressBar}></ProgressBar> */}
      </SafeAreaView>

      <View style={styles.imageContainer}>
            <Image
                source={Images.coolEmoji}
                resizeMode='contain'
                style={styles.image}
            />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>You're doing well!</Text>

        <Text style={styles.descriptionText}>
          {"Each of these questions is based on behavioral research <placeholder> and will help us guide you through leadership practices."}
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <Button
          onPress={() => handleDataAndNext()}
          mode="contained"
          style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </Button>
      </View>
      <View style={styles.spacer} />
    </View>
  );
};


export default MilestoneSignpost1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  progressBar: {
    height: 4,
    borderRadius: 4,
    marginTop: 20,
  },
  imageContainer: {
    marginTop: 84,
    alignSelf: 'center',
    width: 200, 
    height: 200, 
    backgroundColor: '#FFF0C3', 
    borderRadius: 100, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  image: {
    width: 115,
    height: 115
  },
  contentContainer: {
    flex: 1,
    marginTop: 84,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 36,
    color: '#667080',
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    marginTop: 12,
    color: '#667080',
    maxWidth: '90%',
    textAlign: 'center',
  },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    marginLeft: 5,
    backgroundColor: '#667080',
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  spacer: {
    height: 100,
  },
});
