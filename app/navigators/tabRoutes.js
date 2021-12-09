import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { Home, Messages, Activity, Reminders, Profile } from '../screens';
import FeedbackStackScreen from './FeedbackStack';

const BottomTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name={'Home'} component={TabRoutes} />
      <HomeStack.Screen name={'Feedback'} component={FeedbackStackScreen} />
      <HomeStack.Screen name={'Reminders'} component={Reminders} />
    </HomeStack.Navigator>
  );
};

// const TabItem = ({ }) => {
//   return(
//     <Image
//     />
//   )
// }

function TabRoutes() {
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
        component={Reminders}
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
}

export default HomeStackScreen;
