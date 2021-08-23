import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import styles from './styles';

const LearningCard = props => {
  const { image, headline, subtitle, onPress } = props;

  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image source={image} resizeMode="contain" style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.headline}>{headline}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    </TouchableOpacity>
  );
};

export default LearningCard;
