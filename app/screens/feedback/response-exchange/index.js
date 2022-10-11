import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated, Image, BackHandler } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import EventObservationExchange from './event-exchange';
import ImpactExchange from './impact-exchange';
import ContinueExchange from './continue-exchange';
import DoLessExchange from './do-less-exchange';
import StopDoingExchange from './stop-doing-exchange';
import AdditionalExchange from './additional-exchange';
import FeedbackExchangeReview from './exchange-review';
import { getExchangeMaxStep, getExchangeActiveStep } from 'app/store/selectors';
import Images from 'app/assets/images';
import styles from './styles';
import SupportExchange from './support-exchange';

const ResponseExchange = props => {
  const { navigation, route } = props;
  const dispatch = useDispatch();
  const maxStep = useSelector(getExchangeMaxStep);
  const activeStep = useSelector(getExchangeActiveStep);


  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => {
        return true;
      });
  }, []);

  const handleStepContent = () => {
    // if (maxStep === 7) {
      switch(activeStep) {
        case 1:
          return <EventObservationExchange {...props} />
        case 2:
          return <ImpactExchange {...props} />
        case 3:
          return <ContinueExchange {...props} />
        case 4:
            return <DoLessExchange {...props} />
        case 5:
          return <StopDoingExchange {...props} />
        case 6:
          return <AdditionalExchange {...props} />
        case 7:
          return <SupportExchange {...props} />
        case 8:
          return <FeedbackExchangeReview {...props} />
      }
    //}
  }

  return (
    <View style={styles.container}>
      {handleStepContent()}
    </View>
  )
}

export default ResponseExchange;

ResponseExchange.propTypes = {
  navigation: PropTypes.object
};

ResponseExchange.defaultProps = {
  navigation: {},
};