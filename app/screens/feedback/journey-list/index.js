import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  LogBox,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { FAB as FloatingAction, ProgressBar, Button } from 'react-native-paper';
import { Wrapper, Text, Header, Modal } from 'app/components';
import FeedbackHistoryActions from 'app/store/feedback/FeedbackHistoryRedux';
import FeedbackActions from 'app/store/feedback/FeedbackRedux';
import DocumentingActions from 'app/store/feedback/DocumentingRedux';
import PreparingActions from 'app/store/feedback/PreparingRedux';
import DiscussingActions from 'app/store/feedback/DiscussingRedux';
import ReflectingActions from 'app/store/feedback/ReflectingRedux';
import SharingActions from 'app/store/feedback/SharingRedux';
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
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  useEffect(() => {
    dispatch(FeedbackHistoryActions.fetchRecentJourneys());
    dispatch(FeedbackHistoryActions.fetchActiveJourneys());
  }, []);

  useEffect(() => {
    dispatch(FeedbackHistoryActions.fetchRecentJourneys());
    dispatch(FeedbackHistoryActions.fetchActiveJourneys());
    if (route.params && route.params.type === 'journeyEnd') {
      setModalVisible(true);
    }
  }, [journeyId.data]);

  useEffect(() => {
    dispatch(DocumentingActions.resetDocumentingState());
    dispatch(PreparingActions.resetPreparingState());
    dispatch(DiscussingActions.resetDiscussingState());
    dispatch(ReflectingActions.resetReflectingState());
    dispatch(SharingActions.resetSharingState());
  }, []);

  const HistoryCard = ({ item }) => {
    const { last_modified: lastModified, member, id } = item;
    const nameArr = member.split(/[ ,]+/);
    const dateArr = lastModified.split(/[ ,]+/);
    const lastName = nameArr[1].charAt(0);
    const memberName = `${nameArr[0]} ${lastName}.`;

    return (
      <TouchableOpacity
        key={id}
        accessibilityRole={'button'}
        style={styles.historyCard}
        onPress={() => console.log('sadsadd')}>
        <View style={styles.historyCardContent}>
          <Text type="subtitle1" style={styles.historyTeammateText}>
            {memberName}
          </Text>
          {/* <Text type="body2" style={styles.historyDateText}>
            {lastWorkedOn}
          </Text> */}
        </View>
      </TouchableOpacity>
    );
  };

  const InProgressCard = ({ activeJourney }) => {
    const {
      percent_complete: percent,
      flow_type: flowType,
      created_at_date: dateCreated,
      topics,
      member,
      id,
    } = activeJourney;
    const nameArr = member.split(/[ ,]+/);
    const lastName = nameArr && nameArr[1].charAt(0);
    const memberName = `${nameArr[0]} ${lastName}.`;
    const staff = {
      firstName: nameArr[0],
      lastName: lastName,
    };
    const progressValue = percent / 100;
    const topicList =
      topics.length === 0
        ? ''
        : topics.length > 1
        ? `(${topics[0]}, etc.)`
        : `(${topics[0]})`;
    const creationDate = `${moment(dateCreated, 'MM-DD-YYYY').format('LLL')}`;

    return (
      <TouchableOpacity
        key={id}
        accessibilityRole={'button'}
        style={styles.inProgressCard}
        onPress={() => handleNavigation('ActiveFeedbackJourney', id, staff)}>
        <View style={styles.inProgressContent}>
          <ProgressBar progress={progressValue} />
          <View style={styles.inProgressText}>
            <Text type="h6" style={styles.feedbackForText}>
              {labels.feedbackIntro.feedbackFor} {memberName ? memberName : ''}
            </Text>
            <View style={styles.feedbackDetailsContainer}>
              <Text
                type="body2"
                style={[
                  styles.feedbackDetailsText,
                  styles.feedbackDetailsTextSpacer,
                ]}>
                {flowType} {topicList}
              </Text>
            </View>
            <Text type="body2" style={styles.feedbackDetailsText}>
              {labels.feedbackIntro.created} {creationDate}
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
    <View style={styles.container}>
      <Wrapper>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            headerLeft={{
              onPress: () => navigation.goBack(),
            }}
          />
          <Text type="h3" style={styles.screenTitle}>
            {labels.feedbackIntro.feedbackCoaching}
          </Text>
          <View style={styles.labelContainer}>
            <Text type="overline" style={styles.overlineText}>
              {labels.common.inProgress}
            </Text>
          </View>
          {activeJourneys && (
            <FlatList
              data={activeJourneys}
              keyExtractor={item => item.key}
              pagingEnabled
              renderItem={({ item, index }) => {
                return <InProgressCard key={item.id} activeJourney={item} />;
              }}
            />
          )}
          {hasRecentJourneys && (
            <View style={styles.historyContainer}>
              <Text
                type="overline"
                style={[styles.overlineText, styles.addedMargin]}>
                {labels.feedbackIntro.history}
              </Text>
              {/* {recentJourneys.map((item, i) => (
                <HistoryCard
                  key={item.id}
                  item={item}
                />
              ))} */}
              <FlatList
              scrollEnabled={false}
                data={recentJourneys}
                keyExtractor={item => item.key}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                renderItem={({ item, index }) => {
                  return <HistoryCard key={item.id} item={item} />;
                }}
              />
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
            <Button onPress={() => hideModal()}>{labels.common.gotIt}</Button>
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
