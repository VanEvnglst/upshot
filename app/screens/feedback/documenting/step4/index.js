import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Button } from 'react-native-paper';
import {
  ButtonSelection,
  CalendarPicker,
  DateTimePicker,
  Text,
} from 'app/components';
import DocumentingActions from 'app/store/feedback/documentingRedux';
import { getStep4Data, getStep2Data, getStep3Data, getDocumentingStep, getDocumentingId } from 'app/store/selectors';
import labels from 'app/locales/en';
import styles from './styles';
import containerStyles from '../styles';

const DocumentingStep4 = props => {
  const dispatch = useDispatch();
  const stepData = useSelector(getStep4Data);
  const step2 = useSelector(getStep2Data);
  const step3 = useSelector(getStep3Data);
  const docuId = useSelector(getDocumentingId);
  const activeStep = useSelector(getDocumentingStep);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateSelected, setDate] = useState('');
  const [dateLabel, setDateLabel] = useState('');
  const [isCompleted, setCompletion] = useState(false);
  const dateToday = moment().format('ll');
  const yesterday = moment().subtract(1, 'days').format('ll');

  useEffect(() => {
    if (stepData.data) setDate({ value: stepData.data });
    console.log('yest', yesterday);
    console.log('tod', dateToday);
  }, [stepData]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const selectDate = (dateLabel, date) => {
    console.log('dateLabel', dateLabel);
    console.log('date', date);

    if (dateLabel === ('Today' || 'Yesterday')) {
      setDateLabel('On a different date');
    } else {
      setDateLabel(dateLabel);
    }
    setDate(date);
    setCompletion(true);
  };

  const handleDatePicked = date => {
    const modDate = moment(date).format('llll');
    const dateArr = modDate.split(/[ ,]+/);
    const dateLabel = `${dateArr[0]}, ${dateArr[1]} ${dateArr[2]}`;
    selectDate(dateLabel, date);
    hideDatePicker();
  };

  const handleBack = () => {
    dispatch(DocumentingActions.setActiveStep(activeStep - 1));
  };

  const submitDocumenting = () => {
    const payload = {
      docuId,
      step2,
      step3,
      dateSelected
    }
    dispatch(
      DocumentingActions.setDocumentingData('step4', {
        dateLabel,
        dateSelected,
      }),
    );
    dispatch(DocumentingActions.updateFeedbackDocumenting(payload));
  };

  return (
    <View style={styles.container}>
      <Text type="h6" style={containerStyles.stepTitleText}>
        {labels.feedbackDocumenting.dateToGiveFeedback}
      </Text>
      <ButtonSelection
        title={labels.common.today}
        type={'Radio'}
        onPress={() => selectDate(labels.common.today, dateToday)}
        selected={dateSelected === dateToday}
      />
      <ButtonSelection
        title={labels.common.yesterday}
        type={'Radio'}
        onPress={() => selectDate(labels.common.yesterday, yesterday)}
        selected={dateSelected === yesterday}
      />
      <CalendarPicker onPress={() => showDatePicker()} text={dateLabel} />
      <DateTimePicker
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDatePicked}
        onCancel={hideDatePicker}
      />
      <View style={containerStyles.btnContainer}>
        <Button
          mode="text"
          onPress={() => handleBack()}
          testID={'btn-documentingStep4-back'}>
          {labels.common.back}
        </Button>
        <Button
          testID={'btn-documentingStep4-next'}
          disabled={!isCompleted}
          onPress={() => submitDocumenting()}
          mode="contained">
          {labels.common.next}
        </Button>
      </View>
    </View>
  );
};

export default DocumentingStep4;

DocumentingStep4.propTypes = {
  stepData: PropTypes.object,
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
  setDocumentingData: PropTypes.func,
};

DocumentingStep4.defaultProps = {
  stepData: {},
  activeStep: 1,
  setActiveStep: () => {},
  setDocumentingData: () => {},
};
