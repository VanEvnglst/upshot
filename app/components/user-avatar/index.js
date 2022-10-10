import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import styles from './styles';

const UserAvatar = props => {
  const { initials, name, position } = props;

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.nameAvatar}
        colors={['#C883FF', '#6587FF']}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 0.7, y: 1 }}>
        <Text style={styles.initialsText}>{initials}</Text>
      </LinearGradient>
      <View>
         <Text style={styles.nameText}>{name}</Text>
         <Text style={styles.positionText}>{position}</Text>
      </View>
    </View>
  );
};

export default UserAvatar;

UserAvatar.propTypes = {
  initials: PropTypes.string,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
};

UserAvatar.defaultProps = {
  initials: '',
  name: '',
  position: '',
};
