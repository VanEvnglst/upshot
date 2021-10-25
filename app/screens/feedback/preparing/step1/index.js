import React, { useState } from 'react';
import { View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { Text, TextInput } from 'app/components';
import labels from 'app/locales/en';
import styles from '../styles';

const PreparingStep1 = props => {
  const { checkIn } = labels.feedbackPreparing;
  const dispatch = useDispatch();
  const [checkInValue, setCheckInValue] = useState();
  const [isComplete, setComplete] = useState(false);

  const handleText = () => {
    //dispatch()
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
          <View style={styles.descriptionContainer}>
            <Text type="h6" style={styles.stepTitleText}>
              {checkIn.step}: {checkIn.title}
            </Text>
            <Text type="body1" style={styles.stepDescriptionText}>
              {checkIn.content}
            </Text>
          </View>
          <View>
            <TextInput
              label={checkIn.checkInHint}
              placeholder={checkIn.checkInHint}
              value={checkInValue}
              onChangeText={text => setCheckInValue(text)}
              textAlignVertical="top"
              multiline
              numberOfLines={5}
              theme={{ fonts: { regular: { fontFamily: 'Raleway-Regular' } } }}
            />
          </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default PreparingStep1;
