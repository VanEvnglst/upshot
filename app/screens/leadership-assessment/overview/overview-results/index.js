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
import { useDispatch, useSelector } from 'react-reduex';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Images from 'app/assets/images';

const LeadershipOverviewResults = props => {
  const { navigation } = props;


  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => {
        return true;
      });
  }, []);

  return (
  <View style={styles.container}>
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
    <SafeAreaView>
    <TouchableOpacity
            accessibilityRole="button"
            onPress={() => handleGoBack()}>
            <Icon name="chevron-back-outline" size={24} font-size="6px" />
          </TouchableOpacity>
    </SafeAreaView>
    <View style={styles.userContainer}>
      <View style={styles.userIcon}>
        <Image
          source={Images.smileyAvatar}
          resizeMode='contain'
          style={styles.avatarIcon}
        />
      </View>
      <View stlye={styles.userDetailsContainer}>
        <Text style={styles.userNameText}>Jaykey del Mar</Text>
        <Text style={styles.userLevelText}>Level 1</Text>
      </View>
    </View>
    <View style={styles.descriptionContainer}>
    <Text style={[styles.descriptionText, styles.textAlignStart]}>{`To view your skill area breakdown, you will need to answer a few questions to personalize your leadership profile.\n\nBy building your skills, we can have a baseline`}</Text>
    </View>
    <View style={styles.contentContainer}>
      <View style={styles.improvementContainer}>
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
      </View>
      <View style={styles.satisfactoryContainer}>
      <Text style={[styles.labelText, styles.satisfactoryLabel]}>Satisfactory:</Text>
      <View style={styles.skillAreaContainer}><Text style={styles.labelText}>🧠 Curiosity</Text></View>
      </View>
      <View style={styles.promisingContainer}>
      <Text style={[styles.labelText, styles.promisingLabel]}>Promising Areas:</Text>
      <View style={styles.skillAreaContainer}><Text style={styles.labelText}>🏅 Achievement Orientation</Text></View>
      </View>
    </View>
    <View style={styles.btnContainer}>
      <Button
        mode='contained'
        style={styles.button}
      >Build my Profile</Button>
      <TouchableOpacity
        style={styles.skippable}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.descriptionText}>Skip Test</Text>
      </TouchableOpacity>
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
  userContainer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
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
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    color: '#667080'
  },
  userLevelText: {
    marginTop: 4,
    color: "#667080",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
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
    textAlign: 'center'
  },
  textAlignStart: {
    textAlign: 'left'
  },
  spacer: {
    height: 100
  }
});
