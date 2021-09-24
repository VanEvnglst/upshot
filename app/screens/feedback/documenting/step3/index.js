import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { ButtonSelection, Text } from '../../../../components';
import feedbackTopics from '../../../../enums/feedback-topics';
// import styles from './styles';
import labels from '../../../../locales/en';

const DocumentingStep3 = props => {
  const [feedbackTopic, setFeedbackTopic] = useState([]);
  const [hint, showHint] = useState(false);

  const _handleFeedbackTopic = item => {
    // TODO: Fix array handling
    setFeedbackTopic({...feedbackTopic, item});
  }
  return(

    <View style={styles.container}>
      <Text type='h6' style={{ marginTop: 20, marginBottom: 10 }}>{labels.feedbackDocumenting.feedbackRelation}</Text>
      {feedbackTopics.map((item, i) => (
        <ButtonSelection
          title={item.title}
          type={'Check'}
          content={item.hint}
          showHint={hint}
          onPress={() => _handleFeedbackTopic(item)}
          selected={item.id === feedbackTopic.id}
          key={i}
        />
      ))}
    </View>
  );
}

export default DocumentingStep3;