import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text } from 'app/components';
import styles from './styles';

const TextInput = props => {
  const { label, placeholder, description } = props;
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
        {description}
      </Text>
    </View>
  );
};

export default TextInput;

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  description: PropTypes.string,
};

TextInput.defaultProps = {
  label: '',
  placeholder: '',
  description: '',
};