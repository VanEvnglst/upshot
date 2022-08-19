import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  LeadershipAssessment,
  LeadershipAssessmentGuide,
  AssessmentEndLine,
  LeadershipOverviewResults,
} from '../screens';

const AssessmentStack = createStackNavigator();
export default function AssessmentNavigator() {
  return (
    <AssessmentStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AssessmentStack.Screen
        name={'Leadership Assessment Guide'}
        component={LeadershipAssessmentGuide}
      />
      <AssessmentStack.Screen
        name={'Leadership Assessment'}
        component={LeadershipAssessment}
      />
      <AssessmentStack.Screen
        name={'Assessment End Line'}
        component={AssessmentEndLine}
      />
      <AssessmentStack.Screen
        name={'Leadership Assessment Results'}
        component={LeadershipOverviewResults}
      />
    </AssessmentStack.Navigator>
  );
}
