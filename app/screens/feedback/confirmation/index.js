import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text, Wrapper, Header, DateTimePicker } from 'app/components';
import Images from 'app/assets/images';
import confirmationModel from 'app/models/ConfirmationModel';

const FeedbackConfirmation = props => {
  const { navigation, route } = props;
  const [content, setContent] = useState('Hello');
  const [isModalVisible, setModalVisible] = useState(false);
  const [reminderTime, setReminderTime] = useState();
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  useEffect(() => {
    handleContent();
  }, []);

  const handleContent = () => {
    //get route.params.type
    const confirmationContent = confirmationModel.find(x => x.type === route.params.type)
    setContent(confirmationContent);
  };

  const handleTimeSelection = time => {
    console.log('tim', time);
    hideModal();
  };

  return (
    <View style={{ flex: 1 }}>
      <Wrapper>
        <Header
          headerRight={{
            onPress: () => navigation.goBack(),
          }}
        />
        <View style={{ flex: 1 }}>
          <Image source={Images.confirmation} resizeMode="cover" />
        </View>
        <View style={{ flex: 2 }}>
          <Text type="h4">You did it!</Text>
          <Text type="body1">{content}</Text>
          {/* <TouchableOpacity onPress={() => showModal()}>
            <Text>Press</Text>
          </TouchableOpacity> */}
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
