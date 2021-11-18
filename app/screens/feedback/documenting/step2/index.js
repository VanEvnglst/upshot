import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import { HintIndicator, ButtonSelection, Text } from 'app/components';
import DocumentingActions from 'app/store/feedback/documentingRedux';
import {
  getFeedbackTypeList,
  getDocumentingStep,
  getStep2Data,
} from 'app/store/selectors';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const DocumentingStep2 = props => {
  const dispatch = useDispatch();
  const stepData = useSelector(getStep2Data);
  const feedbackTypes = useSelector(getFeedbackTypeList);
  const activeStep = useSelector(getDocumentingStep);
  const [isCompleted, setCompletion] = useState(false);
  const [feedbackType, setFeedbackType] = useState({
    id: null,
    type: '',
  });
  const [hint, showHint] = useState(false);

  useEffect(() => {
    if (stepData.data) _handleFeedbackType(stepData.data);
  }, [stepData]);

  const _handleFeedbackType = item => {
    setFeedbackType(item);
    setCompletion(true);
  };

  const handleBack = () => {
    dispatch(DocumentingActions.setActiveStep(activeStep - 1));
  };
  const handleNext = () => {
    dispatch(DocumentingActions.setDocumentingData('step2', feedbackType));
    dispatch(DocumentingActions.setActiveStep(activeStep + 1));
  };

  return (
    <View style={containerStyles.container}>
      <View style={containerStyles.contentContainer}>
        <Text 
          type="h6" 
          style={containerStyles.stepTitleText}
          testID={'txt-documentingStep2-label'}  
        >
          {labels.feedbackDocumenting.feedbackToGive}
        </Text>
        {feedbackTypes.map((item, i) => (
          <ButtonSelection
            title={item.display_name}
            type={'Radio'}
            content={item.hint}
            showHint={hint}
            onPress={() => _handleFeedbackType(item)}
            selected={item.id === feedbackType.id}
            key={item.id}
            testID={'select-documentingStep2-type'}
          />
        ))}
        <HintIndicator 
          showHint={hint} 
          onPress={() => showHint(!hint)} 
          testID={'btn-documentingStep2-hint'}
        />
      </View>
      <View style={containerStyles.btnContainer}>
        <Button 
          mode="text" 
          onPress={() => handleBack()}
          testID={'btn-documentingStep2-back'}
        >
          {labels.common.back}
        </Button>
        <Button
          style={styles.button}
          disabled={!isCompleted}
          onPress={() => handleNext()}
          mode="contained"
          testID={'btn-documetingStep2-next'}
        >
          {labels.common.next}
          
        </Button>
      </View>
    </View>
  );
};

DocumentingStep2.PropTypes = {
  stepData: PropTypes.object,
  feedbackTypes: PropTypes.array,
  activeStep: PropTypes.number,
  setDocumentingData: PropTypes.func,
  setActiveStep: PropTypes.func,
  getStep2Data: PropTypes.object,
};

DocumentingStep2.defaultProps = {
  stepData: {},
  feedbackTypes: [],
  activeStep: 0,
  getStep2Data: {},
  setDocumentingData: () => {},
  setActiveStep: () => {},
}

export default DocumentingStep2;


