import { StyleSheet } from 'react-native';

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
    paddingLeft: 24,
  },
  headerTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    flex: 2,
    fontSize: 16,
    lineHeight: 22,
    color: '#667080',
    fontWeight: '700',
  },
  headerSpacer: {
    flex: 1,
  },
  stepsContainer: {
    marginTop: 12,
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
    width: 80,
  },
  inactiveStep: {
    opacity: 0.5,
    backgroundColor: '#BAC0CA',
    height: 4,
    borderRadius: 4,
    width: 80,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 15,
  },
  content: {
    flex: 1, 
    marginTop: 36 
  },
  receipientContainer: {
    height: 50,
    borderWidth: 1,
    borderColor: '#667080',
    borderRadius: 6,
    padding: 12,
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
    marginTop: 20,
  },
  namesContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomWidth: 0.3,
    paddingBottom: 5,
    alignItems: 'center',
  },
  nameAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#667080',
    marginRight: 12,
    opacity: 0.6,
  },
  staffNameContainer: {},
  staffNameText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
    color: '#667080',
    marginBottom: 4,
  },
  emailText: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: '#667080',
  },
  selectedNameContainer: {},
  mainQuestionHeader: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  mainQuestionText: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    color: '#667080',
    marginBottom: 24,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#667080',
    fontWeight: '400',
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
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingBottom: 16,
    minHeight: 150,
    minWidth: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedButton: {
    borderWidth: 2,
    borderColor: '#A76AFF',
  },
  selectionText: {
    fontSize: 16,
    lineHeight: 30,
    fontWeight: '700',
    color: '#667080',
    textAlign: 'center',
    marginTop: 70,
  },
  unselectedText: {
    opacity: 0.5
  },
  selectionIcon: {
    width: 100,
    height: 100,
    zIndex: 1,
    position: 'absolute',
    top: -35,
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  spacer: {
    height: 100,
  },
  button: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledBtn: {
    backgroundColor: '#EEF1F4'
  },
  enabledBtn: {
    backgroundColor: '#667080'
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
    color: '#A76AFF'
  },
  topicContainer: {
    flex: 1,
    marginTop: 40,
  },
  topicPicker: {
    borderWidth: 1,
    borderColor: '#667080',
    height: 48,
    borderRadius: 6,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  topicLabel: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    color: '#667080',
    flex: 10,
  }
});
