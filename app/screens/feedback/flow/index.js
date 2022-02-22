import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import {
  Wrapper,
  ButtonSelection,
  HintIndicator,
  Header,
  Text,
} from 'app/components';
import { getFeedbackFlowList } from 'app/store/selectors';
import FeedbackActions from 'app/store/feedback/FeedbackRedux';
import labels from 'app/locales/en';
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
    dispatch(FeedbackActions.setFeedbackFlow(discussion));
    navigation.navigate('FeedbackType');
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
        <Button
          style={!completed ? styles.disabledBtn : styles.button}
          onPress={() => proceedToNextStep()}
          mode="contained"
          disabled={!completed}>
          <Text
            type="button"
            style={!completed ? styles.disabledText : styles.btnText}>
            {labels.common.continue}
          </Text>
        </Button>
      </View>
    </Wrapper>
  );
};

export default FeedbackFlow;

FeedbackFlow.propTypes = {
  setFeedbackFlow: PropTypes.func,
  flowList: PropTypes.array,
};

FeedbackFlow.defaultProps = {
  setFeedbackFlow: () => {},
  flowList: [],
};