import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Chip, Button } from 'react-native-paper';
import { Text } from '../../../../components';
import FeedbackActions from '../../../../store/feedbackRedux';
import DocumentingActions from '../../../../store/feedback/documentingRedux';
import labels from '../../../../locales/en';
import styles from './styles';

const DocumentingStep1 = props => {
  const dispatch = useDispatch();

  //TODO: Fix selector
  // const currentStep = useSelector(state => state.documenting.get('activeStep'r));

  useEffect(() => {
    // dispatch(FeedbackActions.fetchTeamMembers)
  }, []);

  const handleNext = () => {
    console.log('1231241', currentStep);
    dispatch(DocumentingActions.setActiveStep(currentStep));
  };

  const names = [
    {
      name: 'Teammate',
    },
    {
      name: 'Teammate',
    },
    {
      name: 'Teammate',
    },
    {
      name: 'Teammate',
    },
    {
      name: 'Teammate',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text type="h6" style={styles.label}>
          {labels.feedbackDocumenting.giveFeedbackTo}
        </Text>

        <View style={styles.namesContainer}>
          {names.map((item, i) => (
            <Chip mode="flat" style={styles.chips}>
              <Text type="body2">{item.name}</Text>
            </Chip>
          ))}
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button disabled={currentStep === 1} mode="text">
          Back
        </Button>
        <Button onPress={() => handleNext()} mode="contained">
          Next
        </Button>
      </View>
    </View>
  );
};

export default DocumentingStep1;
