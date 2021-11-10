import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import { ButtonSelection, Text } from 'app/components';
import {
  getRelatedTopicsList,
  getDocumentingStep,
  getStep3Data,
} from 'app/store/selectors';
import DocumentingActions from 'app/store/feedback/documentingRedux';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const DocumentingStep3 = props => {
  const dispatch = useDispatch();
  const stepData = useSelector(getStep3Data);
  const activeStep = useSelector(getDocumentingStep);
  const feedbackList = useSelector(getRelatedTopicsList);
  const [feedbackTopic, setFeedbackTopic] = useState([]);
  const [isCompleted, setCompletion] = useState(false);

  useEffect(() => {
    if (stepData.data) setFeedbackTopic(stepData.data);
  }, [stepData]);

  const handleBack = () => {
    dispatch(DocumentingActions.setActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    dispatch(DocumentingActions.setDocumentingData('step3', feedbackTopic));
    dispatch(DocumentingActions.setActiveStep(activeStep + 1));
  };

  const checkSelectedTopic = item => {
    if (item.topic_name === 'Others') {
    }
    console.log('item', item);
    return feedbackTopic.some(topic => topic === item);
  };

  const _handleFeedbackTopic = item => {
    let newTopicList = feedbackTopic;
    if (checkSelectedTopic(item))
      newTopicList = newTopicList.filter(newTopic => newTopic.id !== item.id);
    else newTopicList = [...newTopicList, item];
    setFeedbackTopic(newTopicList);

    if (newTopicList.length !== 0) setCompletion(true);
    else setCompletion(false);
  };

  return (
    <View style={containerStyles.container}>
      <ScrollView>
        <Text type="h6" style={containerStyles.stepTitleText}>
          {labels.feedbackDocumenting.feedbackRelation}
        </Text>
        {feedbackList.map((item, i) => (
          <ButtonSelection
            title={item.topic_name}
            type={'Check'}
            onPress={() => _handleFeedbackTopic(item)}
            selected={checkSelectedTopic(item)}
            key={item.id}
          />
        ))}
        <View style={containerStyles.btnContainer}>
          <Button mode="text" onPress={() => handleBack()}>
            {labels.common.back}
          </Button>
          <Button
            mode="contained"
            disabled={!isCompleted}
            style={styles.button}
            onPress={() => handleNext()}>
            {labels.common.next}
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default DocumentingStep3;
