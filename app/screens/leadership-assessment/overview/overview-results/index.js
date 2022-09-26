import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  View,
  BackHandler,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import AuthenticationActions from 'app/store/AuthenticationRedux';
import { Button, ProgressBar } from 'react-native-paper';
import BottomSheet from '@gorhom/bottom-sheet';
import { DeviceUtil } from 'app/utils';
import Icon from 'react-native-vector-icons/Ionicons';
import Images from 'app/assets/images';
import LeadershipSkillAreaActions from 'app/store/LSARedux';
import {
  aboutSkillArea,
  basisForLSA,
  lsaScoreDefinition,
} from 'app/models/LeadershipSkillAreaModel';
import styles from './styles';

const LeadershipOverviewResults = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['45%', '90%'], []);
  const skillList = useSelector(state =>
    state.leadershipSkillArea.get('overviewTestResults'),
  );
  const user = useSelector(state => state.user.userName);
  const [sheetType, setSheetType] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [skills, setSkills] = useState([]);

  const { width } = Dimensions.get('screen');
  const ITEM_SIZE = DeviceUtil.isIos() ? width * 0.72 : width * 0.82;
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => {
        return true;
      });
  }, []);

  useEffect(() => {
    setSkills(
    {
      id: 2,
      title: '',
      area: skillList[1].area,
      description: aboutSkillArea[1].description,
      definition: skillList[1].area === 'Promising Area' ? aboutSkillArea[1].promisingArea.whatScoreMeans : skillList[1].area === 'Area of Continued Development' ? aboutSkillArea[1].areaOfContinuedDevelopment.whatScoreMeans : skillList[1].area === 'Area of Concern' ? aboutSkillArea[1].areaOfConcern.whatScoreMeans : '',
      skillPoint: skillList[1].area === 'Promising Area' ? aboutSkillArea[1].promisingArea.skillPoints : skillList[1].area === 'Area of Continued Development' ? aboutSkillArea[1].areaOfContinuedDevelopment.skillPoints : skillList[1].area === 'Area of Concern' ? aboutSkillArea[1].areaOfConcern.skillPoints : '',
  },
  {
    id: 3,
    title: 'Empathy',
    area: skillList[2].area,
    description: aboutSkillArea[2].description,
    definition: skillList[2].area === 'Promising Area' ? aboutSkillArea[2].promisingArea.whatScoreMeans : skillList[2].area === 'Area of Continued Development' ? aboutSkillArea[2].areaOfContinuedDevelopment.whatScoreMeans : skillList[2].area === 'Area of Concern' ? aboutSkillArea[2].areaOfConcern.whatScoreMeans : '',
    skillPoint: skillList[2].area === 'Promising Area' ? aboutSkillArea[2].promisingArea.skillPoints : skillList[2].area === 'Area of Continued Development' ? aboutSkillArea[2].areaOfContinuedDevelopment.skillPoints : skillList[2].area === 'Area of Concern' ? aboutSkillArea[2].areaOfConcern.skillPoints : '',
},{
  id: 4,
  title: 'Openness to Learn',
  area: skillList[3].area,
  description: aboutSkillArea[3].description,
  definition: skillList[3].area === 'Promising Area' ? aboutSkillArea[3].promisingArea.whatScoreMeans : skillList[3].area === 'Area of Continued Development' ? aboutSkillArea[3].areaOfContinuedDevelopment.whatScoreMeans : skillList[3].area === 'Area of Concern' ? aboutSkillArea[3].areaOfConcern.whatScoreMeans : '',
  skillPoint: skillList[3].area === 'Promising Area' ? aboutSkillArea[3].promisingArea.skillPoints : skillList[3].area === 'Area of Continued Development' ? aboutSkillArea[3].areaOfContinuedDevelopment.skillPoints : skillList[3].area === 'Area of Concern' ? aboutSkillArea[3].areaOfConcern.skillPoints : '',
},
{
  id: 5,
  title: 'Achievement Orientation',
  area: skillList[4].area,
  description: aboutSkillArea[4].description,
  definition: skillList[4].area === 'Promising Area' ? aboutSkillArea[4].promisingArea.whatScoreMeans : skillList[4].area === 'Area of Continued Development' ? aboutSkillArea[4].areaOfContinuedDevelopment.whatScoreMeans : skillList[4].area === 'Area of Concern' ? aboutSkillArea[4].areaOfConcern.whatScoreMeans : '',
  skillPoint: skillList[4].area === 'Promising Area' ? aboutSkillArea[4].promisingArea.skillPoints : skillList[4].area === 'Area of Continued Development' ? aboutSkillArea[4].areaOfContinuedDevelopment.skillPoints : skillList[4].area === 'Area of Concern' ? aboutSkillArea[4].areaOfConcern.skillPoints : '',
}
    )
  }, []);

  const handleSheetOpen = type => {
    snapTo = null;
    if (type === 'skill area') {
      snapTo = 0;
      setSheetType(type);
    } else {
      snapTo = 1;
      setSheetType(type);
    }
    bottomSheetRef.current?.snapToIndex(snapTo);
  };

  const handleSheetContent = () => {
    if (sheetType === 'skill area') return <SkillAreaDefinition />;
    else return <BasisForLSA />;
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

  const handleScroll = (event) => {
    console.log('currentScreenIndex', parseInt(event.nativeEvent.contentOffset.x/Dimensions.get('window').width));
    setCurrentIndex(parseInt(event.nativeEvent.contentOffset.x/Dimensions.get('window').width))

  }

  const handleNavigation = () => {
    // dispatch(AuthenticationActions.signInUserSuccess());
    navigation.navigate('Assessment break down');
  };

  const SkillAreaCard = ({ item }) => {
    console.warn('sk', item.skillPoint)
    return (
      <View style={styles.skillAreaContentContainer}>
        <View style={styles.contentHeader}>
          <Text style={styles.contentTitleText}>{item.title}</Text>
        </View>
        <View style={styles.aboutSkillContent}>
          <Text style={styles.contentLabelText}>About this Skill Area 💪</Text>
          <Text style={styles.aboutSkillText}>
            {item.description}
          </Text>
        </View>
        <View style={styles.aboutSkillContent}>
          <Text style={styles.contentLabelText}>What Your Score Means 🎯</Text>
          <Text style={styles.aboutSkillText}>
            {item.definition}
          </Text>
          <View style={{ minHeight: 200,}}>
              <Text style={styles.aboutSkillText}>{item.skillPoint}</Text>
              </View>
        </View>
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
          <Text style={[styles.descriptionText, styles.textAlignStart]}>
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
            <Text style={styles.scoreLabel}>
              Your<Text style={styles.scoreLabelBold}> {skillList[currentIndex].title} </Text>score is
              under
            </Text>
            <TouchableOpacity
              accessibilityRole="button"
              onPress={() => handleSheetOpen('skill area')}
              style={[
                styles.skillAreaContainer,
                skillList[currentIndex].area === 'Promising Area' &&
                styles.promisingAreaContainer,
                skillList[currentIndex].area === 'Area of Continued Development' &&
                styles.areaOfContinuedDevelopmentContainer, 
                skillList[currentIndex].area === 'Area of Concern' && 
                styles.areaOfConcernContainer,
              ]}>
              <Text
                style={[styles.skillAreaLabelText, 
                
                  skillList[currentIndex].area === 'Promising Area' &&
                  styles.promisingAreaLabel,
                  skillList[currentIndex].area === 'Area of Continued Development' &&
                  styles.areaOfContinuedDevelopmentLabel,
                  skillList[currentIndex].area === 'Area of Concern' && 
                styles.areaOfConcernLabel]}>
                {skillList[currentIndex].area}
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToAlignment='center'
            bounces={false}
            pagingEnabled
            onScroll={e => handleScroll(e)}
          >
            {skillList.map((item, i) => {
              return (<SkillAreaCard item={item} key={item.id} />);
            })}
          </ScrollView>
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => handleSheetOpen('LSA basis')}>
            <Text style={styles.linkText}>
              Why these 5 Leadership Skill Areas?
            </Text>
          </TouchableOpacity>
          <Text
            style={
              styles.descriptionText
            }>{`To view your detailed skill area breakdown, you will need to answer a few questions to personalize your leadership profile.\n\nBy building your profile, we can have a baseline on your current performance and compare how you progress at any point in time. Your baseline helps us recommend the most useful starting point. `}</Text>
        </View>
        <View style={styles.btnContainer}>
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => handleNavigation()}>
            Start with Skill Areas
          </Button>
        </View>
        <TouchableOpacity
          style={{ alignItems: 'center', margin: 10 }}
          onPress={() => navigation.navigate('Assessment Wrap Up') }>
          <Text style={ styles.descriptionText}>Skip</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
        
      </ScrollView>
      {/* <BottomSheet
        index={-1}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose>
        <View style={{ flex: 1}}>{handleSheetContent()}</View>
      </BottomSheet> */}
    </View>
  );
};

export default LeadershipOverviewResults;

LeadershipOverviewResults.propTypes = {};

LeadershipOverviewResults.defaultProps = {};
3;
