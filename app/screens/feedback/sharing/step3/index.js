import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector} from 'react-redux';
import { Text } from 'app/components';
import labels from 'app/locales/en';
import containerStyles from '../styles';
import styles from './styles';

const SharingStep3 = () => {
  const { shareFeedback } = labels.feedbackSharing;
  const dispatch = useDispatch();

  return (
  <ScrollView
    showsVerticalScrollIndicator={false}
    bounces={false}
  >
    <View style={containerStyles.descriptionContainer}>
      <Text
        type='h6'
        style={containerStyles.stepTitleText}
        testID={'txt-sharingStep3-title'}
      >
        {shareFeedback.step}: {shareFeedback.title}
      </Text>
      <Text
        type='body1'
        style={containerStyles.stepDescriptionText}
        testID={'txt-sharingStep3-description'}
      >
        {shareFeedback.content}
      </Text>
    </View>
    <View style={{ flex: 3}}>
      <View style={{ borderWidth: 1, borderRadius: 8, padding: 20,}}
      >
        <View style={{  flexDirection: 'row'}}>
          <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: 'red'}}
          />
          <View style={{ marginLeft: 20}}>
          <Text>Name</Text>
          <Text>To: staff</Text>
          </View>
        </View>
        <View style={{ marginTop: 30}}>
          <Text>Text description</Text>
        </View>
      </View>
    </View>
    <View style={containerStyles.btnContainer}>
      <Button
        onPress={() => handleBack()}
        mode='text'
        testID={'btn-sharingStep3-back'}
      >
        {labels.common.back}
      </Button>
      <Button
        onPress={() => handleNext()}
        mode='contained'
        testID={'btn-sharingStep3-next'}
      >
        {labels.common.next}
      </Button>
    </View>
  </ScrollView>
  );
};

export default SharingStep3;

SharingStep3.propTypes = {};

SharingStep3.defaultProps = {};
