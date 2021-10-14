import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, ProgressIndicator, Header, Text } from 'app/components';
import DocumentingStep4 from './step4';
import DocumentingStep3 from './step3';
import DocumentingStep2 from './step2';
import DocumentingStep1 from './step1';
import styles from './styles';

const FeedbackDocumenting = () => {
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepContent = () => {
    switch (currentStep) {
      case 1:
        return <DocumentingStep1 />;
      case 2:
        return <DocumentingStep2 />;
      case 3:
        return <DocumentingStep3 />;
      case 4:
        return <DocumentingStep4 />;
    }
  };

  return (
    <Wrapper>
      <Header
        headerRight={{
          onPress: () => console.log('Gawa ka bottom sheet'),
        }}
      />
      <Text type="overline">Documenting</Text>
      <ProgressIndicator steps={4} currentIndex={currentStep} />
      <View style={styles.contentContainer}>{handleStepContent()}</View>
    </Wrapper>
  );
};

export default FeedbackDocumenting;
