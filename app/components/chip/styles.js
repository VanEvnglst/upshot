import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginRight: 10,
  },
  chipText: {
    color: Colors.mediumBlack,
  },
  selectedChip: {
    backgroundColor: Colors.primary50,
  },
  selectedChipText: {
    color: Colors.primary,
  },
})