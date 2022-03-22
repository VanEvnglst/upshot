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
  const [content, setContent] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [reminderTime, setReminderTime] = useState();
  const [preparingHintVisible, setPrepHintVisible] = useState(true);
  const preparingHintWidth = new Animated.Value(0);
  const preparingHintHeight = new Animated.Value(0);

  const [discussingHintVisible, setDiscussHintVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  useEffect(() => {
    handleContent();
    // handleCallToAction();
  }, []);

  const handleContent = () => {
    const confirmationContent = confirmationModel.find(
      x => x.type === route.params.type,
    );
    setContent(confirmationContent.content);
  };

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
      <View
        style={{
          marginBottom: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: 1,
          paddingRight: 10,
        }}>
        <TouchableOpacity
          // mode={'text'}
          onPress={() => navigation.navigate('PreparingSchedule')}>
          <Text type="button" style={styles.scheduleButtonText}>
            {feedbackPreparing.schedule}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 10,
          }}>
          <HintIndicator
            showHint={preparingHintVisible}
            onPress={() => showPreparingHint()}
          />
        </View>
      </View>
    );
  };

  const showPreparingHint = () => {
    setPrepHintVisible(!preparingHintVisible);
    // Animated.timing(preparingHintWidth, {
    //   toValue: 200,
    //   duration: 500,
    // }).start();
    // Animated.timing(preparingHintHeight, {
    //   toValue: 400,
    //   duration: 500,
    // }).start();
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
    <View style={{ flex: 1 }}>
      <Wrapper>
        <ScrollView>
          <Header
            headerRight={{
              onPress: () => handleClose(),
            }}
          />
          <View>
            <Image
              source={Images.confirmation}
              resizeMode="cover"
              // style={{ height: '90%' }}
            />
          </View>
          <View style={{ marginTop: 30 }}>
            <Text type="h4">{common.youDidIt}</Text>
            <Text
              type="body1"
              style={{ lineHeight: 28, marginTop: 35, width: '90%' }}>
              {
                route.params.type === 'documenting'
                  ? flow.id === 1
                    ? type.id === 1
                      ? `${feedbackDocumenting.confirmation.content1}\n\n${feedbackDocumenting.confirmation.schedPosContent}`
                      : content // sched corr content
                    : content // TODO: change to on the spot content
                  : content // regular content for each phase
              }
            </Text>
          </View>
          {preparingHintVisible && (
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,0.04)',
                borderRadius: 16,
                alignItems: 'center',
                paddingVertical: 15,
                marginTop: 20,
              }}>
              <Image
                source={Images.preparingConfirmHint}
                resizeMode="contain"
              />
              <Text type="body2" style={{ color: Colors.primary900, padding: 20,lineHeight: 24,fontWeight: '700' }}>
                {feedbackPreparing.confirmationHint}
              </Text>
            </View>
          )}
          {discussingHintVisible && (
            <View
              style={{
                flex: 1,
                backgroundColor: Colors.opaqueBlack,
                borderRadius: 16,
              }}>
              <Text type="body2" style={{ color: Colors.primary900 }}>
                {feedbackDiscussing.confirmationHint}
              </Text>
            </View>
          )}
          <View
            style={{
              flex: 1,
              marginTop: 30,
              marginBottom: 20,
              alignItems: 'flex-end',
              flexDirection: 'row',
              alignSelf: 'flex-end',
            }}>
            {handleCallToAction()}
          </View>
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
