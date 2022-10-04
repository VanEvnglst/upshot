import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import FrontlinerFeedbackActions from 'app/store/frontliner/FLFeedbackRedux';
import styles from './styles';

const FrontlinerResponseReview = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const maxStep = useSelector(state => state.frontlinerFeedback.get('maxStep'));
  const activeStep = useSelector(state => state.frontlinerFeedback.get('activeStep'));

  const handleGoBack = () => {
    dispatch(FrontlinerFeedbackActions.setResponseActiveStep(activeStep - 1));
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
         <TouchableOpacity 
              accessibilityRole="button" 
              onPress={() => handleGoBack()}>
            <Icon 
              name="chevron-back-outline" 
              size={24}
              color={'white'}
            />
            </TouchableOpacity>

    </View>
  )
}

export default FrontlinerResponseReview;

FrontlinerResponseReview.propTypes = {};

FrontlinerResponseReview.defaultProps = {};
