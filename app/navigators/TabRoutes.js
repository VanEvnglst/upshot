import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeScreen, Messages, Activity, Reminders, ExploreScreen, Profile, InsightsPanel, BaselineScore, ExtendedLeadershipAssessment } from '../screens';
import FeedbackNavigator from './FeedbackStack';
import MessagesNavigator from './MessagesStack';
import AssessmentNavigator from './AssessmentStack';
import { getSignUpState, getSignInState } from 'app/store/selectors';
import AuthNavigator from './AuthStack';

const BottomTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  const newSignUp = useSelector(getSignUpState);
  const isSignedIn = useSelector(getSignInState);
  
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}
      initialRouteName={newSignUp && !isSignedIn ? 'Assessment' : 'Home'}
    >
      <HomeStack.Screen name={'Home'} component={TabRoutes} />
      <HomeStack.Screen name={'Feedback'} component={FeedbackNavigator} />
      <HomeStack.Screen
            name={'Assessment'}
            component={AssessmentNavigator}
          />
      <HomeStack.Screen
        name={'Auth'}
        component={AuthNavigator}
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
                Journey
              </Text>
            );
          },
        }}
      />
      <BottomTab.Screen
        name={'Explore'}
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name={focused ? 'search-outline' : 'search-outline'}
                size={24}
                color={focused ? '#5A0DE5' : '#212121'}
              />
            );
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text style={{ color: focused ? '#5A0DE5' : '#212121' }}>
                Explore
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
                Insights
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

export default HomeNavigator;
