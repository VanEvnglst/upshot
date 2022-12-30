import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Snackbar } from 'react-native-paper';
import { ButtonSelection, Text } from 'app/components';
import {
  getDocumentingStep,
  getStaffName,
  getStep5Data,
} from 'app/store/selectors';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const DocumentingStep5 = props => {
  const { feedbackDocumenting } = labels;
  const dispatch = useDispatch();
  const activeStep = useSelector(getDocumentingStep);
  const stepData = useSelector(getStep5Data);
  const staff = useSelector(getStaffName);
  const [followUpValue, setFollowUpValue] = useState('');
  const [isCompleted, setCompletion] = useState(false);
  const [isSnackbarVisible, setSnackbarVisible] = useState(false);

  const firstFollowUp = {
    value: 1,
    display: `${feedbackDocumenting.firstFollowUp} ${staff.firstName} ${feedbackDocumenting.aboutObservation}`,
  };
  const secondFollowUp = {
    value: 2,
    display: `${feedbackDocumenting.secondFollowUp} ${staff.firstName} ${feedbackDocumenting.aboutObservation}`,
  };
  const thirdFollowUp = {
    value: 3,
    display: `${feedbackDocumenting.thirdFollowUp} ${staff.firstName} ${feedbackDocumenting.aboutObservation}`,
  };

  useEffect(() => {
    if (stepData.data) {
      //TODO: handle data if continuing current documenting
      switch(stepData.data.value) {
        case 1:
          setFollowUpValue(firstFollowUp)
          break;
        case 2:
          setFollowUpValue(secondFollowUp)
          break;
        case 3:
          setFollowUpValue(thirdFollowUp);
          break;
      }
      setCompletion(true);
    }
  }, [stepData]);


  // useEffect(() => {
  //   if(reflectingError !== '') 
  //     setSnackbarVisible(true)
  // }, [reflectingError]);

  const dismissSnackbar = () => setSnackbarVisible(false);

  const handleBack = () => {
    dispatch(DocumentingActions.setDocumentingData('step5', followUpValue));
    dispatch(DocumentingActions.setActiveStep(activeStep - 1));
  };

  const handleSelection = value => {
    setFollowUpValue(value);
    setCompletion(true);
  };

  const handleNext = () => {
    dispatch(DocumentingActions.setDocumentingData('step5', followUpValue));
    dispatch(
      DocumentingActions.updateFeedbackDocumenting({
        shouldClose: true,
      }),
    );
  };

  return (
    <View style={containerStyles.container}>
      <Text
        type="h6"
        style={containerStyles.stepTitleText}
        testID={'txt-documentingStep5-label'}>
        {feedbackDocumenting.followUpTitle}
      </Text>
      <ButtonSelection
        type={'Radio'}
        title={firstFollowUp.display}
        onPress={() => handleSelection(firstFollowUp)}
        selected={followUpValue.display === firstFollowUp.display}
      />
      <ButtonSelection
        type={'Radio'}
        title={secondFollowUp.display}
        onPress={() => handleSelection(secondFollowUp)}
        selected={followUpValue.display === secondFollowUp.display}
      />
      <ButtonSelection
        type={'Radio'}
        title={thirdFollowUp.display}
        onPress={() => handleSelection(thirdFollowUp)}
        selected={followUpValue.display === thirdFollowUp.display}
      />
      <View style={containerStyles.btnContainer}>
        <Button
          mode="text"
          onPress={() => handleBack()}
          testID={'btn-documentingStep5-back'}>
          {labels.common.back}
        </Button>
        <Button
          testID={'btn-documentingStep5-next'}
          disabled={!isCompleted}
          onPress={() => handleNext()}
          mode="contained">
          {labels.common.next}
        </Button>
      </View>
      {/* <Snackbar
        visible={isSnackbarVisible}
        onDismiss={dismissSnackbar}
      >
        <Text>{reflectingError}</Text>
      </Snackbar> */}
    </View>
  );
};

export default DocumentingStep5;

DocumentingStep5.propTypes = {};

DocumentingStep5.defaultProps = {};
