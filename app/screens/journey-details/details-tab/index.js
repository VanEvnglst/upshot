import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-paper';
import BottomSheet from '@gorhom/bottom-sheet';
import { Text } from 'app/components';
import Images from 'app/assets/images';
import styles from '../styles';

const JourneyDetailsTab = props => {
  const { details, requires_face_to_face } = props;
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Image
          source={Images.documentIcon}
          resizeMode="contain"
          style={styles.labelIcon}
        />
        <Text type="body2" weight="bold" style={styles.labelText}>
          Feedback Details
        </Text>
      </View>
      <View style={styles.detailContainer}>
        <Text type="hairlineSmall" weight="bold" style={styles.overlineLabel}>
          Topic
        </Text>
        <View style={styles.details}>
          <Text type="caption1" weight="medium" style={styles.detailsText}>
            {details.topic}
          </Text>
        </View>
        <View style={styles.details}>
          <Text type="caption1" weight="medium" style={styles.detailsText}>
            {details.subtopic}
          </Text>
        </View>
      </View>
      {requires_face_to_face ? (
        <>
          <View style={styles.labelContainer}>
            <Image
              source={Images.calendar}
              resizeMode="contain"
              style={styles.labelIcon}
            />
            <Text type="body2" weight="bold" style={styles.labelText}>
              Schedule
            </Text>
          </View>
          <View style={styles.detailContainer}>
            <Text
              type="hairlineSmall"
              weight="bold"
              style={styles.overlineLabel}>
              Date
            </Text>
            <View style={styles.details}>
              <Text type="caption1" weight="medium" style={styles.detailsText}>
                Mon, Oct. 31, 2022
              </Text>
            </View>
            <View style={styles.timeContainer}>
              <View style={styles.timeContainerWidth}>
                <Text
                  type="hairlineSmall"
                  weight="bold"
                  style={styles.overlineLabel}>
                  Start time
                </Text>
                <View style={styles.details}>
                  <Text
                    type="caption1"
                    weight="medium"
                    style={styles.detailsText}>
                    1:00 PM
                  </Text>
                </View>
              </View>
              <View style={styles.timeContainerWidth}>
                <Text
                  type="hairlineSmall"
                  weight="bold"
                  style={styles.overlineLabel}>
                  End time
                </Text>
                <View style={styles.details}>
                  <Text
                    type="caption1"
                    weight="medium"
                    style={styles.detailsText}>
                    2:00 PM
                  </Text>
                </View>
              </View>
            </View>
            <Text
              type="hairlineSmall"
              weight="bold"
              style={styles.overlineLabel}>
              Location
            </Text>
            <View style={styles.details}>
              <Text type="caption1" weight="medium" style={styles.detailsText}>
                Main Office
              </Text>
            </View>
          </View>
        </>
      ) : null}
      <View>
        {details.manager_entry !== {} || null ? (
          <Button
            mode="contained"
            style={[styles.button, styles.continueButton]}>
            View Feedback Entries
          </Button>
        ) : null}
        <Button
          mode="contained"
          style={[styles.button, styles.transparentButton]}>
          View all feedback
        </Button>
      </View>
    </View>
  );
};

export default JourneyDetailsTab;
