import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: 'white',
    height: 230,
    width: '95%',
    borderWidth: 1,
  },
  imageContainer: {
    flex: 2,
  },
  image: {
    width: '100%',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    height: 150,
  },
  textContainer: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 16,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
  },
});
