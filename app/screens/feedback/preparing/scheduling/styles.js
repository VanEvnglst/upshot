import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  container: {

  },
  hintCard: {
    backgroundColor: 'rgba(0,0,0,0.04)',
    borderRadius: 16,
    alignItems: 'center',
    paddingVertical: 15,
    marginVertical: 20,
  },
  hintCardText: {
    color: Colors.primary900,
    padding: 20,
    lineHeight: 24,
    fontWeight: '700',
    textAlign: 'center',
    width: '85%'
  },
})