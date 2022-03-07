import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import { Text } from 'app/components';
import styles from './styles';

const TextInput = props => {
  const { label, placeholder } = props;
  const [isFocused, setFocus] = useState(false);
  return (
    <View>
      <Input
        type="flat"
        textAlignVertical={'top'}
        {...props}
        label={isFocused ? label : null}
        placeholder={isFocused ? null : placeholder}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
      />
      <Text 
        type="caption" 
        style={[styles.descriptionText,
        isFocused && styles.focusedDescription]}>
        Write your own description
      </Text>
    </View>
  );
};

export default TextInput;