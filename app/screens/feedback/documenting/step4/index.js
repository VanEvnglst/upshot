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

  const firstTimeFeedback = {
    id: 1,
    display: `${feedbackDocumenting.firstTime} ${staff.firstName} ${feedbackDocumenting.firstTimeCont}`,
    value: true,
  };
  const followUpFeedback = {
    id: 2,
    display: `${feedbackDocumenting.followUp}${staff.firstName}`,
    value: false,
  };

  useEffect(() => {
    if (stepData.data) {
      console.warn('data', stepData.data);
      if (stepData.data.id === 1) setValue(firstTimeFeedback);
      else setValue(followUpFeedback);
      setCompletion(true);
    }
  }, [stepData]);

  const handleBack = () => {
    dispatch(DocumentingActions.setDocumentingData('step4', value));
    dispatch(DocumentingActions.setActiveStep(activeStep - 1));
  };

  const handleSelection = value => {
    setValue(value);
    setCompletion(true);
  };

  const handleNext = () => {
    dispatch(DocumentingActions.setDocumentingData('step4', value));
    if (value.id === followUpFeedback.id) {
      dispatch(DocumentingActions.setDocumentingStatus('maxStep', 5));
      dispatch(DocumentingActions.setActiveStep(activeStep + 1));
    } else {
      dispatch(DocumentingActions.setDocumentingStatus('maxStep', 4));
      dispatch(
        DocumentingActions.updateFeedbackDocumenting({
          shouldClose: true,
        }),
      );
    }
  };

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
        title={firstTimeFeedback.display}
        onPress={() => handleSelection(firstTimeFeedback)}
        selected={value.id === firstTimeFeedback.id}
      />
      <ButtonSelection
        type={'Radio'}
        title={followUpFeedback.display}
        onPress={() => handleSelection(followUpFeedback)}
        selected={value.id === followUpFeedback.id}
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
