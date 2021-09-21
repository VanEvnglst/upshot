import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  titleContainer: {
    flex: 1,
    marginBottom: 20,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
});
