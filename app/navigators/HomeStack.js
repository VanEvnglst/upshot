import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  HomeScreen,
  ExploreScreen, 
  Profile, 
} from 'app/screens';
import FeedbackNavigator from './FeedbackStack';
import AssessmentNavigator from './AssessmentStack';
import FrontlinerNavigator from './FrontlinerStack';
import { BottomTabBar} from 'app/components';

const BottomTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator 
      screenOptions={{ 
        headerShown: false,
      }}
      initialRouteName={'Home'}
    >
      <HomeStack.Screen
        name={'Home'} 
        component={TabRoutes} 
      />
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
