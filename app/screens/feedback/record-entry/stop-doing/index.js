import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import { Text } from 'app/components';
import RecordEntryActions from 'app/store/feedback/RecordEntryRedux';
import { getRecordEntryActiveStep } from 'app/store/selectors';
import Images from 'app/assets/images';
import styles from '../styles';

const StopDoingEntry = () => {
  const dispatch = useDispatch();
  const activeStep = useSelector(getRecordEntryActiveStep);
  const dateLogged = useSelector(
    state => state.captureMoment.get('data').dateLogged,
  );
  const [stopDoingData, setStopDoingData] = useState('');

  const handleContinue = () => {
    dispatch(
      RecordEntryActions.setEntryData('stopDoing', stopDoingData),
    );
    dispatch(RecordEntryActions.setEntryActiveStep(activeStep + 1));
  };

  const handleTextChange = newText => {
    setStopDoingData(newText);
    setTimeout(() => {
      dispatch(
        RecordEntryActions.setEntryData('stopDoing', newText),
      );
    }, 300);
  };

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
      <KeyboardAvoidingView style={{ marginTop: 24 }}>
        <TextInput
          placeholder="Describe what you want the team member to stop doing"
          multiline
          numberOfLines={30}
          textAlignVertical="top"
          placeholderTextColor="#66708080"
          style={[
            styles.textInputStyle,
            { marginBottom: 25, color: '#667080' },
          ]}
          value={stopDoingData}
          onChangeText={newText => handleTextChange(newText)}
        />
        <Button
          mode="contained"
          onPress={() => handleContinue()}
          style={{
            height: 48,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          Continue
        </Button>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StopDoingEntry;

StopDoingEntry.propTypes = {};

StopDoingEntry.defaultProps = {};
