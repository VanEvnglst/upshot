import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  View,
  BackHandler,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import AuthenticationActions from 'app/store/AuthenticationRedux';
import { Button, ProgressBar } from 'react-native-paper';
import BottomSheet from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/Ionicons';
import Images from 'app/assets/images';
import LeadershipSkillAreaActions from 'app/store/LSARedux';
import { aboutSkillArea, basisForLSA, lsaScoreDefinition }from 'app/models/LeadershipSkillAreaModel';
import styles from './styles';

const LeadershipOverviewResults = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['45%', '90%'], []);
  const [sheetType, setSheetType] = useState('');

  //get selector of data from state
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => {
        return true;
      });
  }, []);

  const handleSheetOpen = (type) => {
    snapTo = null;
      if(type === 'skill area') {
        snapTo = 0;
        setSheetType(type)
      } else {
        snapTo = 1;
        setSheetType(type)
      }
    bottomSheetRef.current?.snapToIndex(snapTo);
  }

  const handleSheetContent = () => {
    if (sheetType === 'skill area')
      return <SkillAreaDefinition/>
    else 
      return <BasisForLSA/>
  }

  const SkillAreaDefinition = () => {
    return (
      <View style={{ paddingHorizontal: 24, marginTop: 25 }}>
        {lsaScoreDefinition.map((item, i) => (
          <View 
            key={item.id}
            style={{ marginBottom: 20}}>
           <View style={styles.skillPointView}>
           <View style={[styles.skillAreaDefinitionPoint, { backgroundColor: item.bg}]}/>
           <Text style={styles.sheetContentLabelText}>{item.title}</Text>
         </View>
      <View style={{ width: '95%', marginTop: 5}}>
         <Text style={styles.aboutSkillText}>{item.description}</Text>
         </View>
         </View>
        ))}
      </View>
    )
  }

  const BasisForLSA = () => {
    return (
      <>
      <View style={styles.sheetTitleContainer}>
        <Text style={styles.sheetTitleText}>Why the 5 LSAs?</Text>
        <Text style={styles.sheetContentText}>Basis for Leadership Skill Area</Text>
      </View>
      <View style={{ paddingHorizontal: 24, marginTop: 25 }}>
          <Text style={styles.sheetContentText}>{basisForLSA.header}</Text>
          <Text style={[styles.sheetContentLabelText, { marginVertical: 15 }]}>{basisForLSA.howDoWeKnow}</Text>
          <View style={styles.skillPointView}>
              <View style={styles.bullet}/>
            <Text style={styles.aboutSkillText}>{basisForLSA.pointOne}</Text>
            </View>
            <View style={styles.skillPointView}>
              <View style={styles.bullet}/>
            <Text style={styles.aboutSkillText}>{basisForLSA.pointTwo}</Text>
            </View>
            <View style={styles.skillPointView}>
              <View style={styles.bullet}/>
            <Text style={styles.aboutSkillText}>{basisForLSA.pointThree}</Text>
            </View>
            <Text style={[styles.sheetContentText, { marginVertical: 25 }]}>{basisForLSA.footer}</Text>
        </View>
      </>
    )
  };

  const handleNavigation = () => {
    // dispatch(AuthenticationActions.signInUserSuccess());
    navigation.navigate('Assessment break down')
  };

  const SkillAreaCard = () => {
    return (
      <View style={styles.skillAreaContentContainer}>
        <View style={styles.contentHeader}>
          <Text style={styles.contentTitleText}>💓 Empathy</Text>
        </View>
        <View style={styles.aboutSkillContent}>
          <Text style={styles.contentLabelText}>About this Skill Area 💪</Text>
          <Text style={styles.aboutSkillText}>
            {aboutSkillArea[0].description}
          </Text>
        </View>
        <View style={styles.aboutSkillContent}>
          <Text style={styles.contentLabelText}>What Your Score Means 🎯</Text>
          <Text style={styles.aboutSkillText}>
            {aboutSkillArea[0].areaOfConcern.whatScoreMeans}
          </Text>
          {aboutSkillArea[0].areaOfConcern.skillPoints.map((item, i) => (
            <View style={styles.skillPointView}>
              <View style={styles.bullet}/>
            <Text style={styles.aboutSkillText}>{item}</Text>
            </View>
          ))}
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
          <Text style={styles.userNameText}>Hi Jaykey del Mar!</Text> {/* TODO: Use user name here */}
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
              Your<Text style={styles.scoreLabelBold}> Empathy </Text>score is
              under
            </Text>
            <TouchableOpacity
              accessibilityRole='button'
              onPress={() => handleSheetOpen('skill area')}
              style={[
                styles.skillAreaContainer,
                styles.areaOfConcernContainer,
              ]}>
              <Text
                style={[styles.skillAreaLabelText, styles.areaOfConcernLabel]}>
                Area of Concern
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SkillAreaCard/>
            <View style={styles.skillAreaContentContainer}>
              <View style={styles.contentHeader}>
                <Text style={styles.contentTitleText}>💓 Empathy</Text>
              </View>
              <View style={styles.aboutSkillContent}>
                <Text style={styles.contentLabelText}>
                  About this Skill Area
                </Text>
              </View>
              <View style={styles.aboutSkillContent}>
                <Text style={styles.contentLabelText}>
                  What Your Score Means 🎯
                </Text>
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity accessibilityRole="button" onPress={() => handleSheetOpen('LSA basis')}>
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
        <View style={styles.spacer} />
      </ScrollView>
      <BottomSheet
        index={-1}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose>
        <View style={{ flex: 1}}>{handleSheetContent()}</View>
      </BottomSheet>
    </View>
  );
};

export default LeadershipOverviewResults;

LeadershipOverviewResults.propTypes = {};

LeadershipOverviewResults.defaultProps = {};
3;
