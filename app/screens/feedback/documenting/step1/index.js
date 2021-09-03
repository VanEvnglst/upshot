import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Chip } from 'react-native-paper';
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
        <Text style={styles.label}>{labels.feedbackDocumenting.giveFeedbackTo}</Text>
        <View style={styles.namesContainer}>
          {names.map((item, i) => (
            <Chip 
              mode="flat" 
              style={styles.chips}
            >
              {item.name}
            </Chip>
          ))}
        </View>
      </View>
      </View>
  );
};

export default DocumentingStep1;
