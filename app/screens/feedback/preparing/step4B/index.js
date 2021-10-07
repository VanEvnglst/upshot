import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Text, ButtonSelection } from '../../../../components';
import labels from '../../../../locales/en';

const PreparingStep4B = props => {
  const { createActionPlan } = labels.feedbackPreparing;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        <View>
          <Text type="h6">
            {createActionPlan.step}: {createActionPlan.title}
          </Text>
          <Text type="body1">{createActionPlan.getSuggestions}</Text>
          <ButtonSelection
            type={'Check'}
            title={createActionPlan.suggestionOption1}
          />
          <ButtonSelection
            type={'Check'}
            title={createActionPlan.suggestionOption2}
          />
          <ButtonSelection
            type={'Check'}
            title={createActionPlan.suggestionOption3}
          />
          <TextInput placeholder={labels.common.somethingElse} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
