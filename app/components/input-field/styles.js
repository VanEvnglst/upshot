import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  descriptionText: { 
    paddingLeft: 10,
    color: Colors.lightBlack,
   },
   focusedDescription: {
     color: Colors.primary,
   },
   errorText: {
     color: Colors.error,
     marginLeft: 20,
     paddingLeft: 10,
     marginTop: -10,
   }
});
