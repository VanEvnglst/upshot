import PushNotification, { Importance } from 'react-native-push-notification';
import NotificationHandler from './notification-handler';

export default class NotifService {
  constructor(onRegister, onNotification) {
    this.lastId = 0;
    this.lastChannelCounter = 0;

    this.createDefaultChannels();

    NotificationHandler.attachRegister(onRegister);
    NotificationHandler.attachNotification(onNotification);

    PushNotification.getApplicationIconBadgeNumber(function (number) {
      if (number > 0) {
        PushNotification.setApplicationIconBadgeNumber(0);
      }
    });

    PushNotification.getChannels(function (channels) {
      console.log(channels);
    });
  }

  createDefaultChannels() {
    PushNotification.createChannel(
      {
        channelId: 'default-channel-id',
        channelName: 'Default channel',
        channelDescription: 'A default channel',
        soundName: 'default',
        importance: Importance.HIGH,
        vibrate: true,
      },
      created => console.log(`createChannel ${created}`),
    );
    PushNotification.createChannel(
      {
        channelId: 'sound-channel-id',
        channelName: 'Sound channel',
        channelDescription: 'a sound channel',
        soundName: 'sample.mp3',
        importance: Importance.HIGH,
        vibrate: true,
      },
      created => console.log(`create channel ${created}`),
    );
  }

  createOrUpdateChannel() {
    this.lastChannelCounter++;
    PushNotification.createChannel(
      {
        channelId: 'custom-channel-id',
        channelName: `Custom channel - counter: ${this.lastChannelCounter}`,
        channelDescription: 'Custom channel',
        soundName: 'default',
        importance: Importance.HIGH,
        vibrate: true,
      },
      created => console.log(`create channel ${created}`),
    );
  }

  popInitialNotification() {
    PushNotification.popInitialNotification(notification =>
      console.log('Initifial Notification', notification),
    );
  }

  localNotif(soundName) {
    this.lastId++;
    PushNotification.localNotification({
      // Android only properties
      channelId: soundName ? 'sound-channel-id' : 'default-channel-id',
      ticker: 'My notification ticker',
      autoCancel: true,
      largeIcon: 'ic_launcher',
      smallIcon: 'ic_notification',
      bigText: 'Big text when notification is expanded',
      subText: 'This is a sub text',
      color: 'red',
      vibrate: true,
      vibration: 300,
      tag: 'some_tag',
      group: 'group',
      groupSummary: false,
      ongoing: false,
      actions: ['Yes', 'No'],
      invokeApp: true,
      when: null,
      usesChronometer: false,
      timeoutAfter: null,

      // iOS properties only
      category: '',
      subtitle: 'Notification subtitle',

      //iOS and Android properties
      id: this.lastId,
      title: 'Local Notification',
      message: 'My notification message',
      userInfo: { screen: 'home' },
      playSound: !!soundName,
      soundName: soundName ? soundName : 'default',
      number: 10,
    });
  }

  scheduleNotif(soundName) {
    this.lastId++;
    PushNotification.localNotificationSchedule({
      date: new Date(Date.now() + 30 * 1000), // in 30 secs
      channelId: soundName ? 'sound-channel-id' : 'default-channel-id',
      ticker: 'My notification ticker',
      autoCancel: true,
      largeIcon: 'ic_launcher',
      smallIcon: 'ic_notification',
      bigText: 'big text to',
      subText: 'this is a subtext',
      color: 'blue',
      vibrate: true,
      vibration: 300,
      tag: 'some_tag',
      group: 'group',
      groupSummary: false,
      ongoing: false,
      actions: ['Yes', 'No'],
      invokeApp: false,

      id: this.lastId,
      title: 'Scheduled notif',
      message: 'Notif message',
      userInfo: { screen: 'home' },
      playSound: !!soundName,
      soundName: soundName ? soundName : 'default',
      number: 10,
    });
  }

  checkPermission(cbk) {
    return PushNotification.checkPermissions(cbk);
  }

  requestPermissions() {
    return PushNotification.requestPermissions();
  }

  cancelNotif() {
    PushNotification.cancelLocalNotification(this.lastId);
  }

  cancelAll() {
    PushNotification.cancelAllLocalNotifications();
  }

  abandonPermissions() {
    PushNotification.abandonPermissions();
  }

  getScheduledLocalNotifications(callback) {
    PushNotification.getScheduledLocalNotifications(callback);
  }

  getDeliveredNotifications(callback) {
    PushNotification.getDeliveredNotifications(callback);
  }
}
