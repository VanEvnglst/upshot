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
  Text
} from 'app/components';
import { getFeedbackTypeList } from 'app/store/selectors';
import FeedbackActions from 'app/store/feedback/FeedbackRedux';
import labels from 'app/locales/en';
import styles from './styles';

const FeedbackType = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const typeList = useSelector(getFeedbackTypeList);

  const [feedbackType, setFeedbackType] = useState({
    id: null,
    type: '',
    hint: '',
  });
  const [hint, showHint] = useState(false);
  const [isCompleted, setCompletion] = useState(false);

  const handleFeedbackType = item => {
    setFeedbackType(item);
    setCompletion(true);
  };

  const proceedToNext = () => {
    dispatch(FeedbackActions.setFeedbackType(feedbackType));
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
        <Text
          type='h6'
          style={styles.labelPadding}
          testID={'txt-feedbackType-label'}
          >{labels.feedbackIntro.feedbackToGive}</Text>
        {typeList.map((item, i) => (
          <ButtonSelection
            title={item.display_name}
            type={'Radio'}
            content={item.hint}
            showHint={hint}
            onPress={() => handleFeedbackType(item)}
            selected={item.id === feedbackType.id}
            key={item.id}
            testID={'btn-feedbackType-type'}
          />
        ))}
        <HintIndicator
          showHint={hint}
          onPress={() => showHint(!hint)}
          testID={'btn-feedbackType=hint'}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          style={!isCompleted ? styles.disabledBtn : styles.button}
          onPress={() => proceedToNext()}
          mode='contained'
          disabled={!isCompleted}
        >
          <Text
            type={'button'}
            style={!isCompleted ? styles.disabledText : styles.btnText}
          >
            {labels.common.continue}
          </Text>
        </Button>
      </View>
    </Wrapper>
  )
}

export default FeedbackType;

FeedbackType.propTypes = {
  setFeedbackType: PropTypes.func,
  typeList: PropTypes.array
};

FeedbackType.defaultProps = {
  setFeedbackType: () => {},
  typeList: [],
};