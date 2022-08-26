import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24
  },
  contentContainer: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
    paddingHorizontal: 24
  },
  imageContainer: {
    justifyContent: 'center', 
    alignItems: 'center'
  },
  image: {
    width: 115,
    height: 115
  },
  titleText: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 36,
    color: '#667080',
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    marginTop: 12,
    color: '#667080',
    maxWidth: '90%',
    textAlign: 'center',
  },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 24
  },
  button: {
    marginLeft: 5,
    backgroundColor: '#667080',
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  spacer: {
    height: 100,
  },
  feedbackDetailsContainer: {
    marginTop: 45, 
    borderWidth: 0.5, 
    borderColor: '#BAC0CA',
    borderRadius: 6, 
    paddingHorizontal: 16, 
    paddingVertical: 24, 
    width: '100%',
    minHeight: '25%'
  },
  nameContainer: {
    flexDirection: 'row',
    paddingBottom: 24,
    borderBottomWidth: 0.3,
    borderColor: '#BAC0CA',
  },
  nameText: {
    fontSize: 16,
    lineHeight: 14,
    color: '#667080',
    fontWeight: '700',
    marginBottom: 8,
    paddingTop: 5,
  },
  detailsText: {
    fontSize: 14,
    color: '#667080',
    fontWeight: '400',
    lineHeight: 14
  },
  details: {
    flexDirection: 'row',  
    marginTop: 12,
  },
  nameIcon: {
    width: 16,
    height: 16,
    marginRight: 12,
    paddingTop: 20
  },
  icon: {
    width: 12,
    height: 12,
    marginRight: 12,
  }
});