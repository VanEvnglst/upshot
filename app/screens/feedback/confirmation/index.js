import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import { getDocumentingId } from 'app/store/selectors';
import DocumentingActions from 'app/store/feedback/documentingRedux';
import { Text, Wrapper, Header, DateTimePicker } from 'app/components';
import Images from 'app/assets/images';
import confirmationModel from 'app/models/ConfirmationModel';

const FeedbackConfirmation = props => {
  const { navigation, route } = props;
  const dispatch = useDispatch();
  const docuId = useSelector(getDocumentingId);
  const [content, setContent] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [reminderTime, setReminderTime] = useState();
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
    }
  };

  const DocumentingCTA = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Button
          type={'text'}
          onPress={() => navigation.navigate('PreparingGuide')}>
          <Text>Keep going</Text>
        </Button>
        <Button type={'text'} onPress={() => showModal()}>
          <Text>remind me later</Text>
        </Button>
      </View>
    );
  };

  const handleNavigation = () => {};

  const handleTimeSelection = time => {
    const reminderDate = moment(time).format('MMM DD YYYY HH:mm');
    const data = {
      reminderDate,
      docuId,
    };
    dispatch(DocumentingActions.updateDocumentingReminder(data));
    hideModal();
  };

  return (
    <View style={{ flex: 1 }}>
      <Wrapper>
        <Header
          headerRight={{
            onPress: () => navigation.navigate('ActiveFeedbackJourney'),
          }}
        />
        <View style={{ flex: 2 }}>
          <Image
            source={Images.confirmation}
            resizeMode="cover"
            style={{ height: '90%' }}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text type="h4">You did it!</Text>
          <Text
            type="body1"
            style={{ lineHeight: 24, marginTop: 35, width: '90%' }}>
            {content}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            marginBottom: 20,
            alignItems: 'flex-end',
            flexDirection: 'row',
          }}>
          {handleCallToAction()}
        </View>
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
