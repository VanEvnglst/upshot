import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import styles from './styles';

const UserAvatar = props => {
  const { initials, name, position, textStyle, style } = props;

  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        style={styles.nameAvatar}
        colors={['#C883FF', '#6587FF']}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 0.7, y: 1 }}>
        <Text style={styles.initialsText}>{initials}</Text>
      </LinearGradient>
      <View>
         <Text style={[styles.nameText, textStyle]}>{name}</Text>
         <Text style={[styles.positionText, textStyle]}>{position}</Text>
      </View>
    </View>
  );
};

export default UserAvatar;

UserAvatar.propTypes = {
  initials: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  textStyle: PropTypes.object,
  style: PropTypes.object,
};

UserAvatar.defaultProps = {
  initials: '',
  name: '',
  position: '',
  textStyle: {},
  style: {},
};
