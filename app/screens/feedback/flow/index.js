import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  Wrapper,
  Button,
  ButtonSelection,
  HintIndicator,
  Header,
  Text,
} from '../../../components';
import discussionTypes from '../../../enums/discussion-type';
import styles from './styles';
import labels from '../../../locales/en';

const FeedbackFlow = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const [discussion, selectDiscussion] = useState({
    id: null,
    title: '',
    hint: '',
  });
  const [hint, showHint] = useState(false);

  const _handleSelection = item => {
    selectDiscussion(item);
  };

  const proceedToNextStep = () => {
    // console.log('discussion', discussion);
    // dispatch({
    //   type: 'setFeedbackFlow',
    //   payload: discussion,
    // });
    navigation.navigate('FeedbackGuide');
  };

  return (
    <Wrapper>
      <Header
        headerLeft={{
          onPress: () => navigation.goBack(),
        }}
      />
      <View style={styles.contentContainer}>
        <Text type="h6" style={styles.labelPadding}>
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
        <Button
          onPress={() => proceedToNextStep()}
          block
          disabled={discussion.id === null}>
          Continue
        </Button>
      </View>
    </Wrapper>
  );
};

export default FeedbackFlow;
