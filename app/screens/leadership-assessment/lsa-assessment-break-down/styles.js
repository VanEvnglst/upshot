import { StyleSheet } from 'react-native';


export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
    borderBottomWidth: 0.3,
  },
  icon: {
    flex: 1,
    paddingLeft: 24,
  },
  headerTextContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    flex: 2,
    fontSize: 16,
    lineHeight: 22,
    color: '#667080',
    fontWeight: '700',
    paddingRight: 30,
  },
  horizontalSpacer: {
    flex: 1,
  },
  titleContainer: {
    marginTop: 20,
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderBottomWidth: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleUser: {
    flex: 1,
    height: '100%',
    maxWidth: '50%',
  },
  userText: {
    fontSize: 10,
    lineHeight: 10,
    fontWeight: '600',
    color: '#B1B5C3',
    textTransform: 'uppercase'
  },
  levelText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#667080',
    fontWeight: '700',
    marginTop: 4
  },
  descriptionText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#667080',
    fontWeight: '400',
    marginTop: 10,
  },
  completedLabelText: {
    marginTop: 24,
    textTransform: 'uppercase',
    color: '#B1B5C3',
    fontSize: 10,
    lineHeight: 10,
    fontWeight: '700'
  },
  completedTestText: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 30,
    color: '#3AB549'
  },
  ringsContainer: {
    maxWidth: '50%',
    maxHeight: '100%',
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 24,
  },
  skillAreaItem: {
    borderWidth: 1, 
    borderColor: '#BAC0CA', 
    borderRadius: 6, 
    paddingVertical: 12, 
    paddingHorizontal: 8, 
    flexDirection: 'row', 
    alignItems: 'center', 
    height: 70,
    marginBottom: 10,
  },
  stepCounter: {
    marginRight: 12,
    width: 46, 
    height: 46, 
    borderWidth: 2,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  stepText: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '700',
  },
  skillTitleContainer: {
    flex: 3
  },
  skillTitleText:{
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
    color: '#667080',
  },
  completionText: {
    marginTop: 5,
    fontSize: 10,
    lineHeight: 10,
    fontWeight: '600',
    color: '#B1B5C3',
    textTransform: 'uppercase'
  },
  completedText: {
    margin: 4,
    fontSize: 10,
    lineHeight: 10,
    fontWeight: '600',
    color: '#3AB549',
    textTransform: 'uppercase'
  },
  completedContainer: {
    width: 106,
    height: 18,
    marginTop: 5,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#92EE9D',
    color: '#CDF9D2',
    justifyContent: 'center',
    alignItems: 'center'
  },

});