import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Wrapper, ProgressIndicator, Header, Text } from '../../../components';
import DocumentingStep4 from './step4';
import DocumentingStep3 from './step3';
import DocumentingStep2 from './step2';
import DocumentingStep1 from './step1';
import styles from './styles';

const FeedbackDocumenting = () => {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <Wrapper>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ backgroundColor: 'white' }}>
        <Header headerRight />
        <Text type="overline">Documenting</Text>
        <ProgressIndicator steps={4} currentIndex={currentStep} />
        <DocumentingStep4 />
        <View style={styles.btnContainer}>
          <Button mode="text">Back</Button>
          <Button mode="contained">Next</Button>
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default FeedbackDocumenting;
