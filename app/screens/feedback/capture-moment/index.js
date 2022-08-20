import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import CaptureMomentStep1  from './capture-step1';
import CaptureMomentStep2  from './capture-step2';
import CaptureMomentStep3  from './capture-step3';
import styles from './styles';

const CaptureFeedbackMoment = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const activeStep = 3;
  const maxStep = 4;


  const handleStepContent = () => {
    switch (activeStep) {
      case 1:
        return <CaptureMomentStep1 />;
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
          onPress={() => navigation.goBack()}
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
        <View style={styles.activeStep}/>
        <View style={styles.inactiveStep}/>
        <View style={styles.inactiveStep}/>
        <View style={styles.inactiveStep}/>
      </View>
    </SafeAreaView>
    <View style={styles.contentContainer}>
      <View style={styles.receipientContainer}>
        <Text style={styles.toText}>To:</Text>
      </View>
      {handleStepContent()}
      {/* <CaptureMomentStep1/> */}
      {/* <CaptureMomentStep2 />  */}
    </View>
  </View>);
};

export default CaptureFeedbackMoment;

CaptureFeedbackMoment.propTypes = {};

CaptureFeedbackMoment.defaultProps = {};
