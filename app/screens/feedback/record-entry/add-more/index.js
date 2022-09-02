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
import CaptureMomentActions from 'app/store/CaptureFeedbackMomentRedux';
import Images from 'app/assets/images';
import styles from '../styles';


const StopDoingEntry = () => {
  const dispatch = useDispatch();
  const entryStep = useSelector(state => state.captureMoment.get('entryActiveStep'));


  const handleContinue = () => {
    dispatch(CaptureMomentActions.setEntryActiveStep(entryStep + 1))
  }

  return (
<View>
      <View style={styles.mainQuestionText}>
        <Text style={styles.mainQuestionText}>
          Anything else to add?
        </Text>
        <Text style={styles.logDateText}>Mon. Aug 23, 2022</Text>
      </View>
      <KeyboardAvoidingView
        style={{ marginTop: 24, marginBottom: 50, height: '50%' }}>
        <TextInput placeholder="Text goes here" multiline />
      </KeyboardAvoidingView>
      <Button
        mode="contained"
        onPress={() => handleContinue()}
        style={{ height: 48, justifyContent: 'center', alignItems: 'center' }}>
        Continue
      </Button>
    </View>
  )
}

export default StopDoingEntry;