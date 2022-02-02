import React, { useState, useEffect } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { getSharingStep, getSharingStep2Data } from 'app/store/selectors';
import SharingActions from 'app/store/feedback/SharingRedux';
import { Text, TextInput } from 'app/components';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const SharingStep2 = () => {
  const { writeMessage } = labels.feedbackSharing;
  const dispatch = useDispatch();
  const activeStep = useSelector(getSharingStep);
  const stepData = useSelector(getSharingStep2Data);
  const [message, setMessage] = useState('');

  useEffect(() => {
    //TODO: step data loading
  },[]);

  const handleTextChange = text => {
    setMessage(text);
  };

  const handleBack = () => {
    dispatch(SharingActions.setSharingActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    dispatch(SharingActions.setSharingActiveStep(activeStep + 1));
    dispatch(SharingActions.setSharingData('step2', message));
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[containerStyles.descriptionContainer]}>
          <Text
            type="h6"
            style={containerStyles.stepTitleText}
            testID={'txt-sharingStep2-title'}>
            {writeMessage.step}: {writeMessage.title}
          </Text>
          <Text
            type="body1"
            style={containerStyles.stepDescriptionText}
            testID={'txt-sharingStep2-description'}>
            {writeMessage.content}
          </Text>
        </View>
        <View style={{ marginBottom: 30 }}>
          <TextInput
            placeholder={'Hi'}
            value={message}
            onChangeText={text => handleTextChange(text)}
            multiline
            numberOfLines={15}
            theme={{
              fonts: {
                regular: {
                  fontFamily: 'Raleway-Regular',
                },
              },
            }}
            testID={'input-sharingStep2-message'}
          />
        </View>
        <View style={[containerStyles.btnContainer,]}>
          <Button
            onPress={() => handleBack()}
            mode='text'
            testID={'btn-sharingStep2-back'}
          >
            {labels.common.back}
          </Button>
          <Button
            // style={styles.button}
            onPress={() => handleNext()}
            mode="contained"
            testID={'btn-sharingStep2-next'}>
            {labels.common.next}
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SharingStep2;

SharingStep2.propTypes = {};

SharingStep2.defaultProps = {};
