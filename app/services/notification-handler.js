import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';

class NotificationHandler {
  onNotification(notification) {
    console.log('Notif handler:', notification);

    if (typeof this._onNotification === 'function') {
      this._onNotification(notification);
    }
  }

  onRegister(token) {
    if (typeof this._onRegister === 'function') {
      this._onRegister(token);4
      this.storeToken(token);
    }
  }

  storeToken = async value => {
    try {
      await AsyncStorage.setItem('fcmToken', value.token);
      console.log('save success');
    } catch (e) {
      console.log('save error', e);
    }
  };

  onAction(notification) {
    console.log('Notification action received');
    console.log(notification.action);
    console.log('action', notification);

    if (notification.action === 'Yes') {
      PushNotification.invokeApp(notification);
    }
  }

  onRegistrationError(err) {
    console.log(err);
  }

  attachRegister(handler) {
    this._onRegister = handler;
  }

  attachNotification(handler) {
    this._onNotification = handler;
  }
}

const handler = new NotificationHandler();

PushNotification.configure({
  onRegister: handler.onRegister.bind(handler),

  onNotification: handler.onNotification.bind(handler),

  onAction: handler.onAction.bind(handler),

  onRegistrationError: handler.onRegistrationError.bind(handler),

  permissons: {
    alert: true,
    badge: true,
    sound: true,
  },
  senderID: '984091495329',
  popInitialNotification: true,

  requestPermissions: true,
});

export default handler;
