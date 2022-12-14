import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Text, UserAvatar } from 'app/components';
import CaptureMomentActions from 'app/store/CaptureFeedbackMomentRedux';
import {
  getActiveCaptureStep,
  getStaffList,
} from 'app/store/selectors';
import { DataUtil } from 'app/utils';
import styles from '../styles';

const StaffSelection = ({ onPress }) => {
  const dispatch = useDispatch();
  const activeStep = useSelector(getActiveCaptureStep);
  const staffList = useSelector(getStaffList);
  const dateEntry = moment(new Date()).format('ddd. MMM DD, YYYY [at] hh:mm a'); 

  const handleSelection = item => {
    dispatch(CaptureMomentActions.setCaptureData('step1', item));
    dispatch(CaptureMomentActions.setCaptureData('dateLogged', dateEntry));
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
            <UserAvatar 
              initials={DataUtil.parseInitials(item.name)} />
            <View>
              <Text type="body2" weight="medium" style={styles.staffNameText}>
                {item.name}
              </Text>
              <Text type="caption1" weight="regular" style={styles.emailText}>
                {item.email}
              </Text>
            </View>
          </TouchableOpacity>
        )
      )}
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
