import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Text, ButtonSelection } from 'app/components';
import labels from 'app/locales/en';
import styles from '../styles';

const PreparingStep3B = props => {
  const { describeDiscuss } = labels.feedbackPreparing;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
          <View style={styles.descriptionContainer}>
            <Text type="h6" style={styles.stepTitleText}>
              {describeDiscuss.step}: {describeDiscuss.title}
            </Text>
            <Text type="body1" style={styles.stepDescriptionText}>{describeDiscuss.observationQuestion}</Text>
            </View>
            <ButtonSelection
              type={'Check'}
              title={describeDiscuss.observeOption1}
            />
            <ButtonSelection
              type={'Check'}
              title={describeDiscuss.observeOption2}
            />
            <TextInput placeholder={labels.common.somethingElse} />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default PreparingStep3B;
