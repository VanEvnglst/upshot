import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import NotifService from './services/notification-service';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.notif = new NotifService(
      this.onRegister.bind(this),
      this.onNotif.bind(this),
    );
  }

  componentDidMount() {
    SplashScreen.hide();
    this.notif.requestPermissions();
  }

  onRegister(token) {
    console.log('reg', token);
    this.setState({ registerToken: token.token, fcmRegistered: true });
  }

  onNotif(notif) {
    Alert.alert(notif.title, notif.message);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Example push notif</Text>
        <View style={styles.spacer} />
        <TextInput
          style={styles.textField}
          value={this.state.registerToken}
          placeholder="Register token"
        />
        <View style={styles.spacer} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.notif.localNotif()}>
          <Text>Local Notif (now)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.notif.localNotif('sample.mp3');
          }}>
          <Text>Local Notification with sound (now)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.notif.scheduleNotif();
          }}>
          <Text>Schedule Notification in 30s</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.notif.scheduleNotif('sample.mp3');
          }}>
          <Text>Schedule notification in 30s with sound</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.notif.cancelNotif();
          }}>
          <Text>Cancel last notification (if any)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.notif.cancelAll();
          }}>
          <Text>Cancel all</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.notif.checkPermission(this.handlePerm.bind(this));
          }}>
          <Text>Check permission</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.notif.requestPermissions();
          }}>
          <Text>Request permissions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.notif.abandonPermissions();
          }}>
          <Text>Abandon Permissions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.notif.getScheduledLocalNotifications(notifs =>
              console.log(notifs),
            );
          }}>
          <Text>Log scheduled local notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.notif.getDeliveredNotifications(notifs => console.log(notifs));
          }}>
          <Text>Log delivered notifs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.notif.createOrUpdateChannel();
          }}>
          <Text>Create or update channel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.notif.popInitialNotification();
          }}>
          <Text>popInitial</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
        {this.state.fcmRegistered && <Text>FCM configured</Text>}
        <View style={styles.spacer} />
      </View>
    );
  }

  handlePerm(perms) {
    Alert.alert('Permissions', JSON.stringify(perms));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  spacer: {
    height: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#000',
    margin: 5,
    padding: 5,
    width: '70%',
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  textField: {
    borderWidth: 1,
    borderColor: '#AAAAAA',
    margin: 5,
    padding: 5,
    width: '70%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});
