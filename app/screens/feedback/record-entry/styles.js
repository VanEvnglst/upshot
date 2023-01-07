import { StyleSheet, Platform } from 'react-native';
import Colors from 'app/theme/colors';
import { DeviceUtil } from 'app/utils';

const { normalize } = DeviceUtil;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    flex: 1,
    paddingLeft: normalize(24),
  },
  headerTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    flex: 2,
    color: '#667080',
  },
  headerSave: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: normalize(24),
  },
  saveText: {
    color: '#667080',
  },
  stepsContainer: {
    marginTop: normalize(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: normalize(20),
    paddingHorizontal: normalize(24),
    borderBottomWidth: normalize(0.3),
  },
  activeStep: {
    backgroundColor: '#BAC0CA',
    height: 4,
    borderRadius: 4,
    width: 50,
  },
  inactiveStep: {
    opacity: 0.5,
    backgroundColor: '#BAC0CA',
    height: 4,
    borderRadius: 4,
    width: 50,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 30,
  },
  selectedNameContainer: {
    flexDirection: 'row',
    borderWidth: 0.3,
    paddingVertical: 5,
    paddingHorizontal: 8,
    height: 35,
    borderRadius: 6,
    alignItems: 'center',
    maxWidth: '60%',
    marginBottom: 8,
  },
  selectedAvatar: {
    width: 24,
    height: 24,
    borderRadius: 21,
    backgroundColor: '#667080',
    marginRight: 4,
    opacity: 0.6,
  },
  selectedName: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    color: '#667080',
  },
  questionContainer: {
    marginTop: 15,
    maxWidth: '95%',
  },
  mainQuestionText: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    color: '#667080',
    // marginBottom: 24,
  },
  highlightedText: {
    color: '#A76AFF',
  },
  logDateText: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: '#667080',
  },

  textInputStyle: {
    ...Platform.select({
      ios: {
        height: '100%'
      }
    })
  },
  bottomSheetContainer: {
    marginTop: normalize(24),
    marginHorizontal: normalize(25)
  },
  bottomSheetHeaderText: {

  },
  bottomSheetDescriptionText: {
    marginTop: normalize(12),
  },
  bottomSheetOption: {
    height: normalize(48),
    borderWidth: normalize(2),
    borderColor: '#667080',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  optionText: {
    marginLeft: normalize(5),
    color: '#667080'
  }

  
});
