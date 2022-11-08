import React from 'react';
import { Text as TextComponent } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Text = ({ children, style, type, weight, testID }) => {
  return (
    <TextComponent
      testID={testID}
      style={[
        style,
        styles.text,
        type === 'hero' && styles.hero,
        type === 'h1' && styles.h1,
        type === 'h2' && styles.h2,
        type === 'h3' && styles.h3,
        type === 'h4' && styles.h4,
        type === 'body1' && styles.body1,
        type === 'body2' && styles.body2,
        type === 'button' && styles.button,
        type === 'smallButton' && styles.smallButton,
        type === 'caption1' && styles.caption1,
        type === 'caption2' && styles.caption2,
        type === 'caption3' && styles.caption3,
        type === 'hairlineLarge' && styles.hairlineLarge,
        type === 'hairlineSmall' && styles.hairlineSmall,
        weight === 'bold' && styles.boldWeight,
        weight === 'semiBold' && styles.semiBoldWeight,
        weight === 'medium' && styles.mediumWeight,
        weight === 'regular' && styles.regularWeight,
      ]}>
      {children}
    </TextComponent>
  );
};

export default Text;

Text.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  testID: PropTypes.string.isRequired,
  style: PropTypes.any,
  weight: PropTypes.string.isRequired,
};

Text.defaultProps = {
  children: '',
  type: '',
  testID: '',
  style: {},
  weight: '',
};
