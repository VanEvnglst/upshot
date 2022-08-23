import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { Button, ProgressBar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import leadershipSkillAreaActions from 'app/store/LSARedux';
import lsaOverview from 'app/models/LSAOverviewModel';

const LeadershipAssessmentGuide = props => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const retrieveData = async () => {
    await dispatch(leadershipSkillAreaActions.fetchOverviewQuestions());
    setTimeout(() => {
        navigation.navigate('Leadership Assessment');
    }, 300);
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 24 }}>
      <SafeAreaView>
        {/* <TouchableOpacity
          accessibilityRole="button"
          onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={24} font-size="6px" />
        </TouchableOpacity> */}
        <ProgressBar
          progress={1 / 15}
          color={'#667080'}
          style={{
            marginLeft: 3,
            borderRadius: 4,
            paddingRight: 19,
            marginTop: 12,
          }}></ProgressBar>
      </SafeAreaView>
      <ScrollView>
        <View
          style={{
            flex: 1,
            marginTop: 52,
            marginHorizontal: 4,
            width: 306,
            height: 168,
          }}></View>
        <View style={{ flex: 1, marginTop: 72 }}>
          <Text
            style={{
              fontSize: 32,
              fontWeight: '700',
              maxWidth: 278,
              lineHeight: 36,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {'Ready to start\nyour journey? 🚀' }
          </Text>

          <Text
            style={{
              marginTop: 27,
              maxWidth: 322,
              fontSize: 16,
              maxHeight: 129,
              fontWeight: '400',
              paddingLeft: 4,
            }}>
            {
              'Be yourself and answer honestly to find out your strengths in 5 leadership skill areas. Doing this will help us build your personalized leadership profile.\n\nIt will take 2 minutes or less.'
            }
          </Text>

          <Text
            style={{
              marginTop: 61,
              fontSize: 12,
              fontWeight: '400',
              marginLeft: 34,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {"This is based on Daniel Goleman's <source>"}
          </Text>
        </View>

        <View>
          <Button
            onPress={() => retrieveData()}
            mode="contained"
            style={{ marginTop: 12, backgroundColor: '#667080', width: 322 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#FFFFFF',
                justifyContent: 'center',
                alignContent: 'center',
                paddingVertical: 13,
              }}>
              Start Now
            </Text>
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default LeadershipAssessmentGuide;

const styles = StyleSheet.create({});
