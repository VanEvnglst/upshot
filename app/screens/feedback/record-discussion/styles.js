import { StyleSheet, Platform } from 'react-native';
import { DeviceUtil } from 'app/utils';

const { normalize } = DeviceUtil;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23262F'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    flex: 1,
    paddingLeft: 24,
  },
  headerTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  headerCancel: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 24,
  },
  cancelText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#FFFFFF',
  },
  stepsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingHorizontal: 24,
    borderBottomWidth: 0.3,
  },
  activeStep: {
    backgroundColor: '#BAC0CA',
    height: 4,
    borderRadius: 4,
    width: 50,
  },
  progressBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#777E904D',
  },
  progressBar: {
    margin: 16,
    height: normalize(4),
    maxWidth: normalize(343),
  },
  detailsContainer: {
    margin: normalize(24),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#777E904D',
    paddingBottom: normalize(14),
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarIcon: {
    width: normalize(19),
    height: normalize(19),
    borderRadius: 9.5, 
    marginRight: normalize(10), 
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarTextIcon: {
    fontSize: 7.58,
    lineHeight: 8.53,
    fontWeight: '700',
    color: 'white',
  },
  nameText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
    color: '#FFFFFF',
  },
  titleContainer: {
    marginTop: normalize(14),
    alignItems: 'center',
    justifyContent: 'center', 
  },
  titleText: {
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 32,
    color: '#FFFFFF',
  },
  subtitleText: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    color: '#B1B5C3',
  },
  selectionContainer: {
    marginHorizontal: normalize(24),
    marginTop: normalize(32),
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: normalize(327),
  },
  questionText: {
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 32,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  btnContainer: {
    height: normalize(56),
    minWidth: normalize(327),
    borderRadius: 24,
    borderColor: '#777E9080',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: '#FCFCFD',
  },
  cardContainer: {
    marginTop: normalize(32),
  },
  card: {
    minHeight: normalize(56),
    backgroundColor: '#353945',
    borderWidth: 0.5,
    borderColor: '#777E90',
    borderRadius: 12,
    paddingVertical: normalize(12),
    paddingHorizontal: normalize(16),
    justifyContent: 'center',
    marginTop: normalize(8),
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardStatus: {
    width: normalize(22),
    height: normalize(22),
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledCardStatus: {
    backgroundColor: '#68738F',
  },
  enabledCardStatus: {
    backgroundColor: '#3772FF',
  },
  cardTitleText: {
    marginLeft: normalize(14),
    flex: 8,
    textTransform: 'uppercase',
    fontSize: 12,
    lineHeight: 12,
    fontWeight: '700',
    color: 'white',
  },
  disabledCardTitleText: {
    color: '#777E90',
  },
  managerInputText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '400',
    color: '#777E90',
    marginBottom: normalize(5),
  },
  managerInputContent: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '400',
    color: 'white',
  },
  inputContainer: {
    marginTop: 18,
  },
  bottomSheetContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#353945'
  },
  bottomSheetImage: {
    height: normalize(80),
    width: normalize(80)
  },
  bottomSheetTextContainer: {
    marginTop: normalize(24),
    marginHorizontal: normalize(21),
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomSheetTitle: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    color: '#FFFFFF',
    marginBottom: normalize(12)
  },
  bottomSheetSubtitle: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 24,
    color: '#B1B5C3',
    textAlign: 'center'
  },
  bottomSheetBtnContainer: {
    marginTop: normalize(62),
    marginBottom: normalize(40)
  },
  bottomSheetBtn: {
    minWidth: normalize(351),
    height: normalize(48),
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  bottomSheetBtnText: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 16,
    color: '#353945'
  },
  endDiscussionContainer: {
    flex: 1,
    marginHorizontal: normalize(24),
  },
  imageContainer: {
    marginTop: normalize(132),
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    height: normalize(72),
    width: normalize(72)
  },
  screenTextContainer: {
    marginTop: normalize(12),
    maxWidth: normalize(327),
    justifyContent: 'center',
    alignItems: 'center' 
  },
  screenTitleText: {
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 32,
    color: '#FFFFFF',
    textAlign: 'center'
  },
  screenSubtitleContainer: {
    marginTop: normalize(52),
    maxWidth: normalize(289),
    justifyContent: 'center',
    alignItems: 'center'
  },
  screenSubtitleText: {
    fontSize: 14,
    lineHeight: 24,
    color: '#B1B5C3',
    textAlign: 'center' 
  },
  endDiscussionBtnContainer: {
    marginTop: normalize(72)
  },
  endDiscussionBtn: {
    height: normalize(48),
    justifyContent: 'center',
    alignItems: 'center' 
  },
  endDiscussionBtnText: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 16,
    color: '#FCFCFD'
  }
  
});

