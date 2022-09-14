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
import CaptureMomentActions from 'app/store/CaptureFeedbackMomentRedux';
import Images from 'app/assets/images';
import styles from './styles';
import CatchAttentionEntry from './catch-attention';
import ImpactBehaviorEntry from './impact-behavior';
import ContinueEntry from './continue-more';
import DoLessEntry from './do-less';
import StopDoingEntry from './stop-doing';
import AddMoreEntry from './add-more';
import ReviewFeedbackEntry from './review-entry';

const RecordFeedbackEntry = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const activeStep = useSelector(state => state.captureMoment.get('entryActiveStep'));
  const maxStep = useSelector(state => state.captureMoment.get('entryMaxStep'));
  const staffName = useSelector(state => state.captureMoment.get('data'));
  const feedbackType = useSelector(
    state => state.captureMoment.get('data'),
  );
  const layerTwo = useSelector(state => state.captureMoment.get('data').step3);

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
    if (layerTwo.selectedLayerTwo.requires_face_to_face)
      dispatch(CaptureMomentActions.setCaptureMaxStep(7));
  }, []);

  const handleGoBack = () => {
    if (activeStep === 1) navigation.goBack();
    else dispatch(CaptureMomentActions.setEntryActiveStep(activeStep - 1));
  };
  const EntryQuestion2 = () => {

  }
  const handleContinue = () => {
   navigation.navigate('Review Entry')
  }

  const handleStepContent = () => {
    if(maxStep === 7) {
      switch(activeStep) {
        case 1:
          return <CatchAttentionEntry {...props}/>
        case 2:
          return <ImpactBehaviorEntry {...props}/>
        case 3:
          return <ContinueEntry {...props}/>
        case 4:
          return <DoLessEntry {...props}/>
        case 5:
          return <StopDoingEntry {...props} />
        case 6:
          return <AddMoreEntry {...props}/>
        case 7:
          return <ReviewFeedbackEntry {...props}/>
      }
    } else 
    switch(activeStep) {
      case 1:
        return <CatchAttentionEntry {...props}/>
      case 2:
        return <ImpactBehaviorEntry {...props}/>
      case 3:
        return <ContinueEntry {...props}/>
      case 4:
        return <DoLessEntry {...props}/>
      case 5:
        return <AddMoreEntry {...props}/>
      case 6:
        return <ReviewFeedbackEntry {...props}/>
    }
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
          <Text style={styles.headerText}>{feedbackType.step2.title} Feedback</Text>
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
      {activeStep !== 6 && <View style={styles.selectedNameContainer}>
          <View style={styles.selectedAvatar} />
          <Text style={styles.selectedName}>{staffName.step1.name}</Text>
        </View>}
        {handleStepContent()}
      </View> 
    </SafeAreaView>
  );
};

export default RecordFeedbackEntry;

RecordFeedbackEntry.propTypes = {};

RecordFeedbackEntry.defaultProps = {};

