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
import { ProgressBar, Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  LearningCard,
  Wrapper,
  Text,
  BackgroundView,
  UserAvatar,
} from 'app/components';
import FeedbackHistoryActions from 'app/store/feedback/FeedbackHistoryRedux';
import UserActions from 'app/store/UserRedux';
import {
  getActiveJourneys,
  getUserName,
  getAssessmentProgress,
  getUpcomingDiscussions,
  getOngoingJourneysCount,
  getScheduledCount,
  getCompletedJourneysCount,
  getTotalJourneysCount,
} from 'app/store/selectors';
import labels from 'app/locales/en';
import Images from 'app/assets/images';
import styles from './styles';

const HomeScreen = props => {
  const { homeScreen } = labels;
  const { navigation } = props;
  const dispatch = useDispatch();
  const user = useSelector(getUserName);
  const assessment = useSelector(getAssessmentProgress);
  const upcomingDiscussions = useSelector(getUpcomingDiscussions);
  const activeJourneys = useSelector(getActiveJourneys);
  const ongoingJourneys = useSelector(getOngoingJourneysCount);
  const scheduledDiscs = useSelector(getScheduledCount);
  const completedJourneys = useSelector(getCompletedJourneysCount);
  const totalJourneys = useSelector(getTotalJourneysCount);

  useEffect(() => {
    dispatch(FeedbackHistoryActions.fetchUserActivity());
  }, []);

  // const showMode = currentMode => {
  //   setShow(true);
  //   setMode(currentMode);
  // };

  // const showDatepicker = () => {
  //   showMode('date');
  // };

  // const showTimepicker = () => {
  //   showMode('time');
  // };

  const captureFeedback = () => {
    navigation.navigate('Feedback');
  };

  const handleNavigation = item => {
    // if (item.fb_id)
    //   navigation.navigate('Feedback', {
    //     screen: 'Feedback Overview',
    //     params: {
    //       id: item.fb_id,
    //       frontliner: item['direct report'],
    //       feedbackDate: item.datetime,
    //       feedbackType: item.type,
    //     },
    //   });
    // else navigation.navigate('Feedback');
  };

  // const JourneyCard = ({ item }) => {
  //   let CARD_MAIN_COLOR = '';
  //   let CARD_SUB_COLOR = '';
  //   let STATUS_BORDER_COLOR = '';
  //   switch (item.status) {
  //     case 'in Progress':
  //       CARD_MAIN_COLOR = '#F99D46';
  //       CARD_SUB_COLOR = '#FFF2E7';
  //       STATUS_BORDER_COLOR = '#FDC591';
  //       break;
  //     case 'feedback sent':
  //       CARD_MAIN_COLOR = '#4990FB';
  //       CARD_SUB_COLOR = '#DDEBFF';
  //       STATUS_BORDER_COLOR = '#8EBBFF';
  //       break;
  //     case 'completed':
  //       CARD_MAIN_COLOR = '#3AB549';
  //       CARD_SUB_COLOR = '#ECF5ED';
  //       STATUS_BORDER_COLOR = '#97DEA0';
  //       break;
  //     default:
  //       CARD_MAIN_COLOR = '#BAC0CA';
  //   }
  //   return (
  //     <TouchableOpacity
  //       accessibilityRole="button"
  //       onPress={() =>
  //         handleNavigation(item)
  //       }
  //       style={[
  //         styles.journeyCard,
  //         {
  //           borderTopColor: CARD_MAIN_COLOR,
  //         },
  //       ]}>
  //       <View style={styles.journeyCardStatusContainer}>
  //         <View
  //           style={[
  //             styles.journeyCardStatus,
  //             {
  //               backgroundColor: CARD_SUB_COLOR,
  //               borderColor: STATUS_BORDER_COLOR,
  //             },
  //           ]}>
  //           <Text
  //             style={[
  //               styles.journeyCardStatusText,
  //               {
  //                 color: CARD_MAIN_COLOR,
  //               },
  //             ]}>
  //             {item.status}
  //           </Text>
  //         </View>
  //         <Icon
  //           name="chevron-forward-outline"
  //           size={20}
  //           style={styles.iconColor}
  //         />
  //       </View>
  //       <View style={styles.journeyCardNameContainer}>
  //         <View style={styles.avatarIcon} />
  //         <View>
  //           <Text style={styles.directReportNameText}>
  //             {item['direct report']}
  //           </Text>
  //           <Text style={styles.dateText}>
  //             {moment(item.datetime).format('llll')}
  //           </Text>
  //         </View>
  //       </View>
  //       <View style={{ paddingTop: 12 }}>
  //         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  //           <Image
  //             source={
  //               item.type === 'Corrective'
  //                 ? Images.penEmoji
  //                 : Images.redHeartEmoji
  //             }
  //             style={styles.feedbackTypeIcon}
  //             resizeMode="contain"
  //           />
  //           <Text style={styles.feedbackTypeText}>{item.type} Feedback</Text>
  //         </View>
  //         <View
  //           style={{
  //             marginTop: 12,
  //             flexDirection: 'row',
  //             alignItems: 'center',
  //           }}>
  //           <Image
  //             source={Images.targetEmoji}
  //             style={{ width: 16, height: 16, marginRight: 12 }}
  //             resizeMode="contain"
  //           />
  //           <Text
  //             style={{
  //               fontSize: 14,
  //               lineHeight: 22,
  //               fontWeight: '400',
  //               color: '#667080',
  //             }}>
  //             Next step: <Text style={{ opacity: 0.5 }}>{item.nextStep}</Text>
  //           </Text>
  //         </View>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };

  const navigateJourneyCard = (item) => {
    navigation.navigate('Feedback', {
      screen: 'Journey Details',
      params: { 
        journeyId: item.journey_id,
      },
    })
  }

  const FeedbackJourneyCard = ({ item }) => {
    return (
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => navigateJourneyCard(item)
        }
        style={styles.journeyCardContainer}>
        <View
          style={[
            styles.feedbackTypeContainer,
            item.feedback_type === 'Corrective'
              ? styles.correctiveContainer
              : styles.positiveContainer,
            { width: '50%' },
          ]}>
          <Text
            type="caption3"
            weight="bold"
            style={[
              styles.feedbackTypeText,
              item.feedback_type === 'Corrective'
                ? styles.correctiveText
                : styles.positiveText,
            ]}>
            {item.feedback_type} Feedback
          </Text>
        </View>
        <Text
          type="body2"
          weight="bold"
          style={[styles.headerTitleText, { marginTop: 8 }]}>
          Feedback for {item.frontliner_name}
          {/* Almost finished! 🤯 */}
        </Text>
        <Text
          type="caption2"
          weight="regular"
          style={styles.journeyDescriptionText}>
          Complete your feedback journey for Team member by accomplishing your
          self-reflection.
        </Text>
        <View style={{ marginTop: 24 }}>
          <Text
            type="hairlineSmall"
            weight="bold"
            style={{
              color: '#777E90',
              marginBottom: 8,
            }}>
            {item.steps_completed} /4 steps completed
          </Text>
          <ProgressBar
            progress={`${item.steps_completed}` / 4}
            color={'#45B26B'}
            style={styles.progressBar}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const UpcomingDiscussionCard = () => {
    return (
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => console.log('upcoming discsussion')}
        style={styles.cardContainer}>
        <UserAvatar style={styles.discussionAvatar} />
        <View style={{ flex: 1 }}>
          <View
            style={[styles.feedbackTypeContainer, styles.correctiveContainer]}>
            <Text
              type="caption3"
              weight="bold"
              style={[styles.feedbackTypeText, styles.correctiveText]}>
              Corrective Feedback
            </Text>
          </View>
          <Text type="caption1" weight="medium" style={styles.descriptionText}>
            1-on-1 with{' '}
            <Text
              type="caption1"
              weight="bold"
              style={styles.highlightedDescText}>
              Lily Cheong
            </Text>
          </Text>
          <Text type="caption2" weight="regular" style={styles.subDescText}>
            15 Oct at 10:00 AM
          </Text>
        </View>
        <Icon
          name="chevron-forward-outline"
          size={20}
          style={styles.forwardIcon}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        {/* <BackgroundView> */}
        <View style={styles.headerContainer}>
          <Text type="body2" weight="bold" style={styles.headerTitleText}>
            Dashboard
          </Text>
          <Image
            source={Images.upshotLogo}
            resizeMode="contain"
            style={styles.headerIcon}
          />
        </View>
        {activeJourneys.length >= 1 ? (
          <View style={styles.welcomeSubHeader}>
            <Text type="h4" weight="bold" style={styles.welcomeText}>
              Hello,
            </Text>
            <Text type="h4" weight="bold" style={styles.welcomeText}>
              {user} 👋
            </Text>
          </View>
        ) : (
          <View style={styles.subHeaderContainer}>
            <Text type="caption2" weight="regular" style={styles.greetingText}>
              Hello {user},
            </Text>
            <Text type="h4" weight="bold" style={styles.welcomeText}>
              Welcome to Upshot 👋
            </Text>
            <Text
              type="caption1"
              weight="regular"
              style={styles.welcomeDescriptionText}>
              Start your leadership journey by completing your first session!
            </Text>
            <Button
              mode="contained"
              onPress={() => {}}
              style={styles.startNowButton}>
              <Text type="button" weight="bold" style={styles.buttonText}>
                Start Now
              </Text>
            </Button>
          </View>
        )}
        <View style={styles.contentContainer}>
          {assessment !== '100%' ? (
            <TouchableOpacity
              accessibilityRole="button"
              onPress={() =>
                navigation.navigate('Assessment', {
                  screen: 'Assessment break down',
                  //  Leadership Assessment Guide
                })
              }
              style={styles.assessmentProgressContainer}>
              <View style={styles.profileProgress}>
                <Text
                  type="caption2"
                  weight="bold"
                  style={styles.profileProgressText}>
                  {assessment}
                </Text>
              </View>
              <View style={styles.profileTextContainer}>
                <Text
                  type="body2"
                  weight="bold"
                  style={styles.profileHeaderText}>
                  Complete your Profile
                </Text>
                <Text
                  type="caption2"
                  weight="regular"
                  style={styles.profileDescriptionText}>
                  By building your profile, you will see where your strength
                  lies.
                </Text>
              </View>
            </TouchableOpacity>
          ) : null}
          {activeJourneys.length >= 1 ? (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginTop: 12, flex: 1 }}>
              {activeJourneys.map((item, i) => (
                <FeedbackJourneyCard key={i} item={item} />
              ))}
            </ScrollView>
          ) : null}
          <View style={{ marginTop: 20 }}>
            {upcomingDiscussions?.length > 1 ? (
              <>
                <Text
                  type="body2"
                  weight="bold"
                  style={[styles.homeLabelText, { marginBottom: 12 }]}>
                  Upcoming 1-on-1s
                </Text>
                {upcomingDiscussions.map((item, i) => (
                  <UpcomingDiscussionCard key={i} item={item} />
                ))}
              </>
            ) : null}
          </View>

          <View style={{ marginTop: 20 }}>
            <Text
              type="body2"
              weight="bold"
              style={[styles.homeLabelText, { marginBottom: 12 }]}>
              Your Progress
            </Text>
            <TouchableOpacity
              accessibilityRole="button"
              onPress={() => handleNavigation('Ongoing Journeys List')}
              style={styles.cardContainer}>
              <LinearGradient
                style={styles.journeyDataGradient}
                colors={['#FFC77E', '#FFEBA2']}
                start={{ x: 0.6, y: 0.6 }}
                end={{ x: 0.8, y: 1 }}>
                <Image
                  source={Images.memoIcon}
                  style={styles.progressIcon}
                  resizeMode="contain"
                />
              </LinearGradient>
              <Text
                type="body2"
                weight="bold"
                style={[styles.homeLabelText, styles.alignStart]}>
                Ongoing
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                  type="body2"
                  weight="bold"
                  style={[styles.homeLabelText, { color: '#F9954D' }]}>
                  {ongoingJourneys}
                </Text>
                <Icon
                  name="chevron-forward-outline"
                  size={20}
                  style={styles.forwardIcon}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              accessibilityRole="button"
              onPress={() => handleNavigation('Scheduled Discussion List')}
              style={styles.cardContainer}>
              <LinearGradient
                style={styles.journeyDataGradient}
                colors={['#3772FF', '#6F94ED']}
                start={{ x: 0.6, y: 0.6 }}
                end={{ x: 0.8, y: 1 }}>
                <Image
                  source={Images.thoughtsIcon}
                  style={styles.progressIcon}
                  resizeMode="contain"
                />
              </LinearGradient>
              <Text
                type="body2"
                weight="bold"
                style={[styles.homeLabelText, styles.alignStart]}>
                Scheduled discussions
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                  type="body2"
                  weight="bold"
                  style={[styles.homeLabelText, { color: '#3772FF' }]}>
                  {scheduledDiscs}
                </Text>
                <Icon
                  name="chevron-forward-outline"
                  size={20}
                  style={styles.forwardIcon}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              accessibilityRole="button"
              onPress={() => handleNavigation('Completed Journey List')}
              style={styles.cardContainer}>
              <LinearGradient
                style={styles.journeyDataGradient}
                colors={['#3AB549', '#BDDEB9']}
                start={{ x: 0.6, y: 0.6 }}
                end={{ x: 0.8, y: 1 }}>
                <Image
                  source={Images.fileManagerIcon}
                  style={styles.progressIcon}
                  resizeMode="contain"
                />
              </LinearGradient>
              <Text
                type="body2"
                weight="bold"
                style={[styles.homeLabelText, styles.alignStart]}>
                Completed
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                  type="body2"
                  weight="bold"
                  style={[styles.homeLabelText, { color: '#3AB549' }]}>
                  {completedJourneys}
                </Text>
                <Icon
                  name="chevron-forward-outline"
                  size={20}
                  style={styles.forwardIcon}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              accessibilityRole="button"
              onPress={() => handleNavigation('Total Journey List')}
              style={styles.cardContainer}>
              <LinearGradient
                style={styles.journeyDataGradient}
                colors={['#9757D7', '#CEABF1']}
                start={{ x: 0.6, y: 0.6 }}
                end={{ x: 0.8, y: 1 }}>
                <Image
                  source={Images.starIcon}
                  style={styles.progressIcon}
                  resizeMode="contain"
                />
              </LinearGradient>
              <Text
                type="body2"
                weight="bold"
                style={[styles.homeLabelText, styles.alignStart]}>
                Total journeys
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                  type="body2"
                  weight="bold"
                  style={[styles.homeLabelText, { color: '#9757D7' }]}>
                  {totalJourneys}
                </Text>
                <Icon
                  name="chevron-forward-outline"
                  size={20}
                  style={styles.forwardIcon}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.spacer} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

HomeScreen.propTypes = {
  activeJourneyLength: PropTypes.array,
  fetchActiveJourneys: PropTypes.func,
};

HomeScreen.defaultProps = {
  activeJourneyLength: [],
  fetchActiveJourneys: () => {},
};
