import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Chip, Button } from 'react-native-paper';

import { Text } from 'app/components';
import FeedbackActions from 'app/store/feedback/feedbackRedux';
import DocumentingActions from 'app/store/feedback/documentingRedux';
import { getStaffList } from 'app/store/selectors';
import labels from 'app/locales/en';
import styles from './styles';

const DocumentingStep1 = props => {
  const dispatch = useDispatch();
  const currentStep = useSelector(state => state.documenting.get('activeStep'));
  const staffList = useSelector(getStaffList);
  const isLoading = useSelector(
    state => state.feedback.get('teamMembers').fetching,
  );
  const [teamMember, setTeamMember] = useState();

  const chooseTeamMember = name => {
    debugger;
    setTeamMember(name);
  };

  useEffect(() => {
    dispatch(FeedbackActions.fetchTeamMembers());
  }, []);

  const handleNext = () => {
    //dispatch(DocumentingActions.setActiveStep(currentStep));
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text type="h6" style={styles.label}>
          {labels.feedbackDocumenting.giveFeedbackTo}
        </Text>

        <View style={styles.namesContainer}>
          {isLoading && <ActivityIndicator />}
          {staffList &&
            staffList.map((item, i) => (
              <Chip
                key={i}
                onPress={val => chooseTeamMember(val)}
                mode="flat"
                style={styles.chips}>
                <Text type="body2">{item}</Text>
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
