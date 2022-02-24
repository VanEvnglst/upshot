import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigator from './TabRoutes';
import MessagesNavigator from './MessagesStack';
import { getUserRole } from 'app/store/selectors';

const MainStack = createStackNavigator();

export default function MainNavigator() {
  const userRole = useSelector(getUserRole);

  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      {userRole === 1 ? (
        <MainStack.Screen
          name={'Messages'}
          component={MessagesNavigator}
        />
      ) : (
        <MainStack.Screen
          name={'Home'}
          component={HomeNavigator}
        />
      )}
    </MainStack.Navigator>
  );
}
