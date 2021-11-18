import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Text, ButtonSelection } from 'app/components';
import labels from 'app/locales/en';
import styles from '../styles';

const PreparingStep4B = props => {
  const { createActionPlan } = labels.feedbackPreparing;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        <View style={styles.descriptionContainer}>
          <Text type="h6" style={styles.stepTitleText}>
            {createActionPlan.step}: {createActionPlan.title}
          </Text>
          <Text type="body1" style={styles.stepDescriptionText}>{createActionPlan.getSuggestions}</Text>
          </View>
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
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default PreparingStep4B;