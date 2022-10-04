import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import FrontlinerFeedbackActions from 'app/store/frontliner/FLFeedbackRedux';
import { DeviceUtil } from 'app/utils';
import labels from 'app/locales/en';
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

  const handleNavigation = (item) => {
    navigation.navigate('Feedback Response', { 
      id: item.fb_id,
      manager: item.em_name,
  })
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingHorizontal: 16,
            marginTop: DeviceUtil.isIos() ? 60 : 30,
          }}>
          <Text style={styles.headerTitleText}>Feedback Coaching</Text>
          <Text
            style={{
              color: '#667080',
              fontSize: 14,
              lineHeight: 20,
              fontWeight: '400',
            }}>{`Advocating for your employees' growth and optimal performance with feedback`}</Text>
        </View>
        <View
          style={{
            marginTop: 24,
            borderBottomWidth: 0.3,
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}></View>
        <View style={{ flex: 1, paddingHorizontal: 16, marginTop: 30, height: '70%' }}>
          {frontlinerFeedbackList.map((item, i) => (
            <TouchableOpacity
              accessibilityRole='button'
              key={i}
              onPress={() => handleNavigation(item)}
              style={{ padding: 12, width: '100%', height: 100, borderRadius: 6, borderWidth:0.5}}    
                >
                  <View style={{ flexDirection: 'row'}}>
                    <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, marginRight: 8 }}
                    />
                    <Text>{item.em_name}</Text>
                  </View>
                  <Text style={{ marginTop: 12}}>{item.cor_or_pos} Feedback</Text>
                  <Text style={{ marginTop: 12}}>{item.date}</Text>
                </TouchableOpacity>
              ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default FrontlinerFeedbackList;

FrontlinerFeedbackList.propTypes = {};

FrontlinerFeedbackList.defaultProps = {};
