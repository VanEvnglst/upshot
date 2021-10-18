import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import { ButtonSelection, Text } from 'app/components';
import { getRelatedTopicsList } from 'app/store/selectors';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const DocumentingStep3 = props => {
  const feedbackList = useSelector(getRelatedTopicsList);
  const [feedbackTopic, setFeedbackTopic] = useState([]);
  const [hint, showHint] = useState(false);
  const [isCompleted, setCompletion] = useState(false);

  const handleBack = () => {};

  const handleNext = () => {};

  const _handleFeedbackTopic = item => {
    // TODO: Fix array handling
    setFeedbackTopic({ ...feedbackTopic, item });
  };
  return (
    <View style={containerStyles.container}>
      <ScrollView>
        <Text type="h6" style={containerStyles.stepTitleText}>
          {labels.feedbackDocumenting.feedbackRelation}
        </Text>
        {feedbackList.map((item, i) => (
          <ButtonSelection
            title={item.title}
            type={'Check'}
            content={item.hint}
            showHint={hint}
            onPress={() => _handleFeedbackTopic(item)}
            selected={item.id === feedbackTopic.id}
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
