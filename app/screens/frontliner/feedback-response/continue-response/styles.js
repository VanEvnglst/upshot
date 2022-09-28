import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353945',
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginTop: 70,
  },
  titleContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    lineHeight: 16,
    color: 'white',
    fontWeight: '700',
  },
  subtitleText: {
    fontSize: 14,
    lineHeight: 24,
    color: 'white',
    fontWeight: '400',
  },
  stepContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  gradientContainer: {
    flex: 7,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
  },
  contentContainer: {
    flex: 1, 
    paddingHorizontal: 24, 
    marginTop: 80 
  },
  questionContainer: {
    height: 30,
    backgroundColor: 'white',
    borderRadius: 4,
    maxWidth: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 60, 
    height: 38, 
  },
  questionText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '400',
    color: '#4577CB'
  },
  entryText: {
    color: 'white', 
    marginTop: 15, 
    fontSize: 24, 
    lineHeight: 32, 
    fontWeight: '400',
  },
  textInputContainer: {
    height: 48,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#23262F',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#777E90',
    paddingHorizontal: 16,
  },
  actionContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  nameContainer: {
    marginTop: 30, 
    flexDirection: 'row',
    alignItems: 'center'
  },
  nameAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21, 
    marginRight: 10, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarText: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '700',
    color: 'white',
  },
  managerNameText: {
    fontSize: 16, 
    lineHeight: 24, 
    fontWeight: '700', 
    color: 'white'
  },
  descriptionText: {
    color: 'white', 
    fontSize: 14, 
    lineHeight: 24,
    fontWeight: '400'
  }
});
