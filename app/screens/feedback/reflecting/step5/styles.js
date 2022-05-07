import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  contentContainer: {
    marginVertical: 20,
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  count: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignItems: 'center',
    marginLeft: 5,
  },
  countContainer: {},
  countBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countLine: {
    width: 2,
    backgroundColor: '#f5f5f5',
    height: 75,
  },
  planContainer: {
    flex: 3,
  },
  planSpacer: {
    marginTop: 20,
  },
});
