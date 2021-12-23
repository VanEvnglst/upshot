import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import {
  Wrapper,
  Text,
  Header,
  SignPostIndicator,
  JourneyIndicator,
} from 'app/components';
import feedbackJourneySteps from 'app/models/FeedbackJourney';
import FeedbackActions from 'app/store/feedback/feedbackRedux';
import DocumentingActions from 'app/store/feedback/documentingRedux';
import { getStaffName, getDocumentingId } from 'app/store/selectors';
import labels from 'app/locales/en';
import styles from './styles';

const ActiveFeedbackJourney = props => {
  const { navigation, route } = props;
  const dispatch = useDispatch();

  const getFlow = useSelector(state => state.feedback.get('chosenFlow'));
  const documentingId = useSelector(getDocumentingId);
  const documentingClosed = useSelector(state =>
    state.documenting.get('closed'),
  );
  const documentingStarted = useSelector(state =>
    state.documenting.get('started'),
  );
  const preparingClosed = useSelector(state => state.preparing.get('closed'));
  const preparingStarted = useSelector(state => state.preparing.get('started'));
  const isLoading = useSelector(
    state => state.feedback.get('currentJourney').fetching,
  );
  const staffName = useSelector(getStaffName);

  const [phaseList, setPhaseList] = useState([]);
  const journeyId = useSelector(
    state => state.feedback.get('currentJourney').data,
  );

  useEffect(() => {
    dispatch(FeedbackActions.fetchCurrentFeedback(route.params.journeyId));
  }, []);

  useEffect(() => {
    handlePhases();
  }, [journeyId]);

  const handlePhases = async () => {
    let content = [];
    if (getFlow === 'prepared') {
      feedbackJourneySteps[0] = {
        ...feedbackJourneySteps[0],
        closed: documentingClosed,
        started: documentingStarted,
      };
      feedbackJourneySteps[1] = {
        ...feedbackJourneySteps[1],
        closed: preparingClosed,
        started: preparingStarted,
      };
      // feedbackJourneySteps[2] = {
      //   ...feedbackJourneySteps[2],
      //   closed: discussingClosed,
      //   started: discussingStarted,
      // }
      content = feedbackJourneySteps;
    } else {
      content = feedbackJourneySteps.filter(item => item.forOnTheSpot === true);
    }
    await setPhaseList(content);
  };

  const handleBackNavigation = () => {
    dispatch(FeedbackActions.resetFeedbackState());
    navigation.goBack();
  };

  const handleNavigation = index => {
    let screenName = '';
    switch (index) {
      case 0:
        screenName = 'FeedbackDocumenting';
        dispatch(DocumentingActions.fetchCurrentDocumenting(documentingId));
        break;
    }
    navigation.navigate(screenName);
  };

  return (
    <Wrapper>
      <ScrollView>
        <Header
          headerLeft={{
            onPress: () => handleBackNavigation(),
          }}
        />

        <View style={styles.nameContainer}>
          <Text type="h4" style={styles.teammateName}>
            {staffName}
          </Text>
        </View>
        <View>
          {phaseList.map((item, i) => {
            return (
              <View key={item.id} style={styles.signPost}>
                <SignPostIndicator
                  isLastItem={i === phaseList.length - 1}
                  isCompleted={item.closed}
                  disabled={!item.started}
                  current={item.started && !item.closed}
                />
                <JourneyIndicator
                  style={{ flex: 2 }}
                  //disabled={!item.started}
                  done={item.closed}
                  current={item.started && !item.closed}
                  hasProgress={item.started && !item.closed}
                  item={item}
                  onPress={() => handleNavigation(i)}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
      {isLoading && <ActivityIndicator />}
    </Wrapper>
  );
};

export default ActiveFeedbackJourney;

ActiveFeedbackJourney.propTypes = {};

ActiveFeedbackJourney.defaultProps = {};
