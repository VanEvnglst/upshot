import React from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import styles from './styles';

const Wrapper = ({
  barStyle='dark-content',
  statusBarColor = 'white',
  children,
  isLoading,
  style = {},
}) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <StatusBar barStyle={barStyle} backgroundColor={'#fff'} />
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </View>
  );
};

export default Wrapper;
