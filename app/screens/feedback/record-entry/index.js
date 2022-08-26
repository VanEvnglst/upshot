import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  BackHandler,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import CaptureFeedbackMomentActions from 'app/store/CaptureFeedbackMomentRedux';
import Images from 'app/assets/images';
import styles from './styles';
import ReviewFeedbackEntry from './review-entry';

const RecordFeedbackEntry = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  let activeStep = 1;
  const maxStep = 6;

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => {
        return true;
      });
  }, []);

  const EntryQuestion2 = () => {

  }
  const handleContinue = () => {
   navigation.navigate('Review Entry')
  }

  const handleStepContent = () => {
    switch(activeStep) {
      case 1:
        return <EntryContainer/>
      case 2:
        return <ReviewFeedbackEntry/>
    }
  }

  const EntryContainer = () => {
    return (<>
           <View style={styles.selectedNameContainer}>
          <View style={styles.selectedAvatar} />
          <Text style={styles.selectedName}>name</Text>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.mainQuestionText}>
            What did your{' '}
            <Text style={styles.highlightedText}>team member do</Text> that
            caught your attention?
          </Text>
          <Text style={styles.logDateText}>Mon. Aug 23, 2022</Text>
        </View>
        <KeyboardAvoidingView style={{marginTop: 24, marginBottom: 50, height: '50%'}}>
          <TextInput
            placeholder='Text goes here'
            multiline
          />
        </KeyboardAvoidingView>
        <Button
            mode='contained'
            onPress={() => handleContinue()}
            style={{ height: 48, justifyContent: 'center', alignItems: 'center' }}
          >Continue</Button>
    </>)
  }

  return (
    <SafeAreaView style={styles.container}>
     
      <View style={styles.headerContainer}>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => handleGoBack()}
          style={styles.icon}>
          <Icon name="chevron-back-outline" size={24} />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Corrective feedback</Text>
        </View>
        <View style={styles.headerSave}>
          <Text style={styles.saveText}>Save</Text>
        </View>
      </View>
      <View style={styles.stepsContainer}>
        {Array.apply(null, { length: maxStep }).map((item, i) => (
          <View
            key={i}
            style={
              i + 1 <= activeStep ? styles.activeStep : styles.inactiveStep
            }
          />
        ))}
      </View>
      <View style={styles.contentContainer}>
        {handleStepContent()}
      </View> 
    </SafeAreaView>
  );
};

export default RecordFeedbackEntry;

RecordFeedbackEntry.propTypes = {};

RecordFeedbackEntry.defaultProps = {};

