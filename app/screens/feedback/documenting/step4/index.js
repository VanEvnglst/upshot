import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  ButtonSelection,
  HintIndicator,
  CalendarPicker,
  DateTimePicker,
} from '../../../../components';
import FeedbackActions from '../../../../store/feedbackRedux';
import labels from '../../../../locales/en';
import styles from './styles';

const DocumentingStep4 = props => {
  const dispatch = useDispatch();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateSelected, setDate] = useState();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.log('date picked', date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      {/* <Text>{labels.feedbackDocumenting.feedbackToGive}</Text> */}
      <ButtonSelection
        title={labels.common.today}
        type={'Radio'}
        // content={item.hint}
        // showHint={hint}
        onPress={() => console.log}
        selected={false}
      />
      <ButtonSelection title={labels.common.yesterday} type={'Radio'} />
      <CalendarPicker onPress={() => showDatePicker()} />
      <DateTimePicker
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <HintIndicator showHint={false} onPress={() => showHint(!hint)} />
    </View>
  );
};

export default DocumentingStep4;
