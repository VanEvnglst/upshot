import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { ButtonSelection, Text } from '../../../../components';
import { getRelatedTopicsList } from '../../../../store/selectors';
import feedbackTopics from '../../../../enums/feedback-topics';
// import styles from './styles';
import labels from '../../../../locales/en';

const DocumentingStep3 = props => {
  const feedbackList = useSelector(getRelatedTopicsList);
  const [feedbackTopic, setFeedbackTopic] = useState([]);
  const [hint, showHint] = useState(false);

  const _handleFeedbackTopic = item => {
    // TODO: Fix array handling
    setFeedbackTopic({ ...feedbackTopic, item });
  };
  return (
    <View style={styles.container}>
      <Text type="h6" style={{ marginTop: 20, marginBottom: 10 }}>
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
    </View>
  );
};

export default DocumentingStep3;
