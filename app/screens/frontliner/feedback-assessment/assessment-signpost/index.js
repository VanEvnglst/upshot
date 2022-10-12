import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import FrontlinerFeedbackActions  from "app/store/frontliner/FLFeedbackRedux";
import Images from 'app/assets/images';
import styles from './styles';

const FeedbackAssessmentSignPost = props => { 
  const dispatch = useDispatch();

  const assessmentAnswers = useSelector(state => state.frontlinerFeedback.get('assessmentRating'));

  const handleSubmit = () => { 
    dispatch(FrontlinerFeedbackActions.postFLAssessment(assessmentAnswers));
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
        <Image
          source={ Images.hugEmoji }
          resizeMethod="contain"
          style={ styles.image }
          />
  </View>
        <View style={styles.contentContainer}>
          <Text style={styles.titleText}>Assessment Completed!</Text>
          <Text style={styles.descriptionText}>You just finished your assessment for your manager. Great job!</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button}
            onPress={() => handleSubmit()}>
          <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
          </View>
      </View>
    </>
  )
}

export default FeedbackAssessmentSignPost;

FeedbackAssessmentSignPost.propTypes = {};

FeedbackAssessmentSignPost.defaultProps = {};