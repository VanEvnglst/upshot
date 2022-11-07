import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { navigationRef } from 'app/services/NavigationService';
import AuthNavigator from './AuthStack';
import MainNavigator from './MainStack';
import { getSignInState, getSignUpState } from 'app/store/selectors';
import { initPushNotif } from '../services/notification-service';

const Stack = createStackNavigator();

export default function Routes() {
  const isSignedIn = useSelector(getSignInState);
  const newSignUp = useSelector(getSignUpState);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isSignedIn ?
        <Stack.Screen 
          name={'Main'}
          component={MainNavigator}
        />
        : 
        <Stack.Screen
          name={'Auth'}
          component={AuthNavigator}
        />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
