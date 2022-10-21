import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23262F',
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 21, 
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 45, 
  },
  imageSize: {
    height: 110,
    width: 110,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 333,
    marginTop: 32,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  subHeaderText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#B1B5C3',
    textAlign: 'center',
    marginTop: 12,
  },
  cardContainer: {
    borderWidth: 1,
    backgroundColor: '#353945',
    borderRadius: 12,
    borderColor: '#777E904D',
    marginTop: 44,
    marginBottom: 11,
  },
  nameContainer: {
    flexDirection: 'row',
    paddingBottom: 24,
    borderBottomWidth: 0.3,
    borderColor: '#BAC0CA',
    marginHorizontal: 16,
    marginTop: 24,
  },
  nameAvatarContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameAvatarIcon: {
    width: 42,
    height: 42,
    borderRadius: 21, 
    marginRight: 10,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  nameInitialText: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '700',
    color: 'white',
  },
  nameText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  positionText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    color: '#B1B5C3'
  },
  detailsContainer: {
    marginTop: 24,
    marginLeft: 16
  },
  detailsContentHolder: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 12,
    height: 12,
    marginRight: 12,
    color: '#777E90',
  },
  mainDetailsText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
    color: '#FCFCFD',
  },
  subDetailsText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
    color: '#777E90',
  },
  btnContainer: {
    borderTopWidth: 1,
    borderTopColor: '#777E904D',
  },
  btnStyle: {
    marginHorizontal: 12,
    borderWidth: 1,
    backgroundColor: '#3772FF',
    marginTop: 16,
    height: 48,
    borderRadius: 12,
    marginBottom: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 16,
    color: '#FFFFFF',
  }
});