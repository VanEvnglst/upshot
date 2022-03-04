import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { Messages, ResponseScreen, SurveyDiscussion, SurveyGuide, FrontlinerSurvey } from '../screens';

const MessagesStack = createStackNavigator();

export default function MessagesNavigator() {
  return (
    <MessagesStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MessagesStack.Screen 
        name={'Messages'} 
        component={Messages} 
      />
      <MessagesStack.Screen
        name={'SurveyGuide'}
        component={SurveyGuide}
      />
      <MessagesStack.Screen
        name={'FrontlinerSurvey'}
        component={FrontlinerSurvey}
      />
      <MessagesStack.Screen
        name={'SurveyDiscussion'}
        component={SurveyDiscussion}
      />
      <MessagesStack.Screen name={'Messages'} component={Messages} />
      <MessagesStack.Screen
        name={'ResponseScreen'}
        component={ResponseScreen}
      />
    </MessagesStack.Navigator>
  );
}
