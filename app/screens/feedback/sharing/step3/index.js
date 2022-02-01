import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from 'app/components';
import Images from 'app/assets/images';
import labels from 'app/locales/en';
import containerStyles from '../styles';
import styles from './styles';

const SharingStep3 = () => {
  const { shareFeedback } = labels.feedbackSharing;
  const dispatch = useDispatch();

  const EditButton = () => {
    return (
      <TouchableOpacity
        accessibilityRole="button"
        style={styles.editButton}
        onPress={() => handleEditNavigation()}>
        <View style={styles.editContainer}>
          {/* <Icon
                name='mode_edit'
                size={18}
              /> */}
          <Text type="button" style={styles.editText}>
            Edit
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleEditNavigation = () => {};

  const handleBack = () => {};

  const handleNext = () => {};

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
                To: staff
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text type="body2"
              style={styles.bodyText}
            >Text description</Text>
            <EditButton />
          </View>
          <View style={styles.earContainer}>
          <View style={styles.earContent}>
            <Text type="overline" style={styles.overlineEAR}>
                Event
              </Text>
              <Text type="body2" style={styles.bodyText}>
                Lorem ipsum
              </Text>
            </View>
            <View style={styles.earContent}>
            <Text type="overline" style={styles.overlineEAR}>
                Action
              </Text>
              <Text type="body2" style={styles.bodyText}>
                Lorem ipsum
              </Text>
            </View>
            <View style={styles.earContent}>
            <Text type="overline" style={styles.overlineEAR}>
                Result
              </Text>
              <Text type="body2" style={styles.bodyText}>
                Lorem ipsum
              </Text>
            </View>
          </View>
          <EditButton />
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

SharingStep3.propTypes = {};

SharingStep3.defaultProps = {};
