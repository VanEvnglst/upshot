import { StyleSheet } from 'react-native';
import { DeviceUtil } from 'app/utils';
import Colors from 'app/theme/colors';

const { normalize } = DeviceUtil;

export default styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  descriptionText: { 
    paddingLeft: 10,
    //color: Colors.lightBlack,
   },
   focusedDescription: {
     //color: Colors.primary,
   },
   errorText: {
     color: Colors.error,
     marginLeft: 20,
     paddingLeft: 10,
     marginTop: -10,
  },
});
