import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text, Slider } from 'app/components';
import {managerEval} from 'app/models/ManagerEvalModel';
import Images from 'app/assets/images';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const ManagerEvaluation = props => {
  const { survey } = labels.frontliner;
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 30 }}>
        <Text
          type='h6'
          style={containerStyles.stepTitleText}
          testID={'txt-frontlinerSurvey-managerEval'}
        >{survey.howDidManagerDo} {survey.howDidManagerDoCont}</Text>
      </View>
    </View>
  )
}


export default ManagerEvaluation;


ManagerEvaluation.propTypes = {};

ManagerEvaluation.defaultProps = {};