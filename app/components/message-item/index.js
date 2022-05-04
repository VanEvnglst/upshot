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
    timestamp,
    response_required: responseRequired,
  } = item;

  const dateToday = new Date();
  const formattedTime = moment(dateToday, 'MM DD YYYY').format('LT');
  const dateArr = moment(timestamp).format('LLLL').split(' ');
  const formattedInvite = `${dateArr[0]} ${dateArr[1]} ${dateArr[2]} @ ${dateArr[4]} ${dateArr[5]}`;
  console.log(timestamp, formattedInvite);
  return (
    <Pressable onPress={onPress}>
      <View style={styles.cardContainer}>
        <Image source={Images.logo} style={styles.image} />
        <View style={styles.content}>
          <View style={styles.headerContent}>
            <Text
              type={responseRequired ? 'subtitle2' : 'body2'}
              style={styles.messageTitle}>
              {subject}
            </Text>
            <Text
              style={[
                styles.dateText,
                responseRequired && styles.unreadDateText,
              ]}>
              {formattedTime}
            </Text>
          </View>
          <Text
            type="caption"
            style={[
              responseRequired && styles.unreadMessageSubtitle,
              styles.messageSubtitle,
            ]}>
            {formattedInvite}
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
