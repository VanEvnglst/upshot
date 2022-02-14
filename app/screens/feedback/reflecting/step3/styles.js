import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ratingsContainer: {
    marginVertical: 30
  },

  noRatingCard: {
    backgroundColor: Colors.gray,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  noRatingText: {
    marginTop: 20,
    fontWeight: '700',
    color: Colors.primary900,
    lineHeight: 24,
  }
});
