import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { navigationRef } from 'app/services/NavigationService';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { getSignInState } from 'app/store/selectors';
import { initPushNotif } from '../services/notification-service';

const Stack = createStackNavigator();

export default function Routes() {
  const isSignedIn = useSelector(getSignInState);

  // useEffect(() => {
  //   console.log('call routes');
  //   // initPushNotif();
  // }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {/* TODO: Add conditions based on the user role  */}
        {isSignedIn ? MainStack(Stack) : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
