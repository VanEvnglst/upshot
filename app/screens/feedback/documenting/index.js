import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Wrapper, ProgressIndicator, Header } from '../../../components';
import DocumentingStep3 from './step3';
import styles from './styles';

const FeedbackDocumenting = () => {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <ScrollView>
    <Wrapper>
      <Header headerRight />
      <Text>Documenting</Text>
      <ProgressIndicator steps={3} currentIndex={currentStep} />
      <DocumentingStep3 />
      <View style={styles.btnContainer}>
        <Button mode="text">Back</Button>
        <Button mode="contained">Next</Button>
      </View>
    </Wrapper>
    </ScrollView>
  );
};

export default FeedbackDocumenting;
