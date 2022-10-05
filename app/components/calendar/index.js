import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import styles from './styles';

const DateTimePicker = ({ isVisible, mode, display, onCancel, onConfirm,  onChange, minimumDate, date}) => {
  return (
    <DateTimePickerModal
      isVisible={isVisible}
      mode={mode}
      display={display}
      onConfirm={onConfirm}
      onCancel={onCancel}
      onChange={onChange}
      style={styles.container}
      themeVariant='light'
      isDarkModeEnabled={false}
      minimumDate={minimumDate}
      date={date}
    />
  );
};

export default DateTimePicker;
