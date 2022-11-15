import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { Button, ProgressBar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'app/components';
import LeadershipSkillAreaActions from 'app/store/LSARedux';
import styles from './styles';

const LeadershipAssessmentGuide = props => {
  const { navigation } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LeadershipSkillAreaActions.fetchOverviewQuestions());
  }, []);

  const retrieveData = async () => { 
    setTimeout(() => {
      navigation.navigate('Leadership Assessment');
    }, 300);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ProgressBar
          progress={1 / 15}
          color={'#667080'}
          style={styles.progressBar}
        />
      </SafeAreaView>
      <View style={styles.imageContainer} />
      <View style={styles.contentContainer}>
        <Text
          type='h4'
          weight='bold'
          style={styles.guideTitleText}>
          {'Ready to start\nyour journey? 🚀'}
        </Text>
        <Text 
          type='body2'
          weight='regular'
          style={styles.guideDescriptionText}>
          {
            'Be yourself and answer honestly to find out your strengths in 5 leadership skill areas. Doing this will help us build your personalized leadership profile.\n\nIt will take 2 minutes or less.'
          }
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Button
          onPress={() => retrieveData()}
          mode="contained"
          style={styles.button}>
          <Text
            type='body2'
            weight='bold'
            style={styles.buttonText}>
            Start Now
          </Text>
        </Button>
      </View>
      <View style={styles.spacer} />
    </View>
  );
};

export default LeadershipAssessmentGuide;


