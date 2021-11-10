import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
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
        <Text type="h6" style={containerStyles.stepTitleText}>
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
          />
        ))}
        <HintIndicator showHint={hint} onPress={() => showHint(!hint)} />
      </View>
      <View style={containerStyles.btnContainer}>
        <Button mode="text" onPress={() => handleBack()}>
          {labels.common.back}
        </Button>
        <Button
          style={styles.button}
          disabled={!isCompleted}
          onPress={() => handleNext()}
          mode="contained">
          {labels.common.next}
        </Button>
      </View>
    </View>
  );
};

export default DocumentingStep2;
