import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeScreen, Messages, Activity, Reminders, Profile, InsightsPanel } from '../screens';
import FeedbackNavigator from './FeedbackStack';
import MessagesNavigator from './MessagesStack';
import AssessmentNavigator from './AssessmentStack';
import { getSignUpState } from 'app/store/selectors';

const BottomTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  const newSignUp = useSelector(getSignUpState);
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}
      initialRouteName={newSignUp ? 'Assessment' : 'Home'}
    >
      <HomeStack.Screen name={'Home'} component={TabRoutes} />
      <HomeStack.Screen name={'Feedback'} component={FeedbackNavigator} />
      {/* <HomeStack.Screen name={'Reminders'} component={Reminders} /> */}
      <HomeStack.Screen
            name={'Assessment'}
            component={AssessmentNavigator}
          />
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
        component={HomeScreen}
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
        component={MessagesNavigator}
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
        component={InsightsPanel}
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
     {/*  <BottomTab.Screen
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
      /> */}
    </BottomTab.Navigator>
  );
}

export default HomeNavigator;
