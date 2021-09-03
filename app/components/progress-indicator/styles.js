import { StyleSheet } from 'react-native';

export default styles = colorIndicator =>
  StyleSheet.create({
    stepIndicator: {
      flexDirection: 'row',
      marginVertical: 10,
      paddingVertical: 10,
    },
    indicator: {
      width: '100%',
      marginRight: 20
    },
    color: {
      height: 2,
      backgroundColor: colorIndicator,
    },
  });
