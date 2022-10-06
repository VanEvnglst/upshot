import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView
} from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Button } from 'react-native-paper';
import FrontlinerFeedbackActions from 'app/store/frontliner/FLFeedbackRedux';
import { getFLFeedbackData } from 'app/store/selectors';
import Images from 'app/assets/images';
import styles from './styles';

const FrontlinerResponseConfirmation = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const frontlinerFeedback = useSelector(getFLFeedbackData);
  const managerName = frontlinerFeedback.em_name.split(" ");
  const managerInitials = `${managerName[0].charAt(0)}${managerName[1].charAt(0)}`;
  const dateLogged = moment(new Date()).format('llll');

  const handleNavigation = () => {
    navigation.navigate('Home');
    setTimeout(() => {
      dispatch(FrontlinerFeedbackActions.resetResponseState());
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
          <View style={styles.nameAvatar}>
                    <LinearGradient
                      style={styles.nameAvatar}
                      colors={['#C883FF', '#6587FF']}
                      start={{ x: 0.2, y: 0 }}
                      end={{ x: 0.7, y: 1 }}>
                      <Text style={styles.avatarText}>{managerInitials}</Text>
                    </LinearGradient>
                  </View>
            <View>
              <Text style={styles.nameText}>{frontlinerFeedback.em_name}</Text>
              <Text style={styles.detailsText}>Manager</Text>
            </View>
          </View>
          <View style={[styles.details, { marginTop: 20}]}>
            <Image
              source={frontlinerFeedback.cor_or_pos === 'Corrective' ? Images.penEmoji : Images.redHeartEmoji}
              resizeMode='contain'
              style={styles.icon}
            />
            <Text style={styles.detailsText}>{frontlinerFeedback.cor_or_pos} Feedback</Text>
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

export default FrontlinerResponseConfirmation;

FrontlinerResponseConfirmation.propTypes = {};

FrontlinerResponseConfirmation.defaultProps = {};
