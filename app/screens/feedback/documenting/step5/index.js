import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import { ButtonSelection, Text } from 'app/components';
import DocumentingActions from 'app/store/feedback/DocumentingRedux';
import { getDocumentingStep, getStaffName } from 'app/store/selectors';
import labels from 'app/locales/en';
import containerStyles from '../styles';



const DocumentingStep5 = props => {
  const { feedbackDocumenting } = labels;
  const dispatch = useDispatch();
  const activeStep = useSelector(getDocumentingStep);
  const staff = useSelector(getStaffName);
  const [followUpValue, setFollowUpValue] = useState('');
  const [isCompleted, setCompletion] = useState(false);

  const firstFollowUp = `${feedbackDocumenting.firstFollowUp} ${staff.firstName} ${feedbackDocumenting.aboutObservation}`;
  const secondFollowUp = `${feedbackDocumenting.secondFollowUp} ${staff.firstName} ${feedbackDocumenting.aboutObservation}`;
  const thirdFollowUp = `${feedbackDocumenting.thirdFollowUp} ${staff.firstName} ${feedbackDocumenting.aboutObservation}`;

  const handleBack = () => {
    dispatch(DocumentingActions.setDocumentingData('step5', followUpValue))
    dispatch(DocumentingActions.setActiveStep(activeStep - 1));
  }

  const handleSelection = value => {
    setFollowUpValue(value);
    setCompletion(true);
  }

  const handleNext = () => {

  }

  return (
    <View style={containerStyles.container}>
      <Text
      type='h6'
      style={containerStyles.stepTitleText}
      testID={'txt-documentingStep5-label'}
      >{feedbackDocumenting.followUpTitle}</Text>
       <ButtonSelection
        type={'Radio'}
        title={firstFollowUp}
        onPress={() => handleSelection(firstFollowUp)}
        selected={value === firstFollowUp}
      />
      <ButtonSelection
        type={'Radio'}
        title={secondFollowUp}
        onPress={() => handleSelection(secondFollowUp)}
        selected={value === secondFollowUp}
      />
      <ButtonSelection
        type={'Radio'}
        title={thirdFollowUp}
        onPress={() => handleSelection(thirdFollowUp)}
        selected={value === thirdFollowUp}
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
    </View>
  )
}

export default DocumentingStep5;

DocumentingStep5.propTypes = {

};

DocumentingStep5.defaultProps = {};