import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeScreen, Messages, Activity, Reminders, ExploreScreen, Profile, InsightsPanel, BaselineScore, FeedbackResponse, ExtendedLeadershipAssessment } from '../screens';
import FeedbackNavigator from './FeedbackStack';
import MessagesNavigator from './MessagesStack';
import AssessmentNavigator from './AssessmentStack';
import FrontlinerNavigator from './FrontlinerStack';
import { getSignUpState, getSignInState } from 'app/store/selectors';
import Images from 'app/assets/images';
import { BottomTabBar} from 'app/components';

const BottomTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeNavigator = ({ navigation, route }) => {
  const newSignUp = useSelector(getSignUpState);
  const isSignedIn = useSelector(getSignInState);
  
  return (
    <HomeStack.Navigator 
      screenOptions={{ 
        headerShown: false,
      }}
      initialRouteName={'Home'}
    >
      <HomeStack.Screen
        name={'Home'} 
        component={TabRoutes} />
      <HomeStack.Screen
            name={'Assessment'}
            component={AssessmentNavigator}
          />
      <HomeStack.Screen
        name={'Frontliner'}
        component={FrontlinerNavigator}
      />
    </HomeStack.Navigator>
  );
};

function TabRoutes() {
  return (
    <BottomTab.Navigator
      tabBar={props => <BottomTabBar {...props} />
      }
      initialRouteName="Home">
      <BottomTab.Screen
        name={'Home'}
        component={HomeScreen}
      />
      <BottomTab.Screen
        name={'Explore'}
        component={ExploreScreen}
      />
      <BottomTab.Screen
        name={'Feedback'}
        component={FeedbackNavigator}
        options ={{ tabBarVisible: false }}
      />
      <BottomTab.Screen
        name={'Notifications'}
        component={ExploreScreen}
      />
      <BottomTab.Screen
        name={'Profile'}
        component={Profile}
      />
    </BottomTab.Navigator>
  );
}

export default HomeNavigator;
