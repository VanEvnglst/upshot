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
  const entryStep = useSelector(state => state.captureMoment.get('entryActiveStep'));
  const dateLogged = useSelector(state => state.captureMoment.get('data').dateLogged);
  const [additionalData, setAdditionalData] = useState('');

  const handleContinue = () => {
    dispatch(CaptureMomentActions.setFeedbackMomentData('additionalNotes', additionalData));
    dispatch(CaptureMomentActions.setEntryActiveStep(entryStep + 1))
  }

  return (
<ScrollView>
      <View style={styles.mainQuestionText}>
        <Text style={styles.mainQuestionText}>
          Anything else to add?
        </Text>
        <Text style={styles.logDateText}>{dateLogged}</Text>
      </View>
      <KeyboardAvoidingView
        style={{ marginTop: 24}}>
        <TextInput 
          placeholder="Text goes here" 
          multiline
          numberOfLines={30}
          textAlignVertical='top'
          placeholderTextColor='#66708080'
          style={[styles.textInputStyle, { marginBottom: 25, color: '#667080' }]}
          value={additionalData}
          onChangeText={newText => setAdditionalData(newText)}
        />
      
      <Button
        mode="contained"
        onPress={() => handleContinue()}
        style={{ height: 48, justifyContent: 'center', alignItems: 'center' }}>
        Continue
      </Button>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default StopDoingEntry;