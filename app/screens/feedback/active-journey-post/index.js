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
import labels from 'app/locales/en';
import styles from './styles';


const ActiveFeedbackJourney = props => {
  const { navigation, route } = props;
  const dispatch = useDispatch();
  const staffName = useSelector(
    state => state.documenting.get('step1').data.name,
  );
  const getFlow = useSelector(state => state.feedback.get('chosenFlow'));
  const documentingClosed = useSelector(state =>
    state.documenting.get('closed'),
  );
  const documentingStarted = useSelector(state =>
    state.documenting.get('started'),
  );
  const preparingClosed = useSelector(state => state.preparing.get('closed'));
  const preparingStarted = useSelector(state => state.preparing.get('started'));
  const isLoading = useSelector(state => state.feedback.get('fetching'));
  const staffArr = staffName.split(/[ ,]+/);
  const lastNameSplt = staffArr[1].charAt(0);
  const memberName = `${staffArr[0]} ${lastNameSplt}.`;

  const [phaseList, setPhaseList] = useState([]);
  useEffect(() => {
    dispatch(FeedbackActions.fetchCurrentFeedback(route.params.journeyId));
    handlePhases();
  }, []);

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
      debugger;
    } else {
      content = feedbackJourneySteps.filter(item => item.forOnTheSpot === true);
    }
    await setPhaseList(content);
  };

  const handleNavigation = index => {
    console.log('index', index);
    let screenName = '';
    switch (index) {
      case 0:
        screenName = 'FeedbackDocumenting';
        break;
    }
    navigation.navigate(screenName);
  };

  return (
    <Wrapper>
      <ScrollView>
        <Header
          headerLeft={{
            onPress: () => navigation.goBack(),
          }}
        />
        {isLoading && <ActivityIndicator />}
        <View style={styles.nameContainer}>
          <Text type="h4" style={styles.teammateName}>
            {memberName}
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
                  disabled={!item.started}
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
    </Wrapper>
  );
};

export default ActiveFeedbackJourney;

ActiveFeedbackJourney.propTypes = {};

ActiveFeedbackJourney.defaultProps = {};
