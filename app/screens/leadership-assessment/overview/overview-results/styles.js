import { StyleSheet, Dimensions } from 'react-native';
import { DeviceUtil } from 'app/utils';
import Colors from 'app/theme/colors';

const { normalize } = DeviceUtil;

const { width } = Dimensions.get('screen');
const SPACING = 10;
const ITEM_SIZE = DeviceUtil.isIos() ? width * 0.77 : width * 0.85;
const ITEM_HEIGHT = ITEM_SIZE * 1.6;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  progressBar: {
    height: normalize(4),
    borderRadius: normalize(4),
    marginTop: normalize(20),
    marginHorizontal: normalize(24),
  },
  headerContainer: {
    marginTop: normalize(40),
    paddingHorizontal: normalize(24)
  },
  userIcon: {
    width: 58,
    height: 58,
    borderRadius: 58/2,
    backgroundColor: '#FFF3D4',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarIcon: {
    width: 38,
    height: 38
  },
  userDetailsContainer: {
    flex: 1,
  },
  userNameText: {
    fontSize: 10,
    lineHeight: 10,
    fontWeight: '600',
    color: '#B1B5C3',
    textTransform: 'uppercase'
  },
  headerTitleText: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    color: '#667080',
    marginTop: 5,
  },
  descriptionContainer: {
    marginTop: 25,
    paddingHorizontal: 24
  },
  contentContainer: {
    marginTop: 25,
    flex: 2,
  },
  improvementContainer: {
    marginBottom: 12,
    backgroundColor: '#FFF1F6',
    minHeight: 150,
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 12,

  },
  satisfactoryContainer: {
    marginBottom: 12,
    backgroundColor: '#FFF2E7',
    minHeight: 150,
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
  promisingContainer: {
    marginBottom: 12,
    backgroundColor: '#D6FFDB',
    minHeight: 150,
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
  skillAreaContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    minWidth: 128,
    minHeight: 56,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 10
  },
  labelText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
    color: '#667080'
  },
  content: {
    marginTop: normalize(24),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btnContainer: {
    marginTop: normalize(40),
    marginHorizontal: normalize(24)
  },
  button: {
    height: normalize(48),
    backgroundColor: '#667080',
    justifyContent: 'center',
    alignItems: 'center'
  },
  skippable: {
    marginTop: 24,
  },
  descriptionText: {
    color: "#667080",
    marginHorizontal: normalize(24)
  },
  textAlignStart: {
    textAlign: 'left'
  },
  spacer: {
    height: 100
  },
  linkText: {
    marginBottom: 24, 
    color: '#58A1F2', 
    fontSize: 14, 
    textAlign: 'center', 
    textDecorationLine: 'underline',
    lineHeight: 22,
  },
  skillAreaContentContainer: {
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#BAC0CA',
    height: normalize(280),
    padding: 12,
    paddingBottom: 20,
    borderRadius: 6,
    width: ITEM_SIZE,
    marginHorizontal: SPACING,
  },
  contentHeader: {
    borderBottomWidth: 1,
    borderColor: '#BAC0CA',
    paddingBottom: 12,
  },
  contentTitleText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#667080',
    fontWeight: '700',
  },
  contentLabelText: {
    fontSize: 14,
    color: '#667080',
    fontWeight: '700',
    lineHeight: 22,
    marginBottom: 5,
  },
  aboutSkillContent: {
    marginTop: 15,
    flex: 1
  },
  aboutSkillText: {
    fontSize: 14,
    color: '#667080',
    fontWeight: '400',
    lineHeight: 20,
    width: '90%'
  },
  skillPointView: {
    flexDirection: 'row',
  },
  bullet: {
    width: 6, 
    height: 6, 
    borderRadius: 6 /2, 
    backgroundColor: '#667080', 
    marginTop: 7, 
    marginRight: 4 
  },
  scoreLabel: {
    color: '#667080',
    marginBottom: normalize(8),
    maxWidth: '70%',
    textAlign: 'center'
  },
  skillAreaContainer: {
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    height: 45
  },
  skillAreaLabelText: {
    fontSize: 12,
    lineHeight: 10,
    paddingTop: normalize(5),
    textTransform: 'uppercase',
  },
  areaOfConcernContainer: {
    backgroundColor:'#FFE4EA',
    borderColor: '#FF9C9C',
  },
  areaOfConcernLabel: {
    color: '#FF5656',
  },
  promisingAreaContainer: {
    backgroundColor:'#D7FFDC',
    borderColor: '#9EFCAA',
  },
  promisingAreaLabel: {
    color: '#3AB549'
  },
  areaOfContinuedDevelopmentContainer: {
    borderColor: '#FFB26A',
    backgroundColor: '#FFF0E1'
  },
  areaOfContinuedDevelopmentLabel: {
    color: '#FF8C21'
  },
  sheetTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.3,
    paddingTop: 12,
    paddingBottom: 20,
  },
  sheetTitleText: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    color: '#667080',
  },
  sheetContentText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#667080',
    fontWeight: '400'
  },
  sheetContentLabelText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#667080',
    fontWeight: '700'
  },
  skillAreaDefinitionPoint: {
    width: normalize(12),
    height: normalize(12),
    borderRadius: 6,
    marginTop: normalize(5), 
    marginRight: normalize(8),
  },
  cardSpacer: {
    width: EMPTY_ITEM_SIZE,
  },
  resultButton: {
    borderRadius: normalize(90),
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: '#E6E8EC',
    height: normalize(40),
  },
  resultText: {
    textTransform: 'capitalize',
    color: '#667080'
  },
  resultSheetContainer: {
    flex: 1,
  },
  resultSheetHeader: {
    marginTop: normalize(24), 
    justifyContent: 'center', 
    alignItems: 'center',
    paddingBottom: normalize(24),
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral5,
  },
  resultAreaContainer: {
    marginTop: normalize(8),
    justifyContent: 'center', 
    alignItems: 'center', 
    borderWidth: 1, 
    borderRadius: 4, 
    width: normalize(150),
    height: normalize(38),
    paddingHorizontal: normalize(12),
    paddingVertical: normalize(8),
  },
  skillIndicatorTitle: {
    color: '#667080',
  },
  resultAreaText: {
    textTransform: 'uppercase'
  },
  resultAreaContent: {
    paddingHorizontal: normalize(24),
    marginTop: normalize(24),
  }
});
