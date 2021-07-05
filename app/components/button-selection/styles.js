import { StyleSheet } from 'react-native';

export default styles = (showHint, isFilled, isChecked) =>
  StyleSheet.create({
    btnContainer: {
      borderWidth: 1,
      borderRadius: 4,
      borderColor: '#0000001F',
      backgroundColor: 'white',
      paddingHorizontal: 16,
      paddingVertical: 10,
      height: showHint ? 100 : 48,
    },
    selectionContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    checkBoxContainer: {
      borderWidth: 2,
      borderRadius: 4,
      width: 24,
      height: 24,
      borderColor: isChecked ? '#6200EE' : '#00000099',
      backgroundColor: isChecked ? '#6200EE' : 'transparent',
    },
    radioBtnContainer: {
      borderWidth: 2,
      borderRadius: 12,
      backgroundColor: 'transparent',
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: isFilled ? '#6200EE' : '#00000099',
    },
    filledRadioBtn: {
      height: 14,
      width: 14,
      borderRadius: 10,
      backgroundColor: '#6200EE',
    },
    contentContainer: {
      marginTop: 15,
      flex: 1,
    },
    content: {},
  });
