import React from 'react';
import { View, Pressable, Image } from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Text } from 'app/components';
import Images from 'app/assets/images';
import styles from './styles';

const MessageItem = ({ item, onPress }) => {
  const {
    from,
    subject,
    subtitle,
    timestamp,
    isMessageRead,
  } = item;

  return (
    <Pressable onPress={onPress}>
      <View style={styles.cardContainer}>
        <Image source={Images.logo} style={styles.image} />
        <View style={styles.content}>
          <View style={styles.headerContent}>
            <Text
              type={isMessageRead ? 'body2' : 'subtitle2'}
              style={styles.messageTitle}>
              {subject}
            </Text>
            <Text
              style={[
                styles.dateText,
                !isMessageRead && styles.unreadDateText,
              ]}>
              {timestamp}
            </Text>
          </View>
          <Text
            type="caption"
            style={[
              !isMessageRead && styles.unreadMessageSubtitle,
              styles.messageSubtitle,
            ]}>
            {subtitle}
          </Text>
          {/* {responseRequired && (
            <View style={styles.responseContainer}>
              <View style={styles.responseIndicator} />
              <Text type="overline" style={styles.responseRequiredText}>
                Response required
              </Text>
            </View>
          )} */}
        </View>
      </View>
    </Pressable>
  );
};

export default MessageItem;

MessageItem.propType = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  date: PropTypes.string,
  responseRequired: PropTypes.bool,
  onPress: PropTypes.func,
};

MessageItem.defaultProps = {
  title: '',
  subtitle: '',
  date: '',
  responseRequired: false,
  onPress: () => {},
};
