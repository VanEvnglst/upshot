import { DynamicColorIOS, StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';
import { DeviceUtil } from 'app/utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral1,
  },
  headerContainer: {
    paddingHorizontal: DeviceUtil.normalize(16),
    paddingTop: DeviceUtil.normalize(70),
    paddingVertical: DeviceUtil.normalize(13),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: DeviceUtil.normalize(1),
    borderColor: Colors.netural3,
    backgroundColor: Colors.neutral1,
  },
  headerTitleText: {
    color: Colors.white,
    marginBottom: DeviceUtil.normalize(8),
  },
  headerIcon: {
    width: DeviceUtil.normalize(24),
    height: DeviceUtil.normalize(24),
  },
  memberNameText: {
    color: Colors.white,
    marginTop: DeviceUtil.normalize(12),
  },
  roleText: {
    color: Colors.neutral4,
  },
  progressContainer: {
    flexDirection: 'row'
  },
  feedbackStatusContainer: {
    marginTop: DeviceUtil.normalize(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: DeviceUtil.normalize(8),
    borderRadius: DeviceUtil.normalize(16),
    height: DeviceUtil.normalize(32),
    borderWidth: DeviceUtil.normalize(1),
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
    marginHorizontal: DeviceUtil.normalize(14),
  },
  signPost: {
    width: DeviceUtil.normalize(20),
    height: DeviceUtil.normalize(20),
    borderRadius: DeviceUtil.normalize(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.neutral4,
  },
  postLine: {
    width: DeviceUtil.normalize(3),
    backgroundColor: Colors.neutral4,
    minHeight: DeviceUtil.normalize(52),
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
    paddingBottom: DeviceUtil.normalize(24),
  },
  inProgressTaskPost: {
    backgroundColor: Colors.blue100,
    borderWidth: DeviceUtil.normalize(2),
    borderColor: 'rgba(55, 114, 255, 0.5)',
  },
  inProgressLabel: {
    color: Colors.blue100,
    textTransform: 'uppercase',
  },
  taskTitleText: {
    color: Colors.neutral8,
  },
  button: {
    marginTop: DeviceUtil.normalize(16),
    borderRadius: DeviceUtil.normalize(90),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: DeviceUtil.normalize(12),
    height: DeviceUtil.normalize(42),
  },
  continueButton: {
     backgroundColor: Colors.primary,
  },
  continueText: {
    color: Colors.neutral8,
    marginRight: DeviceUtil.normalize(12),
  },
  transparentButton: {
    backgroundColor: Colors.neutral1,
    borderWidth: DeviceUtil.normalize(1),
    borderColor: Colors.white,
  },
  tabContentContainer: {
    marginTop: DeviceUtil.normalize(32), 
    marginHorizontal: DeviceUtil.normalize(16), 
    backgroundColor: Colors.neutral2, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: DeviceUtil.normalize(8), 
    height: DeviceUtil.normalize(45), 
    borderRadius: DeviceUtil.normalize(12)
  },
  tabContainer: {
    width: '50%',
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingVertical: DeviceUtil.normalize(4),
    height: DeviceUtil.normalize(35),
    borderRadius: DeviceUtil.normalize(12),

  },
  activeTabContainer: {
    backgroundColor: Colors.primary, 
  },
  labelContainer: {
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  labelIcon: {
    width: DeviceUtil.normalize(24), 
    height: DeviceUtil.normalize(24), 
    marginRight: DeviceUtil.normalize(12)
  },
  labelText: {
    color: Colors.neutral8
  },
  overlineLabel: {
    color: Colors.neutral5,
    marginBottom: DeviceUtil.normalize(12),
  },
  detailContainer: {
    marginBottom: DeviceUtil.normalize(12), 
    marginTop: DeviceUtil.normalize(24) 
  },
  details: {
    borderWidth: 2,
    borderColor: Colors.neutral3,
    borderRadius: DeviceUtil.normalize(12), 
    paddingVertical: DeviceUtil.normalize(12), 
    paddingLeft: DeviceUtil.normalize(16), 
    height: DeviceUtil.normalize(48), 
    marginBottom: DeviceUtil.normalize(12)
  },
  detailsText: {
    color: Colors.neutral8
  },
  timeContainer: {
    marginTop: DeviceUtil.normalize(12),
    marginBottom: DeviceUtil.normalize(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeContainerWidth: {
    width: '48%'
  }
});
