import React, { useState } from 'react';
import {
  View,
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
import { Text } from 'app/components';
import {
  getActiveCaptureStep,
} from 'app/store/selectors';
import Images from 'app/assets/images';
import styles from '../styles';


const CaptureMomentStep2 = () => {
  const dispatch = useDispatch();
  const activeStep = useSelector(getActiveCaptureStep);
  const dateEntry = useSelector(state => state.captureMoment.get('data').dateLogged);
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
    <ScrollView 
      showsVerticalScrollIndicator={false}
      style={styles.content}>
      <Text 
        type='body1'
        weight='bold'
        style={styles.mainQuestionText}>What kind of feedback do you want to give?</Text>
      <Text 
        type='caption1'
        weight='regular'
        style={styles.dateTimeText}>{dateEntry}</Text>
      <Text 
        type='body2'
        weight='regular'
        style={styles.descriptionText}>Tell us what kind of observation do you want to give to your team member/s.</Text>
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
              <Text 
                type='body2'
                weight='bold'
                style={[styles.selectionText, typeSelection.id !== item.id && styles.unselectedText]}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.hintContainer}>
          <Text 
            type='body2'
            weight='regular'
            style={styles.hintText}>{typeSelection.hint}</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button
          mode='contained'
          onPress={() => selectFeedbackType()}
          style={[styles.button, typeSelection.id === 0 ? styles.disabledBtn : styles.enabledBtn]}
        ><Text 
          style={[typeSelection.id === 0 ? styles.disabledBtnText : styles.enableBtnText]}>Continue</Text></Button>
      </View>
      <View style={styles.spacer} />
    </ScrollView>
  )
}

export default CaptureMomentStep2;

CaptureMomentStep2.propTypes = {
  setCaptureData: PropTypes.func,
  setCaptureActiveStep: PropTypes.func
};


CaptureMomentStep2.defaultProps = {
  setCaptureActiveStep: () => {},
  setCaptureData: () => {},
};