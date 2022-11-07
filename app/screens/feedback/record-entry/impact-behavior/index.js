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

const ImpactBehaviorEntry = props => {
  const dispatch = useDispatch();
  const entryStep = useSelector(state => state.captureMoment.get('entryActiveStep'));
  const dateLogged = useSelector(state => state.captureMoment.get('data').dateLogged);
  const [impactBehavior, setImpactBehavior] = useState('');

  const handleContinue = () => {
    dispatch(CaptureMomentActions.setFeedbackMomentData('impactBehavior', impactBehavior));
    dispatch(CaptureMomentActions.setEntryActiveStep(entryStep + 1))
  }

  const handleTextChange = (newText) => { 
    setImpactBehavior(newText)
    setTimeout(() => {
      dispatch(CaptureMomentActions.setFeedbackMomentData('impactBehavior', newText))
    }, 300);
  }

  return (
    <ScrollView
    keyboardShouldPersistTaps='handled'
    keyboardDismissMode='on-drag'
    >
    <View style={styles.mainQuestionText}>
      <Text style={styles.mainQuestionText}>
        What {' '}
        <Text style={styles.highlightedText}>impact</Text> does this behavior have on the business or the team?
      </Text>
      <Text style={styles.logDateText}>{dateLogged}</Text>
    </View>
    <KeyboardAvoidingView
      style={{ marginTop: 24,}}>
      <TextInput 
        placeholder="Describe how this would affect the organization"
        multiline 
        numberOfLines={30}
        textAlignVertical='top'
        placeholderTextColor='#66708080'
        style={[styles.textInputStyle, { marginBottom: 25, color: '#667080' }]}
        value={impactBehavior}
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
  )
}

export default ImpactBehaviorEntry;


ImpactBehaviorEntry.propTypes = {};

ImpactBehaviorEntry.defaultProps = {};
