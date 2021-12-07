import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import { ButtonSelection, Text, TextInput } from 'app/components';
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
  const [otherTopic, setOtherTopic] = useState({
    id: 0,
    value: ''
  });
  const [isCompleted, setCompletion] = useState(false);

  useEffect(() => {
    if (stepData.data)
      console.log('step', stepData.data);
      //setFeedbackTopic(stepData.data);
      //setCompletion(true);
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
  }

  return (
    <View style={containerStyles.container}>
      <ScrollView>
        <Text
          type="h6"
          style={containerStyles.stepTitleText}
          testID={'txt-documentingStep3-label'}>
          {labels.feedbackDocumenting.feedbackRelation}
        </Text>
        {feedbackList.map((item, i) => (
          <ButtonSelection
            testID={'btn-documentingStep3-topic'}
            title={item.topic_name}
            type={'Check'}
            onPress={() => handleFeedbackTopic(item)}
            selected={checkSelectedTopic(item)}
            key={item.id}
          />
        ))}
        <TextInput
          label='Something else'
          placeholder='Something else'
          // style={{}}
          value={otherTopic.value}
          onChangeText={otherTopic => handleOtherTopic(otherTopic)}
        />
        <View style={containerStyles.btnContainer}>
          <Button
            mode="text"
            onPress={() => handleBack()}
            testID={'btn-documentingStep3-back'}>
            {labels.common.back}
          </Button>
          <Button
            mode="contained"
            disabled={!isCompleted}
            onPress={() => handleNext()}
            testID={'btn-documentingStep3-next'}>
            {labels.common.next}
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default DocumentingStep3;

DocumentingStep3.propTypes = {
  stepData: PropTypes.object,
  activeStep: PropTypes.number,
  feedbackList: PropTypes.array,
  setActiveStep: PropTypes.func,
  setDocumentingData: PropTypes.func,
};

DocumentingStep3.defaultProps = {
  stepData: {},
  activeStep: 1,
  feedbackList: [],
  setActiveStep: () => {},
  setDocumentingData: () => {},
};
