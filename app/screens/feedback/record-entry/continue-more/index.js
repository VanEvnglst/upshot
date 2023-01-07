import React, { useState  } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import RecordEntryActions from 'app/store/feedback/RecordEntryRedux';
import { getRecordEntryActiveStep, getRecordEntryMaxStep} from 'app/store/selectors';
import { Text } from 'app/components';
import Images from 'app/assets/images';
import styles from '../styles';

const ContinueEntry = () => {
  const dispatch = useDispatch();
  const activeStep = useSelector(getRecordEntryActiveStep);
  const dateLogged = useSelector(
    state => state.captureMoment.get('data').dateLogged,
  );
  const [doMoreData, setDoMoreData] = useState('');

  const handleContinue = () => {
    dispatch(RecordEntryActions.setEntryData('doMore', doMoreData));
    dispatch(RecordEntryActions.setEntryActiveStep(entryStep + 1));
  };

  const handleTextChange = newText => {
    setDoMoreData(newText);
    setTimeout(() => {
      dispatch(RecordEntryActions.setEntryData('doMore', newText));
    }, 300);
  };

  return (
    <ScrollView>
      <View style={styles.mainQuestionText}>
        <Text style={styles.mainQuestionText}>
          I want my team member to{' '}
          <Text style={styles.highlightedText}>continue and do more of</Text>...
        </Text>
        <Text style={styles.logDateText}>{dateLogged}</Text>
      </View>
      <KeyboardAvoidingView style={{ marginTop: 24 }}>
        <TextInput
          placeholder="Describe what you'd want them to do more of..."
          multiline
          numberOfLines={30}
          textAlignVertical="top"
          placeholderTextColor="#66708080"
          style={[
            styles.textInputStyle,
            { marginBottom: 25, color: '#667080' },
          ]}
          value={doMoreData}
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

export default ContinueEntry;

ContinueEntry.propTypes = {};

ContinueEntry.defaultProps = {};
