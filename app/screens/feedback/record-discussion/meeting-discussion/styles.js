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
    width: 100,
    height: 100,
    borderRadius: 100, 
    marginRight: 10, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarTextIcon: {
    fontSize: 32,
    lineHeight: 36,
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
  }
  
});
