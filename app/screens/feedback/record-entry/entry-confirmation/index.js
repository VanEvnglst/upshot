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
  const feedbackData = useSelector(state => state.captureMoment.get('data'));
  const dateLogged = useSelector(
    state => state.captureMoment.get('data').dateLogged,
  );
  const topics = useSelector(state => state.captureMoment.get('data').step3);
  const meetingSched = useSelector(state => state.captureMoment.get('entryDetails')['f2fSchedule'])
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
              <Text style={styles.nameText}>{feedbackData.step1.name}</Text>
              {/* <Text style={styles.detailsText}>staff@email.com</Text> */}
            </View>
          </View>
          <View style={[styles.details, { marginTop: 20}]}>
            <Image
              source={feedbackData.step2.title === 'Corrective' ? Images.penEmoji : Images.redHeartEmoji}
              resizeMode='contain'
              style={styles.icon}
            />
            <Text style={styles.detailsText}>{feedbackData.step2.title} Feedback</Text>
          </View>
          <View style={styles.details}>
            <Image
              source={Images.calendarOutline}
              style={styles.icon}
              resizeMode='contain'
            />
            <View>
            <Text style={styles.detailsText}>Date Logged</Text>
            <Text style={{ fontSize: 14, opacity: 0.7, lineHeight: 22, color: '#667080', fontWeight: '400'}}>{dateLogged}</Text>
            </View>
          </View>
          <View style={styles.details}>
            <Image
              source={Images.paperclip}
              resizeMode='contain'
              style={styles.icon}
            />
            <View>
            <Text style={styles.detailsText}>{topics.selectedLayerOne.name}</Text>
            <Text style={{ fontSize: 14, opacity: 0.7, lineHeight: 22, color: '#667080', fontWeight: '400'}}>{topics.selectedLayerTwo.name}</Text>
            </View>
          </View>
          {topics.selectedLayerTwo.requires_face_to_face && (
          <View style={styles.details}>
            <Image
              source={Images.calendarOutline}
              resizeMode='contain'
              style={styles.icon}
            />
            <View>
            <Text style={styles.detailsText}>Meet up on:</Text>
            <Text style={{ fontSize: 14, opacity: 0.7, lineHeight: 22, color: '#667080', fontWeight: '400'}}>{meetingSched.date} | {meetingSched.startTime}-{meetingSched.endTime}</Text>
            </View>
          </View>
          )}
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