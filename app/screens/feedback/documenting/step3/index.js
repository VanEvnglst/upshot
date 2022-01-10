import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Button } from 'react-native-paper';
import {
  ButtonSelection,
  Text,
  CalendarPicker,
  DateTimePicker,
} from 'app/components';
import {
  getDocumentingId,
  getChosenType,
  getStep1Data,
  getStep2Data,
  getStep3Data,
  getDocumentingStep,
} from 'app/store/selectors';
import DocumentingActions from 'app/store/feedback/documentingRedux';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const DocumentingStep3 = props => {
  const { route } = props;
  const { feedbackDocumenting } = labels;
  const dispatch = useDispatch();
  const step1Data = useSelector(getStep1Data);
  const step2Data = useSelector(getStep2Data);
  const stepData = useSelector(getStep3Data);
  const docuId = useSelector(getDocumentingId);
  const typeId = useSelector(getChosenType);
  const activeStep = useSelector(getDocumentingStep);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateSelected, setDateSelected] = useState({
    label: '',
    value: '',
  });
  const dateToday = moment().format('ll');
  const yesterday = moment().subtract(1, 'days').format('ll');
  const [isCompleted, setCompletion] = useState(false);

  // useEffect(() => {
  //   // if (stepData.data) (stepData.data)
  //   //setFeedbackTopic(stepData.data);
  //   //setCompletion(true);
  // }, [stepData]);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);
  

  // const handleExistingDate = date => {
  //   console.log('exist', date);
  //   if(date === moment(new Date().format('ll')))
  //     setDateSelected({ label: 'Today', value: dateToday });
  //   if(date !== )
  // }

  const selectDate = (dateLabel, date) => {
    if (dateLabel === ('Today' || 'Yesterday')) {
      setDateSelected({ label: 'On a different date' });
    } else {
      setDateSelected({ label: dateLabel });
    }
    setDateSelected({ value: date });
    setCompletion(true);
  };

  const handleDatePicked = date => {
    const modDate = moment(date).format('llll');
    const dateArr = modDate.split(/[ ,]+/);
    const dateLabel = `${dateArr[0]}, ${dateArr[1]} ${dateArr[2]}`;
    setDateSelected({ label: dateLabel, value: date });
    hideDatePicker();
  };

  const handleBack = () => {
    dispatch(DocumentingActions.setActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    const step2 = step2Data.data.map(obj => obj.id);
    const data = {
      docuId,
      typeId: typeId.id,
      step1: step1Data,
      step2,
      dateSelected: dateSelected.value,
    };
    dispatch(DocumentingActions.updateFeedbackDocumenting(data));
  };

  return (
    <View style={containerStyles.container}>
      <Text
        type="h6"
        style={containerStyles.stepTitleText}
        testID={'txt-documentingStep3-label'}>
        {feedbackDocumenting.dateToGiveFeedback}
      </Text>
      <ButtonSelection
        title={labels.common.today}
        type={'Radio'}
        onPress={() => selectDate(labels.common.today, dateToday)}
        selected={dateSelected.value === dateToday}
      />
      <ButtonSelection
        title={labels.common.yesterday}
        type={'Radio'}
        onPress={() => selectDate(labels.common.yesterday, yesterday)}
        selected={dateSelected.value === yesterday}
      />
      <CalendarPicker
        onPress={() => showDatePicker()}
        text={dateSelected.dateLabel}
      />
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
          testID={'btn-documentingStep3-back'}>
          {labels.common.back}
        </Button>
        <Button
          mode="contained"
          disabled={!isCompleted}
          onPress={() => handleNext()}
          testID={'btn-documentingStep3-next'}>
          {labels.common.next}
        </Button>
      </View>
    </View>
  );
};

export default DocumentingStep3;

DocumentingStep3.propTypes = {
  stepData: PropTypes.object,
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
  setDocumentingData: PropTypes.func,
};

DocumentingStep3.defaultProps = {
  stepData: {},
  activeStep: 1,
  setActiveStep: () => {},
  setDocumentingData: () => {},
};
