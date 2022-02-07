import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSharingStep,
  getSharingStep1Data,
  getSharingStep2Data,
  getStaffName,
} from 'app/store/selectors';
import SharingActions from 'app/store/feedback/SharingRedux';
import { Text } from 'app/components';
import Images from 'app/assets/images';
import labels from 'app/locales/en';
import containerStyles from '../styles';
import styles from './styles';

const SharingStep3 = () => {
  const { feedbackSharing } = labels;
  const { shareFeedback } = feedbackSharing;
  const activeStep = useSelector(getSharingStep);
  const step1Data = useSelector(getSharingStep1Data);
  const step2Data = useSelector(getSharingStep2Data);
  const staffName = useSelector(getStaffName);
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [details, setDetails] = useState({
    event: '',
    action: '',
    result: '',
  });

  useEffect(() => {
    const { event, action, result } = step1Data.data;
    setDetails({
      event: event === '' ? feedbackSharing.skippedStep : event,
      action: action === '' ? feedbackSharing.skippedStep : action,
      result: result === '' ? feedbackSharing.skippedStep : result,
    });
    setMessage(step2Data.data);
  }, []);

  const handleBack = () => {
    dispatch(SharingActions.setSharingActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    const data = {
      message,
      details,
    };
    dispatch(SharingActions.updateFeedbackSharing(data));
  };

  const handleEditNavigation = step => {
    dispatch(SharingActions.setSharingActiveStep(activeStep - step));
  };

  const EditButton = ({ step }) => {
    return (
      <TouchableOpacity
        accessibilityRole="button"
        style={styles.editButton}
        onPress={() => handleEditNavigation(step)}>
        <View style={styles.editContainer}>
          <Icon name="pencil" size={18} />
          <Text type="button" style={styles.editText}>
            Edit
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <View style={containerStyles.descriptionContainer}>
        <Text
          type="h6"
          style={containerStyles.stepTitleText}
          testID={'txt-sharingStep3-title'}>
          {shareFeedback.step}: {shareFeedback.title}
        </Text>
        <Text
          type="body1"
          style={containerStyles.stepDescriptionText}
          testID={'txt-sharingStep3-description'}>
          {shareFeedback.content}
        </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.reviewCard}>
          <View style={styles.nameContainer}>
            <Image source={Images.avatar} style={styles.avatar} />
            <View style={styles.nameContent}>
              <Text type="caption" style={styles.managerNameText}>
                Ivan Evangelista
              </Text>
              <Text type="caption" style={styles.staffNameText}>
                To: {staffName.firstName}
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text type="body2" style={styles.bodyText}>
              {message}
            </Text>
            <EditButton step={2} />
          </View>
          <View style={styles.earContainer}>
            <View style={styles.earContent}>
              <Text type="overline" style={styles.overlineEAR}>
                {feedbackSharing.event}
              </Text>
              <Text type="body2" style={styles.bodyText}>
                {details.event}
              </Text>
            </View>
            <View style={styles.earContent}>
              <Text type="overline" style={styles.overlineEAR}>
                {feedbackSharing.action}
              </Text>
              <Text type="body2" style={styles.bodyText}>
                {details.action}
              </Text>
            </View>
            <View style={styles.earContent}>
              <Text type="overline" style={styles.overlineEAR}>
                {feedbackSharing.result}
              </Text>
              <Text type="body2" style={styles.bodyText}>
                {details.result}
              </Text>
            </View>
          </View>
          <EditButton step={1} />
        </View>
      </View>
      <View style={containerStyles.btnContainer}>
        <Button
          onPress={() => handleBack()}
          mode="text"
          testID={'btn-sharingStep3-back'}>
          {labels.common.back}
        </Button>
        <Button
          onPress={() => handleNext()}
          mode="contained"
          testID={'btn-sharingStep3-next'}>
          Send
        </Button>
      </View>
    </ScrollView>
  );
};

export default SharingStep3;

SharingStep3.propTypes = {
  getSharingStep: PropTypes.number,
  getSharingStep1Data: PropTypes.object,
  getSharingStep2Data: PropTypes.object,
  getStaffName: PropTypes.object,
  setSharingActiveStep: PropTypes.func,
  updateFeedbackSharing: PropTypes.func,
};

SharingStep3.defaultProps = {
  getSharingStep: 1,
  getSharingStep1Data: {},
  getSharingStep2Data: {},
  getStaffName: {},
  setSharingActiveStep: () => {},
  updateFeedbackSharing: () => {},
};
