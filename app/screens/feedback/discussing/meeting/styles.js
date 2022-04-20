import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from 'app/theme/colors';

const { width } = Dimensions.get('screen');
const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.8;
const ITEM_HEIGHT = ITEM_SIZE * 1.6;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 3;
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    marginTop: 20,
    width: ITEM_SIZE,
  },
  card: {
    backgroundColor: Colors.gray,
    height: ITEM_HEIGHT,
    marginHorizontal: SPACING,
    padding: SPACING * 2,
    borderRadius: 10,
    shadowOpacity: Platform.OS === 'ios' ? 0.2 : 0.5,
  },
  androidCard: {
    shadowColor: '#000',
    shadowRadius: 30,

    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 4,
  },
  cardSpacer: {
    width: EMPTY_ITEM_SIZE,
  },
  cardTitle: {
    color: Colors.primaryDark,
  },
  skippedCardTitle: {
    color: Colors.secondaryDark,
  },
  cardContentContainer: {
    marginTop: 20,
    flex: 1,
  },
  cardContent: {
    color: Colors.mediumBlack,
    lineHeight: 24,
  },
  cardGuideContainer: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  guideText: {
    marginTop: 20,
    color: Colors.lightBlack,
  },
  endMeetingBtnText: {
    color: Colors.primaryDark,
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerLine: {
    height: 3,
    marginLeft: 5,
    borderRadius: 3,
    flex: 1,
  },
  filledHeaderLine: {
    backgroundColor: Colors.primaryDark,
  },
  skippedHeaderLine: {
    backgroundColor: Colors.secondaryDark,
  },
  floatingAction: {
    width: 200,
    alignSelf: 'center',
    marginBottom: 30,
    backgroundColor: Colors.white,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  floatingLabel: {
    // marginBottom: 7,
    color: Colors.primaryDark,
  },
  icon: {
    // marginRight: 100,
  },
  addedGuideTitle: {
    color: Colors.secondaryDark,
  },
  addedGuideText: {
    marginTop: 8,
    color: Colors.lightBlack,
    lineHeight: 20,
  },
  guideContainer: {
    marginTop: 30,
  },
  guideContent: {
    marginTop: 25,
  },
});
