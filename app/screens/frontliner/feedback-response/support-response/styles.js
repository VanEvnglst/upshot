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
  contentContainer: {
    flex: 1, 
    paddingHorizontal: 24, 
    marginTop: 80 
  },
  image: {
    width: 60, 
    height: 38, 
  },
  entryText: {
    color: 'white', 
    marginTop: 15, 
    fontSize: 24, 
    lineHeight: 32, 
    fontWeight: '400',
  },
});