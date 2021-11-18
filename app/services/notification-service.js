import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

PushNotification.configure({
  onRegister: function (token) {
    console.warn('token', token);
  },
  onNotification: function (notification) {
    console.warn('LOCAL NOTIF', notification);
    // REQUIRED --> called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
  onAction: function (notification) {
    console.warn('action', notification.action);
    console.warn('notif', notification);
  },
  popInitialNotification: true,
  requestPermissions: true,
});

export const SampleLocalNotif = () => {
  PushNotification.localNotification({
    autoCancel: true,
    // bigText: 'This is a local notif demo in React Native app',
    // subText: 'Local Notification demo',
    title: 'Local Notification Title',
    message: 'Expand me to see more',
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
    actions: '["Yes", "No"]',
  });
};
