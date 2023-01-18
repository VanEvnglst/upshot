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
  CalculateAssessmentScore,
  ImproveSkills,
  OverviewWrapUp
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
        name={'Leadership Baseline Score'}
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
        name={'Assessment Break Down'}
        component={AssessmentBreakDown}
      />
      <AssessmentStack.Screen
        name={'Improve Skills'}
        component={ImproveSkills}
      />
      <AssessmentStack.Screen
        name={'Assessment Wrap Up'}
        component={OverviewWrapUp}
      />
    </AssessmentStack.Navigator>
  );
}
