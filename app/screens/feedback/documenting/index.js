import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Header, Text } from 'app/components';
import {
  getDocumentingStep,
  getDocumentingMaxSteps,
} from 'app/store/selectors';
import DocumentingActions from 'app/store/feedback/documentingRedux';
import DocumentingStep4 from './step4';
import DocumentingStep3 from './step3';
import DocumentingStep2 from './step2';
import DocumentingStep1 from './step1';
import Colors from 'app/theme/colors';
import styles from './styles';

const FeedbackDocumenting = () => {
  const dispatch = useDispatch();

  const activeStep = useSelector(getDocumentingStep);
  const maxStep = useSelector(getDocumentingMaxSteps);
  const indexValue = activeStep / maxStep;

  const handleStepContent = () => {
    switch (activeStep) {
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

  const handleCloseBtn = () => {
    if (activeStep === 1) {
      dispatch(DocumentingActions.resetDocumentingState());
    }
  };

  return (
    <Wrapper>
      <Header
        headerRight={{
          onPress: () => handleCloseBtn(),
        }}
      />
      <Text type="overline">Documenting</Text>
      <ProgressBar
        progress={indexValue}
        color={Colors.secondary}
        style={styles.progressBar}
      />
      <View style={styles.contentContainer}>{handleStepContent()}</View>
    </Wrapper>
  );
};

export default FeedbackDocumenting;
