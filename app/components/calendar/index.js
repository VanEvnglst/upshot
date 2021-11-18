import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import styles from './styles';

const DateTimePicker = ({ isVisible, mode, onCancel, onConfirm }) => {
  return (
    <DateTimePickerModal
      isVisible={isVisible}
      mode={mode}
      onConfirm={onConfirm}
      onCancel={onCancel}
      style={styles.container}
    />
  );
};

export default DateTimePicker;
