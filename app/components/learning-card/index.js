import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from 'app/components';
import Images from 'app/assets/images';
import styles from './styles';

const LearningCard = props => {
  const {
    image,
    headline,
    subtitle,
    onPress,
    smallCard,
    mainCard,
    disabled,
    hasInProgress,
    testID,
  } = props;

  return (
    <TouchableOpacity
      testID={testID}
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
            type="body2"
            style={[
              styles.subtitle,
              hasInProgress && styles.inProgressSubtitle,
            ]}>
            {subtitle}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default LearningCard;

LearningCard.propTypes = {
  headline: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  subtitle: PropTypes.string,
  smallCard: PropTypes.bool,
  mainCard: PropTypes.bool,
  disabled: PropTypes.bool,
  hasInProgress: PropTypes.bool,
  testID: PropTypes.string.isRequired,
};

LearningCard.defaultProps = {
  headline: '',
  onPress: () => {},
  subtitle: '',
  smallCard: false,
  mainCard: false,
  disabled: false,
  hasInProgress: false,
  testID: '',
};
