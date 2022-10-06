import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
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
  const entryStep = useSelector(state =>
    state.captureMoment.get('entryActiveStep'),
  );
  const dateLogged = useSelector(
    state => state.captureMoment.get('data').dateLogged,
  );
  const [stopDoingData, setStopDoingData] = useState('');

  const handleContinue = () => {
    dispatch(
      CaptureMomentActions.setFeedbackMomentData('stopDoing', stopDoingData),
    );
    dispatch(CaptureMomentActions.setEntryActiveStep(entryStep + 1));
  };

  const handleTextChange = (newText) => { 
    setStopDoingData(newText)
    setTimeout(() => {
      dispatch(CaptureMomentActions.setFeedbackMomentData('stopDoing', newText))
    }, 300);
  }

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="on-drag">
      <View style={styles.mainQuestionText}>
        <Text style={styles.mainQuestionText}>
          I want my team member to{' '}
          <Text style={styles.highlightedText}>stop doing</Text>...
        </Text>
        <Text style={styles.logDateText}>{dateLogged}</Text>
      </View>
      <KeyboardAvoidingView
        style={{ marginTop: 24 }}>
        <TextInput 
          placeholder="Describe what you want the team member to stop doing" 
          multiline 
          numberOfLines={30}
          textAlignVertical='top'
          placeholderTextColor='#66708080'
          style={[styles.textInputStyle, { marginBottom: 25, color: '#667080' }]}
          value={stopDoingData}
          onChangeText={newText => handleTextChange(newText)}  
        />
      <Button
        mode="contained"
        onPress={() => handleContinue()}
        style={{ height: 48, justifyContent: 'center', alignItems: 'center' }}>
        Continue
      </Button>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StopDoingEntry;

StopDoingEntry.propTypes = {};


StopDoingEntry.defaultProps ={} ;