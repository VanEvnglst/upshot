import { StyleSheet, Dimensions } from 'react-native';
import { DeviceUtil } from 'app/utils';
import Colors from 'app/theme/colors';
const { width } = Dimensions.get('screen');

const { normalize } = DeviceUtil;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stepsContainer: {
    marginTop: normalize(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: normalize(20),
    paddingHorizontal: normalize(24),
  },
  activeStep: {
    backgroundColor: '#BAC0CA',
    height: normalize(4),
    borderRadius: normalize(4),
    width: normalize(80),
  },
  inactiveStep: {
    opacity: 0.5,
    backgroundColor: '#BAC0CA',
    height: normalize(4),
    borderRadius: normalize(4),
    width: normalize(80),
  },
  guideContainer: {
    width: width,
    paddingHorizontal: normalize(22),
    paddingTop: normalize(50),
  },
  headerContainer: {
    flex: 1,
  },
  titleText: {
    color: '#667080',
  },
  centeredText: {
    textAlign: 'center',
  },
  guideImageContainer: {
    flex: 3,
  },
  skipContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: normalize(30),
  },
  descriptionText: {
    color: '#667080',
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
  signUpButton: {
    marginTop: normalize(8),
    borderWidth: 1,
    height: normalize(55),
    backgroundColor: '#667080',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: normalize(15),
  },
});
