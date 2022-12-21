import React, { useState } from 'react';
import {
  View,
  TextInput as Input
} from 'react-native';
import PropTypes from 'prop-types';
import { Text } from 'app/components';
import Colors from 'app/theme/colors';
import styles from './styles';


const BottomsheetTextInput = props => {
  const { label, placeholder, description, error } = props;
  const [isFocused, setFocus] = useState(false);
  return (
    <View style={styles.container}>
      <Input
        type="flat"
        textAlignVertical={'top'}
        {...props}
        label={label}
        placeholder={placeholder}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
      />
      
      {error && error.length !== 0  && (
        <Text
          type='caption1'
          style={styles.errorText}
        >{error}</Text>
      )}
    </View>
  );
};

export default BottomsheetTextInput;

BottomsheetTextInput.propTypes = {
  label: PropTypes.any,
  placeholder: PropTypes.any,
  description: PropTypes.any,
  error: PropTypes.any,
};


BottomsheetTextInput.defaultProps = {
  label: null,
  placeholder: null,
  description: null,
  error: null,
};