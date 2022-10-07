import React, { useState } from "react";
import {
  View,
  BackHandler,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { ProgressBar } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from "@react-native-community/slider";
import styles from './styles';
import FrontlinerFeedbackActions  from "app/store/frontliner/FLFeedbackRedux";
import { useDispatch, useSelector } from "react-redux";
import ClarificationResponse from "./clarified-response";
import FrontlinerGeneralAssessment from "./general-assessment";

const FrontlinerFeedbackAssessment = props => {
  const dispatch = useDispatch();
  const activeStep = useSelector(state => state.frontlinerFeedback.get('activeStep'));
  const maxStep = useSelector(state => state.frontlinerFeedback.get('maxStep'));
  const clarificationStatus = true; //isNaN(['alla', 'kdjf', 'dklf']);
  const supportStatus = true;

  const checkerDetails = () => {
    
    if (supportStatus) {
      dispatch(FrontlinerFeedbackActions.setResponseStatus('maxStep', 8));
    } else { 
      dispatch(FrontlinerFeedbackActions.setResponseStatus('maxStep', 7));
    }
  }

  const handleContent = () => { 
    checkerDetails()
    if (clarificationStatus && activeStep === 6) {
      return <ClarificationResponse {...props} />
    } else { 
      return <FrontlinerGeneralAssessment {...props} />
    }
    }

  return (
    <View style={styles.container}>
      
        { handleContent() }
        
        </View>

  );
};

export default FrontlinerFeedbackAssessment;

FrontlinerFeedbackAssessment.propTypes = {};

FrontlinerFeedbackAssessment.defaultPropst = {};