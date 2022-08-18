import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LeadershipAssessment, LsaTestSign1, LsaTest, StartingLineScreen } from '../screens';

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
        name={'Leadership Assessment'}
        component={LeadershipAssessment}
      />

      <AuthStack.Screen
        name={'Leadership Assessment Test'}
        component={LsaTest}
      />
      
      <AuthStack.Screen
        name={'Leadership Assessment Signpost 1'}
        component={LsaTestSign1}
      />
      {/* <AuthStack.Screen
        name={'Sign in'}
        component={SignIn}
      /> */}
    </AuthStack.Navigator>
  );
}
