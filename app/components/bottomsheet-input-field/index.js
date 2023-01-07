import React, { useState } from 'react';
import { View } from 'react-native';
import { BottomSheetTextInput as BottomInput } from '@gorhom/bottom-sheet';
import PropTypes from 'prop-types';
import { Text } from 'app/components';
import Colors from 'app/theme/colors';
import styles from './styles';


const BottomSheetTextInput = props => {
  const { label, placeholder, description, error } = props;
  const [isFocused, setFocus] = useState(false);
  return (
    <View style={styles.container}>
      <BottomInput
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

export default BottomSheetTextInput;

BottomSheetTextInput.propTypes = {
  label: PropTypes.any,
  placeholder: PropTypes.any,
  description: PropTypes.any,
  error: PropTypes.any,
};


BottomSheetTextInput.defaultProps = {
  label: null,
  placeholder: null,
  description: null,
  error: null,
};