import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Wrapper, Text } from '../../../../components';
import labels from '../../../../locales/en';

const PreparingStep3 = props => {
  const { describeDiscuss } = labels.feedbackPreparing;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        <View>
          <View>
            <Text type="h6">
              {describeDiscuss.step}: {describeDiscuss.title}
            </Text>
            <Text type="body1">{describeDiscuss.describeEvent}</Text>
            <TextInput placeholder={describeDiscuss.describeEventHint} />
            <Text type="body1">{describeDiscuss.describeAction}</Text>
            <TextInput placeholder={describeDiscuss.describeActionHint} />
            <Text type="body1">{describeDiscuss.describeImpact}</Text>
            <TextInput placeholder={describeDiscuss.describeImpactHint} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default PreparingStep3;
