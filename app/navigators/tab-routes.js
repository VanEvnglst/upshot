import React from 'react';
import { Text } from 'react-native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Home, Messages, Activity, Profile } from '../containers';

const BottomTab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name={focused ? 'home-sharp' : 'home-outline'}
                size={24}
                color={focused ? '#5A0DE5' : '#212121'}
              />
            );
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text style={{ color: focused ? '#5A0DE5' : '#212121' }}>
                Home
              </Text>
            );
          },
        }}
      />
      <BottomTab.Screen
        name={'Messages'}
        component={Messages}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name={focused ? 'chatbubbles-sharp' : 'chatbubbles-outline'}
                size={24}
                color={focused ? '#5A0DE5' : '#212121'}
              />
            );
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text style={{ color: focused ? '#5A0DE5' : '#212121' }}>
                Messages
              </Text>
            );
          },
        }}
      />
      <BottomTab.Screen
        name={'Activity'}
        component={Activity}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name={focused ? 'stats-chart-sharp' : 'stats-chart-outline'}
                size={24}
                color={focused ? '#5A0DE5' : '#212121'}
              />
            );
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text style={{ color: focused ? '#5A0DE5' : '#212121' }}>
                Activity
              </Text>
            );
          },
        }}
      />
      <BottomTab.Screen
        name={'Profile'}
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name={focused ? 'person-circle-sharp' : 'person-circle-outline'}
                size={24}
                color={focused ? '#5A0DE5' : '#212121'}
              />
            );
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text style={{ color: focused ? '#5A0DE5' : '#212121' }}>
                Profile
              </Text>
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabRoutes;
