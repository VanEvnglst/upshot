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
  getChosenFlow,
  getStep3Data,
  getDocumentingStep,
} from 'app/store/selectors';
import DocumentingActions from 'app/store/feedback/DocumentingRedux';
import Images from 'app/assets/images';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const DocumentingStep3 = props => {
  const { route } = props;
  const { feedbackDocumenting } = labels;
  const dispatch = useDispatch();
  const stepData = useSelector(getStep3Data);
  const docuId = useSelector(getDocumentingId);
  const type = useSelector(getChosenType);
  const flow = useSelector(getChosenFlow);
  const activeStep = useSelector(getDocumentingStep);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateSelected, setDateSelected] = useState({
    label: '',
    value: '',
  });
  const dateToday = moment().format('ll');
  const yesterday = moment().subtract(1, 'days').format('ll');
  const [isCompleted, setCompletion] = useState(false);

  useEffect(() => {
    if (stepData.data) {
      const modDate = stepData.data.value !== '' ? moment(stepData.data.value).format('ll') : '';
      const dateArr = modDate.split(/[ ,]+/);
      var dateLabel = `${dateArr[0]}, ${dateArr[1]} ${dateArr[2]}`;
      if(modDate === dateToday || modDate === yesterday) {
        dateLabel = 'On a different date'
      }
      if(modDate === '') {
        dateLabel = 'On a different date'
      }
      selectDate(dateLabel, modDate);
      setCompletion(true);
    }
  }, [stepData]);

  // useEffect(() => {
  //   handleContent()
  // }, []);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const selectDate = (dateLabel, date) => {
    if (dateLabel === 'Today' || dateLabel === 'Yesterday') {
      setDateSelected({ label: 'On a different date' });
    } else {
      setDateSelected(prevState => ({
        ...prevState,
        label: dateLabel,
      }));
    }
    setDateSelected(prevState => ({
      ...prevState,
      value: date,
    }));
    setCompletion(true);
  };

  const handleDatePicked = date => {
    const modDate = moment(date).format('llll');
    const dateArr = modDate.split(/[ ,]+/);
    const dateLabel = `${dateArr[0]}, ${dateArr[1]} ${dateArr[2]}`;
    selectDate(dateLabel, modDate);
    hideDatePicker();
  };

  const handleBack = () => {
    dispatch(DocumentingActions.setDocumentingData('step3', dateSelected));
    dispatch(DocumentingActions.setActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    dispatch(DocumentingActions.setDocumentingData('step3', dateSelected));
    if (type.id === 1 && flow.id === 1)

      dispatch(DocumentingActions.updateFeedbackDocumenting({
        shouldClose: true,
      }));
    else
    dispatch(DocumentingActions.setActiveStep(activeStep + 1));
    // const step2 = step2Data.data.map(obj => obj.id);
    // var topicListStr = '[';
    // step2.forEach((item, index) => {
    //   if (index !== step2.length - 1) topicListStr += `${item},`;
    //   else topicListStr += `${item}`;
    // });
    // topicListStr += ']';
    // const dateSel = moment(dateSelected.value).format('MMM DD, YYYY');
    // const params = new URLSearchParams();
    // params.append('documenting_id', docuId);
    // params.append('staff_id', step1Data.data.id);
    // params.append('topics', topicListStr);
    // params.append('incident_date', dateSel);
    // params.append('pos_or_cor', typeId.id);
    // dispatch(DocumentingActions.updateFeedbackDocumenting(params));
  };

  // const handleContent = () => {
  //   if (flow.id === 1) return <ScheduledContent />;
  //   else return <OnTheSpotContent />;
  // };

  const ScheduledContent = () => {
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
          text={dateSelected.label}
          icon={Images.calendar}
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

  const OnTheSpotContent = () => {
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
          text={dateSelected.label}
          icon={Images.calendar}
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

  return (
    <View style={containerStyles.container}>
      {handleContent()}
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
