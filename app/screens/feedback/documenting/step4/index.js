import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Button } from 'react-native-paper';
import {
  ButtonSelection,
  HintIndicator,
  CalendarPicker,
  DateTimePicker,
  Text
} from 'app/components';
import FeedbackActions from 'app/store/feedback/feedbackRedux';
import { getStep4Data } from 'app/store/selectors';
import labels from 'app/locales/en';
import styles from './styles';
import containerStyles from '../styles';

const DocumentingStep4 = props => {
  const dispatch = useDispatch();
  const stepData = useSelector(getStep4Data);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateSelected, setDate] = useState({
    label: '',
    value: '',
  });
  const [isCompleted, setCompletion] = useState(false);
  const dateToday = moment().format('ll');
  const yesterday = moment().subtract(1, 'days').format('ll');

  useEffect(() => {
    console.log('yest', yesterday);
    console.log('tod', dateToday)
  },[])
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const selectDate = date => {
    let dateValue = '';
    console.log('data', date);
    if(date === 'Today') { 
      dateValue = dateToday
    } else { 
      dateValue = yesterday
    }
    setDate({ label: date, value: dateValue });
    setCompletion(true)
  }

  const handleConfirm = date => {
    console.log('date picked', date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Text type='h6' style={containerStyles.stepTitleText}>{labels.feedbackDocumenting.dateToGiveFeedback}</Text>
      <ButtonSelection
        title={labels.common.today}
        type={'Radio'}
        onPress={() => selectDate('Today')}
        selected={dateSelected === labels.common.today}
      />
      <ButtonSelection 
        title={labels.common.yesterday} 
        type={'Radio'}
        onPress={() => selectDate('Yesterday')}
        selected={dateSelected === labels.common.yesterday}
      />
      <CalendarPicker onPress={() => showDatePicker()} />
      <DateTimePicker
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <View>
        <Button
          disabled={!isCompleted}
          onPress={() => handleNext()}
          mode='contained'>
            {labels.common.next}
          </Button>
      </View>
    </View>
  );
};

export default DocumentingStep4;
