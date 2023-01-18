import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SignIn,
  SignUp,
  StartingLineScreen,
  StartingGuideScreen,
} from 'app/screens';
import AssessmentNavigator from './AssessmentStack';

const AuthStack = createStackNavigator();
export default function AuthNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen 
        name={'Starting Line'}
        component={StartingLineScreen}
      />
      <AuthStack.Screen
        name={'Starting Guide'}
        component={StartingGuideScreen}
      />
      <AuthStack.Screen 
        name={'Sign In'} 
        component={SignIn}
      />
      <AuthStack.Screen
        name={'Sign Up'} 
        component={SignUp} 
      />
      <AuthStack.Screen 
        name={'Assessment'} 
        component={AssessmentNavigator} 
      />
    </AuthStack.Navigator>
  );
}
