import React, { useState } from 'react';
import { View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { Wrapper, Text, ButtonSelection } from '../../../../components';
import labels from '../../../../locales/en';
import styles from './styles';

const PreparingStep2 = props => {
  const dispatch = useDispatch();
  const { statePurpose } = labels.feedbackPreparing;
  const [step2Data, setStep2Data] = useState();
  const [isFocused, setFocus] = useState(false);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        <View>
          <View>
            <Text type="h6">
              {statePurpose.step}: {statePurpose.title}
            </Text>
            <Text type="body1" style={styles.descriptionText}>
              {statePurpose.content}
            </Text>
          </View>
          <ButtonSelection
            type={'Radio'}
            title={statePurpose.statePurposeBtn}
            onPress={() => console.log('press')}
            selected={false}
          />
          <TextInput
            value={step2Data}
            onChangeText={text => setStep2Data(text)}
            placeholder={labels.common.inputHint}
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
            style={{ marginTop: 10 }}
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default PreparingStep2;
