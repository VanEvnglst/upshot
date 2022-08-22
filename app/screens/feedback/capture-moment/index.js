import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  BackHandler,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import CaptureMomentActions from 'app/store/CaptureFeedbackMomentRedux';
import CaptureMomentStep1  from './capture-step1';
import CaptureMomentStep2  from './capture-step2';
import CaptureMomentStep3  from './capture-step3';
import styles from './styles';

const CaptureFeedbackMoment = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const activeStep = useSelector(state => state.captureMoment.get('activeStep'));
  const maxStep = 4;
  const staffName = useSelector(state => state.captureMoment.get('step1').data);
  const [selectedStaff, setSelectedStaff] = useState();
  const [feedbackType, setFeedbackType] = useState();

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => {
        return true;
      });
  }, []);

  const handleGoBack = () => {
    if (activeStep === 1) navigation.goBack();
    else dispatch(CaptureMomentActions.setCaptureActiveStep(activeStep - 1));
  }


  const setStaffSelection = async (item) => {
    console.log(item);
   await dispatch(CaptureMomentActions.setCaptureData('step1', item))
    console.log(staffName);
    setSelectedStaff(staffName)    
    console.warn('select',staffName)
    setTimeout(() => {
      dispatch(CaptureMomentActions.setCaptureActiveStep(activeStep + 1));
    }, 300);
  }

  const handleStepContent = () => {
    switch (activeStep) {
      case 1:
        return <CaptureMomentStep1 
        onPress={(item) => setStaffSelection(item)}
        />;
      case 2:
        return <CaptureMomentStep2 />;
      case 3:
        return <CaptureMomentStep3 />;
    }
  };

  return (<View style={styles.container}>
    <SafeAreaView>
      <View style={styles.headerContainer}>
      <TouchableOpacity
          accessibilityRole="button"
          onPress={() => handleGoBack()}
          style={styles.icon}
      >
          <Icon name="chevron-back-outline" size={24} />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Give feedback</Text>
        </View>
        <View style={styles.headerSpacer}/>
      </View>
      <View style={styles.stepsContainer}>
        {Array.apply(null, { length: maxStep }).map((item, i) => (
          <View
            key={i}
            style={i + 1 <= activeStep ? styles.activeStep : styles.inactiveStep}
          />
        ))}
      </View>
    </SafeAreaView>
    <View style={styles.contentContainer}>
      <View style={styles.receipientContainer}>
        <Text style={styles.toText}>To:</Text>
        {selectedStaff &&
        <View style={styles.selectedNameContainer}>
          <View style={styles.selectedAvatar}/>
          <Text style={styles.selectedName}>{selectedStaff.name}</Text></View>
        }
      </View>
      {handleStepContent()}
    </View>
  </View>);
};

export default CaptureFeedbackMoment;

CaptureFeedbackMoment.propTypes = {};

CaptureFeedbackMoment.defaultProps = {};
