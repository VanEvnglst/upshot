import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'app/components';
import styles from './styles';
import Images from 'app/assets/images';

const CheckBox = ({ selected, onPress }) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      style={[styles.checkBoxContainer, selected && styles.selectedCheckBox]}>
      {selected && (
        <Image
          source={Images.checkIcon}
          resizeMode="contain"
          style={styles.checkIcon}
        />
      )}
    </TouchableOpacity>
  );
};

const RadioButton = ({ selected, onPress }) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      style={[styles.radioBtnContainer, selected && styles.selectedRadioBtn]}>
      {selected && <View style={styles.filledRadioBtn} />}
    </TouchableOpacity>
  );
};

const ButtonSelection = props => {
  const { title, type, showHint, content, selected, disabled, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnContainer, showHint && styles.showHintContainer]}>
      <View style={styles.selectionContainer}>
        <View style={styles.titleContainer}>
          <Text type={selected ? 'subtitle2' : 'body2'}>{title}</Text>
        </View>
        <View style={styles.typeContainer}>
          {type === 'Radio' && (
            <RadioButton selected={selected} onPress={onPress} />
          )}
          {type === 'Check' && (
            <CheckBox selected={selected} onPress={onPress} />
          )}
        </View>
      </View>
      {showHint && (
        <View style={styles.contentContainer}>
          <Text type="body2" style={styles.hintContent}>
            {content}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ButtonSelection;
