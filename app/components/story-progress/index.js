import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const StoryProgress = props => {
  const { length, activeStep } = props;
  return (
    <View style={styles.container}>
    {Array.apply(null, { length: length}).map((item, i) => (
      <View
        key={i}
        style={[styles.stepContainer, i + 1 <= activeStep ? styles.activeStep : styles.inactiveStep]}
      />
    ))}
    </View>
  )
}

export default StoryProgress;

StoryProgress.propTypes = {
  length: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired
};

StoryProgress.defaultProps = {
  length: 4,
  activeStep: 1
}