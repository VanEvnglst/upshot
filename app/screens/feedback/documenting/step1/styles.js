import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 5,
  },
  label: {
    marginTop: 20,
  },
  namesContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chips: {
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
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  button: {
    alignSelf: 'flex-end'
  }
});
