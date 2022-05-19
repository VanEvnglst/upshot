import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Snackbar } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text } from 'app/components';
import { getReflectingStep, getReflectingError, getActionPlan } from 'app/store/selectors';
import ReflectingActions from 'app/store/feedback/ReflectingRedux';
import labels from 'app/locales/en';
import containerStyles from '../styles';
import styles from './styles';


const ReflectingStep5 = () => {
  const { feedbackReflecting } = labels;
  const dispatch = useDispatch();
  const activeStep = useSelector(getReflectingStep);
  const reflectingError = useSelector(getReflectingError);
  const actionPlanList = useSelector(getActionPlan);
  const [isSnackbarVisible, setSnackbarVisible] = useState(false);

  useEffect(() => {
    if(reflectingError !== '') 
      setSnackbarVisible(true)
  }, [reflectingError]);

  const dismissSnackbar = () => setSnackbarVisible(false);

  const handleBack = () => {
    dispatch(ReflectingActions.setReflectingActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    dispatch(ReflectingActions.updateFeedbackReflecting({ shouldClose: true }));
  };

  const ActionPlanItem = ({ item, index }) => {
    return (
    <View style={styles.itemContainer}>
      <View style={styles.count}>
        <View style={styles.countBadge}>
          <Text type='overline'>{index + 1}</Text>
        </View>
        <View
          style={styles.countLine} 
        />
      </View>
      <View style={styles.planContainer}>
        <Text type='body1'>{item.specificAction}</Text>
        <Text type='body1' style={[styles.planSpacer]}>{item.whenWillItHappen}</Text>
        <Text type='body1' style={[styles.planSpacer]}>{item.whoWillMakeIt}</Text>
      </View>
    </View>
    )
  }

  return (
    <View style={containerStyles.container}>
      <View>
        <Text type="h6" style={containerStyles.stepTitleText}>
          {feedbackReflecting.reviewActionPlan}
        </Text>
        <Text type="body1" style={containerStyles.stepDescriptionText}>
          {feedbackReflecting.reviewActionPlanDesc}
        </Text>
      </View>
      <View
        style={styles.contentContainer}>
          <Text type='overline'>action plan</Text>
          {actionPlanList.map((item, index) => (
            <ActionPlanItem 
              item={item}
              key={index}
              index={index}
            />
          ))}
        </View>
      <View style={containerStyles.btnContainer}>
        <Button mode="text" onPress={() => handleBack()}>
          {labels.common.back}
        </Button>
        <Button mode='contained' onPress={() => handleNext()}>
          {labels.common.next}
        </Button>
      </View>
      <Snackbar
        visible={isSnackbarVisible}
        onDismiss={dismissSnackbar}
      >
        <Text>{reflectingError}</Text>
      </Snackbar>
    </View>
  );
};

export default ReflectingStep5;

ReflectingStep5.propTypes = {
  activeStep: PropTypes.number,
  reflectingError: PropTypes.string,
  setReflectingActiveStep: PropTypes.func,
  updateFeedbackReflecting: PropTypes.func,
};
ReflectingStep5.defaultProps = {
  activeStep: 1,
  reflectingError: '',
  setReflectingActiveStep: () => {},
  updateFeedbackReflecting: () => {},
};
