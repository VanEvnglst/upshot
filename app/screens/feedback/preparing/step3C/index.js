import React, { useState } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PreparingActions from 'app/store/feedback/preparingRedux';
import { getPreparingStep } from 'app/store/selectors';  
import { Text } from 'app/components';
import Images from 'app/assets/images';
import labels from 'app/locales/en';
import styles from './styles';
import containerStyles from '../styles';

const GuideContent = ({ image, title, content }) => {
  return (
    <View style={styles.guideContainer}>
      <Image source={image} resizeMode={'contain'} style={styles.image} />
      <View style={styles.guideContent}>
        <Text type="overline" style={styles.guideTitle}>
          {title}
        </Text>
        <Text type="body2" style={styles.guideText}>
          {content}
        </Text>
      </View>
    </View>
  );
};

const PreparingStep3C = () => {
  const { describeDiscuss } = labels.feedbackPreparing;
  const dispatch = useDispatch();
  const activeStep = useSelector(getPreparingStep);
  const [isCompleted, setCompletion] = useState(false);

  const handleBack = () => {
    dispatch(PreparingActions.setPrepActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    dispatch(PreparingActions.setPrepActiveStep(activeStep + 1));
  };
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text type="h6" style={styles.stepTitleText}>{describeDiscuss.listenToResponse}</Text>
        <Text type="body1" style={styles.descriptionText}>
          {describeDiscuss.threeCContent}
        </Text>
        <GuideContent
          title={describeDiscuss.simpleStories}
          content={describeDiscuss.simpleStoriesContent}
          image={Images.simpleStories}
        />
        <GuideContent
          title={describeDiscuss.rightness}
          content={describeDiscuss.rightnessContent}
          image={Images.rightness}
        />
        <GuideContent
          title={describeDiscuss.agreeableness}
          content={describeDiscuss.agreeablenessContent}
          image={Images.agreeableness}
        />
      </View>
      <View>
      <Button
          mode='text'
          onPress={() => handleBack()}
          testID={'btn-preparingStep3-back'}
        >
          {labels.common.back}
        </Button>
        <Button
          onPress={() => handleNext()}
          mode={isCompleted ? 'contained' : 'text'}
          testID={'btn-preparingStep3-next'}
        >
          {labels.common.next}
        </Button>
      </View>
    </ScrollView>
  );
};

export default PreparingStep3C;

PreparingStep3C.propTypes = { };

PreparingStep3C.defaultProps = {};