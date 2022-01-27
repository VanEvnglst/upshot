import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { FAB as FloatingAction, ProgressBar, Button } from 'react-native-paper';
import { Wrapper, Text, Header, Modal } from 'app/components';
import FeedbackHistoryActions from 'app/store/feedback/feedbackHistoryRedux';
import FeedbackActions from 'app/store/feedback/feedbackRedux';
import DocumentingActions from 'app/store/feedback/documentingRedux';
import PreparingActions from 'app/store/feedback/preparingRedux';
import DiscussingActions from 'app/store/feedback/DiscussingRedux';
import ReflectingActions from 'app/store/feedback/ReflectingRedux';
import {
  getRecentJourneys,
  getActiveJourneys,
  getCurrentJourney,
} from 'app/store/selectors';
import Images from 'app/assets/images';
import labels from 'app/locales/en';
import styles from './styles';

const FeedbackJourneyList = props => {
  const { navigation, route } = props;
  const dispatch = useDispatch();
  const recentJourneys = useSelector(getRecentJourneys);
  const activeJourneys = useSelector(getActiveJourneys);
  const journeyId = useSelector(getCurrentJourney);
  const hasRecentJourneys = recentJourneys && recentJourneys.length !== 0;
  const [isModalVisible, setModalVisible] = useState(false);

  const hideModal = () => setModalVisible(false);

  useEffect(() => {
    dispatch(FeedbackHistoryActions.fetchRecentJourneys());
    dispatch(FeedbackHistoryActions.fetchActiveJourneys());
  }, []);

  useEffect(() => {
    dispatch(FeedbackHistoryActions.fetchRecentJourneys());
    dispatch(FeedbackHistoryActions.fetchActiveJourneys());
    debugger;
    if (route.params && route.params.type === 'journeyEnd') {
      setModalVisible(true);
    }
  }, [journeyId.data]);

  useEffect(() => {
    dispatch(DocumentingActions.resetDocumentingState());
    dispatch(PreparingActions.resetPreparingState());
    dispatch(DiscussingActions.resetDiscussingState());
    dispatch(ReflectingActions.resetReflectingState());
  }, []);

  const HistoryCard = ({ item }) => {
    const { last_modified: lastModified, member } = item;
    const nameArr = member.split(/[ ,]+/);
    const dateArr = lastModified.split(/[ ,]+/);
    const lastName = nameArr[1].charAt(0);
    const memberName = `${nameArr[0]} ${lastName}.`;
    const lastWorkedOn = moment(lastModified).fromNow();

    return (
      <TouchableOpacity
        accessibilityRole={'button'}
        style={styles.historyCard}
        onPress={() => console.log('sadsadd')}>
        <View style={styles.historyCardContent}>
          <Text type="subtitle1" style={styles.historyTeammateText}>
            {memberName}
          </Text>
          <Text type="body2" style={styles.historyDateText}>
            {lastWorkedOn}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const InProgressCard = ({ activeJourney }) => {
    const {
      percent_complete: percent,
      last_modified: lastModified,
      member,
      id,
    } = activeJourney;
    const nameArr = member.split(/[ ,]+/);
    const dateArr = lastModified.split(/[ ,]+/);
    const lastName = nameArr && nameArr[1].charAt(0);
    const memberName = `${nameArr[0]} ${lastName}.`;
    const staff = {
      firstName: nameArr[0],
      lastName: lastName
    }
    const progressValue = percent / 100;
    const lastWorkedOn = `${moment(lastModified).fromNow()}`;

    return (
      <TouchableOpacity
        accessibilityRole={'button'}
        style={styles.inProgressCard}
        onPress={() =>
          handleNavigation('ActiveFeedbackJourney', id, staff)
        }>
        <View style={styles.inProgressContent}>
          <ProgressBar progress={progressValue} />
          <View style={styles.inProgressText}>
            <Text type="h6" style={styles.feedbackForText}>
              Feedback for {memberName ? memberName : ''}
            </Text>
            <Text type="body2" style={styles.feedbackForDateText}>
              Last worked on {lastWorkedOn}
            </Text>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              accessibilityRole={'button'}
              onPress={() =>
                handleNavigation('ActiveFeedbackJourney', id, staff)
              }>
              <Text type="button" style={styles.inProgressBtn}>
                {labels.common.continue}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const handleNavigation = (screenName, journeyId, staffName) => {
    dispatch(FeedbackActions.setTeamMember(staffName));
    navigation.navigate(screenName, {
      from: 'journeyList',
      journeyId,
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Wrapper>
        <ScrollView>
          <Header
            headerLeft={{
              onPress: () => navigation.goBack(),
            }}
          />
          <Text type="h3" style={styles.screenTitle}>
            {labels.feedbackIntro.feedbackCoaching}
          </Text>
          <View style={{ marginTop: 40 }}>
            <Text type="overline" style={styles.overlineText}>
              {labels.common.inProgress}
            </Text>
          </View>
          {activeJourneys &&
            activeJourneys.map((item, i) => (
              <InProgressCard key={item.id} activeJourney={item} />
            ))}
          {hasRecentJourneys && (
            <View>
              <Text
                type="overline"
                style={[styles.overlineText, styles.addedMargin]}>
                {labels.feedbackIntro.history}
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {recentJourneys.map((item, i) => (
                  <HistoryCard key={item.id} item={item} />
                ))}
              </ScrollView>
            </View>
          )}
        </ScrollView>
        <FloatingAction
          style={styles.floatingAction}
          label={labels.common.giveFeedback}
          icon={'plus'}
          uppercase
          onPress={() => handleNavigation('FeedbackFlow')}
        />
      </Wrapper>
      <Modal
        isVisible={isModalVisible}
        onDismiss={hideModal}
        style={{
          padding: 20,
          height: 400,
          marginHorizontal: 40,
        }}>
        <View style={{ flex: 1 }}>
          <Image source={Images.journeyEnd} resizeMode="cover" />
          <Text type="h6" style={{ marginTop: 20 }}>
            {labels.feedbackIntro.journeyEndTitle}
          </Text>
          <Text type="body2" style={{ marginTop: 20, lineHeight: 24 }}>
            {labels.feedbackIntro.journeyEndContent}
          </Text>
          <View style={{ alignItems: 'flex-end', marginTop: 20 }}>
            <Button onPress={() => hideModal()}>Got it</Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FeedbackJourneyList;

FeedbackJourneyList.propTypes = {
  fetchRecentJourneys: PropTypes.func,
  recentJourneys: PropTypes.array,
  activeJourneys: PropTypes.array,
};

FeedbackJourneyList.defaultProps = {
  fetchRecentJourneys: () => {},
  recentJourneys: [],
  activeJourneys: [],
};
