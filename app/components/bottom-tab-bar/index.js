import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import Images from 'app/assets/images';
import styles from './styles';

const BottomTabBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  return (
    <View style={styles.container}>
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        // console.warn('props', state.routes);
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        const TabIcon = () => {
          switch (index) {
            case 0:
              return (
                <Image
                  source={Images.dashboardIcon}
                  resizeMode="contain"
                  style={styles.tabIcon}
                />
              );
            case 1:
              return (
                <Image
                  source={Images.insightsIcon}
                  resizeMode="contain"
                  style={styles.tabIcon}
                />
              );
            case 2:
              return (
                <View style={styles.addIcon}>
                <Icon name={'add-outline'} size={18} color={'#FFFFFF'} />
              </View>
              )
            case 3:
              return (
                <Image
                  source={Images.notificationIcon}
                  resizeMode="contain"
                  style={styles.tabIcon}
                />
              );
            case 4:
              return (
                <Image
                  source={Images.profileIcon}
                  resizeMode="contain"
                  style={styles.tabIcon}
                />
              );
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            accessibilityRole="button"
            style={(isFocused && index !== 2) && styles.focusedTab}>
              <TabIcon />
          </TouchableOpacity>
        );
      })}
    </View>
    </View>
  );
};

export default BottomTabBar;

BottomTabBar.propTypes = {};

BottomTabBar.defaultProps = {};
