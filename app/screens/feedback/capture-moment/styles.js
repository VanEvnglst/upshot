import { StyleSheet } from 'react-native';
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
    marginTop: normalize(20),
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
  headerSpacer: {
    flex: 1,
  },
  stepsContainer: {
    marginTop: normalize(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: normalize(20),
    paddingHorizontal: normalize(24),
    borderBottomWidth: 0.3,
  },
  activeStep: {
    backgroundColor: '#BAC0CA',
    height: 4,
    borderRadius: 4,
    width: normalize(80),
  },
  inactiveStep: {
    opacity: 0.5,
    backgroundColor: '#BAC0CA',
    height: normalize(4),
    borderRadius: normalize(4),
    width: normalize(80),
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: normalize(24),
    marginTop: normalize(15),
  },
  content: {
    flex: 1,
    marginTop: 36,
  },
  receipientContainer: {
    height: normalize(52),
    borderWidth: 1,
    borderColor: '#667080',
    borderRadius: normalize(6),
    padding: normalize(12),
    flexDirection: 'row',
    alignItems: 'center',
  },
  toText: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: '#667080',
    marginRight: 12,
  },
  listContainer: {
    marginTop: normalize(20),
  },
  namesContainer: {
    flexDirection: 'row',
    marginBottom: normalize(10),
    borderBottomWidth: 0.3,
    borderBottomColor: '#667080',
    paddingBottom: normalize(5),
    alignItems: 'center',
  },
  nameAvatar: {
    width: normalize(42),
    height: normalize(42),
    borderRadius: normalize(21),
    backgroundColor: '#667080',
    marginRight: normalize(12),
    opacity: 0.6,
  },
  staffNameText: {
    color: '#667080',
    marginBottom: normalize(4),
  },
  emailText: {
    color: '#667080',
  },
  mainQuestionHeader: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  mainQuestionText: {
    color: '#667080',
    marginBottom: normalize(8),
  },
  descriptionText: {
    color: '#667080',
  },
  selectionContainer: {
    flex: 1,
    marginTop: 70,
  },
  selections: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectionButton: {
    borderWidth: 1,
    borderColor: '#EEF1F4',
    borderRadius: normalize(12),
    paddingHorizontal: normalize(12),
    paddingBottom: normalize(16),
    minHeight: normalize(150),
    minWidth: normalize(150),
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedButton: {
    borderWidth: 2,
    borderColor: '#A76AFF',
  },
  selectionText: {
    color: '#667080',
    textAlign: 'center',
    marginTop: normalize(70),
  },
  unselectedText: {
    opacity: 0.5,
  },
  selectionIcon: {
    width: normalize(100),
    height: normalize(100),
    zIndex: 1,
    position: 'absolute',
    top: normalize(-35),
  },
  hintContainer: {
    marginVertical: normalize(36),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    maxWidth: '60%',
  },
  hintText: {
    color: '#667080',
    textAlign: 'center',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  spacer: {
    height: normalize(100),
  },
  button: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledBtn: {
    backgroundColor: '#EEF1F4',
  },
  enabledBtn: {
    backgroundColor: '#667080',
  },
  disabledBtnText: {
    color: '#667080'
  },
  enableBtnText: {
    color: Colors.white
  },
  typeContainer: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0CAFF',
    marginRight: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  typeText: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    color: '#A76AFF',
  },
  topicContainer: {
    flex: 1,
    marginTop: normalize(40),
  },
  topicPicker: {
    borderWidth: 1,
    borderColor: '#667080',
    height: normalize(48),
    borderRadius: normalize(6),
    padding: normalize(12),
    flexDirection: 'row',
    alignItems: 'center',
  },
  topicLabel: {
    color: '#667080',
    flex: 10,
  },
  inputField: {
    marginTop: normalize(12),
    borderWidth: 1,
    borderColor: '#667080',
    height: normalize(48),
    borderRadius: normalize(6),
    padding: normalize(12),
    color: '#667080'
  },
  selectedNameContainer: {
    flexDirection: 'row',
    borderWidth: 0.3,
    paddingVertical: normalize(5),
    paddingHorizontal: normalize(8),
    height: normalize(32),
    borderRadius: normalize(6),
    alignItems: 'center',
  },
  selectedAvatar: {
    width: normalize(24),
    height: normalize(24),
    borderRadius: normalize(21),
    backgroundColor: '#667080',
    marginRight: normalize(4),
    opacity: 0.6,
  },
  selectedName: {
    color: '#667080',
  },
  sheetContainer: {},
  sheetTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: Colors.neutral5,
    paddingVertical: normalize(12),
  },
  sheetTitleText: {
    color: '#667080',
    marginBottom: normalize(8),
  },
  sheetSubtitleText: {
    color: '#667080',
  },
  sheetTopicsContainer: {
    paddingHorizontal: normalize(16),
    paddingTop: normalize(20),
  },
  sheetTopicItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: normalize(48),
    borderBottomWidth: 1,
    borderBottomColor: '#EEF1F4'
  },
  sheetTopicButton: {
    width: normalize(20),
    height: normalize(20),
    borderRadius: normalize(12),
    borderWidth: normalize(2),
    borderColor: '#667080',
    opacity: 0.3,
    alignSelf: 'center',
  },
  topicNameText: {
    color: '#667080',
  },
  requiresFaceToFaceText: {
    marginVertical: 4,
    color: '#667080',
  },
  dateTimeText: {
    color: '#667080',
    marginBottom: normalize(24),
    marginTop: normalize(10),
    opacity: 0.5,
  },
  subTopicItem: {
    height: normalize(48),
    borderBottomWidth: 1,
    borderBottomColor: '#EEF1F4',
    justifyContent: 'center',
  },
});
