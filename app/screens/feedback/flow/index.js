import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  Wrapper,
  Button,
  ButtonSelection,
  HintIndicator,
  Header,
  Text,
} from '../../../components';
import { getFeedbackFlowList } from '../../../store/feedbackRedux';
import labels from '../../../locales/en';
import styles from './styles';

const FeedbackFlow = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const flowList = useSelector(getFeedbackFlowList);

  const [discussion, selectDiscussion] = useState({
    id: null,
    title: '',
    hint: '',
  });
  const [completed, setCompleted] = useState(false);
  const [hint, showHint] = useState(false);

  const _handleSelection = item => {
    selectDiscussion(item);
    setCompleted(true);
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
        {flowList.map((item, i) => (
          <ButtonSelection
            key={item.id}
            title={item.display_name}
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
        <Button onPress={() => proceedToNextStep()} block disabled={!completed}>
          Continue
        </Button>
      </View>
    </Wrapper>
  );
};

export default FeedbackFlow;
