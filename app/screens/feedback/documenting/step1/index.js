import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Chip, Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text } from 'app/components';
import FeedbackActions from 'app/store/feedback/feedbackRedux';
import DocumentingActions from 'app/store/feedback/documentingRedux';
import {
  getStaffList,
  getDocumentingStep,
  getChosenFlow,
  getChosenType,
  getStep1Data,
  getDocumentingId,
} from 'app/store/selectors';
import labels from 'app/locales/en';
import styles from './styles';
import containerStyles from '../styles';

const DocumentingStep1 = props => {
  const { route } = props;
  const { feedbackDocumenting } = labels;
  const dispatch = useDispatch();
  const feedbackType = useSelector(getChosenType);
  const activeDocumenting = useSelector(getDocumentingId);
  const stepData = useSelector(getStep1Data);
  const activeStep = useSelector(getDocumentingStep);
  const staffList = useSelector(getStaffList);
  const isLoading = useSelector(
    state => state.feedback.get('teamMembers').fetching,
  );
  const feedbackFlow = useSelector(getChosenFlow);
  const [teamMember, setTeamMember] = useState({
    id: null,
    name: '',
  });
  const [isCompleted, setCompletion] = useState(false);

  useEffect(() => {
    if (activeDocumenting)
      dispatch(DocumentingActions.fetchCurrentDocumenting(activeDocumenting));
  }, []);

  useEffect(() => {
    if (stepData.data) chooseTeamMember(stepData.data);
  }, [stepData]);

  const chooseTeamMember = member => {
    setTeamMember(member);
    setCompletion(true);
  };

  useEffect(() => {
    dispatch(FeedbackActions.fetchTeamMembers());
  }, []);

  const handleNext = () => {
    if (stepData.data && stepData.data.id === teamMember.id) {
      dispatch(DocumentingActions.setActiveStep(activeStep + 1));
    } else {
      dispatch(DocumentingActions.setDocumentingData('step1', teamMember));
      dispatch(DocumentingActions.setDocumentingStatus('started', true));
      dispatch(
        FeedbackActions.postFeedbackJourney(feedbackFlow, teamMember.id),
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text
          type="h6"
          style={containerStyles.stepTitleText}
          testID={'txt-documentingStep1-label'}>
          {`${feedbackDocumenting.giveFeedbackTo} ${feedbackType} ${feedbackDocumenting.giveFeedbackToCont}`}
        </Text>

        <View style={styles.namesContainer}>
          {isLoading && <ActivityIndicator />}
          {staffList &&
            staffList.map((item, i) => (
              <Chip
                testID={'chip-documentingStep1-name'}
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
          mode="contained"
          testID={'btn-documentingStep1-next'}>
          {labels.common.next}
        </Button>
      </View>
    </View>
  );
};

export default DocumentingStep1;

DocumentingStep1.propTypes = {
  setDocumentingData: PropTypes.func,
  stepData: PropTypes.object,
  staffList: PropTypes.array,
  isLoading: PropTypes.bool,
  feedbackFlow: PropTypes.object,
  fetchTeamMembers: PropTypes.func,
  postFeedbackJourney: PropTypes.func,
  setDocumentingStatus: PropTypes.func,
};

DocumentingStep1.defaultProps = {
  stepData: {},
  staffList: [],
  isLoading: false,
  feedbackFlow: {},
  setDocumentingData: () => {},
  fetchTeamMembers: () => {},
  postFeedbackJourney: () => {},
  setDocumentingStatus: () => {},
};
