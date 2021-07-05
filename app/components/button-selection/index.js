import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const CheckBox = () => {
  const [isChecked, setCheck] = useState(false);
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={() => setCheck(!isChecked)}
      style={styles(isChecked).checkBoxContainer}>
      {/* {isChecked && (
        <Image
          source={}
          resizeMode='contain'
          style={styles.checkIcon}
        />
      )} */}
    </TouchableOpacity>
  );
};

const RadioButton = () => {
  const [isFilled, setRadio] = useState(false);
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={() => setRadio(!isFilled)}
      style={styles(isFilled).radioBtnContainer}>
      {isFilled && <View style={styles().filledRadioBtn} />}
    </TouchableOpacity>
  );
};

const ButtonSelection = props => {
  const { title, type, showHint, content } = props;
  return (
    <View style={styles(showHint).btnContainer}>
      <View style={styles().selectionContainer}>
        <Text>Sample</Text>
        {type === 'Radio' && <RadioButton />}
        {type === 'Check' && <CheckBox />}
      </View>
      {showHint && (
        <View style={styles().contentContainer}>
          <Text>content</Text>
        </View>
      )}
    </View>
  );
};

export default ButtonSelection;
