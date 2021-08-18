import { StyleSheet } from 'react-native';

export default styles = showHint =>
  StyleSheet.create({
    container: {
      width: 24,
      height: 24,
      borderRadius: 24,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      backgroundColor: showHint ? 'green' : 'white',
    },
    iconStyle: {
      color: showHint ? 'green' : 'white',
    },
  });
