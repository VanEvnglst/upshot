import { StyleSheet } from 'react-native';
import { DeviceUtil } from 'app/utils';
import Colors from 'app/theme/colors';

const { normalize } = DeviceUtil;

export default styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.neutral3,
  },
  newAccountButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
            borderWidth: 1,
  },
  oldAccountContainer: {
    flexDirection: 'row', 
    justifyContent: 'center' 
  },
  logInText: {
    textDecorationLine: 'underline', 
    marginLeft: 4
  },
  bottomSheetHeader: {
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal: normalize(18),
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral5,
    paddingVertical: normalize(20),
  },
  bottomSheetTitle: {
    paddingLeft: normalize(40),
    flex: 3,
    textAlign: 'center',
    color: Colors.neutral3
  },
  bottomSheetOption: {
    flex: 1, 
    textAlign: 'right',
    color: Colors.neutral3
  },
  spacer: {
    height: 100
  }
});

