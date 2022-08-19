import { CardStyleInterpolators } from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Button, ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const AssessmentEndLine = props => {
    const { navigation } = props;
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ProgressBar
          progress={1}
          color={'#667080'}
          style={styles.progressBar}></ProgressBar>
      </SafeAreaView>

      <View style={styles.imageContainer}></View>

      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>Off to a good start!</Text>

        <Text style={styles.descriptionText}>
          Good job on finishing your initial assessment! Next, you can see how
          you're doing in different leadership skill areas. ☺️
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <Button
          onPress={() => navigation.navigate('Leadership Assessment Results')}
          mode="contained"
          style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </Button>
      </View>
      <View style={styles.spacer} />
    </View>
  );
};

export default AssessmentEndLine;

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
    flex: 1,
    marginTop: 84,
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
