import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text } from 'app/components';
import { getReflectingStep } from 'app/store/selectors';
import ReflectingActions from 'app/store/feedback/ReflectingRedux';
import reflectingRatings from 'app/models/ReflectingRatings';
import labels from 'app/locales/en';
import styles from './styles';
import Images from 'app/assets/images';
import containerStyles from '../styles';

const ReflectingStep3 = props => {
  const { route } = props;
  const { feedbackReflecting } = labels;
  const dispatch = useDispatch();
  const activeStep = useSelector(getReflectingStep);

  useEffect(() => {
    dispatch(ReflectingActions.fetchStaffRatings())
  }, []);

  const handleBack = () => {
    dispatch(ReflectingActions.setReflectingActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    dispatch(ReflectingActions.setReflectingActiveStep(activeStep + 1));
  };

  const NoRating = () => {
    return (
      <View style={styles.noRatingCard}>
        <Image
          source={Images.noRatings}
          resizeMode='contain'
        />
        <Text type='body2' style={styles.noRatingText}>{feedbackReflecting.notEnoughResponses}</Text>
      </View>
    )
  }

  const RatingCard = () => {
    <View style={{ backgroundColor: '#f5f5f5', padding: 20, justifyContent: 'center', alignItems: 'center', borderRadius: 4 }}>
      <View style={{ flexDirection: 'row'}}>
        <Text type='body2'></Text>
        <View></View>
      </View>
    </View>
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}
        bounces={false}
      >
      <View>
        <Text type="h6" style={containerStyles.stepTitleText}>
          {feedbackReflecting.feedbackFromTeam}
        </Text>
        <Text type="body1" style={containerStyles.stepDescriptionText}>{feedbackReflecting.feedbackFromTeamDesc}</Text>
      </View>
      <View style={styles.ratingsContainer}>
        <NoRating />
        </View>
      <View style={containerStyles.btnContainer}>
        <Button mode="text" onPress={() => handleBack()}>
          {labels.common.back}
        </Button>
        <Button mode="contained" onPress={() => handleNext()}>
          {labels.common.next}
        </Button>
      </View>
      </ScrollView>
    </View>
  );
};

export default ReflectingStep3;

ReflectingStep3.propTypes = {
  getReflectingStep: PropTypes.number,
  setReflectingActiveStep: PropTypes.func,
  fetchStaffRatings: PropTypes.func,
};

ReflectingStep3.defaultProps = {
  getReflectingStep: 1,
  setReflectingActiveStep: () => {},
  fetchStaffRatings: () => {},
};
