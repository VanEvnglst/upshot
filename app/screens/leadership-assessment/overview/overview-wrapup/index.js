import React from 'react';
import { View, SafeAreaView, Image } from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text } from 'app/components';
import Images from 'app/assets/images';
import styles from './styles';

const OverviewWrapUp = props => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.imageContainer}>
        <Image
          source={Images.bigGrinEmoji}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text 
          type='h4' 
          weight='bold' 
          style={styles.titleText}
        >You're good to go! 🎉</Text>

        <Text 
          type='caption1'
          weight='regular'
        style={styles.descriptionText}>
          Don't worry, you can always continue building your profile later.
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <Button
          onPress={() => navigation.navigate('Home')}
          mode="contained"
          style={styles.button}>
          <Text 
            type='body2'
            weight='bold'
          style={styles.buttonText}>Continue later</Text>
        </Button>
      </View>
      <View style={styles.spacer} />
    </View>
  );
};

export default OverviewWrapUp;

OverviewWrapUp.propTypes = {
  navigation: PropTypes.object
};

OverviewWrapUp.defaultProps = {
  navigation: {}
};
