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

const MilestoneSignpost2 = props => {
    const { navigation } = props;
    const dispatch = useDispatch();

    const extendedTestAns = useSelector(
      state => state.leadershipSkillArea.get('extendedData'));
    const rawExtendedAns = Object.values(extendedTestAns);
  
      useEffect(() => {
        handleData();
      }, []);
  
    const handleData = () => {
      let newArr =[];
    for (let i = 0; i < rawExtendedAns.length; i++) {
      
      const filteredExtendedAns = Object.values(rawExtendedAns)[i]['data'];
      let dataObj = { qid: filteredExtendedAns.question.qid, value: filteredExtendedAns.option.value};
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
        navigation.navigate('Assessment break down');
      }, 200);
    }

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
                source={Images.stockEmoji}
                resizeMode='contain'
                style={styles.image}
            />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>On the path to become a great leader</Text>

        <Text style={styles.descriptionText}>
          “The journey of a thousand miles begins with one step.” Let us guide you to better leadership through actionable metrics.
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <Button
          onPress={() => navigation.navigate('Leadership Assessment Extended')}
          mode="contained"
          style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </Button>
      </View>
      <View style={styles.spacer} />
    </View>
  );
};

export default MilestoneSignpost2;

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
    backgroundColor: '#F7EEFF', 
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
