import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text, Chip } from 'app/components';
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
    state => state.documenting.get('fetching'),
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
    dispatch(FeedbackActions.fetchTeamMembers());
  // useEffect(() => {
  //   if (activeDocumenting)
  //     dispatch(DocumentingActions.fetchCurrentDocumenting(activeDocumenting));
  }, []);
  
  useEffect(() => {
    dispatch(FeedbackActions.fetchTeamMembers());
    async function retrieveData() {
      debugger;
      if (activeDocumenting)
        await dispatch(
          DocumentingActions.fetchCurrentDocumenting(activeDocumenting),
        );
    }
    retrieveData();
  }, []);

  useEffect(() => {
    if (stepData.data) chooseTeamMember(stepData.data);
  }, [stepData]);

  const checkSelectedMember = member => {
    if (stepData.data !== null)
      if (member.id === teamMember.id) setSelected(true);
  };

  const chooseTeamMember = member => {
    setTeamMember(member);
    setCompletion(true);
  };

  // useEffect(() => {
  //   dispatch(FeedbackActions.fetchTeamMembers());
  // }, []);

  const handleNext = () => {
    if (stepData.data && stepData.data.id === teamMember.id) {
      dispatch(DocumentingActions.setActiveStep(activeStep + 1));
    } else {
      dispatch(DocumentingActions.setDocumentingData('step1', teamMember));
      dispatch(
        FeedbackActions.postFeedbackJourney(feedbackFlow, teamMember.id),
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {isLoading && <ActivityIndicator />}
        <Text
          type="h6"
          style={containerStyles.stepTitleText}
          testID={'txt-documentingStep1-label'}>
          {`${feedbackDocumenting.giveFeedbackTo} ${feedbackType.display_name} ${feedbackDocumenting.giveFeedbackToCont}`}
        </Text>

        <View style={styles.namesContainer}>
          {/* {isLoading && <ActivityIndicator />} */}
          {staffList &&
            staffList.map((item, i) => (
              <Chip
                testID={'chip-documentingStep1-name'}
                key={item.id}
                onPress={() => chooseTeamMember(item)}
                mode="flat"
                isSelected={item.id === teamMember.id}
                children={item.name}
                //style={[styles.chips, isSelected && styles.selectedChip]}
              />
            ))}
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button
          style={styles.button}
          disabled={!isCompleted}
          onPress={() => handleNext()}
          mode={isCompleted ? 'contained' : 'text'}
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
  feedbackType: PropTypes.object,
  fetchTeamMembers: PropTypes.func,
  postFeedbackJourney: PropTypes.func,
  setDocumentingStatus: PropTypes.func,
};

DocumentingStep1.defaultProps = {
  stepData: {},
  staffList: [],
  isLoading: false,
  feedbackFlow: {},
  feedbackType: {},
  setDocumentingData: () => {},
  fetchTeamMembers: () => {},
  postFeedbackJourney: () => {},
  setDocumentingStatus: () => {},
};
