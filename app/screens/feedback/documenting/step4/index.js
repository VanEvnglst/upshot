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
import DocumentingActions from 'app/store/feedback/DocumentingRedux';
import {
  getStep4Data,
  getStep2Data,
  getStep3Data,
  getDocumentingStep,
  getDocumentingId,
  getStaffName,
} from 'app/store/selectors';
import labels from 'app/locales/en';
import styles from './styles';
import containerStyles from '../styles';

const DocumentingStep4 = props => {
  const { feedbackDocumenting } = labels;
  const dispatch = useDispatch();
  const stepData = useSelector(getStep4Data);
  const step2 = useSelector(getStep2Data);
  const step3 = useSelector(getStep3Data);
  const docuId = useSelector(getDocumentingId);
  const staff = useSelector(getStaffName);
  const activeStep = useSelector(getDocumentingStep);
  const [value, setValue] = useState('');
  const [isCompleted, setCompletion] = useState(false);

  const firstTimeFeedback = `${feedbackDocumenting.firstTime} ${staff.firstName} ${feedbackDocumenting.firstTimeCont}`;
  const followUpFeedback = `${feedbackDocumenting.followUp}${staff.firstName}`;

  // useEffect(() => {
  //   if (stepData.data) setDate({ value: stepData.data });
  //   console.log('yest', yesterday);
  //   console.log('tod', dateToday);
  // }, [stepData]);

  const handleBack = () => {
    dispatch(DocumentingActions.setActiveStep(activeStep - 1));
  };

  const handleSelection = value => {
    setValue(value);
    setCompletion(true);
  };

  const handleNext = () => {
    dispatch(DocumentingActions.setDocumentingData('step4', value));
    if (value === followUpFeedback) {
      dispatch(DocumentingActions.setDocumentingStatus('maxStep', 5));
      setTimeout(() => {
        dispatch(DocumentingActions.setActiveStep(activeStep + 1));
      }, 200);
    } else {
      console.warn('submit documenting');
    }
  };
  // const submitDocumenting = () => {
  //   const payload = {
  //     docuId,
  //     step2,
  //     step3,
  //     dateSelected
  //   }
  //   dispatch(
  //     DocumentingActions.setDocumentingData('step4', {

  //     }),
  //   );

  // };

  return (
    <View style={styles.container}>
      <Text
        type="h6"
        style={containerStyles.stepTitleText}
        testID={'txt-documentingStep4-label'}>
        {feedbackDocumenting.firstOrFollowUpTitle}
      </Text>
      <ButtonSelection
        type={'Radio'}
        title={firstTimeFeedback}
        onPress={() => handleSelection(firstTimeFeedback)}
        selected={value === firstTimeFeedback}
      />
      <ButtonSelection
        type={'Radio'}
        title={followUpFeedback}
        onPress={() => handleSelection(followUpFeedback)}
        selected={value === followUpFeedback}
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
          onPress={() => handleNext()}
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
