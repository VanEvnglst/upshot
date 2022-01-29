import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes  from 'prop-types';
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
import {
  getStaffName,
  getCurrentJourney,
  getChosenFlow,
  getChosenType,
  getDocumenting,
  getPreparing,
  getDiscussing,
  getReflecting,
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
    if (flow === 'prepared') {
      if (type.id === 1) {
        handleScheduledPosContent()
      } else {
        handleScheduledCorrContent()
      }
    }
  };

  const handleScheduledCorrContent = () => {
    let content = [];
    content = scheduledCorrectiveSteps.map(obj => {
      if (obj.id === 1)
        return {
          ...obj,
          closed: documenting.get('closed'),
          started: documenting.get('started'),
        };
      if (obj.id === 2)
        return {
          ...obj,
          closed: preparing.get('closed'),
          started: preparing.get('started'),
        };
      if (obj.id === 3)
        return {
          ...obj,
          closed: discussing.get('closed'),
          started: discussing.get('started'),
        };
      if (obj.id === 4)
        return {
          ...obj,
          closed: reflecting.get('closed'),
          started: reflecting.get('started'),
        };
    });
    setPhaseList(content);
  }

  const handleScheduledPosContent = () => {
    let content = [];
    content = scheduledPositiveSteps.map(obj => {
      if (obj.id === 1)
        return {
          ...obj,
          closed: documenting.closed,
          started: documenting.started,
        };
      if (obj.id === 2)
        return {
          ...obj,
          closed: false, //sharing.closed,
          started: false, //sharing.started,
        };
      if (obj.id === 3)
        return {
          ...obj,
          closed: reflecting.closed,
          started: reflecting.started,
        };
    });
    setPhaseList(content);
  }

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
    dispatch(DocumentingActions.resetDocumentingState());
    dispatch(PreparingActions.resetPreparingState());
    dispatch(DiscussingActions.resetDiscussingState());
    dispatch(ReflectingActions.resetReflectingState());
    navigation.navigate('FeedbackJourneyList');
  };

  const handleNavigation = index => {
    let screenName = '';
    if (flow === 'prepared') {
      if (type.id === 1) {
        switch(index) {
          case 0:
          screenName ='FeedbackDocumenting';
          break;
          case 1:
            screenName = 'SharingGuide';
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
  fetchCurrentFeedback: PropTypes.func,
  resetFeedbackState: PropTypes.func,
  resetDocumentingState: PropTypes.func,
  resetPreparingState: PropTypes.func,
  resetDiscussingState: PropTypes.func,
  resetReflectingState: PropTypes.func,
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
  fetchCurrentFeedback: () => {},
  resetFeedbackState: () => {},
  resetDiscussingState: () => {},
  resetDocumentingState: () => {},
  resetPreparingState: () => {},
  resetReflectingState: () => {},
};
