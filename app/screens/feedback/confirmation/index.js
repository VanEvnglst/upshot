import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView,
} from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  getDocumentingId,
  getCurrentJourney,
  getChosenFlow,
  getChosenType,
} from 'app/store/selectors';
import DocumentingActions from 'app/store/feedback/DocumentingRedux';
import DiscussingActions from 'app/store/feedback/DiscussingRedux';
import FeedbackActions from 'app/store/feedback/FeedbackRedux';
import SharingActions from 'app/store/feedback/SharingRedux';
import {
  Text,
  Wrapper,
  Header,
  DateTimePicker,
  HintIndicator,
} from 'app/components';
import Images from 'app/assets/images';
import labels from 'app/locales/en';
import confirmationModel from 'app/models/ConfirmationModel';
import Colors from 'app/theme/colors';
import styles from './styles';

const FeedbackConfirmation = props => {
  const { navigation, route } = props;
  const { common, feedbackDocumenting, feedbackPreparing, feedbackDiscussing } =
    labels;
  const dispatch = useDispatch();
  const docuId = useSelector(getDocumentingId);
  const journeyId = useSelector(getCurrentJourney);
  const flow = useSelector(getChosenFlow);
  const type = useSelector(getChosenType);
  const [confirmationContent, setContent] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [reminderTime, setReminderTime] = useState();
  const [preparingHintVisible, setPrepHintVisible] = useState(false);
  const [discussingHintVisible, setDiscussHintVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  useEffect(() => {
    handleContent();
  }, []);


  const handleCallToAction = () => {
    const { type } = route.params;
    switch (type) {
      case 'documenting':
        return <DocumentingCTA />;
      case 'discussing':
        return <DiscussingCTA />;
      case 'preparing':
        return <PreparingCTA />;
      case 'reflecting':
        return <ReflectingCTA />;
      case 'sharing':
        return <SharingCTA />;
    }
  };

  const handleContent = () => {
    var finalContent = '';
    const confirmationContent = confirmationModel.find(
      x => x.type === route.params.type,
    );
    if (route.params.type === 'documenting') {
      if (flow.id === 1) {
        if (type.id === 1)
          finalContent =
            `${feedbackDocumenting.confirmation.content1}\n\n${feedbackDocumenting.confirmation.schedPosContent}`;
        else finalContent = confirmationContent.content;
      } else {
        finalContent = confirmationContent.content; //TODO: Change for on the spot content
      }
    } else {
      finalContent = confirmationContent.content;
    }
    setContent(finalContent)
  };

  const DocumentingCTA = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Button type={'text'} onPress={() => handleDocumentingNav()}>
          <Text>{common.keepGoing}</Text>
        </Button>
        <Button type={'text'} onPress={() => showModal()}>
          <Text>{common.remindMeLater}</Text>
        </Button>
      </View>
    );
  };

  const handleDocumentingNav = () => {
    let screenName = '';
    if (flow.id === 1) {
      if (type.id === 1) screenName = 'SharingGuide';
      else screenName = 'PreparingGuide';
    } else {
      screenName = 'ReflectingGuide';
    }

    navigation.navigate(screenName);
  };

  const DiscussingCTA = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Button
          mode={'text'}
          onPress={() => navigation.navigate('ReflectingGuide')}>
          <Text>{common.keepGoing}</Text>
        </Button>
        <Button mode={'text'} onPress={() => showModal()}>
          <Text>{common.remindMeLater}</Text>
        </Button>
        {/* <HintIndicator
          showHint={discussingHintVisible}
          onPress={() => setDiscussHintVisible(!discussingHintVisible)}
        /> */}
      </View>
    );
  };

  const PreparingCTA = () => {
    return (
      <View style={styles.preparingBtnContainer}>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => navigation.navigate('PreparingSchedule')}>
          <Text
            type="button"
            style={styles.scheduleButtonText}
            testID={'txt-preparingConfirmation-schedule'}>
            {feedbackPreparing.schedule}
          </Text>
        </TouchableOpacity>
        <View style={styles.hintIndicatorContainer}>
          <HintIndicator
            showHint={preparingHintVisible}
            onPress={() => setPrepHintVisible(!preparingHintVisible)}
          />
        </View>
      </View>
    );
  };

  const ReflectingCTA = () => {
    return (
      <View
        style={{
          marginBottom: 20,
          flex: 1,
        }}>
        <Button mode="contained" onPress={() => closeJourney()}>
          {common.gotIt}
        </Button>
      </View>
    );
  };

  const SharingCTA = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Button
          type={'text'}
          onPress={() => navigation.navigate('ReflectingGuide')}>
          <Text>{common.keepGoing}</Text>
        </Button>
        <Button type={'text'} onPress={() => showModal()}>
          <Text>{common.remindMeLater}</Text>
        </Button>
      </View>
    );
  };

  const closeJourney = () => {
    dispatch(FeedbackActions.postCloseFeedbackJourney(journeyId.data));
  };

  const handleTimeSelection = time => {
    const reminderDate = moment(time).format('MMM DD, YYYY HH:mm');
    const data = {
      reminderDate,
      docuId,
    };
    if (route.params.type === 'documenting') {
      dispatch(DocumentingActions.updateDocumentingReminder(data));
    }
    if (route.params.type === 'discussing') {
      dispatch(DiscussingActions.updateDiscussingReminder(data));
    }
    if (route.params.type === 'sharing') {
      dispatch(SharingActions.updateSharingReminder(data));
    }
    hideModal();
  };

  const handleClose = () => {
    if (route.params.type === 'reflecting') closeJourney();
    else navigation.navigate('ActiveFeedbackJourney');
  };

  return (
    <View style={styles.container}>
      <Wrapper>
        <ScrollView>
          <Header
            headerRight={{
              onPress: () => handleClose(),
            }}
          />
          <View>
            <Image source={Images.confirmation} resizeMode="cover" />
          </View>
          <View style={styles.contentContainer}>
            <Text type="h4">{common.youDidIt}</Text>
            <Text type="body1" style={styles.contentText}>
              {confirmationContent}
            </Text>
          </View>
          {preparingHintVisible && (
            <View style={styles.hintCard}>
              <Image
                source={Images.preparingConfirmHint}
                resizeMode="contain"
              />
              <Text type="body2" style={styles.hintCardText}>
                {feedbackPreparing.confirmationHint}
              </Text>
            </View>
          )}
          {discussingHintVisible && (
            <View style={styles.hintCard}>
              <Text type="body2" style={styles.hintCardText}>
                {feedbackDiscussing.confirmationHint}
              </Text>
            </View>
          )}
          <View style={styles.btnContainer}>{handleCallToAction()}</View>
        </ScrollView>
      </Wrapper>
      <DateTimePicker
        mode="time"
        isVisible={isModalVisible}
        value={reminderTime}
        onCancel={() => hideModal()}
        onConfirm={time => handleTimeSelection(time)}
      />
    </View>
  );
};

export default FeedbackConfirmation;

FeedbackConfirmation.propTypes = {
  getDocumentingId: PropTypes.number,
  getCurrentJourney: PropTypes.object,
  getChosenFlow: PropTypes.object,
  getChosenType: PropTypes.object,
  updateDocumentingReminder: PropTypes.func,
  updateDiscussingReminder: PropTypes.func,
  postCloseFeedbackJourney: PropTypes.func,
};

FeedbackConfirmation.defaultProps = {
  getDocumentingId: 1,
  getCurrentJourney: {},
  getChosenType: {},
  getChosenFlow: {},
  updateDiscussingReminder: () => {},
  updateDocumentingReminder: () => {},
  postCloseFeedbackJourney: () => {},
};
