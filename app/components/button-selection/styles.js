import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles =
  StyleSheet.create({
    btnContainer: {
      borderWidth: 1,
      borderRadius: 4,
      borderColor: '#0000001F',
      backgroundColor: 'white',
      paddingHorizontal: 16,
      height:  78,
      marginVertical: 10,
      justifyContent: 'center',
    },
    showHintContainer: {
      height: 130,
    },
    selectionContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    titleContainer: {
      flex: 4,
      marginRight: 20,
      paddingTop: 5,
    },
    typeContainer: {
      paddingTop: 4,
      alignSelf: 'center',
    },
    checkBoxContainer: {
      borderWidth: 2,
      borderRadius: 4,
      width: 24,
      height: 24,
      borderColor: '#00000099',
      backgroundColor: 'transparent',
    },
    selectedCheckBox: {
      backgroundColor: Colors.primary,
      borderColor: Colors.primary,
    },
    radioBtnContainer: {
      borderWidth: 2,
      borderRadius: 12,
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#00000099',
    },
    selectedRadioBtn: {
      borderColor: Colors.primary
    },
    filledRadioBtn: {
      height: 14,
      width: 14,
      borderRadius: 10,
      backgroundColor: Colors.primary,
    },
    contentContainer: {
      marginTop: 15,
      width: '86%',
    },
    hintContent: {
      color: Colors.black,
      opacity: 0.5,
    },
  });
