import React, { useState } from 'react';
import { View } from 'react-native';
import { Chip } from 'react-native-paper';
import {Text} from '../../../../components';
import labels from '../../../../locales/en';
import styles from './styles';

const DocumentingStep1 = props => {
  const names = [
    {
      name: 'Teammate',
    },
    {
      name: 'Teammate',
    },
    {
      name: 'Teammate',
    },
    {
      name: 'Teammate',
    },
    {
      name: 'Teammate',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text type='h6' style={styles.label}>{labels.feedbackDocumenting.giveFeedbackTo}</Text>
        <View style={styles.namesContainer}>
          {names.map((item, i) => (
            <Chip 
              mode="flat" 
              style={styles.chips}
            >
              <Text type='body2'>{item.name}</Text>
            </Chip>
          ))}
        </View>
      </View>
      </View>
  );
};

export default DocumentingStep1;
