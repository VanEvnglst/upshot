import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  LeadershipAssessment,
  LeadershipAssessmentGuide,
  AssessmentEndLine,
  LeadershipOverviewResults,
  MilestoneSignpost1,
  MilestoneSignpost2,
  MilestoneSignpost3,
  MilestoneSignpost4,
  MilestoneSignpost5,
  MilestoneWrapUp,
  BaselineScore,

} from '../screens';
import ExtendedLeadershipAssessment from '../screens/leadership-assessment/extended';
//import MilestoneSignpost1 from '../screens/leadership-assessment/lsa-milestone-signpost/milestone-signpost1';

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
        name={'Milestone Signpost1'}
        component={MilestoneSignpost1}
      />
      <AssessmentStack.Screen
        name={'Milestone Signpost2'}
        component={MilestoneSignpost2}
      />
      <AssessmentStack.Screen
        name={'Milestone Signpost3'}
        component={MilestoneSignpost3}
      />
      <AssessmentStack.Screen
        name={'Milestone Signpost4'}
        component={MilestoneSignpost4}
      />
      <AssessmentStack.Screen
        name={'Milestone Signpost5'}
        component={MilestoneSignpost5}
      />
      <AssessmentStack.Screen
        name={'Milestone Wrap Up'}
        component={MilestoneWrapUp}
      />
    </AssessmentStack.Navigator>
  );
}
