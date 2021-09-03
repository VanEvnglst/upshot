import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {
  Wrapper,
  Button,
  ButtonSelection,
  HintIndicator,
  Header
} from '../../../components';
import discussionTypes from '../../../enums/discussion-type';
import styles from './styles';
import labels from '../../../locales/en';

const FeedbackIntroduction = () => {
  const [discussion, selectDiscussion] = useState({
    id: null,
    title: '',
    hint: '',
  });
  const [hint, showHint] = useState(false);

  const _handleSelection = (item) => {
    selectDiscussion(item);
  };

  return (
      <Wrapper>
        <Header headerLeft />
        <View style={styles.contentContainer}>
          <Text style={styles.labelPadding}>
            {labels.feedbackIntro.action}
          </Text>
          {discussionTypes.map((item, i) => (
            <ButtonSelection
              title={item.title}
              type={'Radio'}
              content={item.hint}
              showHint={hint}
              onPress={() => _handleSelection(item)}
              selected={item.id === discussion.id}
            />
          ))}
          <HintIndicator showHint={hint} onPress={() => showHint(!hint)} />
        </View>
        <View style={styles.btnContainer}>
          <Button onPress={() => console.log('nav')} block disabled={discussion.id === null}>
            Continue
          </Button>
        </View>
      </Wrapper>
  );
};

export default FeedbackIntroduction;
