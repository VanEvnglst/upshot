import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ProgressBar, FAB } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { LearningCard, Wrapper, Text } from 'app/components';
import FeedbackActions from 'app/store/feedback/FeedbackRedux';
import FeedbackHistoryActions from 'app/store/feedback/FeedbackHistoryRedux';
import { getActiveJourneys } from 'app/store/selectors';
import labels from 'app/locales/en';
import Images from 'app/assets/images';
import styles from './styles';
import leadershipSkillAreaActions from 'app/store/LSARedux';
const HomeScreen = props => {
  const { homeScreen } = labels;
  const { navigation } = props;
  const dispatch = useDispatch();
  const activeJourneyLength = useSelector(getActiveJourneys);

  useEffect(() => {
    // dispatch(FeedbackActions.fetchFeedbackFlow());
    // dispatch(FeedbackActions.fetchFeedbackType());
    // dispatch(FeedbackActions.fetchFeedbackTopics());
    // dispatch(FeedbackHistoryActions.fetchActiveJourneys());
    // dispatch(FeedbackActions.resetFeedbackState());
  dispatch(leadershipSkillAreaActions.fetchExtendedQuestions());
  }, []);

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

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

  // const AlertCard = () => {
  //   return (
  //     <View
  //       style={{
  //         height: 60,
  //         borderWidth: 0.6,
  //         borderRadius: 8,
  //         marginBottom: 12,
  //         justifyContent: 'center',
  //         paddingHorizontal: 20,
  //       }}>
  //       <Text>You have one upcoming event</Text>
  //     </View>
  //   );
  // };

  const handleNavigation = () => {
    navigation.navigate('Feedback');
  };

  const JourneyCard = ({ item }) => {

    return (
      <View style={{ marginHorizontal: 24, marginTop: 20, minHeight: 172, borderWidth: 1, borderRadius: 6, borderColor: '#BAC0CA',paddingHorizontal: 16, paddingTop: 12, paddingBottom: 24}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 4,
      }}></View>
        <Icon
          name='chevron-forward-outline'
          size={20}
        />
      </View>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 16}}>
          <Text style={{ fontSize: 32, lineHeight: 36, fontWeight: '700', color: '#667080', marginBottom: 8}}>Feedback Coaching</Text>
          <Text style={{ color: '#667080', fontSize: 14, lineHeight: 20, fontWeight: '400'}}>{`Advocating for your employees' growth and optimal performance with feedback`}</Text>
        </View>
        <View style={{ marginTop: 24, borderBottomWidth: 0.3, paddingHorizontal: 16, paddingBottom: 16, }}>
          <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={{ fontSize: 14, lineHeight: 20, fontWeight: '700', color: '#667080'}}>{`Next Level (Level 2)`}</Text>
          <Text style={{ fontSize: 14, lineHeight: 20, fontWeight: '400', color: '#667080'}}>190 / 500 pts.</Text>
          </View>
          <View style={{ marginTop: 5, alignItems: 'center', flexDirection: 'row'}}>
            <Image
              source={Images.lightningEmoji}
              style={{ width: 12, height: 12 }}
              resizeMode='contain'
            />
            <ProgressBar
               progress={190/500}
               color={'#F99D46'}
              style={{
                width: 340,
                height: 6,
                marginLeft: 3,
                borderRadius: 4,
                paddingRight: 19,
              }}
            />
          </View>
        </View>
      </SafeAreaView>
      {/* <View>
      <JourneyCard/>
      </View> */}
      <FAB
        icon='plus'
        onPress={() => handleNavigation()}
        style={{ position: 'absolute',
      bottom: 20, right: 28, backgroundColor: '#DBE3FF', borderWidth: 1,borderColor: '#A0B3F3', width: 50, height: 50, borderRadius: 12, justifyContent: 'center', alignItems: 'center'}}
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
