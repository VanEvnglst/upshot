import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24
  },
  progressBar: {
    height: 4,
    borderRadius: 4,
    marginTop: 20,
  },
  headerContainer: {
    marginTop: 40,
  },
  userIcon: {
    width: 58,
    height: 58,
    borderRadius: 58/2,
    backgroundColor: '#FFF3D4',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarIcon: {
    width: 38,
    height: 38
  },
  userDetailsContainer: {
    flex: 1,
  },
  userNameText: {
    fontSize: 10,
    lineHeight: 10,
    fontWeight: '600',
    color: '#B1B5C3',
    textTransform: 'uppercase'
  },
  headerTitleText: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    color: '#667080',
    marginTop: 5,
  },
  descriptionContainer: {
    marginTop: 25,
  },
  contentContainer: {
    marginTop: 25,
    flex: 2,
  },
  improvementContainer: {
    marginBottom: 12,
    backgroundColor: '#FFF1F6',
    minHeight: 150,
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 12,

  },
  satisfactoryContainer: {
    marginBottom: 12,
    backgroundColor: '#FFF2E7',
    minHeight: 150,
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
  promisingContainer: {
    marginBottom: 12,
    backgroundColor: '#D6FFDB',
    minHeight: 150,
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
  skillAreaContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    minWidth: 128,
    minHeight: 56,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 10
  },
  labelText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
    color: '#667080'
  },
  improvementLabel: {
    color: '#EF4469'
  },
  satisfactoryLabel: {
    color: '#F18F34'
  },
  promisingLabel: {
    color: '#3AB549'
  },
  content: {
    marginTop: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btnContainer: {
    marginTop: 40,
  },
  button: {
    height: 48,
    backgroundColor: '#667080',
    justifyContent: 'center',
    alignItems: 'center'
  },
  skippable: {
    marginTop: 24,
  },
  descriptionText: {
    color: "#667080",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
  },
  textAlignStart: {
    textAlign: 'left'
  },
  spacer: {
    height: 100
  },
  linkText: {
    marginBottom: 24, 
    color: '#58A1F2', 
    fontSize: 14, 
    textAlign: 'center', 
    textDecorationLine: 'underline',
    lineHeight: 22,
  },
  skillAreaContentContainer: {
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#BAC0CA',
    minHeight: 500,
    padding: 12,
    paddingBottom: 20,
    borderRadius: 6,
    width: 325,
    marginRight: 8
  },
  contentHeader: {
    borderBottomWidth: 1,
    borderColor: '#BAC0CA',
    paddingBottom: 12,
  },
  contentTitleText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#667080',
    fontWeight: '700',
  },
  contentLabelText: {
    fontSize: 14,
    color: '#667080',
    fontWeight: '700',
    lineHeight: 22,
    marginBottom: 5,
  },
  aboutSkillContent: {
    marginTop: 15
  },
  aboutSkillText: {
    fontSize: 14,
    color: '#667080',
    fontWeight: '400',
    lineHeight: 20,
    width: '90%'
  },
  skillPointView: {
    flexDirection: 'row'
  },
  bullet: {
    width: 6, 
    height: 6, 
    borderRadius: 6 /2, 
    backgroundColor: '#667080', 
    marginTop: 7, 
    marginRight: 4 
  },
  scoreLabel: {
    fontSize: 16,
    fontWeight: '400',
    color: '#667080',
    lineHeight: 22,
    maxWidth: 140,
    marginBottom: 8
  },
  scoreLabelBold: {
    fontWeight: '700'
  },
  skillAreaContainer: {
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    height: 45
  },
  skillAreaLabelText: {
    fontSize: 12,
    lineHeight: 10,
    fontWeight: '600',
    paddingTop: 5,
    textTransform: 'uppercase',
  },
  areaOfConcernContainer: {
    backgroundColor:'#FFE4EA',
    borderColor: '#FF9C9C',
  },
  areaOfConcernLabel: {
    color: '#FF5656',
  },
  promisingAreaContainer: {
    backgroundColor:'#D7FFDC',
    borderColor: '#9EFCAA',
  },
  promisingAreaLabel: {
    color: '#3AB549'
  },
  areaOfContinuedDevelopmentContainer: {
    borderColor: '#FFB26A',
    backgroundColor: '#FFF0E1'
  },
  areOfContinuedDevelopmentLabel: {
    color: '#FF8C21'
  },
  sheetTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.3,
    paddingTop: 12,
    paddingBottom: 20,
  },
  sheetTitleText: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    color: '#667080',
  },
  sheetContentText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#667080',
    fontWeight: '400'
  },
  sheetContentLabelText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#667080',
    fontWeight: '700'
  },
  skillAreaDefinitionPoint: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginTop: 5, 
    marginRight: 8 
  },

});
