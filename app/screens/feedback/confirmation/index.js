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
  getStaffName,
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
  Modal
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
  const staffName = useSelector(getStaffName);
  const [confirmationContent, setContent] = useState();
  const [isDateModalVisible, setDateModalVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [reminderTime, setReminderTime] = useState();
  const [preparingHintVisible, setPrepHintVisible] = useState(false);
  const [discussingHintVisible, setDiscussHintVisible] = useState(false);
  

  const showDateModal = () => setDateModalVisible(true);
  const hideDateModal = () => setDateModalVisible(false);
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
    let finalContent = '';
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
    if (route.params.type === 'preparing') {
      finalContent = `${confirmationContent.content} ${staffName.firstName}.`
    }
    setContent(finalContent)
  };

  const DocumentingCTA = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Button type={'text'} onPress={() => handleDocumentingNav()}>
          {common.keepGoing}
        </Button>
        <Button type={'text'} onPress={() => showDateModal()}>
          {common.remindMeLater}
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
      <View style={styles.discussingBtnContainer}>
        <Button
          mode={'text'}
          onPress={() => navigation.navigate('ReflectingGuide')}>
          {common.keepGoing}
        </Button>
        <Button mode={'text'} onPress={() => showDateModal()}>
          {common.remindMeLater}
        </Button>
        <HintIndicator
          showHint={discussingHintVisible}
          onPress={() => setDiscussHintVisible(!discussingHintVisible)}
          style={styles.discussingAddedPadding}
        />
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
          {common.keepGoing}
        </Button>
        <Button type={'text'} onPress={() => showDateModal()}>
          {common.remindMeLater}
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
    hideDateModal();
  };

  const handleClose = () => {
    const { type } = route.params;
    const reminder = new Date();
    reminder.setHours( reminder.getHours() + 2 );
    const discussingTime = moment(reminder).format('MMM DD, YYYY HH:mm');
    const data = {
      reminderDate: discussingTime
    }
    switch(type) {
      case 'documenting':
        dispatch(DocumentingActions.updateDocumentingReminder(data));
        break;
      case 'preparing':
        navigation.navigate('ActiveFeedbackJourney', {
          type: 'preparing',
        });
        break;
      case 'discussing':
        dispatch(DiscussingActions.updateDiscussingReminder(data));
        break;
      case 'reflecting':
        closeJourney();
        break;
      case 'sharing':
        navigation.navigate('ActiveFeedbackJourney');
    }
  };

  return (
    <View style={styles.container}>
      <Wrapper>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <Header
            headerRight={{
              onPress: () => showModal(),
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
              <Image
                source={Images.discussingConfirmHint}
                resizeMode='contain'
              />
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
        isVisible={isDateModalVisible}
        value={reminderTime}
        onCancel={() => hideDateModal()}
        onConfirm={time => handleTimeSelection(time)}
      />
      <Modal
        isVisible={isModalVisible}
        onDismiss={hideModal}
        style={styles.modal}
      >
        <View style={styles.modalContainer}>
          <Text
            type='body2'
            style={styles.modalText}
          >
            {labels.common.closeFeedback}
          </Text>
        </View>
        <View
          style={styles.modalBtnContainer}
        >
          <Button
            mode='text'
            onPress={() => hideModal()}
          >
            {labels.common.cancel}
          </Button>
          <Button
            mode='text'
            onPress={() => handleClose()}
          >
            {labels.common.saveClose}
          </Button>
        </View>
      </Modal>
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
