import React, { useState } from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'app/components';
import CaptureMomentActions from 'app/store/CaptureFeedbackMomentRedux';
import {
  getActiveCaptureStep,
  getMaxCaptureStep,
  getStaffList,
} from 'app/store/selectors';
import styles from '../styles';

const StaffSelection = ({ onPress }) => {
  const dispatch = useDispatch();
  const activeStep = useSelector(getActiveCaptureStep);
  const staffList = useSelector(getStaffList);
  const [selectedStaff, setSelectedStaff] = useState();

  const handleSelection = item => {
    console.log('step 1', item);
    dispatch(CaptureMomentActions.setCaptureData('step1', item));
    setTimeout(() => {
      dispatch(CaptureMomentActions.setCaptureActiveStep(activeStep + 1));
    }, 500);
  };

  return (
    <View style={styles.listContainer}>
      {staffList.map((item, i) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => handleSelection(item)}
          style={styles.namesContainer}>
          <View style={styles.nameAvatar} />
          <View style={styles.staffNameContainer}>
            <Text style={styles.staffNameText}>{item.name}</Text>
            <Text style={styles.emailText}>{item.email}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default StaffSelection;

StaffSelection.propTypes = {};

StaffSelection.defaultProps = {};
