import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text } from 'app/components';
import ReflectingActions from 'app/stores/feedback/ReflectingRedux';
import labels from 'app/locales/en';
import styles from './styles';
import containerStyles from '../styles';

const ReflectingStep1 = props => {
  const { route } = props;
  const { feedbackReflecting } = labels;
  const dispatch = useDispatch();


  const handleNext = () => {

  }

  return (
    <View>
      <View>
        <Text
          type='h6'
          style={containerStyles.stepTitleText}
          testID={'txt-reflectingStep1-label'}
        >{feedbackReflecting.howDidYouFeel}</Text>
      </View>
      <View></View>
      <View style={styles.btnContainer}>
        <Button
          mode='contained'
          onPress={() => handleNext()}
        >{labels.common.next}</Button>
      </View>
    </View>
  );
}

export default ReflectingStep1;

ReflectingStep1.propTypes = {};

ReflectingStep1.defaultProps ={};