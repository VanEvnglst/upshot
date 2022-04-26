import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from 'app/components';
import labels from 'app/locales/en';
import styles from './styles';

const JourneyIndicator = props => {
  const { hasProgress, current, disabled, done, style, item, onPress, shouldStart, subtitle, isPreparing } = props;
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
          {subtitle}
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
        <TouchableOpacity accessibilityRole={'button'} onPress={onPress}>
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
      {(hasProgress || isPreparing) && (
        <TouchableOpacity accessibilityRole={'button'} onPress={onPress}>
          <Text
            type="button"
            style={[styles.buttonText, current && styles.currentText]}>
            {labels.common.continue}
          </Text>
        </TouchableOpacity>
      )}
      {shouldStart && (
        <TouchableOpacity accessibilityRole={'button'} onPress={onPress}>
          <Text
            type="button"
            style={[styles.buttonText, current && styles.currentText]}>
            {labels.common.start}
          </Text>
        </TouchableOpacity>
      )}
      {/* {isPreparing && (
        <TouchableOpacity accessibilityRole={'button'} onPress={onPress}>
          <Text
            type="button"
            style={[styles.buttonText, current && styles.currentText]}>
            {labels.common.continue}
          </Text>
        </TouchableOpacity>
      )} */}
    </View>
  );
};

export default JourneyIndicator;

JourneyIndicator.propTypes = {
  hasProgress: PropTypes.bool,
  current: PropTypes.bool,
  disabled: PropTypes.bool,
  done: PropTypes.bool,
  shouldStart: PropTypes.bool,
  item: PropTypes.object.isRequired,
};

JourneyIndicator.defaultProps = {
  hasProgress: false,
  current: false,
  disabled: false,
  done: false,
  shouldStart: false,
  item: {},
};
