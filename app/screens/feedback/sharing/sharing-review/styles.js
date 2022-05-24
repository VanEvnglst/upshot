import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';
import Fonts from 'app/theme/fonts';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  reviewTitle: {
    color: Colors.mediumBlack,
  },
  descriptionText: {
    marginTop: 30,
    marginBottom: 20,
    lineHeight: 28,
    color: Colors.mediumBlack
  },
  messageCard: {
    borderWidth: 1,
    borderColor: Colors.outline,
    borderRadius: 8,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  nameContainer: {
    flexDirection: 'row'
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  nameContent: {
    marginLeft: 20,
  },
  senderNameText: {
    color: Colors.mediumBlack,
  },
  receipientNameText: {
    color: Colors.lightBlack,
    marginTop: 6
  },
  content: {
    marginTop: 30,
  },
  contentHeader: {
    color: Colors.secondaryDark,
    marginBottom: 10,
  }, 
  contentBody: {
    marginBottom: 20,
    color: Colors.mediumBlack,
    lineHeight: 28,
  }
})