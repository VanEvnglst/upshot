import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  BackHandler,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { CardStyleInterpolators } from '@react-navigation/stack';

const AssessmentBreakDown = props => {
  const { navigation } = props;

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


  const SkillAreaItem = ({ title }) => {
    return (
      <TouchableOpacity 
        accessibilityRole='button'
        style={styles.skillAreaItem}
        onPress={() => navigation.navigate('Leadership Assessment Guide', { category: title })}  
      >
        <View style={styles.stepCounter}>
          <Text style={styles.stepText}>0/7</Text>
        </View>
        <View style={styles.skillTitleContainer}>
          <Text style={styles.skillTitleText}>{title}</Text>
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
    )
  }


  return <SafeAreaView style={styles.container}>
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
        <Text style={styles.userText}>Hi Jaykey Del Mar</Text>
        <Text style={styles.levelText}>You're at Level 1</Text>
        <Text style={styles.descriptionText}>Complete the 5 LSA Tests and earn more points to unlock the next level.</Text>
        <Text style={styles.completedLabelText}>Completed Tests</Text>
        <Text style={styles.completedTestText}>0/5</Text>
      </View>
      <View style={styles.ringsContainer}/>
    </View>
    <View style={styles.contentContainer}>
      <SkillAreaItem
        title={'Empathy 💓'}
      />
      <SkillAreaItem
        title={'Openness to Learn 🧠'}
      />
      <SkillAreaItem
        title={'Authenticity 👐'}
      />
      <SkillAreaItem
        title={'Achievement-Orientation 🏅'}
      />
      <SkillAreaItem
        title={'Trust Building 🤝'}
      />
    </View>
  </SafeAreaView>;
};

export default AssessmentBreakDown;

AssessmentBreakDown.propTypes = {};

AssessmentBreakDown.defaultProps = {};
