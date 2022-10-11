import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView
} from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Button } from 'react-native-paper';
import FeedbackActions from 'app/store/feedback/FeedbackRedux';
import { UserAvatar } from 'app/components';
import { getCurrentJourney } from 'app/store/selectors';
import Images from 'app/assets/images';
import styles from './styles';

const FeedbackExchangeConfirmation = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const feedbackData = useSelector(getCurrentJourney);
  const memberName = feedbackData.frontliner.split(' ');
  const memberInitials = `${memberName[0].charAt(0)}${memberName[1].charAt(
    0,
  )}`;
  const dateLogged = moment(new Date()).format('llll');

  const handleNavigation = () => {
    navigation.navigate('Home');
    setTimeout(() => {
      dispatch(FrontlinerFeedbackActions.resetExchangeState());
    }, 300);
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={Images.deliveredEmoji}
          resizeMode='contain'
          style={styles.image}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>Confirmed!</Text>
        <Text style={styles.descriptionText}>You just sent your reply!</Text>
        <View style={styles.feedbackDetailsContainer}>
          <View style={styles.nameContainer}>
            <UserAvatar
              initials={memberInitials}
              name={`${memberName[0]} ${memberName[1]}`}
              position='Team Member'
              textStyle={{ color: '#667080'}}
            />
          </View>
          <View style={[styles.details, { marginTop: 20}]}>
            <Image
              source={Images.penEmoji}
              resizeMode='contain'
              style={styles.icon}
            />
            <Text style={styles.detailsText}> Feedback</Text>
          </View>
          <View style={styles.details}>
            <Image
              source={Images.calendarOutline}
              style={styles.icon}
              resizeMode='contain'
            />
            <View>
            <Text style={styles.detailsText}>Response sent:</Text>
            <Text style={{ fontSize: 14, opacity: 0.7, lineHeight: 22, color: '#667080', fontWeight: '400'}}>{dateLogged}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button
          onPress={() => handleNavigation()}
          mode="contained"
          style={styles.button}>
          <Text style={styles.buttonText}>Done</Text>
        </Button>
      </View>
      <View style={styles.spacer} />
    </SafeAreaView>
  );
}

export default FeedbackExchangeConfirmation;

FeedbackExchangeConfirmation.propTypes = {};

FeedbackExchangeConfirmation.defaultProps = {};
