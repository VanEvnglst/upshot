import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text, Slider } from 'app/components';
import Images from 'app/assets/images';
import { frontlinerEval } from 'app/models/FrontlinerEvalModel';
import labels from 'app/locales/en';
import containerStyles from '../styles';


const FrontlinerEvaluation = props => {
  const { survey } = labels.frontliner;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 30 }}>
        <Text
          type='h6'
          style={containerStyles.stepTitleText}
          testID={'txt-frontlinerSurvey-frontlinerEval'}
        >{survey.selfSurvey}</Text>
      </View>
    </View>
  )
}

export default FrontlinerEvaluation;


FrontlinerEvaluation.propTypes = {};

FrontlinerEvaluation.defaultProps = {};