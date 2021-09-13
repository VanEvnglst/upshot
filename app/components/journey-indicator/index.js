import React from 'react';
import { View } from 'react-native';
import { Text } from '../../components';
import styles from './styles';

const JourneyIndicator = props => {
  const { hasProgress, current, disabled, done, style, item, onPress } = props;
  return (
    <View
      style={[
        styles.container,
        current && styles.inProgressCard,
        disabled && styles.disabledCard,
        done && styles.doneCard,
        style,
      ]}>
      <Text
        type="subtitle1"
        style={[
          current && styles.currentText,
          disabled && styles.disabledText,
        ]}>
        {item.title}
      </Text>
      {current && (
        <Text type="overline" style={current && styles.currentText}>
          15 minutes
        </Text>
      )}
      {current && (
        <Text
          type="body2"
          style={[current && styles.currentText, styles.descriptionText]}>
          {item.description}
        </Text>
      )}
      {done && (
        <Text
          type="button"
          style={[
            styles.reviewText,
            styles.buttonText,
            current && styles.currentText,
          ]}>
          Review
        </Text>
      )}
      {hasProgress && (
        <Text style={[styles.buttonText, current && styles.currentText]}>
          Continue
        </Text>
      )}
      {current && !hasProgress && (
        <Text
          type="button"
          style={[styles.buttonText, current && styles.currentText]}>
          Start
        </Text>
      )}
    </View>
  );
};

export default JourneyIndicator;
