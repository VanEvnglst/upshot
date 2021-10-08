import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, ProgressIndicator, Header, Text } from 'app/components';
import PreparingStep1 from './step1';
import PreparingStep2 from './step2';
import PreparingStep3 from './step3';
import PreparingStep3B from './step3B';
import PreparingStep3C from './step3C';
import PreparingStep4 from './step4';
import PreparingStep4B from './step4B';
import PreparingStep4C from './step4C';
import PreparingStep5 from './step5';
import PreparingStep5B from './step5B';
import PreparingStep5C from './step5C';
import labels from 'app/locales/en';
import styles from './styles';

const FeedbackPreparing = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState(11);

  const handleStepContent = () => {
    switch (currentStep) {
      case 1:
        return <PreparingStep1 />;
      case 2:
        return <PreparingStep2 />;
      case 3:
        return <PreparingStep3 />;
      case 4:
        return <PreparingStep3B />;
      case 5:
        return <PreparingStep3C />;
      case 6:
        return <PreparingStep4 />;
      case 7:
        return <PreparingStep4B />;
      case 8:
        return <PreparingStep4C />;
      case 9:
        return <PreparingStep5 />;
      case 10:
        return <PreparingStep5B />;
      case 11:
        return <PreparingStep5C />;
    }
  };

  return (
    <Wrapper>
      <Header
        headerLeft={{
          onPress: () => navigation.goBack(),
        }}
        headerRight={{}}
      />
      <Text type="overline" style={styles.overlineText}>
        {labels.feedbackSignPost.preparing}
      </Text>
      <ProgressIndicator steps={5} currentIndex={currentStep} />
      <View style={styles.contentContainer}>{handleStepContent()}</View>
      {/* <View style={containerStyles.btnContainer}>
        <Button mode="text">Back</Button>
        <Button mode="contained">Next</Button>
      </View> */}
    </Wrapper>
  );
};

export default FeedbackPreparing;
