import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text } from '../../components';
import Images from '../../assets/images';
import styles from './styles';

const LearningCard = props => {
  const { image, headline, subtitle, onPress, smallCard, mainCard, disabled, hasInProgress } =
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
      disabled={disabled}>
      <View style={styles.imageContainer}>
        <Image source={image} resizeMode="contain" style={styles.image} />
      </View>
      <View
        style={[
          mainCard && styles.textContainer,
          smallCard && styles.smallTextContainer,
        ]}>
        <Text
          type={mainCard ? 'h6' : 'caption'}
          style={[
            mainCard && styles.headline,
            smallCard && styles.smallHeadline,
          ]}>
          {headline}
        </Text>
        {smallCard && (
          <Image
            source={Images.lockedContent}
            resizeMode="contain"
            style={styles.iconStyle}
          />
        )}
        {mainCard && (
          <Text 
            type='body2'
            style={[styles.subtitle,
              hasInProgress && styles.inProgressSubtitle]}>
            {subtitle}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default LearningCard;
