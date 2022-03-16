import React, { Component, createContext } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createStore from './store';
import Routes from './navigators/Routes';
import { theme, darkTheme } from './theme';
import NotifService from './services/notification-service';
import RemoteNotifController from './services/remote-notification-controller';

const { store, persistor } = createStore();

const ThemeContext = createContext({});

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
    console.log('call register', token);
    this.setState({ registerToken: token.token, fcmRegistered: true });
  }

  onNotif(notif) {
    //Alert.alert(notif.title, notif.message);
  }

  storeToken = async value => {
    try {
      await AsyncStorage.setItem('fcmToken', value);
      console.log('save success');
    } catch (e) {
      console.log('save error', e);
    }
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar
            barStyle={'dark-content'}
          />
          <Routes />
        </PersistGate>
      </Provider>
    );
  } 
  
}
