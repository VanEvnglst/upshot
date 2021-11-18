import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types';

import styles from './styles';

const Header = props => {
  const { headerLeft, headerRight, headerTitle, moreOptions, navigation } = props;
  return (
    <View style={styles.container}>
      {headerLeft && 
        <TouchableOpacity
          accessibilityRole='button'
          style={styles.headerLeftContainer}
          onPress={headerLeft.onPress}
        >
          <Icon
            name="arrow-back-outline"
            style={styles.iconStyle}
            size={24}
          />
        </TouchableOpacity>
      }
      <View style={styles.headerTitleContainer}>
        <Text>{headerTitle}</Text>
      </View>
      {headerRight && 
        <TouchableOpacity 
          style={styles.headerRightContainer}
          onPress={headerRight.onPress}
        >
          <Icon
            name="close-outline"
            style={styles.iconStyle}
            size={30}
          />
        </TouchableOpacity>
      }
      {moreOptions && 
        <TouchableOpacity 
          accessibilityRole="button"
          style={styles.headerRightContainer}
          onPress={moreOptions.onPress}
        >
          <Icon
            name="ellipsis-vertical-sharp"
            style={styles.iconStyle}
            size={24}
          />
        </TouchableOpacity>
      }
    </View>
  );
};

Header.propTypes = {
  headerLeft: PropTypes.shape({
    onPress: PropTypes.func.isRequired,
    component: PropTypes.any,
  }),
  headerRight: PropTypes.shape({
    onPress: PropTypes.func.isRequired,
    component: PropTypes.any,
  }),
  style: PropTypes.any,
  headerTitle: PropTypes.string,
  moreOptions: PropTypes.shape({
    onPress: PropTypes.func.isRequired,
    component: PropTypes.any,
  }),
};

Header.defaultProps = {
  headerLeft: null,
  headerRight: null,
};

export default Header;