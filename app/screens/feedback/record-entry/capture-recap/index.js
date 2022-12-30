import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  BackHandler,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import CaptureMomentActions from 'app/store/feedback/CaptureFeedbackMomentRedux';
import Images from 'app/assets/images';

const CaptureFeedbackRecap = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const activeStep = useSelector(state =>
    state.captureMoment.get('entryActiveStep'),
  );
  const maxStep = useSelector(state => state.captureMoment.get('entryMaxStep'));
  const feedbackData = useSelector(state => state.captureMoment.get('data'));
  const dateLogged = useSelector(
    state => state.captureMoment.get('data').dateLogged,
  );
  const topics = useSelector(state => state.captureMoment.get('data').step3);
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            borderBottomWidth: 1,
            borderBottomColor: '#B1B5C3',
            paddingBottom: 20,
          }}>
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => handleGoBack()}
            style={{ paddingLeft: 24, color: '#667080' }}>
            <Icon name="chevron-back-outline" size={24} />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                fontSize: 24,
                lineHeight: 30,
                fontWeight: '700',
                color: '#667080',
                paddingTop: 20,
              }}>
              Feedback Summary
            </Text>
            <Text style={styles.selectedName}>
              Review the details before proceeding
            </Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={{ marginBottom: 12, flexDirection: 'row' }}>
            <View
              style={{
                width: 24,
                height: 24,
                borderRadius: 32,
                backgroundColor: '#667080',
                opacity: 0.5,
                marginRight: 12,
              }}
            />
            <View>
              <Text
                style={{
                  fontSize: 16,
                  marginBottom: 4,
                  color: '#667080',
                  fontWeight: '700',
                  lineHeight: 22,
                }}>
                {feedbackData.step1.name}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 22,
                  color: '#667080',
                  fontWeight: '400',
                }}>
                {dateLogged}
              </Text>
            </View>
          </View>
          <View style={styles.topicContainer}>
            <Text
              style={[styles.topicLabel, { marginBottom: 4, marginTop: 12 }]}>
              Feedback Type
            </Text>
            <View style={styles.topicPicker}>
              <Image
                source={
                  feedbackData.step2.title === 'Corrective'
                    ? Images.penEmoji
                    : Images.redHeartEmoji
                }
                resizeMode="contain"
                style={{ width: 24, height: 24, marginRight: 8 }}
              />
              <Text style={styles.topicLabel}>
                {feedbackData.step2.title} Feedback
              </Text>
            </View>

            <Text
              style={[styles.topicLabel, { marginBottom: 4, marginTop: 12 }]}>
              Topic
            </Text>
            <View style={styles.topicPicker}>
              <Text style={styles.topicLabel}>
                {topics.selectedLayerOne.name}
              </Text>
            </View>
            <Text
              style={[styles.topicLabel, { marginBottom: 4, marginTop: 12 }]}>
              Sub-topic
            </Text>
            <View style={styles.topicPicker}>
              <Text style={styles.topicLabel}>
                {topics.selectedLayerTwo.name}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '70%',
              }}>
              <TouchableOpacity
                style={{
                  minWidth: '95%',
                  backgroundColor: '#667080',
                  height: 48,
                  borderRadius: 6,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => navigation.navigate('Record Feedback Entry')}>
                <Text
                  style={{
                    fontSize: 16,
                    lineHeight: 22,
                    fontWeight: '700',
                    color: '#FFFFFF',
                  }}>
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CaptureFeedbackRecap;

CaptureFeedbackRecap.propTypes = {};

CaptureFeedbackRecap.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    flex: 1,
    paddingLeft: 24,
  },
  headerTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    flex: 2,
    fontSize: 16,
    lineHeight: 22,
    color: '#667080',
    fontWeight: '700',
  },
  headerSave: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 24,
  },
  saveText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#667080',
  },
  stepsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingHorizontal: 24,
    borderBottomWidth: 0.3,
  },
  activeStep: {
    backgroundColor: '#BAC0CA',
    height: 4,
    borderRadius: 4,
    width: 50,
  },
  inactiveStep: {
    opacity: 0.5,
    backgroundColor: '#BAC0CA',
    height: 4,
    borderRadius: 4,
    width: 50,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 30,
  },
  selectedNameContainer: {
    flexDirection: 'row',
    borderWidth: 0.3,
    paddingVertical: 5,
    paddingHorizontal: 8,
    height: 35,
    borderRadius: 6,
    alignItems: 'center',
    maxWidth: '40%',
  },
  selectedAvatar: {
    width: 24,
    height: 24,
    borderRadius: 21,
    backgroundColor: '#667080',
    marginRight: 4,
    opacity: 0.6,
  },
  selectedName: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    color: '#667080',
  },
  questionContainer: {
    marginTop: 15,
    maxWidth: '95%',
  },
  mainQuestionText: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    color: '#667080',
    // marginBottom: 24,
  },
  highlightedText: {
    color: '#A76AFF',
  },
  logDateText: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: '#667080',
  },

  topicContainer: {
    flex: 1,
  },
  topicPicker: {
    borderWidth: 1,
    borderColor: '#667080',
    height: 48,
    borderRadius: 6,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  topicLabel: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    color: '#667080',
    flex: 10,
  },
  noteContainer: {
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#B5E0FF',
    backgroundColor: '#FAFCFF',
    padding: 12,
    borderRadius: 4,
  },
  noteText: {
    color: '#5495EF',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
  },
  entriesContainer: {
    marginTop: 24,
    borderBottomWidth: 0.3,
  },
  answerContainer: {
    borderColor: '#667080',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 13,
    paddingVertical: 12,
    minHeight: 160,
    marginBottom: 24,
  },
  answerText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    color: '#667080',
    opacity: 0.7,
  },
});
