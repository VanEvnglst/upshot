import { StyleSheet, Platform } from 'react-native';

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
    height: 4,
    maxWidth: 343,
  },
  detailsContainer: {
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#777E904D',
    paddingBottom: 14,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarIcon: {
    width: 19,
    height: 19,
    borderRadius: 9.5, 
    marginRight: 10, 
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
    marginTop: 14,
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
    marginHorizontal: 24,
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 327,
  },
  questionText: {
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 32,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  btnContainer: {
    height: 56,
    minWidth: 327,
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
    marginTop: 32,
  },
  card: {
    minHeight: 56,
    backgroundColor: '#353945',
    borderWidth: 0.5,
    borderColor: '#777E90',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    marginTop: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardStatus: {
    width: 22,
    height: 22,
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
    marginLeft: 14,
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
    marginBottom: 5,
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
  
});

