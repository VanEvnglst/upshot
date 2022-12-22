import { StyleSheet } from 'react-native';
import { DeviceUtil } from 'app/utils';
import Colors from 'app/theme/colors';

const { normalize } = DeviceUtil;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    marginTop: normalize(70),
    paddingLeft: normalize(25),
    maxWidth: '70%',
  },
  headerTitle: {
    color: '#667080',
    opacity: 0.7,
  },
  headerTitleDark: {
    color: '#667080',
  },
  actionContainer: {
    flex: 1,
    paddingLeft: normalize(25),
    paddingRight: normalize(18),
    marginBottom: normalize(15),
  },
  button: {
    height: normalize(55),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.neutral4,
  },
  newAccountButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(8),
    borderWidth: normalize(2),
    borderColor: Colors.neutral4,
  },
  oldAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logInText: {
    textDecorationLine: 'underline',
    marginLeft: normalize(4),
    color: Colors.neutral4,
  },
  bottomSheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(18),
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral5,
    paddingVertical: normalize(20),
  },
  bottomSheetTitle: {
    paddingLeft: normalize(40),
    flex: 3,
    textAlign: 'center',
    color: Colors.neutral3,
  },
  bottomSheetOption: {
    flex: 1,
    textAlign: 'right',
    color: Colors.neutral3,
  },
  signUpBtnText: {
    color: Colors.neutral4,
    textTransform: 'capitalize',
  },
  tellMeMoreText: {
    color: Colors.white,
    textTransform: 'capitalize',
  },
  labelsText: {
    color: Colors.neutral4,
  },
  spacer: {
    height: normalize(100),
  },
});
