import React, { useEffect, useState } from "react";
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
import { AssessmentQuestions } from 'app/models/FrontlinerAssessmentModelß';


const FrontlinerGeneralAssessment = props => { 
  const { navigation } = props;
  const dispatch = useDispatch();
  const activeStep = useSelector(state => state.frontlinerFeedback.get('activeStep'));
  const maxStep = useSelector(state => state.frontlinerFeedback.get('maxStep'));
  const indexValue = activeStep / maxStep;
  const [selectedOption, setSelectedOption] = useState(5);
  const clarificationStatus = true;
  const supportStatus = true;

  useEffect(() => {
    if (supportStatus) {
      dispatch(FrontlinerFeedbackActions.setResponseStatus('maxStep', 8));
    } else {
      dispatch(FrontlinerFeedbackActions.setResponseStatus('maxStep', 7));
    }
  }, []);

  const questionTitle = AssessmentQuestions[activeStep - 1].question;
  
  const handleNext = () => {
      if (activeStep === maxStep) {
        dispatch(FrontlinerFeedbackActions.setResponseActiveStep(1))
        navigation.navigate('Home');
      }
      else {
        dispatch(FrontlinerFeedbackActions.setResponseActiveStep(activeStep + 1));
      }
  }

  
  return (
  <>
<View style={styles.mainContentContainer}>
        <SafeAreaView>
          <View style={styles.headerContainer}>
          <TouchableOpacity
            accessibilityRole="button"
            onPress={{}}>
              <Icon name="chevron-back-outline" size={24} font-size="6px" color='#FFFFFF' />
            </TouchableOpacity>
            <Text style={styles.headerText}>Assessment</Text>
            <TouchableOpacity
            accessibilityRole='button'>
              <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
          </View>
          <ProgressBar
            progress={indexValue}
            color={'#FFFFFF'}
            style={styles.progressBar}></ProgressBar>
        </SafeAreaView>
        </View>
            <View style={[styles.contentContainer]}>
        <View style={{borderBottomWidth: 1, paddingBottom: 15}}>      
        <View style={{ flexDirection: 'row' }}>
                <Icon/>
                <Text style={styles.managerName}>Jasmine Diaz</Text>
              </View>
              <Text style={styles.topicText}>Corrective Feedback | Attitude | Poor Greetings</Text>
            </View>

            <View style={{paddingTop: 30}}>
          <Text style={styles.ratingText}>On a scale of 1 to 10...</Text>
          <Text style={styles.questionText}>{ questionTitle }</Text>
        </View>
        
        <View style={{marginTop: 157}}>
          <Slider
            style={{}}
            minimumValue={1}
            maximumValue={10}
            step={1}
            value={selectedOption}
            onValueChange={newValue => handleValueChange(newValue)}
            minimumTrackTintColor="#3772FF"
            maximumTrackTintColor="#353945"
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.ratingLabel}>1</Text>
            <Text style={styles.ratingLabel}>10</Text>
          </View>
        </View>
          <TouchableOpacity
          style={{ backgroundColor: '#FFFFFF', minWidth: 351, height: 48, borderRadius: 12, marginTop: '50%' }}
          onPress={() => handleNext()}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Next</Text>
            <Icon name='arrow-forward-outline' size={12} />
          </View>
        </TouchableOpacity>
        {/* } */}
          </View>
   </>
  );
};

export default FrontlinerGeneralAssessment;

FrontlinerGeneralAssessment.propTypes = {};

FrontlinerGeneralAssessment.defaultPropst = {};