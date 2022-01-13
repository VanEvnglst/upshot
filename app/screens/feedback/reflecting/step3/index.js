import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text } from 'app/components';
import { getReflectingStep } from 'app/store/selectors';
import ReflectingActions from 'app/store/feedback/ReflectingRedux';
import labels from 'app/locales/en';
import styles from './styles';
import Images from 'app/assets/images';
import containerStyles from '../styles';

const ReflectingStep3 = props => {
  const { route } = props;
  const { feedbackReflecting } = labels;
  const dispatch = useDispatch();
  const activeStep = useSelector(getReflectingStep);


  const handleNext = () => {
    dispatch(ReflectingActions.setReflectingActiveStep(activeStep + 1));
  }

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text type="h6" style={containerStyles.stepTitleText}>
          {feedbackReflecting.feedbackFromTeam}
        </Text>
      </View>
    </View>
  );
};

export default ReflectingStep3;

ReflectingStep3.propTypes = {};

ReflectingStep3.defaultProps = {};
