import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textHeight: {
    lineHeight: 48,
  },
  overlineText: {
    color: Colors.lightBlack,
  },
  headerText: {
    color: Colors.mediumBlack,
    marginTop: 5
  },
  bodyText: {
    color: Colors.mediumBlack,
  },
  pressable: {
    marginHorizontal: 7,
  },
  pressableText: {
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
  itemContainer: {
    flexDirection: 'row',
    minHeight: 100,
  },
  itemCount: {
    flex: 0.5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 5,
  },
  countBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.primaryDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countLine: {
    width: 2,
    backgroundColor: '#f5f5f5',
    marginLeft: 10,
    flex: 1,
  },
  countText: {
    color: Colors.primaryDark,
  },
  itemContent: {
    flex: 3,
  },
  titleText: {
    color: Colors.lightBlack
  },
  itemBody: {
    marginTop: 10,
  }
});