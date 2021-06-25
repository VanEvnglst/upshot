import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const LearningCard = props => {
  const { image, header, subtitle } = props;
  
  return (
    <View style={styles.cardContainer}>
      <View>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headline}>{header}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default LearningCard;