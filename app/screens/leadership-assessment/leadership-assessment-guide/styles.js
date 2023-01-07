import { StyleSheet } from 'react-native';
import { DeviceUtil } from 'app/utils';
import Colors from 'app/theme/colors';

const { normalize } = DeviceUtil;


export default styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: normalize(20),
    paddingHorizontal: normalize(24),
  },
  progressBar: {
    marginLeft: normalize(3),
    borderRadius: normalize(4),
    paddingRight: normalize(19),
    marginTop: normalize(12),
  },
  imageContainer: {
    flex: 1,
    marginTop: normalize(30),
  },
  contentContainer: {
    flex: 1,
  },
  guideTitleText: {
    color: '#667080',
  },
  guideDescriptionText: {
    color: '#667080',
    marginTop: normalize(27),
  },
  btnContainer: {
    marginBottom: normalize(30),
  },
  button: {
    marginTop: normalize(12),
    backgroundColor: '#667080',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    textTransform: 'capitalize',
    color: '#FFFFFF',
  },
  spacer: { height: normalize(50) }
});