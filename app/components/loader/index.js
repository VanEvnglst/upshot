import {
  View,
  ActivityIndicator,
  Image,
  Platform,
} from 'react-native';
import Images from 'app/assets/images';
import React from 'react';
import Colors from 'app/theme/colors';
import styles from './styles';


export default function Loader() {
  return (
    <View
      style={styles.container}>
      <View
        style={styles.content}>
        <Image
          source={Images.upshotLoader}
          resizeMode="contain"
          style={styles.image}
        />
        <View
          style={styles.activity}>
          <ActivityIndicator
            size={Platform.OS === 'android' ? 60 : 'large'}
            color={Colors.primaryDark}
          />
        </View>
      </View>
    </View>
  );
}
