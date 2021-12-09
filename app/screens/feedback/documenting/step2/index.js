import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import { ButtonSelection, Text, TextInput } from 'app/components';
import DocumentingActions from 'app/store/feedback/documentingRedux';
import {
  getRelatedTopicsList,
  getDocumentingStep,
  getStep2Data,
} from 'app/store/selectors';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const DocumentingStep2 = props => {
  const { route } = props;
  const { feedbackDocumenting } = labels;
  const dispatch = useDispatch();
  const stepData = useSelector(getStep2Data);
  const feedbackList = useSelector(getRelatedTopicsList);
  const activeStep = useSelector(getDocumentingStep);
  const [isCompleted, setCompletion] = useState(false);
  const [feedbackTopic, setFeedbackTopic] = useState([]);
  const [otherTopic, setOtherTopic] = useState({
    id: 0,
    value: '',
  });

  useEffect(() => {
    // if (stepData.data) _handleFeedbackType(stepData.data);
  }, [stepData]);

  const handleBack = () => {
    dispatch(DocumentingActions.setActiveStep(activeStep - 1));
  };
  const handleNext = () => {
    dispatch(DocumentingActions.setDocumentingData('step2', feedbackTopic));
    dispatch(DocumentingActions.setActiveStep(activeStep + 1));
  };

  const checkSelectedTopic = item => {
    if (item.topic_name === 'Others') {
    }
    return feedbackTopic.some(topic => topic === item);
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
    setOtherTopic({ value: item });
  };

  return (
    <View style={containerStyles.container}>
      <ScrollView>
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
          label="Something else"
          placeholder="Something else"
          // style={{}}
          value={otherTopic.value}
          onChangeText={otherTopic => handleOtherTopic(otherTopic)}
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
            mode="contained"
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
