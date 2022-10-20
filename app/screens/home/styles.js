import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
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
    height: '10%'
  },
  avatarIcon: {
    width: 24,
    height: 24,
    borderColor: '#667080',
    borderWidth: 1,
    borderRadius: 12,
    marginRight: 12,
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
  // floatingAction: {
  //   position: 'absolute',
  //   bottom: 20,
  //   right: 28,
  //   backgroundColor: '#DBE3FF',
  //   borderWidth: 1,
  //   borderColor: '#A0B3F3',
  //   width: 50,
  //   height: 50,
  //   borderRadius: 12,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // progressBar: {
  //   width: '100%',
  //   height: 6,
  //   marginLeft: 3,
  //   borderRadius: 4,
  //   paddingRight: 19,
  // },
  spacer: {
    height: 100,
  },
  greetingText: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '400',
    color: 'white',
  },
  subHeaderContainer: {
    marginTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#353945',
  },
  welcomeText: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '700',
    color: 'white',
  },
  welcomeDescriptionText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '400',
    color: '#777E90',
    maxWidth: '90%',
  },
  startNowButton: {
    height: 40,
    backgroundColor: '#6200EE',
    borderRadius: 90,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '700',
    color: 'white',
    textTransform: 'capitalize'
  },
  contentContainer: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  assessmentProgressContainer: {
    height: 90, 
    padding: 12, 
    borderRadius: 12, 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'rgba(110, 217, 98, 0.08)', 
    borderColor: 'rgba(58, 181, 73, 0.3)',
    borderWidth: 1, 
  },
  profileProgress: {
    width: 46, 
    height: 46, 
    borderWidth: 2, 
    borderRadius: 23, 
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileProgressText: {
    fontSize: 12,
    lineHeight: 12,
    fontWeight: '700',
    color: 'white'
  },
  profileTextContainer: {
    maxWidth: '80%'
  },
  profileHeaderText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    fontWeight:'700'
  },
  profileDescriptionText: {
    fontSize: 12,
    lineHeight: 20,
    color: '#B1B5C3',
    fontWeight: '400'
  },
  cardContainer: {
    marginBottom: 8, 
    minHeight: 65, 
    borderRadius: 16, 
    padding: 8, 
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between', 
    backgroundColor: '#23262F'
  },
  progressIcon: {
    width: 32,
    height: 32
  },
  homeLabelText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    color: 'white',
  },
  journeyDataGradient: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginRight: 12,
  },
  forwardIcon: {
    marginLeft: 12,
    paddingRight: 9,
    color: '#777E90'
  },
  alignStart: {
    flex: 1,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '500',
    color: '#777E90',
  },
  highlightedDescText: {
    color: 'white',
    fontWeight: '700'
  },
  subDescText: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '400',
    color: '#777E90'
  },
  feedbackTypeContainer: {
    height: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 16,
    maxWidth: '65%',
  },
  feedbackTypeText: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  correctiveContainer: {
    borderColor: '#rgba(240, 98, 147, 0.5)',
    backgroundColor: 'rgba(240, 98, 147, 0.1)',
  },
  correctiveText: {
    color: '#F06293',
  },
  positiveContainer: {
    borderColor: 'rgba(58, 181, 73, 0.5)',
    backgroundColor: 'rgba(58, 181, 73, 0.1)',
  },
  positiveText: {
    color: '#3AB549'
  },
  journeyCardContainer: {
    borderRadius: 12,
    padding: 16,
    backgroundColor: 'rgba(119, 126, 145, 0.1)',
    borderWidth: 1,
    borderColor: '#353945',
    width: 320,
    marginRight: 12,
  },
  journeyDescriptionText: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '400',
    color: '#B1B5C3'
  },
  discussionAvatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginRight: 12
  }
});
