import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stepsContainer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingHorizontal: 24,
  },
  activeStep: {
    backgroundColor: '#BAC0CA',
    height: 4,
    borderRadius: 4,
    width: 80,
  },
  inactiveStep: {
    opacity: 0.5,
    backgroundColor: '#BAC0CA',
    height: 4,
    borderRadius: 4,
    width: 80,
  },
  guideContainer: {
    width: width, 
    paddingHorizontal: 22, 
    paddingTop: 50
  },
  headerContainer: {
    flex: 1, 
    // justifyContent: 'center', 
    // alignItems: 'center'
  },
  titleText: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: '700',
    color: '#667080',
  },
  centeredText: {
    textAlign: 'center'
  },
  guideImageContainer: {
    flex: 3, 
  },
  skipContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  descriptionText: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '400',
    color: '#667080',
  }
});