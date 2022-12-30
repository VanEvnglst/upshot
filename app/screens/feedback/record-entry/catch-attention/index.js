import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import RecordEntryActions from 'app/store/feedback/RecordEntryRedux';
import { getRecordEntryActiveStep } from 'app/store/selectors';
import Images from 'app/assets/images';
import styles from '../styles';

const CatchAttentionEntry = props => {
  const dispatch = useDispatch();
  const activeStep = useSelector(getRecordEntryActiveStep);
  const dateLogged = useSelector(
    state => state.captureMoment.get('data').dateLogged,
  );
  const [attentionDetail, setAttentionDetail] = useState('');

  const handleContinue = () => {
    dispatch(
      RecordEntryActions.setEntryData(
        'catchAttention',
        attentionDetail,
      ),
    );
    dispatch(RecordEntryActions.setEntryActiveStep(activeStep + 1));
  };

  const handleTextChange = newText => {
    setAttentionDetail(newText);
    setTimeout(() => {
      dispatch(
        RecordEntryActions.setEntryData('catchAttention', newText),
      );
    }, 300);
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="on-drag">
      <View style={styles.questionContainer}>
        <Text style={styles.mainQuestionText}>
          What did your{' '}
          <Text style={styles.highlightedText}>team member do</Text> that caught
          your attention?
        </Text>
        <Text style={styles.logDateText}>{dateLogged}</Text>
      </View>

      <KeyboardAvoidingView style={{ marginTop: 24 }}>
        <TextInput
          placeholder="Describe their actions or behavior in detail"
          multiline
          numberOfLines={30}
          textAlignVertical="top"
          placeholderTextColor="#66708080"
          style={[
            styles.textInputStyle,
            { marginBottom: 25, color: '#667080' },
          ]}
          value={attentionDetail}
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

export default CatchAttentionEntry;

CatchAttentionEntry.propTypes = {};

CatchAttentionEntry.defaultProps = {};
