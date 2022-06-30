import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientBackground = props => {
  const { children } = props;
  return (
    <LinearGradient
      colors={['#6200EE', '#BF38FF']}
      style={styles.container}
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
})