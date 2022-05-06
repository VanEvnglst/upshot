import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
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
      testID={'view-preparingStep4C-guideCard'}>
      <Image source={image} resizeMode={'contain'} />
      <View style={styles.guideContent}>
        <Text
          type="overline"
          style={styles.guideTitle}
          testID={'txt-preparingStep4C-guideTitle'}>
          {title}
        </Text>
        <Text
          type="body2"
          style={styles.guideText}
          testID={'txt-preparingStep4C-guideContent'}>
          {content}
        </Text>
      </View>
    </View>
  );
};

const PreparingStep4C = () => {
  const { createActionPlan } = labels.feedbackPreparing;
  const dispatch = useDispatch();
  const activeStep = useSelector(getPreparingStep);

  const handleBack = () => {
    dispatch(PreparingActions.setPrepActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    dispatch(PreparingActions.setPrepActiveStep(activeStep + 1));
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
    <View style={containerStyles.container}>
      <Text
        type="h6"
        style={containerStyles.stepTitleText}
        testID={'txt-preparingStep4C-title'}>
        {createActionPlan.step}: {createActionPlan.title}
      </Text>
      <Text
        type="body1"
        style={containerStyles.stepDescriptionText}
        testID={'txt-preparingStep4C-content'}>
        {createActionPlan.defineNextSteps}
      </Text>
      <GuideContent
        title={createActionPlan.defineWhat}
        content={createActionPlan.defineWhatContent}
        image={Images.testPassed}
      />
      <GuideContent
        title={createActionPlan.defineWhen}
        content={createActionPlan.defineWhenContent}
        image={Images.schedule}
      />
      <GuideContent
        title={createActionPlan.defineWho}
        content={createActionPlan.defineWhoContent}
        image={Images.manWindow}
      />

      <View style={containerStyles.btnContainer}>
        <Button
          mode="text"
          onPress={() => handleBack()}
          testID={'btn-preparingStep4C-back'}>
          {labels.common.back}
        </Button>
        <Button
          onPress={() => handleNext()}
          mode={'contained'}
          testID={'btn-preparingStep4C-next'}>
          {labels.common.next}
        </Button>
      </View>
    </View>
    </ScrollView>
  );
};

export default PreparingStep4C;

PreparingStep4C.propTypes = {
  activeStep: PropTypes.number.isRequired,
};

PreparingStep4C.defaultProps = {
  activeStep: 1,
};
