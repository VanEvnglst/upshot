import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { Text, ButtonSelection } from '../../../../components';
import labels from '../../../../locales/en';

const PreparingStep4 = props => {
  const dispatch = useDispatch();

  const { createActionPlan } = labels.feedbackPreparing;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        <View>
          <Text type="h6">
            {createActionPlan.step}: {createActionPlan.title}
          </Text>
          <Text type="body1">{createActionPlan.content}</Text>
          <ButtonSelection
            type={'Check'}
            title={createActionPlan.brainstormOption1}
          />
          <ButtonSelection
            type={'Check'}
            title={createActionPlan.brainstormOption2}
          />
          <TextInput placeholder={labels.common.somethingElse} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default PreparingStep4;
