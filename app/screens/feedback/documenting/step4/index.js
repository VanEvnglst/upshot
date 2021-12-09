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
  
 
  const [isCompleted, setCompletion] = useState(false);
  

  useEffect(() => {
    if (stepData.data) setDate({ value: stepData.data });
    console.log('yest', yesterday);
    console.log('tod', dateToday);
  }, [stepData]);








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
       
      }),
    );
    
  };

  return (
    <View style={styles.container}>
      <Text type="h6" style={containerStyles.stepTitleText}>
        
      </Text>
      
      
     
      
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
