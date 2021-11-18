import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Wrapper, InputField } from 'app/components';
import PushNotification from 'react-native-push-notification';
import { SampleLocalNotif } from 'app/services/notification-service';

const Profile = () => {
  const [value, setValue] = useState('');

  const handleButtonPress = () => {
    SampleLocalNotif();
  };

  return (
    <Wrapper>
      <Text>Profile</Text>
      <View
        style={{ marginBottom: 30, flexWrap: 'wrap', flexDirection: 'row' }}>
        <InputField value={value} onChangeText={text => setValue(text)} />
      </View>
      <Button title={'Local push notif'} onPress={() => handleButtonPress()} />
    </Wrapper>
  );
};

export default Profile;
