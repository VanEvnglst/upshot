import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated, Image, BackHandler } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import EventObservationExchange from './event-exchange';
import Images from 'app/assets/images';
import styles from './styles';

const ResponseExchange = props => {
  const { navigation, route } = props;
  const dispatch = useDispatch();


  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      // if (activeStep === 1) 
      //   dispatch(ResponseActions.setResponseActiveStep(activeStep - 1));
      // else
      //   navigation.goBack();
      return true;
    });

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => {
        return true;
      });
  }, []);

  const handleStepContent = () => {
    return 
  }

  return (
    <View style={styles.container}>
      {/* {handleStepContent()} */}
      <EventObservationExchange {...props}/>
    </View>
  )
}

export default ResponseExchange;

ResponseExchange.propTypes = {};

ResponseExchange.defaultProps = {};