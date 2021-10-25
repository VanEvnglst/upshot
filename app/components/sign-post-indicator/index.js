import React from 'react';
import { View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from 'app/theme/colors';
import styles from './styles';

const SignPostIndicator = props => {
  const { isCompleted, isLastItem, disabled, current, image } = props;
  return (
    <View style={styles.container}>
      {image && <Image resizeMode="contain" source={image} />}
      {!image &&
        (isCompleted ? (
          <Icon name={'checkmark-sharp'} size={24} color={Colors.primary} />
        ) : (
          <View style={[styles.postInProgress, disabled && styles.disabled]} />
        ))}
      <View
        style={[
          isLastItem ? null : styles.postLine,
          isCompleted && styles.doneLine,
          disabled && styles.disabledLine,
          current && styles.postLineCurrent,
        ]}
      />
    </View>
  );
};

export default SignPostIndicator;
