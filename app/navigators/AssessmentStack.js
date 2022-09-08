import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  LeadershipAssessment,
  LeadershipAssessmentGuide,
  AssessmentEndLine,
  LeadershipOverviewResults,
  ExtendedAssessmentWrapUp,
  BaselineScore,
  AssessmentBreakDown,
  ExtendedAssessmentConfirmation,
  ExtendedLeadershipAssessment,
  CalculateAssessmentScore
} from 'app/screens';

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
       <AssessmentStack.Screen
        name={'Leadership Assessment Extended'}
        component={ExtendedLeadershipAssessment}
      />
       <AssessmentStack.Screen
        name={'Baseline Score'}
        component={BaselineScore}
      />
      <AssessmentStack.Screen
        name={'Extended Assessment Confirmation'}
        component={ExtendedAssessmentConfirmation}
      />
      <AssessmentStack.Screen
        name={'Calculate Assessment Score'}
        component={CalculateAssessmentScore}
      />
      <AssessmentStack.Screen
        name={'Extended Assessment Wrap Up'}
        component={ExtendedAssessmentWrapUp}
      />
      <AssessmentStack.Screen
        name={'Assessment break down'}
        component={AssessmentBreakDown}
      />
    </AssessmentStack.Navigator>
  );
}
