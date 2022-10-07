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


const ClarificationResponse = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const activeStep = useSelector(state => state.frontlinerFeedback.get('activeStep'));
  const maxStep = useSelector(state => state.frontlinerFeedback.get('maxStep'));
  const indexValue = activeStep / maxStep;
  const [selectedOption, setSelectedOption] = useState(5);
  
 
  const handleNext = () => {
        if (activeStep === maxStep) {
          dispatch(FrontlinerFeedbackActions.setResponseActiveStep(1))
          navigation.navigate('Home');
        }
        else {
          dispatch(FrontlinerFeedbackActions.setResponseActiveStep(activeStep + 1))
        }
      }
    
  const handleValueChange = (newValue) => { 
    setSelectedOption(newValue)
  }

  return(
 <>
      <View style={{ paddingHorizontal: 24, marginTop: 30, paddingBottom: 20, borderBottomWidth: 1}}>
        <SafeAreaView>
          <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
          <TouchableOpacity
            accessibilityRole="button"
            onPress={{}}>
              <Icon name="chevron-back-outline" size={24} font-size="6px" color='#FFFFFF' />
            </TouchableOpacity>
            <Text style={{fontWeight: '700', fontSize: 16, lineHeight: 22, color: "#FFFFFF", minWidth: 172, textAlign: 'center'}}>Assessment</Text>
            <TouchableOpacity
            accessibilityRole='button'>
              <Text style={{fontWeight: '500', fontSize: 16, lineHeight: 22, color: "#FFFFFF"}}>Cancel</Text>
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
                <Text style={{fontSize: 16, fontWeight: '500', lineHeight: 24, color: '#FFFFFF'}}>Jasmine Diaz</Text>
              </View>
              <Text style={{fontWeight: '400', fontSize: 12, lineHeight: 20, color: '#B1B5C3'}}>Corrective Feedback | Attitude | Poor Greetings</Text>
            </View>

            <View style={{paddingTop: 30}}>
          <Text style={{ fontWeight: '400', fontSize: 14, lineHeight: 24, color: '#B1B5C3' }}>On a scale of 1 to 10...</Text>
          <Text style={{ fontWeight: '700', fontSize: 24, lineHeight: 32, marginTop: 8, color: '#FFFFFF' }}>My manager clarified the questions I had </Text>
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
            <Text style={{fontWeight: '500', fontSize: 14, lineHeight: 24, color: '#FCFCFD'}}>1</Text>
            <Text style={{fontWeight: '500', fontSize: 14, lineHeight: 24, color: '#FCFCFD'}}>10</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{ backgroundColor: '#FFFFFF', minWidth: 351, height: 48, borderRadius: 12, marginTop: '50%' }}
          onPress={() => handleNext()}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 16}}>
            <Text style={{fontWeight: '700', fontSize: 16, lineHeight: 16, textAlignVertical: 'center'}}>Next</Text>
            <Icon name='arrow-forward-outline' size={12} />
            </View>
        </TouchableOpacity>
            </View>
          </>

  );
};

export default ClarificationResponse;

ClarificationResponse.propTypes = {};

ClarificationResponse.defaultPropst = {};