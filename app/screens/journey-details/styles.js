import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141416',
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 70,
    paddingVertical: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#353945',
    backgroundColor: '#141416',
    // height: '25%'
  },
  headerTitleText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  memberNameText: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '700',
    color: 'white',
    marginTop: 12
  },
  roleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '500',
    color: '#777E90',
  },
  feedbackStatusContainer: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  typeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
    height: 28,
    borderWidth: 1,
  },
  typeText: {
    fontSize: 12,
    lineHeight: 12,
    fontWeight: '700',
    textTransform: 'uppercase'
  },
  correctiveText: {
    color: '#F06293',
  },
  correctiveContainer: {
    borderColor: '#rgba(240, 98, 147, 0.5)',
    backgroundColor: 'rgba(240, 98, 147, 0.1)',
  },
  positiveContainer: {
    borderColor: 'rgba(58, 181, 73, 0.5)',
    backgroundColor: 'rgba(58, 181, 73, 0.1)',
  },
  positiveText: {
    color: '#3AB549'
  },
  ongoingContainer: {
    borderColor: 'rgba(55, 114, 255, 0.5)',
    backgroundColor: 'rgba(55, 114, 255, 0.1)'
  },
  ongoingText: {
    color: '#3772FF'
  },
  contentContainer: {
    flex: 1, 
    paddingHorizontal: 16, 
    marginTop: 24
  },
  progressText: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '400',
    color: '#777E90'
  },
  dateContainer: {
    width: '26%'
  },
  signPostContainer: {
    alignItems: 'center', 
    marginHorizontal: 14 
  },
  signPost: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#777E90',
  },
  postLine: {
    width: 3,
    backgroundColor: '#777E90',
    minHeight: 52,
    flexGrow: 1,
    opacity: 0.5,
  },
  toContinuePostLine: {
    borderRadius: 1,
    borderStyle: 'dotted',
    borderWidth: 1,
  },
  completedTaskPost: {
    backgroundColor: '#3AB549',
  },
  progressContent: {
    width: '55%',
    flex: 2,
    paddingBottom: 24,
  },
  inProgressTaskPost: {
    backgroundColor: '#3772FF',
    borderWidth: 2,
    borderColor: 'rgba(55, 114, 255, 0.5)',
  },
  inProgressLabel: {
    color: '#3772FF',
    fontSize: 10,
    lineHeight: 12,
    fontWeight: '700',
    textTransform: 'uppercase'
  },
  taskTitleText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    color: '#FCFCFD'
  },
  continueButton: {
    marginTop: 16,
    borderRadius: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: '#3772FF',
    height: 42,
  },
  continueText: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '700',
    color: '#FCFCFD',
    marginRight: 12,
  },
  transparentButton: {
    backgroundColor: '#141416',
    marginTop: 16,
    borderRadius: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
    height: 42,
    borderWidth: 1,
    borderColor: 'white'
  }
});