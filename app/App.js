import React, { useEffect, useContext, useState, createContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import SplashScreen from 'react-native-splash-screen';
import createStore from './store';
import Routes from './navigators/routes';
import { theme, darkTheme } from './theme';

const { store, persistor } = createStore();

const ThemeContext = createContext({});
const App = () => {
  //TODO: move this to profile section once built
  const [darkMode, setDarkmode] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeContext.Provider value={darkMode ? darkTheme : theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </ThemeContext.Provider>
  );
};

export default App;
