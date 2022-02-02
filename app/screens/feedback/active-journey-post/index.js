import React, { useState, useEffect } from 'react';
import { View, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
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
import scheduledCorrectiveSteps from 'app/models/ScheduledCorrectiveSteps';
import scheduledPositiveSteps from 'app/models/ScheduledPositiveSteps';
import onTheSpotSteps from 'app/models/OnTheSpotSteps';
import FeedbackActions from 'app/store/feedback/feedbackRedux';
import DocumentingActions from 'app/store/feedback/documentingRedux';
import PreparingActions from 'app/store/feedback/preparingRedux';
import DiscussingActions from 'app/store/feedback/DiscussingRedux';
import ReflectingActions from 'app/store/feedback/ReflectingRedux';
import SharingActions from 'app/store/feedback/SharingRedux';
import {
  getStaffName,
  getCurrentJourney,
  getChosenFlow,
  getChosenType,
  getDocumenting,
  getPreparing,
  getDiscussing,
  getReflecting,
  getSharing,
} from 'app/store/selectors';
import styles from './styles';

const { width, height } = Dimensions.get('screen');
const ActiveFeedbackJourney = props => {
  const { navigation, route } = props;
  const dispatch = useDispatch();
  const staffName = useSelector(getStaffName);
  const journey = useSelector(getCurrentJourney);
  const isLoading = journey.fetching;
  const flow = useSelector(getChosenFlow);
  const type = useSelector(getChosenType);
  const documenting = useSelector(getDocumenting);
  const preparing = useSelector(getPreparing);
  const discussing = useSelector(getDiscussing);
  const reflecting = useSelector(getReflecting);
  const sharing = useSelector(getSharing);
  const [phaseList, setPhaseList] = useState([]);

  useEffect(() => {
    async function fetchFeedback() {
      const feedbackId =
        route.params && route.params.from === 'journeyList'
          ? route.params.journeyId
          : journey.data;
      await dispatch(FeedbackActions.fetchCurrentFeedback(feedbackId));
    }
    fetchFeedback();
  }, []);

  useEffect(() => {
    handlePhases();
  }, [journey.data]);

  const handlePhases = async () => {
    let content = [];
    if (flow.id === 1) {
      if (type.id === 1) {
        content = await handleScheduledPosContent();
      } else {
        content = await handleScheduledCorrContent();
      }
    }
    setPhaseList(content);
  };

  const handleScheduledCorrContent = () => {
    let content = [];
    content = scheduledCorrectiveSteps.map(obj => {
      if (obj.id === 1)
        return {
          ...obj,
          closed: documenting.get('closed'),
          started: documenting.get('started'),
          shouldStart: false,
        };
      if (obj.id === 2)
        return {
          ...obj,
          closed: preparing.get('closed'),
          started: preparing.get('started'),
          shouldStart: documenting.get('closed'),
        };
      if (obj.id === 3)
        return {
          ...obj,
          closed: discussing.get('closed'),
          started: discussing.get('started'),
          shouldStart: preparing.get('closed'),
        };
      if (obj.id === 4)
        return {
          ...obj,
          closed: reflecting.get('closed'),
          started: reflecting.get('started'),
          shouldStart: discussing.get('closed'),
        };
    });
    return content;
  };

  const handleScheduledPosContent = () => {
    let content = [];
    content = scheduledPositiveSteps.map(obj => {
      if (obj.id === 1)
        return {
          ...obj,
          closed: documenting.get('closed'),
          started: documenting.get('started'),
          shouldStart: false,
        };
      if (obj.id === 2)
        return {
          ...obj,
          closed: sharing.get('closed'),
          started: sharing.get('started'),
          shouldStart: documenting.get('closed'),
        };
      if (obj.id === 3)
        return {
          ...obj,
          closed: reflecting.get('closed'),
          started: reflecting.get('started'),
          shouldStart: sharing.get('closed')
        };
    });
    return content;
  };

  const SignPost = ({ item, i }) => {
    return (
      <View key={item.id} style={styles.signPost}>
        <SignPostIndicator
          isLastItem={i === phaseList.length - 1}
          isCompleted={item.closed}
          disabled={!item.started && !item.closed}
          current={item.shouldStart || (item.started && !item.closed)}
        />
        <JourneyIndicator
          style={{ flex: 2 }}
          done={item.closed}
          current={item.shouldStart || (item.started && !item.closed)}
          shouldStart={item.shouldStart}
          hasProgress={item.started && !item.closed}
          item={item}
          onPress={() => handleNavigation(i)}
        />
      </View>
    );
  };

  const handleBackNavigation = () => {
    dispatch(FeedbackActions.resetFeedbackState());
    dispatch(DocumentingActions.resetDocumentingState());
    dispatch(PreparingActions.resetPreparingState());
    dispatch(DiscussingActions.resetDiscussingState());
    dispatch(ReflectingActions.resetReflectingState());
    dispatch(SharingActions.resetSharingState());
    navigation.navigate('FeedbackJourneyList');
  };

  const handleNavigation = index => {
    let screenName = '';
    if (flow.id === 1) {
      if (type.id === 1) {
        switch (index) {
          case 0:
            screenName = 'FeedbackDocumenting';
            break;
          case 1:
            if (sharing.get('id')) screenName = 'FeedbackSharing';
            else screenName = 'SharingGuide';
            break;
          case 2:
            if (reflecting.get('id')) screenName = 'FeedbackReflecting';
            else screenName = 'ReflectingGuide';
            break;
        }
      } else {
        switch (index) {
          case 0:
            screenName = 'FeedbackDocumenting';
            break;
          case 1:
            if (preparing.get('id')) screenName = 'FeedbackPreparing';
            else screenName = 'PreparingGuide';
            break;
          case 2:
            if (discussing.get('id')) screenName = 'DiscussingMeeting';
            else screenName = 'DiscussingGuide';
            break;
          case 3:
            if (reflecting.get('id')) screenName = 'FeedbackReflecting';
            else screenName = 'ReflectingGuide';
            break;
        }
      }
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
                <SignPost item={item} i={i} />
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

ActiveFeedbackJourney.propTypes = {
  getStaffName: PropTypes.object,
  getCurrentJourney: PropTypes.object,
  getChosenFlow: PropTypes.string,
  getChosenType: PropTypes.object,
  getDocumenting: PropTypes.object,
  getPreparing: PropTypes.object,
  getDiscussing: PropTypes.object,
  getReflecting: PropTypes.object,
  getSharing: PropTypes.object,
  fetchCurrentFeedback: PropTypes.func,
  resetFeedbackState: PropTypes.func,
  resetDocumentingState: PropTypes.func,
  resetPreparingState: PropTypes.func,
  resetDiscussingState: PropTypes.func,
  resetReflectingState: PropTypes.func,
  resetSharingState: PropTypes.func,
};

ActiveFeedbackJourney.defaultProps = {
  getStaffName: {},
  getCurrentJourney: {},
  getChosenFlow: '',
  getChosenType: {},
  getDocumenting: {},
  getPreparing: {},
  getDiscussing: {},
  getReflecting: {},
  getSharing: {},
  fetchCurrentFeedback: () => {},
  resetFeedbackState: () => {},
  resetDiscussingState: () => {},
  resetDocumentingState: () => {},
  resetPreparingState: () => {},
  resetReflectingState: () => {},
  resetSharingState: () => {},
};
