import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  textHeight: {
    lineHeight: 48,
  },
  bodyText: {

  },
  pressable: {
    marginHorizontal: 7,
  },
  pressableText: {
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
  pressableHeight: {
    lineHeight: 48
  }
});
