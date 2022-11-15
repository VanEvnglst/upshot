import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import {
  View,
  BackHandler,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Animated,
  FlatList,
  Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import AuthenticationActions from 'app/store/AuthenticationRedux';
import { Button, ProgressBar } from 'react-native-paper';
import BottomSheet from '@gorhom/bottom-sheet';
import { DeviceUtil } from 'app/utils';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'app/components';
import LeadershipSkillAreaActions from 'app/store/LSARedux';
import {
  aboutSkillArea,
  basisForLSA,
  lsaScoreDefinition,
} from 'app/models/LeadershipSkillAreaModel';
import Images from 'app/assets/images';
import styles from './styles';

const LeadershipOverviewResults = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['45%', '90%'], []);
  const { width } = Dimensions.get('screen');
  const ITEM_SIZE = DeviceUtil.isIos() ? width * 0.8 : width * 0.85;
  const scrollX = useRef(new Animated.Value(0)).current;
  const skillList = useSelector(state =>
    state.leadershipSkillArea.get('overviewTestResults'),
  );
  const user = useSelector(state => state.user.get('userName'));
  const [sheetType, setSheetType] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [skills, setSkills] = useState([]);
  const [skillIndicator, setSkillIndicator] = useState();


  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => {
        return true;
      });
  }, []);

    // function that sets which type of sheet is opened
  const handleSheetOpen = type => {
    let snapTo = null;
    if (type === 'skill area') {
      snapTo = 0;
      setSheetType(type);
    } else if (type === 'LSA basis') {
      snapTo = 1;
      setSheetType(type);
    } else if (type === 'result value') {
      snapTo = 0;
    }
    bottomSheetRef.current?.snapToIndex(snapTo);
  };

  // function that handles which type of sheet is opened
  const handleSheetContent = () => {
    if (sheetType === 'skill area') {
      return <SkillAreaDefinition />;
    } else if (sheetType === 'LSA basis') {
      return <BasisForLSA />;
    } else if (sheetType === 'result value') {
      return <ResultIndicator />;
    }
  };

  // handles scrolling event and updates values being shown on header
  const handleScroll = event => {
    setCurrentIndex(
      Math.ceil(
        event.nativeEvent.contentOffset.x / Dimensions.get('window').width,
      ),
    );
  };

  const handleNavigation = () => {
    navigation.navigate('Assessment break down');
  };

  const handleSkip = () => {
    dispatch(LeadershipSkillAreaActions.resetOverviewData());
    navigation.navigate('Assessment Wrap Up');
  };

  // opens up bottom sheet to show what area indicator mean
  const showResultsIndicator = item => {
    setSkillIndicator(item);
    setSheetType('result value');
    setTimeout(() => {
      handleSheetOpen('result value');
    }, 300);
  };

  const ResultIndicator = () => {
    const promising = skillIndicator.area === 'Promising Area';
    const continueDev =  skillIndicator.area === 'Area of Continued Development';
    const concern =  skillIndicator.area === 'Area of Concern';

    return (
      <View style={styles.resultSheetContainer}>
        <View style={styles.resultSheetHeader}>
          <Text type="body1" weight="bold" style={styles.skillIndicatorTitle}>
            {skillIndicator.title}
          </Text>
          <View
            style={[
              styles.resultAreaContainer,
              promising &&
                styles.promisingAreaContainer,
              continueDev &&
                styles.areaOfContinuedDevelopmentContainer,
              concern &&
                styles.areaOfConcernContainer,
            ]}>
            <Text
              type="caption2"
              weight="medium"
              style={[
                styles.resultAreaText,
                promising &&
                  styles.promisingAreaLabel,
                continueDev &&
                  styles.areaOfContinuedDevelopmentLabel,
                concern &&
                  styles.areaOfConcernLabel,
              ]}>
              {skillIndicator.area}
            </Text>
          </View>
        </View>
        <View style={styles.resultAreaContent}>
          <View style={styles.skillPointView}>
            <View
              style={[
                styles.skillAreaDefinitionPoint,
                {
                  backgroundColor:
                    promising
                      ? '#42EE57'
                      : continueDev
                      ? '#FFB26A'
                      : concern
                      ? styles.areaOfConcernLabel
                      : '#667080',
                },
              ]}
            />
            <Text type="body2" weight="bold" style={{ color: '#667080' }}>
              {skillIndicator.definition}
            </Text>
          </View>
          <View style={{ marginTop: 16, width: '95%' }}>
            <Text
              type="caption1"
              weight="regular"
              style={styles.aboutSkillText}>
              {skillIndicator.skillPoint}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const SkillAreaDefinition = () => {
    return (
      <View style={{ paddingHorizontal: 24, marginTop: 25 }}>
        {lsaScoreDefinition.map((item, i) => (
          <View key={item.id} style={{ marginBottom: 20 }}>
            <View style={styles.skillPointView}>
              <View
                style={[
                  styles.skillAreaDefinitionPoint,
                  { backgroundColor: item.bg },
                ]}
              />
              <Text style={styles.sheetContentLabelText}>{item.title}</Text>
            </View>
            <View style={{ width: '95%', marginTop: 5 }}>
              <Text style={styles.aboutSkillText}>{item.description}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  };

  const BasisForLSA = () => {
    return (
      <>
        <View style={styles.sheetTitleContainer}>
          <Text style={styles.sheetTitleText}>Why the 5 LSAs?</Text>
          <Text style={styles.sheetContentText}>
            Basis for Leadership Skill Area
          </Text>
        </View>
        <View style={{ paddingHorizontal: 24, marginTop: 25 }}>
          <Text style={styles.sheetContentText}>{basisForLSA.header}</Text>
          <Text style={[styles.sheetContentLabelText, { marginVertical: 15 }]}>
            {basisForLSA.howDoWeKnow}
          </Text>
          <View style={styles.skillPointView}>
            <View style={styles.bullet} />
            <Text style={styles.aboutSkillText}>{basisForLSA.pointOne}</Text>
          </View>
          <View style={styles.skillPointView}>
            <View style={styles.bullet} />
            <Text style={styles.aboutSkillText}>{basisForLSA.pointTwo}</Text>
          </View>
          <View style={styles.skillPointView}>
            <View style={styles.bullet} />
            <Text style={styles.aboutSkillText}>{basisForLSA.pointThree}</Text>
          </View>
          <Text style={[styles.sheetContentText, { marginVertical: 25 }]}>
            {basisForLSA.footer}
          </Text>
        </View>
      </>
    );
  };

  const SkillAreaCard = ({ item }) => {
    return (
      <View key={item.id} style={styles.skillAreaContentContainer}>
        <View style={styles.contentHeader}>
          <Text style={styles.contentTitleText}>{item.title}</Text>
        </View>
        <View style={styles.aboutSkillContent}>
          <Text style={styles.contentLabelText}>About this Skill Area 💪</Text>
          <Text style={styles.aboutSkillText}>{item.description}</Text>
        </View>
        <Button
          mode="outlined"
          style={styles.resultButton}
          onPress={() => showResultsIndicator(item)}>
          <Text style={styles.resultText}>View Results</Text>
        </Button>
      </View>
    );
  };

  

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <ProgressBar
            progress={1}
            color={'#667080'}
            style={styles.progressBar}
          />
        </SafeAreaView>
        <View style={styles.headerContainer}>
          <Text style={styles.userNameText}>Hi {user}!</Text>
          <Text style={styles.headerTitleText}>Your results are here. 🎉</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text type='body2' weight='regular' style={[styles.descriptionText, styles.textAlignStart]}>
            Here's a quick view of where each of your leadership skill areas
            stand.
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <View
            style={{
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text type="body2" weight="regular" style={styles.scoreLabel}>
              Your
              <Text type="body2" weight="bold">
                {' '}
                {skillList[currentIndex].title}{' '}
              </Text>
              indicator is under
            </Text>
            <TouchableOpacity
              accessibilityRole="button"
              onPress={() => handleSheetOpen('skill area')}
              style={[
                styles.skillAreaContainer,
                skillList[currentIndex].area === 'Promising Area' &&
                  styles.promisingAreaContainer,
                skillList[currentIndex].area ===
                  'Area of Continued Development' &&
                  styles.areaOfContinuedDevelopmentContainer,
                skillList[currentIndex].area === 'Area of Concern' &&
                  styles.areaOfConcernContainer,
              ]}>
              <Text
                weight="medium"
                style={[
                  styles.skillAreaLabelText,
                  skillList[currentIndex].area === 'Promising Area' &&
                    styles.promisingAreaLabel,
                  skillList[currentIndex].area ===
                    'Area of Continued Development' &&
                    styles.areaOfContinuedDevelopmentLabel,
                  skillList[currentIndex].area === 'Area of Concern' &&
                    styles.areaOfConcernLabel,
                ]}>
                {skillList[currentIndex].area}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Animated.FlatList
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                {
                  useNativeDriver: true,
                  listener: (event, gestureState) => handleScroll(event),
                },
              )}
              snapToInterval={ITEM_SIZE}
              snapToAlignment="start"
              decelerationRate={0}
              bounces={false}
              data={skillList}
              keyExtractor={item => item.key}
              pagingEnabled
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                if (!item.title) {
                  return <View style={styles.cardSpacer} />;
                }
                return <SkillAreaCard item={item} />;
              }}
            />
          </View>
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => handleSheetOpen('LSA basis')}>
            <Text style={styles.linkText}>
              Why these 5 Leadership Skill Areas?
            </Text>
          </TouchableOpacity>
          <Text
            type="body2"
            weight="regular"
            style={
              styles.descriptionText
            }>{`Find this interesting? You can learn more by completing the next set of questions.`}</Text>
        </View>
        <View style={styles.btnContainer}>
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => handleNavigation()}>
            Complete Your Profile
          </Button>
        </View>
        <TouchableOpacity
          style={{ alignItems: 'center', margin: 10 }}
          onPress={() => handleSkip()}>
          <Text style={styles.descriptionText}>Skip</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
      </ScrollView>
      <BottomSheet
        index={-1}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose>
        <View style={{ flex: 1 }}>{handleSheetContent()}</View>
      </BottomSheet>
    </View>
  );
};

export default LeadershipOverviewResults;

LeadershipOverviewResults.propTypes = {};

LeadershipOverviewResults.defaultProps = {};
3;
