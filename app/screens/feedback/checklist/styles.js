import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';
import { DeviceUtil } from 'app/utils';

const { normalize } = DeviceUtil;


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral1,
  },
  headerContainer: {
    paddingHorizontal: normalize(16),
    paddingTop: normalize(70),
    paddingVertical: normalize(13),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral3,
    backgroundColor: Colors.neutral1,
  },
  headerTitleText: {
    color: Colors.white,
    marginBottom: normalize(8),
  },
  headerIcon: {
    width: normalize(24),
    height: normalize(24),
  },
  contentContainer: {
    flex: 1, 
    paddingTop: normalize(30), 
    paddingHorizontal: normalize(24) 
  },
  headingText: {
    color: Colors.neutral5,
  },
  titleText: {
    color: Colors.white
  },
  selectionContainer: {
    marginTop: normalize(48)
  },
  selection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: normalize(24),
  },
  checkBoxContainer: {
    borderWidth: 2,
    borderRadius: 4,
    width: normalize(24),
    height: normalize(24),
    borderColor: Colors.neutral3,
    backgroundColor: 'transparent',
    marginRight: normalize(16),
  },
  selectedCheckBox: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  selectionText: {
    color: Colors.neutral8,
    width: '80%',
  },
  btnContainer: {
    backgroundColor: Colors.neutral2,
    paddingHorizontal: normalize(24),
    paddingTop: normalize(16),
    borderTopWidth: 1,
    borderTopColor: Colors.neutral3,
    marginTop: normalize(12),
    marginBottom: normalize(30), 
    height: '15%'
  },
  button: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    height: normalize(48),
    borderRadius: 12
  },
  buttonText: {
    color: Colors.neutral3,
  }
});