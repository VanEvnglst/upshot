import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useSelector } from 'react-redux';

import AuthStack from './auth-stack';
import MainStack from './main-stack';

const Stack = createStackNavigator();

export default function Routes() {
  // const isLogin = useSelector((state) => state.auth.isLogin)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {true ? MainStack(Stack) : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
