import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral1, 
  },
  greetingContainer: {
    marginTop: 80, paddingHorizontal: 24, marginBottom: 30 
  },
  userDetailsContainer: {
    flex: 1,
    alignItems: 'center'
  },
  userNameText: {
    textTransform: 'uppercase',
    color: Colors.neutral4
  },
  userLevelText: {
    marginTop: 4,
    marginBottom: 8,
    color: Colors.neutral8,
    width: '80%',
    textAlign: 'center'
  },
  chartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  radarContainer: {
    width: 300,
    height: 300,
    borderRadius:  150,
    backgroundColor: Colors.neutral3,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 34
  },
  chart: {
    flex: 1,
    margin: 20,
  },
  labelsContainer: {
    marginTop: 30,
    marginHorizontal: 24,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: Colors.neutral4 
  },
  lsaLabelText: {
    color: Colors.neutral5,
    textTransform: 'uppercase',
    letterSpacing: 0.05
  },
  indicatorLabelText: {
    color: Colors.neutral4
  },
  skillsContainer: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 24,
  },
  cardContainer: {
    borderWidth: 2,
    padding: 12,
    minHeight: 56,
    marginBottom: 12,
    borderRadius: 12,
    borderColor: '#B1B5C370',
    backgroundColor: Colors.neutral2,
  },
  skillTitleText: {
    color: Colors.neutral8,
    marginBottom: 6,
  },
  skillLevelContainer: {
    borderWidth: 1,
    height: 28,
    borderRadius: 4,
    minWidth: 120,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  skillLevelText: {
    textTransform: 'uppercase',    
  },
  promisingArea: {
    backgroundColor: '#D7FFDC',
    borderColor: '#9EFCAA',
    maxWidth: '25%'
  },
  areaOfConcern: {
    backgroundColor: '#FFE4EA',
    borderColor: '#FF9C9C',
    maxWidth: '40%'
  },
  areaOfContinuedDevelopment: {
    backgroundColor: '#FFF0E1',
    borderColor: '#FFB26A',
    maxWidth: '40%'
  },
  promisingAreaText: {
    color: Colors.positiveFeedback,
  },
  areaOfConcernText: {
    color: '#FF5656',
  },
  areaOfContinuedDevelopmentText: {
    color: '#FF8C21',
  },
  cardContentContainer: {
    marginTop: 12,
  },
  aboutIndicatorLabel: {
    color: Colors.neutral8
  },
  aboutDescText: {
    color: Colors.neutral5,
    marginBottom: 16,
  },
  skillPointsText: {
    color: Colors.neutral5,
  }

});