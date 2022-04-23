import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text } from 'app/components';
import Colors from 'app/theme/colors';
import styles from './styles';


const TextInput = props => {
  const { label, placeholder, description, error } = props;
  const [isFocused, setFocus] = useState(false);
  return (
    <View style={styles.container}>
      <Input
        type="flat"
        textAlignVertical={'top'}
        {...props}
        label={isFocused ? label : null}
        placeholder={isFocused ? null : placeholder}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        activeUnderlineColor={Colors.primaryDark}
      />
      {description && !error && (
        <Text
          type="caption"
          style={[
            styles.descriptionText,
            isFocused && styles.focusedDescription,
          ]}>
          {description}
        </Text>
      )}
      {error && error.length !== 0 && !description && (
        <Text
          type='caption'
          style={styles.errorText}
        >{error}</Text>
      )}
    </View>
  );
};

export default TextInput;

TextInput.propTypes = {
  label: PropTypes.any,
  placeholder: PropTypes.any,
  description: PropTypes.any,
  error: PropTypes.any,
};


TextInput.defaultProps = {
  label: null,
  placeholder: null,
  description: null,
  error: null,
};