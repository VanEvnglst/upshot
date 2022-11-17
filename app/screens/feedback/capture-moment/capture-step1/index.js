import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, UserAvatar } from 'app/components';
import CaptureMomentActions from 'app/store/CaptureFeedbackMomentRedux';
import {
  getActiveCaptureStep,
  getStaffList,
} from 'app/store/selectors';
import styles from '../styles';

const StaffSelection = ({ onPress }) => {
  const dispatch = useDispatch();
  const activeStep = useSelector(getActiveCaptureStep);
  const staffList = useSelector(getStaffList);

  const handleSelection = item => {
    dispatch(CaptureMomentActions.setCaptureData('step1', item));
    setTimeout(() => {
      dispatch(CaptureMomentActions.setCaptureActiveStep(activeStep + 1));
    }, 500);
  };

  return (
    <View style={styles.listContainer}>
      {staffList.map((item, i) => {
        const staffName = item.name.split(' ');
        const staffInitials =
          staffName.length === 3 ?
          `${staffName[0].charAt(0)}${staffName[2].charAt(0)}`
          : staffName.length > 1
            ? `${staffName[0].charAt(0)}${staffName[1].charAt(0)}`
            : `${staffName[0].charAt(0)}`;
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleSelection(item)}
            style={styles.namesContainer}>
            <UserAvatar initials={staffInitials} />
            <View>
              <Text type="body2" weight="medium" style={styles.staffNameText}>
                {item.name}
              </Text>
              <Text type="caption1" weight="regular" style={styles.emailText}>
                {item.email}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default StaffSelection;

StaffSelection.propTypes = {
  setCaptureData: PropTypes.func,
  setCaptureActiveStep: PropTypes.func,
  staffList: PropTypes.array,
  activeStep: PropTypes.number,
};

StaffSelection.defaultProps = {
  setCaptureData: () => {},
  setCaptureActiveStep: () => {},
  staffList: [],
  activeStep: 1,

};
