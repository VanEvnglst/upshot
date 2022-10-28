import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text } from 'app/components';
import styles from '../styles';

const JourneyProgressTab = ({ item }) => {
  const { title, done, inProgress, description } = item;
  
  return (
    <View style={styles.progressContainer}>
        <View style={styles.dateContainer}>
          {done ? (
          <Text type='caption2' weight='regular'
            style={styles.progressText}>
              Oct 20, 5:00 PM
            </Text>
          ) : null}
        </View>
        <View style={styles.signPostContainer}>
          <View
            style={[
              styles.signPost,
              inProgress && styles.inProgressTaskPost,
              done && completedTaskPost
            ]}
          >
            <Icon name={ done ? 'checkmark-sharp' : 'remove-outline'} size={14} color={'#141416'} />
          </View>
            <View
              style={[
                styles.postLine,
                done && styles.completedTaskPost,
                !done && !inProgress && styles.toContinuePostLine,
              ]}
            />
            {/* TODO: add small circle here */}
        </View>
        <View style={styles.progressContent}>
        {inProgress ? (
            <>
              <Text
                type="caption3"
                weight="bold"
                style={styles.inProgressLabel}>
                In Progress
              </Text>
              <Text type="body2" weight="medium" style={styles.taskTitleText}>
                {title}
              </Text>
              <Text
                type="caption2"
                weight="regular"
                style={styles.progressText}>
                {description}
              </Text>
              <Button
                mode="contained"
                onPress={() => capture()}
                style={[
                  styles.button,
                  item.title === 'Reflect on Discussion' ? styles.transparentButton : styles.continueButton,
                ]}>
                <Text type="caption1" weight="bold" style={styles.continueText}>
                  Continue
                </Text>
                <Icon name={'arrow-forward'} size={14} color={'white'} />
              </Button>
            </>
          ) : done ? (
            <Text type="caption2" weight="regular" style={styles.progressText}>
              {item.doneDescription}
             </Text>
          ) : (
             <Text type="caption2" weight="regular" style={styles.progressText}>
               {item.inProgressDescription}
             </Text>
           )}
        </View>
      </View>
  )
}

export default JourneyProgressTab;

JourneyProgressTab.propTypes = {
  item: PropTypes.object.isRequired,
};

JourneyProgressTab.defaultProps = {
  item: {},
};