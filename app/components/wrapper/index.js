import React, { useContext } from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import ThemeContext from '../../App';

const Wrapper = ({
  padding,
  margin,
  backgroundColor,
  barStyle = 'dark-content',
  statusBarColor = 'white',
  children,
  isLoading,
  style = {},
}) => {
  const theme = useContext(ThemeContext);
  return (
    <View
      style={{
        ...styles.container,
        ...style,
        //margin: theme.spacing.s,
        //padding: theme.spacing[padding],
      }}>
      <StatusBar barStyle={barStyle} backgroundColor={'#fff'} />
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </View>
  );
};

export default Wrapper;
