import React, { useState } from 'react';
import { View } from 'react-native';
import { HintIndicator, ButtonSelection, Text } from 'app/components';
import feedbackTypes from 'app/enums/feedback-type';
import styles from './styles';
import labels from 'app/locales/en';

const DocumentingStep2 = props => {
  const [feedbackType, setFeedbackType] = useState({
    id: null,
    title: '',
    hint: '',
  });
  const [hint, showHint] = useState(false);

  const _handleFeedbackType = item => {
    setFeedbackType(item);
  };
  return (
    <View style={styles.container}>
      <Text type="h6" style={{ marginTop: 20, marginBottom: 10 }}>
        {labels.feedbackDocumenting.feedbackToGive}
      </Text>
      {feedbackTypes.map((item, i) => (
        <ButtonSelection
          title={item.title}
          type={'Radio'}
          content={item.hint}
          showHint={hint}
          onPress={() => _handleFeedbackType(item)}
          selected={item.id === feedbackType.id}
          key={i}
        />
      ))}
      <HintIndicator showHint={hint} onPress={() => showHint(!hint)} />
    </View>
  );
};

export default DocumentingStep2;
