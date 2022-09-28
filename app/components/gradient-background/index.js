import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

const GradientBackground = props => {
  const { children, colors, style } = props;
  return (
    <LinearGradient
      colors={colors}
      style={[styles.container, { ...style }]}
      start={{ x: 0.4, y: 0 }}
      end={{ x: 0.6, y: 1}}
    >
    {children}
    </LinearGradient>
  )
};

export default GradientBackground;


const styles = StyleSheet.create({
  container: {
    minHeight: 200, 
    opacity: 0.96,
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
});


GradientBackground.propTypes = {
  children: PropTypes.any,
  colors: PropTypes.array
};


GradientBackground.defaultProps = {
  children: {},
  colors: [],
}