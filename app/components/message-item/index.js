import React from 'react';
import { View, Pressable, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from 'app/components';
import Images from 'app/assets/images';
import styles from './styles';


const MessageItem = ({ title, subtitle, onPress, date, responseRequired }) => {

  return (
    <Pressable
      onPress={onPress}
    >
      <View style={styles.cardContainer}>
      <Image
          source={Images.logo}
          style={styles.image}
        />
        <View style={styles.content}>
          <View style={styles.headerContent}>
          <Text
          type={responseRequired ? 'subtitle2' : 'body2'}
          style={styles.messageTitle}
        >Welcome to Upshot!</Text>
        <Text style={[styles.dateText,
        responseRequired && styles.unreadDateText
        ]}>Feb 2022</Text>
            </View>
            <Text
          type='caption'
          style={[
            responseRequired && styles.unreadMessageSubtitle,
            styles.messageSubtitle
          ]}>This is a system generated message</Text>
          <View style={styles.responseContainer}>
            <View style={styles.responseIndicator} />
            <Text type='overline' style={styles.responseRequiredText}>Response required</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

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