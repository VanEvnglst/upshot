import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes, { objectOf } from 'prop-types';
import { Button } from 'react-native-paper';
import {
  Wrapper,
  Text,
  Header,
  SignPostIndicator,
  JourneyIndicator,
} from 'app/components';
import scheduledCorrectiveSteps from 'app/models/ScheduledCorrectiveSteps';
import scheduledPositiveSteps from 'app/models/ScheduledPositiveSteps';
import onTheSpotSteps from 'app/models/OnTheSpotSteps';
import FeedbackActions from 'app/store/feedback/feedbackRedux';
import DocumentingActions from 'app/store/feedback/documentingRedux';
import {
  getStaffName,
  getCurrentJourney,
  getChosenFlow,
  getChosenType,
  getDocumentingId,
  getPreparingId,
  getDiscussingId,
  getReflectingId,
} from 'app/store/selectors';
import labels from 'app/locales/en';
import styles from './styles';

const { width, height } = Dimensions.get('screen');
const ActiveFeedbackJourney = props => {
  const { navigation, route } = props;
  const dispatch = useDispatch();
  const staffName = useSelector(getStaffName);
  const journey = useSelector(getCurrentJourney);
  const flow = useSelector(getChosenFlow);
  const type = useSelector(getChosenType);
  const documenting = useSelector(state => state.documenting);
  const preparing = useSelector(state => state.preparing);
  const discussing = useSelector(state => state.discussing);
  const reflecting = useSelector(state => state.reflecting);
  // const documentingId = useSelector(getDocumentingId);
  // const documentingClosed = useSelector(state =>
  //   state.documenting.get('closed'),
  // );
  // const documentingStarted = useSelector(state =>
  //   state.documenting.get('started'),
  // );
  // const preparingClosed = useSelector(state => state.preparing.get('closed'));
  // const preparingStarted = useSelector(state => state.preparing.get('started'));
  // const preparingId = useSelector(getPreparingId);
  // const discussingId = useSelector(getDiscussingId);
  // const reflectingId = useSelector(getReflectingId);
  const isLoading = useSelector(
    state => state.feedback.get('currentJourney').fetching,
  );
  const [phaseList, setPhaseList] = useState([]);

  useEffect(() => {
    async function fetchFeedback() {
      const feedbackId =
        route.params && route.params.from === 'journeyList'
          ? route.params.journeyId
          : journey.data;
      await dispatch(FeedbackActions.fetchCurrentFeedback(feedbackId));
      await handlePhases();
    }
    fetchFeedback();
  }, []);

  // useEffect(() => {
  //   handlePhases();
  // }, [journey.data]);

  const handlePhases = async () => {
    let content = [];
    if (flow === 'prepared') {
      console.warn('flow', scheduledCorrectiveSteps);
      if (type.id === 1) {
        // scheduledPositiveSteps[0] = {
        //   ...scheduledPositiveSteps[0],
        //   closed: false,
        //   started: true
        // }
      } else {
        content = scheduledCorrectiveSteps.map(obj => {
          console.warn('ib', obj);
          if (obj.id === 1)
            return {
              ...obj,
              closed: documenting.closed,
              started: documenting.started,
            };
          if (obj.id === 2)
            return {
              ...obj,
              closed: preparing.closed,
              started: preparing.started,
            };
          if (obj.id === 3)
            return {
              ...obj,
              closed: discussing.closed,
              started: discussing.started,
            };
          if (obj.id === 4)
            return {
              ...obj,
              closed: reflecting.closed,
              started: reflecting.started,
            };
        });
        setPhaseList(content);
      }
      //   const corrArr =
      // scheduledCorrectiveSteps[0] = {
      //   ...scheduledCorrectiveSteps[0],

      // };

      // scheduledCorrectiveSteps[1] = {
      //   ...scheduledCorrectiveSteps[1],

      // };
      //   scheduledCorrectiveSteps[2] = {
      //     ...scheduledCorrectiveSteps[2],
      //     closed: discussing.closed,
      //     started: discussing.started
      //   }
      //   scheduledCorrectiveSteps[3] = {
      //     ...scheduledCorrectiveSteps[3],
      //     closed: reflecting.closed,
      //     started: reflecting.started
      //   }
      //   content = corrArr;

      // }
    }
    // feedbackJourneySteps[0] = {
    //   ...feedbackJourneySteps[0],
    //   closed: documentingClosed,
    //   started: documentingStarted,
    // };
    // feedbackJourneySteps[1] = {
    //   ...feedbackJourneySteps[1],
    //   closed: preparingClosed,
    //   started: true,
    // };
    // feedbackJourneySteps[2] = {
    //   ...feedbackJourneySteps[2],
    //   closed: false,
    //   started: true,
    // };
    // feedbackJourneySteps[3] = {
    //   ...feedbackJourneySteps[3],
    //   closed: false,
    //   started: true,
    // };
    // content = feedbackJourneySteps;
    // } else {
    //   content = feedbackJourneySteps.filter(item => item.forOnTheSpot === true);
    // }
  };

  const SignPost = () => {
    const documentingClosed = useSelector(state =>
      state.documenting.get('closed'),
    );
    const documentingStarted = useSelector(state =>
      state.documenting.get('started'),
    );
    useEffect(() => {
      handlePhases();
    }, []);

    return (
      <View>
        {phaseList.map((item, i) => {
          return (
            <View key={item.id} style={styles.signPost}>
              <SignPostIndicator
                isLastItem={i === phaseList.length - 1}
                isCompleted={item.closed}
                //disabled={!item.started}
                current={item.started && !item.closed}
              />
              <JourneyIndicator
                style={{ flex: 2 }}
                //done={item.closed}
                current={true}
                hasProgress={true}
                // item.started && !item.closed
                item={item}
                onPress={() => handleNavigation(i)}
              />
            </View>
          );
        })}
      </View>
    );
  };

  const handleBackNavigation = () => {
    dispatch(FeedbackActions.resetFeedbackState());
    navigation.navigate('FeedbackJourneyList');
  };

  const handleNavigation = index => {
    let screenName = '';
    switch (index) {
      case 0:
        screenName = 'FeedbackDocumenting';
        break;
      case 1:
        if (preparingId) screenName = 'FeedbackPreparing';
        else screenName = 'PreparingGuide';
        break;
      case 2:
        if (discussingId) screenName = 'DiscussingMeeting';
        else screenName = 'DiscussingGuide';
        break;
      case 3:
        if (reflectingId) screenName = 'FeedbackReflecting';
        else screenName = 'ReflectingGuide';
        break;
    }
    navigation.navigate(screenName);
  };

  return (
    <View style={{ flex: 1 }}>
      <Wrapper>
        <ScrollView>
          <Header
            headerLeft={{
              onPress: () => handleBackNavigation(),
            }}
          />
          <View style={styles.nameContainer}>
            <Text type="h4" style={styles.teammateName}>
              {staffName.firstName} {staffName.lastName}.
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
                    done={item.closed}
                    current={item.started && !item.closed}
                    //
                    hasProgress={item.started && !item.closed}
                    //
                    item={item}
                    onPress={() => handleNavigation(i)}
                  />
                </View>
              );
            })}
          </View>
        </ScrollView>
      </Wrapper>
      {isLoading && (
        <View
          style={{
            width: width,
            opacity: 0.4,
            height: height,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color="#000000" />
        </View>
      )}
    </View>
  );
};

export default ActiveFeedbackJourney;

ActiveFeedbackJourney.propTypes = {};

ActiveFeedbackJourney.defaultProps = {};
