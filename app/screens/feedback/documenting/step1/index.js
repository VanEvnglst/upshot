import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Chip, Button } from 'react-native-paper';
import { Text } from 'app/components';
import FeedbackActions from 'app/store/feedback/feedbackRedux';
import DocumentingActions from 'app/store/feedback/documentingRedux';
import { getStaffList, getDocumentingStep } from 'app/store/selectors';
import labels from 'app/locales/en';
import styles from './styles';
import containerStyles from '../styles';

const DocumentingStep1 = props => {
  const dispatch = useDispatch();
  const activeStep = useSelector(getDocumentingStep);
  const staffList = useSelector(getStaffList);
  const isLoading = useSelector(
    state => state.feedback.get('teamMembers').fetching,
  );
  const [teamMember, setTeamMember] = useState({
    id: null,
    name: '',
  });
  const [isCompleted, setCompletion] = useState(false);

  const chooseTeamMember = member => {
    setTeamMember(member);
    setCompletion(true);
  };

  useEffect(() => {
    dispatch(FeedbackActions.fetchTeamMembers());
  }, []);

  const handleNext = () => {
    dispatch(DocumentingActions.setDocumentingData('step1', teamMember));
    dispatch(DocumentingActions.setActiveStep(activeStep + 1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text type="h6" style={containerStyles.stepTitleText}>
          {labels.feedbackDocumenting.giveFeedbackTo}
        </Text>

        <View style={styles.namesContainer}>
          {isLoading && <ActivityIndicator />}
          {staffList &&
            staffList.map((item, i) => (
              <Chip
                key={item.id}
                onPress={() => chooseTeamMember(item)}
                mode="flat"
                style={[
                  styles.chips,
                  teamMember.name === item.name && styles.selectedChip,
                ]}>
                <Text
                  type="body2"
                  style={
                    teamMember.name === item.name
                      ? styles.selectedChipText
                      : styles.chipText
                  }>
                  {item.name}
                </Text>
              </Chip>
            ))}
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button
          style={styles.button}
          disabled={!isCompleted}
          onPress={() => handleNext()}
          mode="contained">
          {labels.common.next}
        </Button>
      </View>
    </View>
  );
};

export default DocumentingStep1;
