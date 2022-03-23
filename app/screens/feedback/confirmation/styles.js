import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    marginTop: 30
  },
  scheduleButtonText: {
    color: Colors.primaryDark,
  },
  contentText: { 
    lineHeight: 28, 
    marginTop: 35, 
    width: '90%' 
  },
  hintCard: {
    backgroundColor: 'rgba(0,0,0,0.04)',
    borderRadius: 16,
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 20,
  },
  hintCardText: {
    color: Colors.primary900, 
    padding: 20,
    lineHeight: 24,
    fontWeight: '700'
  },
  btnContainer: {
    flex: 1,
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'flex-end',
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  preparingBtnContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingRight: 10,
  },
  hintIndicatorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  }
});
