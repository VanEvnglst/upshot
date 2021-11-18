import React, { useEffect } from 'react';
import PushNotification from 'react-native-push-notification';

const RemoteNotifController = () => {
  useEffect(() => {
    console.log('here');
    PushNotification.configure({
      onRegister: function (token) {
        console.log('token', token);
      },
      onNotification: function (notification) {
        console.log('remote', notification);
      },
      onRegistrationError: function (err) {
        console.error(err.message);
      },
      senderID: '984091495329',
      popInitialNotification: true,
      requestPermissions: true,
    });
  }, []);

  return null;
};

export default RemoteNotifController;
