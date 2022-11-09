import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import CaptureMomentActions from 'app/store/CaptureFeedbackMomentRedux';
import Images from 'app/assets/images';
import styles from '../styles';


const CaptureMomentStep2 = () => {
  const dispatch = useDispatch();
  const activeStep = useSelector(state => state.captureMoment.get('activeStep'));
  const dateEntry = moment(new Date().format('ddd. MMM DD, YYYY [at] hh:mm a'))
  const [typeSelection, setTypeSelection] = useState({
    id: 0,
    icon: '',
    title: '',
    hint: '',
  });

  const options = [
    {
      id: 1,
      icon: Images.redHeartEmoji,
      title: 'Positive',
      hint: 'When you tell others what they are doing well'
    },
    {
      id: 2,
      icon: Images.penEmoji,
      title: 'Corrective',
      hint: 'When you tell others what they need to improve on'
    }
  ];


  const selectFeedbackType = () => {
    dispatch(CaptureMomentActions.setCaptureData('step2', typeSelection))
    setTimeout(() => {
      dispatch(CaptureMomentActions.setCaptureActiveStep(activeStep + 1))
    }, 200);
  }
  return (
    <View style={styles.content}>
      <Text style={styles.mainQuestionText}>What kind of feedback do you want to give?</Text>
      <Text style={styles.dateTimeText}>{dateEntry}</Text>
      <Text style={styles.descriptionText}>Tell us what kind of observation do you want to give to your team member/s.</Text>
      <View style={styles.selectionContainer}>
        <View style={styles.selections}>
          {options.map((item, index) => (
            <TouchableOpacity 
              key={item.id}
              style={[styles.selectionButton, typeSelection.id === item.id && styles.selectedButton]}
              onPress={() => setTypeSelection(item)}
            >
              <Image
                source={item.icon}
                resizeMode="contain"
                style={styles.selectionIcon}
              />
              <Text style={[styles.selectionText, typeSelection.id !== item.id && styles.unselectedText]}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.hintContainer}>
          <Text style={styles.hintText}>{typeSelection.hint}</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button
          mode='contained'
          onPress={() => selectFeedbackType()}
          style={[styles.button, typeSelection.id === 0 ? styles.disabledBtn : styles.enabledBtn]}
        ><Text style={{ color: typeSelection.id === 0 ? '#667070' : 'white' }}>Continue</Text></Button>
      </View>
      <View style={styles.spacer} />
    </View>
  )
}

export default CaptureMomentStep2;