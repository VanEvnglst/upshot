import React, { useState } from 'react';
import { View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { Text, ButtonSelection } from 'app/components';
import labels from 'app/locales/en';
import styles from '../styles';

const PreparingStep5B = props => {
  const { checkOut } = labels.feedbackPreparing;
  const dispatch = useDispatch();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        <View style={styles.descriptionContainer}>
          <Text type="h6" style={styles.stepTitleText}>
            {checkOut.step}: {checkOut.title}
          </Text>
          <Text style="body1" style={styles.stepDescriptionText}>
            {checkOut.checkoutAcknowledge}
          </Text>
        </View>
        <ButtonSelection
          type={'Check'}
          title={checkOut.checkoutInput}
        />
        <TextInput
          placeholder={labels.common.inputHint}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default PreparingStep5B;
