import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 12,
    borderRadius: 4,
    // backgroundColor: 'red', //
    height: 320,
    borderWidth: 1,
    borderColor: '#0000001F',
  },
  imageContainer: {
    flex: 2,
    backgroundColor: '#0000001F',
  },
  image: {
    width: '100%',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headline: {
    fontSize: 22,
    fontWeight: '700',
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
});
