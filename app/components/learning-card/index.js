import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import Images from '../../assets/images';

const LearningCard = props => {
  const { image, headline, subtitle, onPress, smallCard, mainCard, disabled } =
    props;

  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      style={[
        styles.cardContainer,
        mainCard && styles.mainCardContainer,
        smallCard && styles.smallCardContainer,
      ]}
      disabled={disabled}
    >
      <View style={styles.imageContainer}>
        <Image 
          source={image} 
          resizeMode="contain" 
          style={styles.image} 
        />
      </View>
      <View
        style={[
          mainCard && styles.textContainer,
          smallCard && styles.smallTextContainer,
        ]}>
        <Text
          style={[
            mainCard && styles.headline,
            smallCard && styles.smallHeadline,
          ]}>
          {headline}
        </Text>
        {smallCard && 
          <Image 
            source={Images.lockedContent}
            resizeMode="contain" 
            style={styles.iconStyle} 
          />
        }
        {mainCard && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default LearningCard;
