import { CardStyleInterpolators } from '@react-navigation/stack';
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
import { Button, ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Images from 'app/assets/images';

const MilestoneSignpost4 = props => {
    const { navigation } = props;
  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* <ProgressBar
          progress={1}
          color={'#667080'}
          style={styles.progressBar}></ProgressBar> */}
      </SafeAreaView>

      <View style={styles.imageContainer}>
            <Image
                source={Images.purpleHeartEmoji}
                resizeMode='contain'
                style={styles.image}
            />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>A few last questions</Text>

        <Text style={styles.descriptionText}>
          Fugit consequatur magni. Dolorem illum vitae itaque. Ab laudantium quia et. Excepturi sed sed quisquam. Minima eos aut quis at.
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <Button
          onPress={() => navigation.navigate('Leadership Assessment Extended')}
          mode="contained"
          style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </Button>
      </View>
      <View style={styles.spacer} />
    </View>
  );
};

export default MilestoneSignpost4;

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
    backgroundColor: '#F0E0FF', 
    borderRadius: 100, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  image: {
    width: 115,
    height: 115
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
