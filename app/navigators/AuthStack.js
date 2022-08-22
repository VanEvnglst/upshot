import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn, SignUp, LeadershipAssessment, LeadershipAssessmentGuide, StartingLineScreen } from '../screens';
import AssessmentNavigator from './AssessmentStack';

const AuthStack = createStackNavigator();
export default function AuthNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <AuthStack.Screen
        name={'Starting line'}
        component={StartingLineScreen}
      />
       <AuthStack.Screen
            name={'Assessment'}
            component={AssessmentNavigator}
          />
      
      <AuthStack.Screen
        name={'Sign in'}
        component={SignIn}
      />
      <AuthStack.Screen
        name={'Sign up'}
        component={SignUp}
      />
    </AuthStack.Navigator>
  );
}
