import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PreparingActions from 'app/store/feedback/PreparingRedux';
import { getPreparingStep } from 'app/store/selectors';  
import { Text } from 'app/components';
import Images from 'app/assets/images';
import labels from 'app/locales/en';
import styles from './styles';
import containerStyles from '../styles';

const GuideContent = ({ image, title, content }) => {
  return (
    <View 
      style={styles.guideContainer}
      testID={'view-preparingStep3C-guideCard'}  
    >
      <Image 
        source={image} 
        resizeMode={'contain'} 
      />
      <View style={styles.guideContent}>
        <Text 
          type="overline" 
          style={styles.guideTitle}
          testID={'txt-preparingStep3C-guideTitle'}
        >
          {title}
        </Text>
        <Text 
          type="body2" 
          style={styles.guideText}
          testID={'txt-preparingStep3C-guideContent'}
        >
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

  const handleBack = () => {
    dispatch(PreparingActions.setPrepActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    dispatch(PreparingActions.setPrepActiveStep(activeStep + 1));
  };
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text 
          type="h6"
          style={styles.stepTitleText}
          testID={'txt-preparingStep3C-title'}  
        >
          {describeDiscuss.listenToResponse}
        </Text>
        <Text 
          type="body1" 
          style={styles.descriptionText}
          testID={'txt-preparingStep3C-content'}
        >
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
      <View style={containerStyles.btnContainer}>
      <Button
          mode='text'
          onPress={() => handleBack()}
          testID={'btn-preparingStep3C-back'}
        >
          {labels.common.back}
        </Button>
        <Button
          onPress={() => handleNext()}
          mode={'contained'}
          testID={'btn-preparingStep3C-next'}
        >
          {labels.common.next}
        </Button>
      </View>
    </ScrollView>
  );
};

export default PreparingStep3C;

PreparingStep3C.propTypes = {
  setPrepActiveStep: PropTypes.func,
  activeStep: PropTypes.number.isRequired,
};

PreparingStep3C.defaultProps = {
  setPrepActiveStep: () => {},
  activeStep: 1
};