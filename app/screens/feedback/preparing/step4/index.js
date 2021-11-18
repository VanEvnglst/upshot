import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { Text, ButtonSelection } from 'app/components';
import styles from '../styles';
import labels from 'app/locales/en';

const PreparingStep4 = props => {
  const dispatch = useDispatch();

  const { createActionPlan } = labels.feedbackPreparing;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        <View style={styles.descriptionContainer}>
          <Text 
            type="h6" 
            style={styles.stepTitleText}
          >
            {createActionPlan.step}: {createActionPlan.title}
          </Text>
          <Text type="body1" style={styles.stepDescriptionText}>
            {createActionPlan.content}
          </Text>
        </View>
        <ButtonSelection
          type={'Check'}
          title={createActionPlan.brainstormOption1}
        />
        <ButtonSelection
          type={'Check'}
          title={createActionPlan.brainstormOption2}
        />
        <TextInput placeholder={labels.common.somethingElse} />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default PreparingStep4;
