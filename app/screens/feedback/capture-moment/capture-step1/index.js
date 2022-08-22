import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import CaptureMomentActions from 'app/store/CaptureFeedbackMomentRedux';
import styles from '../styles';


const CaptureMomentStep1 = ({ onPress }) => {
  const dispatch = useDispatch();
  const activeStep = useSelector(state => state.captureMoment.get('activeStep'));

  const sampleStaffList = [
    {
      id: 1,
      name: "Tommy Shelby",
      email: "tommy@peaky.blinder.com"
    },
    {
      id: 2,
      name: "Harvey Specter",
      email: "harvey@pearsonspecterlitt.com"
    },
  ]

  // const handleSelection = ({ item }) => {
  //   console.log('step 1', item);
  //   onPress(item)
  //   setTimeout(() => {
  //     dispatch(CaptureMomentActions.setCaptureActiveStep(activeStep + 1));
  //   }, 300);
  // }

  return (
    <View style={styles.listContainer}>
      {sampleStaffList.map((item, i) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => onPress(item)} 
          style={styles.namesContainer}
        >
          <View style={styles.nameAvatar} />
          <View style={styles.staffNameContainer}>
            <Text style={styles.staffNameText}>{item.name}
            </Text>
            <Text style={styles.emailText}>{item.email}</Text>
          </View>
        </TouchableOpacity>
      ))}
  </View>
  )
}

export default CaptureMomentStep1;