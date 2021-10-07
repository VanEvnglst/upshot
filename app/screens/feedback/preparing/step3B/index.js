import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Text, ButtonSelection } from '../../../../components';
import labels from '../../../../locales/en';

const PreparingStep3B = props => {
  const { describeDiscuss } = labels.feedbackPreparing;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        <View>
          <View>
            <Text type="h6">
              {describeDiscuss.step}: {describeDiscuss.title}
            </Text>
            <Text type="body1">{describeDiscuss.observationQuestion}</Text>
            <ButtonSelection
              type={'Check'}
              title={describeDiscuss.observeOption1}
            />
            <ButtonSelection
              type={'Check'}
              title={describeDiscuss.observeOption2}
            />
            <TextInput placeholder={labels.common.somethingElse} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default PreparingStep3B;
