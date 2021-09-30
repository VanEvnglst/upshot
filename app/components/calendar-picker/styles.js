import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

export default styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: 'rgba(0,0,0,0.04)',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomColor: 'rgba(0,0,0,0.87)',
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
});
