import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const StoryProgress = props => {
  const { length, activeStep, type } = props;
  const ITEM_SIZE = 20;
  return (
    <View style={styles.container}>
    {Array.apply(null, { length: length}).map((item, i) => (
      <View
        key={i}
        style={[
          styles.stepContainer, 
          i + 1 <= activeStep ? type === 'light' ? styles.lightActiveStep : styles.activeStep : type === 'light' ? styles.lightInactiveStep : styles.inactiveStep, { width: ITEM_SIZE + (3 * length) }]}
      />
    ))}
    </View>
  )
}

export default StoryProgress;

StoryProgress.propTypes = {
  length: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
  type: PropTypes.string,
};

StoryProgress.defaultProps = {
  length: 4,
  activeStep: 1,
  type: 'dark'
}