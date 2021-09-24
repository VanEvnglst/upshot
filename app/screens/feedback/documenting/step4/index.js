import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ButtonSelection, HintIndicator } from '../../../../components';
import labels from '../../../../locales/en';
import styles from './styles';

const DocumentingStep4 = props => {
  return (
    <View style={styles.container}>
      {/* <Text>{labels.feedbackDocumenting.feedbackToGive}</Text> */}
      <ButtonSelection
        title={labels.common.today}
        type={'Radio'}
        // content={item.hint}
        // showHint={hint}
        onPress={() => console.log}
        selected={false}
      />
      <ButtonSelection title={labels.common.yesterday} type={'Radio'} />
      {/* Create new button to for calendar view */}
      <HintIndicator showHint={false} onPress={() => showHint(!hint)} />
    </View>
  );
};

export default DocumentingStep4;
