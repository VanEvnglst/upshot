import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import FrontlinerFeedbackActions from 'app/store/frontliner/FLFeedbackRedux';
import Images from 'app/assets/images';
import styles from './styles';

const FrontlinerFeedbackList = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const frontlinerFeedbackList = useSelector(state =>
    state.frontlinerFeedback.get('activeFeedbackList'),
  );

  useEffect(() => {
    dispatch(FrontlinerFeedbackActions.fetchFLFeedbackList());
  }, []);

  const handleNavigation = item => {
    navigation.navigate('FL Response To Clarification', {
      id: item.fb_id,
      manager: item.em_name,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitleText}>Feedback Coaching</Text>
          <Text
            style={
              styles.headerSubtitleText
            }>{`Advocating for your employees' growth and optimal performance with feedback`}</Text>
        </View>
        <View style={styles.contentContainer}>
          {frontlinerFeedbackList.map((item, i) => (
            <TouchableOpacity
              accessibilityRole="button"
              key={i}
              onPress={() => handleNavigation(item)}
              style={styles.journeyCard}>
              <View style={styles.journeyCardNameContainer}>
                <View style={styles.avatarIcon} />
                <Text style={styles.nameText}>{item.em_name}</Text>
              </View>
              <View
                style={{
                  marginTop: 12,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={
                    item.cor_or_pos === 'Corrective'
                      ? Images.penEmoji
                      : Images.redHeartEmoji
                  }
                  style={styles.feedbackTypeIcon}
                  resizeMode="contain"
                />
                <Text style={styles.feedbackTypeText}>
                  {item.cor_or_pos} Feedback
                </Text>
              </View>

              <Text style={styles.dateText}>
                {moment(item.date).format('llll')}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default FrontlinerFeedbackList;

FrontlinerFeedbackList.propTypes = {
  frontlinerFeedbackList: PropTypes.object,
  fetchFLFeedbackList: PropTypes.func,
};

FrontlinerFeedbackList.defaultProps = {
  frontlinerFeedbackList: {},
  fetchFLFeedbackList: () => {},
};
