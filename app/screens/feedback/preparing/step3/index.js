import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Wrapper, Text } from 'app/components';
import labels from 'app/locales/en';
import styles from '../styles';

const PreparingStep3 = props => {
  const { describeDiscuss } = labels.feedbackPreparing;
  const [isEventFocused, setEventFocus] = useState(false);
  const [isActionFocused, setActionFocus] = useState(false);
  const [isResultFocused, setResultFocus] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        <View style={styles.descriptionContainer}>
          <Text type="h6" style={styles.stepTitleText}>
            {describeDiscuss.step}: {describeDiscuss.title}
          </Text>
          <Text type="body1" style={styles.stepDescriptionText}>
            {describeDiscuss.describeEvent}
          </Text>
        </View>
        <TextInput
          type="flat"
          label={isEventFocused ? describeDiscuss.describeEventHint : null}
          placeholder={
            isEventFocused ? null : describeDiscuss.describeEventHint
          }
          onBlur={() => setEventFocus(false)}
          onFocus={() => setEventFocus(true)}
        />
        <View style={styles.descriptionContainer}>
          <Text type="body1" style={styles.stepDescriptionText}>
            {describeDiscuss.describeAction}
          </Text>
        </View>
        <TextInput
          type="flat"
          label={isActionFocused ? describeDiscuss.describeActionHint : null}
          placeholder={
            isActionFocused ? null : describeDiscuss.describeActionHint
          }
          onBlur={() => setActionFocus(false)}
          onFocus={() => setActionFocus(true)}
        />
        <View style={styles.descriptionContainer}>
          <Text type="body1" style={styles.stepDescriptionText}>
            {describeDiscuss.describeImpact}
          </Text>
        </View>
        <TextInput
          type="flat"
          label={isResultFocused ? describeDiscuss.describeResultHint : null}
          placeholder={
            isResultFocused ? null : describeDiscuss.describeImpactHint
          }
          onBlur={() => setResultFocus(false)}
          onFocus={() => setResultFocus(true)}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default PreparingStep3;
