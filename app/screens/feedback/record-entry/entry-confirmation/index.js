import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  BackHandler,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import CaptureFeedbackMomentActions from 'app/store/CaptureFeedbackMomentRedux';
import Images from 'app/assets/images';
import styles from './styles';


const EntryContfirmation = props => {
  const { navigation } = props;

  const feedbackType = 'Corrective Feedback';

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
        <Text style={styles.descriptionText}>You just sent your feedback!</Text>
        <View style={styles.feedbackDetailsContainer}>
          <View style={styles.nameContainer}>
          <Image
              source={Images.usersOutline}
              resizeMode='contain'
              style={styles.nameIcon}
            />
            <View>
              <Text style={styles.nameText}>Staff name</Text>
              <Text style={styles.detailsText}>staff@email.com</Text>
            </View>
          </View>
          <View style={[styles.details, { marginTop: 20}]}>
            <Image
              source={feedbackType === 'Corrective Feedback' ? Images.penEmoji : Images.redHearEmoji}
              resizeMode='contain'
              style={styles.icon}
            />
            <Text style={styles.detailsText}>{feedbackType}</Text>
          </View>
          <View style={styles.details}>
            <Image
              source={Images.calendarOutline}
              style={styles.icon}
              resizeMode='contain'
            />
            <Text style={styles.detailsText}>Mon. Aug 23, 2022 at 3:20 pm</Text>
          </View>
          <View style={styles.details}>
            <Image
              source={Images.paperclip}
              resizeMode='contain'
              style={styles.icon}
            />
            <View>
            <Text style={styles.detailsText}>Topics</Text>
            <Text>sub topic</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button
          onPress={() => navigation.navigate('Home')}
          mode="contained"
          style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </Button>
      </View>
      <View style={styles.spacer} />
    </SafeAreaView>
  )
}

export default EntryContfirmation;

EntryContfirmation.propTypes = {};

EntryContfirmation.defaultProps = {};