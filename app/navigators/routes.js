import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import AuthStack from './authStack';
import MainStack from './mainStack';
import { initPushNotif } from '../services/notification-service';

const Stack = createStackNavigator();

export default function Routes() {
  // const isLogin = useSelector((state) => state.auth.isLogin)

  // useEffect(() => {
  //   console.log('call routes');
  //   // initPushNotif();
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {true ? MainStack(Stack) : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
