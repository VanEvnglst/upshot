import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Images from 'app/assets/images';
import LeadershipSkillAreaActions from 'app/store/LSARedux';

const CalculateAssessmentScore = props => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.imageContainer}>
        <Image
          source={Images.hugEmoji}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>Your profile is ready!</Text>
        <Text style={styles.descriptionText}>
          Thank you for answering all questionnaires!
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Button
          onPress={() => navigation.navigate('Extended Assessment Wrap Up')}
          mode="contained"
          style={styles.button}>
          <Text style={styles.buttonText}>View Leadership Profile</Text>
        </Button>
      </View>
      <View style={styles.spacer} />
    </View>
  );
};

export default CalculateAssessmentScore;

CalculateAssessmentScore.propTypes = {};

CalculateAssessmentScore.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  progressBar: {
    height: 4,
    borderRadius: 4,
    marginTop: 20,
  },
  imageContainer: {
    marginTop: 84,
    alignSelf: 'center',
    width: 200,
    height: 200,
    backgroundColor: '#FFEFE2',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 115,
    height: 115,
  },
  contentContainer: {
    flex: 1,
    marginTop: 84,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 36,
    color: '#667080',
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    marginTop: 12,
    color: '#667080',
    maxWidth: '90%',
    textAlign: 'center',
  },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    marginLeft: 5,
    backgroundColor: '#667080',
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  spacer: {
    height: 100,
  },
});
