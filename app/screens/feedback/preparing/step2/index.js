import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Wrapper, Text, ButtonSelection } from '../../../../components';
import labels from '../../../../locales/en';
import styles from './styles';

const PreparingStep2 = props => {
  const dispatch = useDispatch();
  const { statePurpose } = labels.feedbackPreparing;
  return (
    <View style={styles.container}>
      <View>
        <Text type="h6">
          {statePurpose.step2}: {statePurpose.title}
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
    </View>
  );
};

export default PreparingStep2;
