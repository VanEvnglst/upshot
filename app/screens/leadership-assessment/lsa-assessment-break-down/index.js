import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  BackHandler,
  Image,
  TouchableOpacity,
  Text,
  ScrollView
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { CardStyleInterpolators } from '@react-navigation/stack';
import LeadershipSkillAreaActions from 'app/store/LSARedux';
import lsaTypes from 'app/models/LSATypes';
import Images from 'app/assets/images';



const AssessmentBreakDown = props => {
  const { navigation } = props;
  const dispatch = useDispatch();

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

  }, []);

  const checkCategoryStatus = useSelector(state => state.leadershipSkillArea.get('skillAreaTestSteps'));
  const completedCnt = useSelector(state => state.leadershipSkillArea.get('testFinishedCount'))
  const retrieveExtendedQs = async (element) => {
    await dispatch(LeadershipSkillAreaActions.fetchExtendedQuestions());
      setTimeout(() => {
        navigation.navigate('Assessment', {screen: 'Leadership Assessment Extended', params: element });
    }, 300);
    
  };

  const SkillAreaItem = ({element}) => {

    return (
      <>
        {checkCategoryStatus[element.categoryState] == 'completed' ?
          <TouchableOpacity
            accessibilityRole='button'
            style={styles.skillAreaItem}
            //onPress={() => navigation.navigate('Leadership Assessment Extended', { category: title, dataValue: value })}  
            
          >
            <View style={[styles.stepCounter, {borderColor: element.color}]}>
              <Text style={[styles.stepText, {color: element.color,}]}>7/7</Text>
            </View>
            <View style={styles.skillTitleContainer}>
              <Text style={styles.skillTitleText}>{element.title} {element.icon}</Text>
              <View style={styles.completedContainer}>
                <Text style={styles.completedText}>100% completed</Text>
              </View>
            </View>
          </TouchableOpacity>
          :
          <TouchableOpacity
            accessibilityRole='button'
            style={styles.skillAreaItem}
            //onPress={() => navigation.navigate('Leadership Assessment Extended', { category: title, dataValue: value })}  
            onPress={() => retrieveExtendedQs(element)}
          >
            <View style={[styles.stepCounter, {borderColor: '#BAC0CA'}]}>
              <Text style={[styles.stepText, {color: '#667080',}]}>0/7</Text>
            </View>
            <View style={styles.skillTitleContainer}>
              <Text style={styles.skillTitleText}>{element.title} {element.icon}</Text>
             <Text style={styles.completionText}>0% completed</Text>
            </View>
            <View
              accessibilityRole='button'
            >
              <Icon
                name='chevron-forward-outline'
                size={24}
              />
            </View>
          </TouchableOpacity>
        }
        </>
      )

    }


  return <SafeAreaView style={styles.container}>
    <ScrollView>
    <View style={styles.headerContainer}>
      <TouchableOpacity
        accessibilityRole='button'
        style={styles.icon}
      >
        <Icon
          name='chevron-back-outline'
          size={24}
        />
      </TouchableOpacity>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>
          Leadership Skill Area
        </Text>
      </View>
      <View style={styles.horizontalSpacer} />
    </View>
    <View style={styles.titleContainer}>
      <View style={styles.titleUser}>
        {/* <Text style={styles.userText}>Hi Jaykey Del Mar</Text> */}
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.levelText}>Let's get started </Text>
          <Image source={Images.bigGrinEmoji} style={{ height: 16, width: 16 }} />
          </View>
        <Text style={styles.descriptionText}>Your Upshot journey awaits. With a little jump start, you will see where your strength lies by answering these areas.</Text>
        <Text style={styles.completedLabelText}>Completed Tests</Text>
        <Text style={styles.completedTestText}>{ completedCnt }/5</Text>
      </View>
      <View style={styles.ringsContainer}/>
    </View>
    <View style={styles.contentContainer}>
      
    {lsaTypes.map(element => {

return (
  <SkillAreaItem
        element={element}
      />
);

    })}
        {completedCnt === 5 ?
          <TouchableOpacity
            style={{ marginTop: 36, backgroundColor: '#667080', height: 48, justifyContent: 'center', alignItems: 'center', width: '100%', borderRadius: 6 }}
            onPress={() => navigation.navigate('Assessment', { screen: 'Calculate Assessment Score'})}>
           <Text style={{ fontSize: 16, lineHeight: 22, fontWeight: '700', color: '#FFFFFF' }}>Recalculate Indicator Levels</Text>
          </TouchableOpacity>
          :
          <View style={{ marginTop: 36, backgroundColor: '#EEF1F4', height: 48, justifyContent: 'center', alignItems: 'center', width: '100%', borderRadius: 6 }}>
            <Text style={{ fontSize: 16, lineHeight: 22, fontWeight: '700', color: '#66708080' }}>Recalculate Indicator Levels</Text>
          </View>
        }
        <TouchableOpacity style={{marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{ fontSize: 16, lineHeight: 22, fontWeight: '400', color: '#667080' }}>Skip for Later</Text>
        </TouchableOpacity>
        <View style={{height: 50}} />
    </View>
    </ScrollView>
  </SafeAreaView>
};

export default AssessmentBreakDown;

AssessmentBreakDown.propTypes = {};

AssessmentBreakDown.defaultProps = {};
