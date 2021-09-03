import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 12,
    borderRadius: 4,
    // height: 320,
    borderWidth: 1,
    borderColor: '#0000001F',
  },
  mainCardContainer: {
    height: 320,
  },
  smallCardContainer: {
    marginBottom: 12,
    marginRight: 20,
    borderRadius: 4,
    height: 160,
    width: 140,
    borderWidth: 1,
    borderColor: '#0000001F',
  },
  imageContainer: {
    flex: 2,
    backgroundColor: '#0000001F',
    justifyContent: 'center'
  },
  image: {
    borderTopRightRadius: 4,
    width: '100%',
    borderTopLeftRadius: 4,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headline: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000000', //DE
    marginBottom: 10,
    // fontFamily: 'Raleway'
  },
  subtitle: {
    fontSize: 15,
    color: '#00000099',
    lineHeight: 25,
    letterSpacing: 0.5,
  },
  smallTextContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  smallHeadline: {
    color: '#000000DE',
    fontSize: 15,
  },
  iconStyle: {
    width: 24,
    height: 24,
    // paddingTop: 10,
  }
});
