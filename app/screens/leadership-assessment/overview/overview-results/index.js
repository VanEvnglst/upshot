import React, { useEffect } from 'react';
import {
  View,
  BackHandler,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import AuthenticationActions from 'app/store/AuthenticationRedux';
import { Button, ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Images from 'app/assets/images';
import LeadershipSkillAreaActions from 'app/store/LSARedux';

const LeadershipOverviewResults = props => {
  const { navigation } = props;
  const dispatch = useDispatch();

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

  const handleNavigation = () => {
    dispatch(AuthenticationActions.signInUserSuccess());
    navigation.navigate('Home')
  }



  return (
  <View style={styles.container}>
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
    <SafeAreaView>
      <ProgressBar
        progress={1}
        color={'#667080'}
        style={styles.progressBar}
      />
    </SafeAreaView>
    <View style={styles.headerContainer}>
        <Text style={styles.userNameText}>Hi Jaykey del Mar!</Text>
        <Text style={styles.headerTitleText}>Your results are here. 🎉</Text>
    </View>
    <View style={styles.descriptionContainer}>
    <Text style={[styles.descriptionText, styles.textAlignStart]}>Here's a quick view of where each of your leadership skill areas stand.</Text>
    </View>
    <View style={styles.contentContainer}>
      <View style={{ height: 200, marginBottom: 50, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.scoreLabel}>Your<Text style={styles.scoreLabelBold}> Empathy </Text>score is under</Text>
        <View style={styles.areaOfConcernContainer}>
          <Text style={styles.areaOfConcernLabel}>Area of Concern</Text>
        </View>

      </View>
      {/* <View style={styles.improvementContainer}>
        <Text style={[styles.labelText, styles.improvementLabel]}>Areas for Improvement:</Text>
        <View style={styles.content}>
          <View style={styles.skillAreaContainer}>
            <Text style={styles.labelText}>💓 Empathy</Text>
          </View>
          <View style={styles.skillAreaContainer}>
          <Text style={styles.labelText}> 🤝 Trust Building</Text>
          </View>
          <View style={styles.skillAreaContainer}><Text style={styles.labelText}>👐 Authenticity</Text></View>
        </View>
      </View> */}
      {/* <View style={styles.satisfactoryContainer}>
      <Text style={[styles.labelText, styles.satisfactoryLabel]}>Satisfactory:</Text>
      <View style={styles.skillAreaContainer}><Text style={styles.labelText}>🧠 Curiosity</Text></View>
      </View> */}
      {/* <View style={styles.promisingContainer}>
      <Text style={[styles.labelText, styles.promisingLabel]}>Promising Areas:</Text>
      <View style={styles.skillAreaContainer}><Text style={styles.labelText}>🏅 Achievement Orientation</Text></View>
      </View> */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
      <View style={styles.skillAreaContentContainer}>
        <View style={styles.contentHeader}>
          <Text style={styles.contentTitleText}>💓 Empathy</Text>
        </View>
        <View style={styles.aboutSkillContent}>
          <Text style={styles.contentLabelText}>About this Skill Area</Text>
        </View>
        <View style={styles.aboutSkillContent}>
        <Text style={styles.contentLabelText}>What Your Score Means</Text>
        </View>
      </View>
      <View style={styles.skillAreaContentContainer}>
        <View style={styles.contentHeader}>
          <Text style={styles.contentTitleText}>💓 Empathy</Text>
        </View>
        <View style={styles.aboutSkillContent}>
          <Text style={styles.contentLabelText}>About this Skill Area</Text>
        </View>
        <View style={styles.aboutSkillContent}>
        <Text style={styles.contentLabelText}>What Your Score Means</Text>
        </View>
      </View>
      </ScrollView>
      <TouchableOpacity
        accessibilityRole='button'
        onPress={() => {}}
      >
      <Text style={styles.linkText}>Why these 5 Leadership Skill Areas?</Text>
      </TouchableOpacity>
      <Text style={styles.descriptionText}>{`To view your detailed skill area breakdown, you will need to answer a few questions to personalize your leadership profile.\n\nBy building your profile, we can have a baseline on your current performance and compare how you progress at any point in time. Your baseline helps us recommend the most useful starting point. `}</Text>
    </View>
    <View style={styles.btnContainer}>
      <Button
            mode='contained'
            style={styles.button}
            onPress={() => navigation.navigate('Assessment break down')}
      >Start with Skill Areas</Button>
    </View>
    <View style={styles.spacer}/>
    </ScrollView>
  </View>);
};

export default LeadershipOverviewResults;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24
  },
  progressBar: {
    height: 4,
    borderRadius: 4,
    marginTop: 20,
  },
  headerContainer: {
    marginTop: 40,
  },
  userIcon: {
    width: 58,
    height: 58,
    borderRadius: 58/2,
    backgroundColor: '#FFF3D4',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarIcon: {
    width: 38,
    height: 38
  },
  userDetailsContainer: {
    flex: 1,
  },
  userNameText: {
    fontSize: 10,
    lineHeight: 10,
    fontWeight: '600',
    color: '#B1B5C3',
    textTransform: 'uppercase'
  },
  headerTitleText: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    color: '#667080',
    marginTop: 5,
  },
  descriptionContainer: {
    marginTop: 25,
  },
  contentContainer: {
    marginTop: 25,
    flex: 2,
  },
  improvementContainer: {
    marginBottom: 12,
    backgroundColor: '#FFF1F6',
    minHeight: 150,
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 12,

  },
  satisfactoryContainer: {
    marginBottom: 12,
    backgroundColor: '#FFF2E7',
    minHeight: 150,
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
  promisingContainer: {
    marginBottom: 12,
    backgroundColor: '#D6FFDB',
    minHeight: 150,
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
  skillAreaContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    minWidth: 128,
    minHeight: 56,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 10
  },
  labelText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
    color: '#667080'
  },
  improvementLabel: {
    color: '#EF4469'
  },
  satisfactoryLabel: {
    color: '#F18F34'
  },
  promisingLabel: {
    color: '#3AB549'
  },
  content: {
    marginTop: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btnContainer: {
    marginTop: 40,
  },
  button: {
    height: 48,
    backgroundColor: '#667080',
    justifyContent: 'center',
    alignItems: 'center'
  },
  skippable: {
    marginTop: 24,
  },
  descriptionText: {
    color: "#667080",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
  },
  textAlignStart: {
    textAlign: 'left'
  },
  spacer: {
    height: 100
  },
  linkText: {
    marginBottom: 24, 
    color: '#58A1F2', 
    fontSize: 14, 
    textAlign: 'center', 
    textDecorationLine: 'underline',
    lineHeight: 22,
  },
  skillAreaContentContainer: {
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#BAC0CA',
    minHeight: 500,
    padding: 12,
    borderRadius: 6,
    width: 325,
    marginRight: 8
  },
  contentHeader: {
    borderBottomWidth: 1,
    borderColor: '#BAC0CA',
    paddingBottom: 12,
  },
  contentTitleText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#667080',
    fontWeight: '700',
  },
  contentLabelText: {
    fontSize: 14,
    color: '#667080',
    fontWeight: '700',
    lineHeight: 22,
  },
  aboutSkillContent: {
    marginTop: 15

  },
  aboutSkillText: {
    fontSize: 14,
    color: '#667080',
    fontWeight: '400',
    lineHeight: 22,
  },
  scoreLabel: {
    fontSize: 16,
    fontWeight: '400',
    color: '#667080',
    lineHeight: 22,
    maxWidth: 140,
    marginBottom: 8
  },
  scoreLabelBold: {
    fontWeight: '700'
  },
  areaOfConcernContainer: {
    backgroundColor:'#FFE4EA',
    borderWidth: 1,
    borderColor: '#FF9C9C',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    height: 45
  },
  areaOfConcernLabel: {
    color: '#FF5656',
    fontSize: 12,
    lineHeight: 10,
    fontWeight: '600',
    paddingTop: 5,
    textTransform: 'uppercase',
  }
});
