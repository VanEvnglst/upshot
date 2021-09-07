import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

export default styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 12,
    borderRadius: 4,
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
    color: '#000000', //DE
    marginBottom: 10,  
  },
  subtitle: {
    color: '#00000099',
    lineHeight: 20,
  },
  inProgressSubtitle: {
    color: Colors.primary
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
    flex: 1
  },
  iconStyle: {
    width: 24,
    height: 24,
  }
});
