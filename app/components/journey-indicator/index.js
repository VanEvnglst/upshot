import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'app/components';
import labels from 'app/locales/en';
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
          done && styles.doneTextTitle,
        ]}>
        {item.title}
      </Text>
      {current && (
        <Text
          type="overline"
          style={[current && styles.currentText, styles.descriptionText]}>
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
        <TouchableOpacity
          accessibilityRole={'button'}
          onPress={() => console.log('navigate review')}>
          <Text
            type="button"
            style={[
              styles.reviewText,
              styles.buttonText,
              current && styles.currentText,
            ]}>
            {labels.common.review}
          </Text>
        </TouchableOpacity>
      )}
      {hasProgress && (
        <TouchableOpacity
          accessibilityRole={'button'}
          onPress={() => console.log('navigate continue')}>
          <Text style={[styles.buttonText, current && styles.currentText]}>
            {labels.common.continue}
          </Text>
        </TouchableOpacity>
      )}
      {current && !hasProgress && (
        <TouchableOpacity
          accessibilityRole={'button'}
          onPress={() => console.log('navigate start')}>
          <Text
            type="button"
            style={[styles.buttonText, current && styles.currentText]}>
            {labels.common.start}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default JourneyIndicator;
