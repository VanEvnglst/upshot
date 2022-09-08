import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ProgressBar, FAB } from 'react-native-paper';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import { LearningCard, Wrapper, Text } from 'app/components';
import FeedbackActions from 'app/store/feedback/FeedbackRedux';
import FeedbackHistoryActions from 'app/store/feedback/FeedbackHistoryRedux';
import { getActiveJourneys } from 'app/store/selectors';
import labels from 'app/locales/en';
import Images from 'app/assets/images';
import styles from './styles';
import { HeaderStyleInterpolators } from '@react-navigation/stack';
const HomeScreen = props => {
  const { homeScreen } = labels;
  const { navigation } = props;
  const dispatch = useDispatch();
  const activeJourneyLength = useSelector(getActiveJourneys);

  useEffect(() => {
    dispatch(FeedbackHistoryActions.fetchActiveJourneys());
  }, []);

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const [isInProgress, setIsInProgress] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const handleNavigation = () => {
    navigation.navigate('Feedback');
  };

  const JourneyCard = ({ item }) => {
    let CARD_MAIN_COLOR = '';
    let CARD_SUB_COLOR = '';
    let STATUS_BORDER_COLOR = '';
    switch (item.status) {
      case 'in Progress':
        CARD_MAIN_COLOR = '#F99D46';
        CARD_SUB_COLOR = '#FFF2E7';
        STATUS_BORDER_COLOR = '#FDC591';
        break;
      case 'feedback sent':
        CARD_MAIN_COLOR = '#4990FB';
        CARD_SUB_COLOR = '#DDEBFF';
        STATUS_BORDER_COLOR = '#8EBBFF';
        break;
      case 'completed':
        CARD_MAIN_COLOR = '#3AB549';
        CARD_SUB_COLOR = '#ECF5ED';
        STATUS_BORDER_COLOR = '#97DEA0';
        break;
      default:
        CARD_MAIN_COLOR = '#BAC0CA';
    }

    return (
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {}}
        style={[
          styles.journeyCard,
          {
            borderTopColor: CARD_MAIN_COLOR,
          },
        ]}>
        <View style={styles.journeyCardStatusContainer}>
          <View
            style={[
              styles.journeyCardStatus,
              {
                backgroundColor: CARD_SUB_COLOR,
                borderColor: STATUS_BORDER_COLOR,
              },
            ]}>
            <Text
              style={[styles.journeyCardStatusText,
                {
                color: CARD_MAIN_COLOR,
              }]}>
              {item.status}
            </Text>
          </View>
          <Icon
            name="chevron-forward-outline"
            size={20}
            style={styles.iconColor}
          />
        </View>
        <View
          style={styles.journeyCardNameContainer}>
          <View
            style={styles.avatarIcon}
          />
          <View>
            <Text
              style={styles.directReportNameText}>
              {item['direct report']}
            </Text>
            <Text
              style={styles.dateText}>
              {moment(item.datetime).format('llll')}
            </Text>
          </View>
        </View>
        <View style={{ paddingTop: 12 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={
                item.type === 'Corrective'
                  ? Images.penEmoji
                  : Images.redHeartEmoji
              }
              style={styles.feedbackTypeIcon}
              resizeMode="contain"
            />
            <Text
              style={styles.feedbackTypeText}>
              {item.type} Feedback
            </Text>
          </View>
          <View
            style={{
              marginTop: 12,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={Images.targetEmoji}
              style={{ width: 16, height: 16, marginRight: 12 }}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 14,
                lineHeight: 22,
                fontWeight: '400',
                color: '#667080',
              }}>
              Next step: <Text style={{ opacity: 0.5 }}>{item.nextStep}</Text>
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <SafeAreaView>
          <View style={{ paddingHorizontal: 16, marginTop: 30 }}>
            <Text
              style={styles.headerTitleText}>
              Feedback Coaching
            </Text>
            <Text
              style={{
                color: '#667080',
                fontSize: 14,
                lineHeight: 20,
                fontWeight: '400',
              }}>{`Advocating for your employees' growth and optimal performance with feedback`}</Text>
          </View>
          <View
            style={{
              marginTop: 24,
              borderBottomWidth: 0.3,
              paddingHorizontal: 16,
              paddingBottom: 16,
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: '700',
                  color: '#667080',
                }}>{`Next Level (Level 2)`}</Text>
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: '400',
                  color: '#667080',
                }}>
                190 / 500 pts.
              </Text>
            </View>
            <View
              style={{
                marginTop: 5,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image
                source={Images.lightningEmoji}
                style={{ width: 12, height: 12 }}
                resizeMode="contain"
              />
              <ProgressBar
                progress={190 / 500}
                color={'#F99D46'}
                style={styles.progressBar}
              />
            </View>
          </View>
        </SafeAreaView>
        <View>
          {activeJourneyLength.map((item, i) => (
            <JourneyCard 
              key={i}
              item={item} />
          ))}
        </View>
        <View style={styles.spacer} />
      </ScrollView>
      <FAB
        icon="plus"
        onPress={() => handleNavigation()}
        style={styles.floatingAction}
      />
    </View>
  );

  //   return (
  //     <Wrapper>
  //       <ScrollView
  //         bounces={false}
  //         showsVerticalScrollIndicator={false}
  //         contentContainerStyle={styles.container}>
  //         {/* <View style={{ width: '95%', marginBottom: 20 }}>
  //           <Text style={{ paddingLeft: 25, marginBottom: 10 }}>Alerts</Text>
  //           {/* map data for alerts */}
  //         {/*  <AlertCard />
  //           <AlertCard />
  //         </View> */}
  //         <View>
  //           <Text
  //             type="overline"
  //             style={styles.overlineText}
  //             testID={'txt-home-journey'}>
  //             {homeScreen.guidedJourney}
  //           </Text>
  //           <LearningCard
  //             onPress={() => handleNavigation()}
  //             image={Images.feedbackCoaching}
  //             headline={'Feedback Coaching'}
  //             subtitle={
  //               activeJourneyLength.length > 0
  //                 ? activeJourneyLength.length > 1
  //                   ? `${activeJourneyLength.length} feedback journeys in progress`
  //                   : `${activeJourneyLength.length} feedback journey in progress`
  //                 : labels.homeScreen.feedbackDesc
  //             }
  //             hasInProgress={activeJourneyLength.length > 0}
  //             mainCard
  //             testID={'card-home-feedback'}
  //           />
  //           {show && (
  //             <DateTimePicker
  //               testID="dateTimePicker"
  //               value={date}
  //               mode={mode}
  //               is24Hour={true}
  //               display="default"
  //               onChange={onChange}
  //             />
  //           )}
  //           {/* <LearningCard
  //             onPress={() => console.log('Next time')}
  //             image={Images.feedbackCoaching}
  //             headline={'Employee Engagement'}
  //             subtitle={labels.homeScreen.feedbackDesc}
  //             mainCard
  //             style={{ marginTop: 15 }}
  //           /> */}
  //         </View>
  //         <View style={styles.horizontalCardContainer}>
  //           <Text
  //             type="overline"
  //             style={styles.overlineText}
  //             testID={'txt-home-comingSoon'}>
  //             {homeScreen.comingSoon}
  //           </Text>
  //           <ScrollView
  //             showsHorizontalScrollIndicator={false}
  //             horizontal
  //           >
  //             <LearningCard
  //               onPress={() => navigation.navigate('Feedback')}
  //               image={Images.feedbackCoaching}
  //               headline={'Prioritizing and Delegating'}
  //               smallCard
  //               disabled
  //               testID={'card-home-comingSoon'}
  //             />
  //             <LearningCard
  //               onPress={() => navigation.navigate('Feedback')}
  //               image={Images.feedbackCoaching}
  //               headline={'Coaching Frontline Managers'}
  //               smallCard
  //               disabled
  //             />
  //           </ScrollView>
  //         </View>
  //       </ScrollView>
  //     </Wrapper>
  //   );
};

export default HomeScreen;

HomeScreen.propTypes = {
  activeJourneyLength: PropTypes.array,
  fetchFeedbackFlow: PropTypes.func,
  fetchFeedbackType: PropTypes.func,
  fetchFeedbackTopics: PropTypes.func,
  fetchActiveJourneys: PropTypes.func,
};

HomeScreen.defaultProps = {
  activeJourneyLength: [],
  fetchFeedbackFlow: () => {},
  fetchActiveJourneys: () => {},
  fetchFeedbackType: () => {},
  fetchFeedbackTopics: () => {},
};
