import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import { ButtonSelection, Text, TextInput } from 'app/components';
import {
  getRelatedTopicsList,
  getDocumentingStep,
  getStep2Data,
  getOtherTopic,
} from 'app/store/selectors';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const DocumentingStep2 = props => {
  const { route } = props;
  const { feedbackDocumenting } = labels;
  const dispatch = useDispatch();
  const stepData = useSelector(getStep2Data);
  const stepOtherData = useSelector(getOtherTopic);
  const feedbackList = useSelector(getRelatedTopicsList);
  const activeStep = useSelector(getDocumentingStep);
  const [isCompleted, setCompletion] = useState(false);
  const [feedbackTopic, setFeedbackTopic] = useState([]);
  const [otherTopic, setOtherTopic] = useState('');

  // TODO: useEffect for handling data if coming from review route to change button container

  useEffect(() => {
    if (stepData.data)
      if (stepData.data.length > 0) {
        setFeedbackTopic(stepData.data);
        setOtherTopic(stepOtherData);
        setCompletion(true);
      }
  }, [stepData]);

  const handleBack = () => {
    setData();
    dispatch(DocumentingActions.setActiveStep(activeStep - 1));
  };
  const handleNext = () => {
    setData();
    dispatch(DocumentingActions.setActiveStep(activeStep + 1));
  };

  const setData = () => {
    dispatch(DocumentingActions.setDocumentingData('step2', feedbackTopic));
    dispatch(DocumentingActions.setDocumentingStatus('otherTopic', otherTopic));
  }

  const checkSelectedTopic = item => {
    return feedbackTopic.some(topic => topic.id === item.id);
  };

  const handleFeedbackTopic = item => {
    let newTopicList = feedbackTopic;

    if (checkSelectedTopic(item))
      newTopicList = newTopicList.filter(newTopic => newTopic.id !== item.id);
    else newTopicList = [...newTopicList, item];
    setFeedbackTopic(newTopicList);

    if (newTopicList.length !== 0) setCompletion(true);
    else setCompletion(false);
  };

  const handleOtherTopic = item => {
    setOtherTopic(item);
    setTimeout(() => {
      validate();
    }, 200);
  };

  const validate = () => {
    if (feedbackTopic.length !== 0 || otherTopic.length !== 0)
      setCompletion(true);
    else setCompletion(false);
  };

  return (
    <View style={containerStyles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Text
          type="h6"
          style={containerStyles.stepTitleText}
          testID={'txt-documentingStep2-label'}>
          {feedbackDocumenting.feedbackRelation}
        </Text>
        {feedbackList.map((item, i) => (
          <ButtonSelection
            testID={'btn-documentingStep2-topic'}
            title={item.topic_name}
            type={'Check'}
            onPress={() => handleFeedbackTopic(item)}
            selected={checkSelectedTopic(item)}
            key={item.id}
          />
        ))}
        <TextInput
          style={{ marginTop: 10 }}
          label={labels.common.inputHint}
          placeholder={labels.common.inputHint}
          value={otherTopic}
          onChangeText={otherTopic => handleOtherTopic(otherTopic)}
          onEndEditing={() => validate()}
          description={labels.common.inputDesc}
        />
        <View style={containerStyles.btnContainer}>
          <Button
            mode="text"
            onPress={() => handleBack()}
            testID={'btn-documentingStep2-back'}>
            {labels.common.back}
          </Button>
          <Button
            style={styles.button}
            disabled={!isCompleted}
            onPress={() => handleNext()}
            mode={isCompleted ? 'contained' : 'text'}
            testID={'btn-documetingStep2-next'}>
            {labels.common.next}
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

DocumentingStep2.propTypes = {
  stepData: PropTypes.object,
  feedbackList: PropTypes.array,
  activeStep: PropTypes.number,
  setDocumentingData: PropTypes.func,
  setActiveStep: PropTypes.func,
  getStep2Data: PropTypes.object,
};

DocumentingStep2.defaultProps = {
  stepData: {},
  feedbackList: [],
  activeStep: 0,
  getStep2Data: {},
  setDocumentingData: () => {},
  setActiveStep: () => {},
};

export default DocumentingStep2;
