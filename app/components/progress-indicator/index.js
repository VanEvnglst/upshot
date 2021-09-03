import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ProgressIndicator = ({ steps, currentIndex }) => {
  return (
    <View style={styles().stepIndicator}>
      {Array(steps)
        .fill()
        .map((val, index) => {
          let newIndex = currentIndex - 1;

          let colorIndicator = newIndex === val ? 'blue' : 'red';

          if (newIndex <= index) {
            colorIndicator = 'yellow';
          }
          if ((newIndex === index)) {
            colorIndicator = 'orange';
          }
          if (newIndex > index) {
            colorIndicator = 'purple';
          }

          return (
            <View
              style={[
                styles().indicator, 
                styles(colorIndicator).color
              ]}
              key={index}
            />
          );
        })}
    </View>
  );
};

ProgressIndicator.propTypes = {
  steps: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
};

ProgressIndicator.defaultProps = {};

export default ProgressIndicator;
