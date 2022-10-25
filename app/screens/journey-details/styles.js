import { DynamicColorIOS, StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral1,
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 70,
    paddingVertical: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: Colors.netural3,
    backgroundColor: Colors.neutral1,
  },
  headerTitleText: {
    color: Colors.white,
    marginBottom: 8,
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  memberNameText: {
    color: Colors.white,
    marginTop: 12,
  },
  roleText: {
    color: Colors.neutral4,
  },
  feedbackStatusContainer: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
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
    textTransform: 'uppercase',
  },
  correctiveText: {
    color: Colors.correctiveFeedback,
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
    color: Colors.positiveFeedback,
  },
  ongoingContainer: {
    borderColor: 'rgba(55, 114, 255, 0.5)',
    backgroundColor: 'rgba(55, 114, 255, 0.1)',
  },
  ongoingText: {
    color: Colors.blue100,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 24,
  },
  progressText: {
    color: Colors.neutral4,
  },
  dateContainer: {
    width: '26%',
  },
  signPostContainer: {
    alignItems: 'center',
    marginHorizontal: 14,
  },
  signPost: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.neutral4,
  },
  postLine: {
    width: 3,
    backgroundColor: Colors.neutral4,
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
    backgroundColor: Colors.positiveFeedback,
  },
  progressContent: {
    width: '55%',
    flex: 2,
    paddingBottom: 24,
  },
  inProgressTaskPost: {
    backgroundColor: Colors.blue100,
    borderWidth: 2,
    borderColor: 'rgba(55, 114, 255, 0.5)',
  },
  inProgressLabel: {
    color: Colors.blue100,
    textTransform: 'uppercase',
  },
  taskTitleText: {
    color: Colors.neutral8,
  },
  continueButton: {
    marginTop: 16,
    borderRadius: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: Colors.blue100,
    height: 42,
  },
  continueText: {
    color: Colors.neutral8,
    marginRight: 12,
  },
  transparentButton: {
    backgroundColor: Colors.neutral1,
    marginTop: 16,
    borderRadius: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
    height: 42,
    borderWidth: 1,
    borderColor: Colors.white,
  },
});
