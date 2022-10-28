import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Images from 'app/assets/images';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from "./styles";


const EMJourneyCloseout = props => {
  const { navigation } = props;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={Images.starstruckEmoji}
          resizeMethod="contain"
          style={styles.imageSize} />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>You completed this feedback</Text>
        <Text style={styles.subHeaderText}>A good manager always give frequent feedback. Keep it up!</Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.nameContainer}>
            <View style={styles.nameAvatarContainer}>
          <LinearGradient
                style={styles.nameAvatarIcon}
                      colors={['#C883FF', '#6587FF']}
                      start={{ x: 0.2, y: 0 }}
                      end={{ x: 0.7, y: 1 }}>
                      <Text style={styles.nameInitialText}>AC</Text>
              </LinearGradient>
              </View>
            <View>
              <Text style={styles.nameText}>Andre Castro</Text>
             <Text  style={styles.positionText}>Team Member</Text>
            </View>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.detailsContentHolder}>
            <Image
            source={Images.penEmoji}
            resizeMethod="auto"
            style={styles.icon} />
              <Text style={styles.mainDetailsText}>Corrective Feedback</Text>
            </View>
            <View style={[styles.detailsContentHolder,{ marginTop: 12 }]}>
              <Icon
                name="document-text"
                style={styles.icon} />
              <View>
              <Text style={styles.mainDetailsText}>Attitude</Text>
              <Text style={styles.subDetailsText}>Poor Greetings</Text>
              </View>
            </View>
            <View style={[styles.detailsContentHolder,{ marginTop: 12, marginBottom: 24}]}>
              <Icon
                name="calendar"
                style={styles.icon} />
              <View>
              <Text style={styles.mainDetailsText}>1-on-1</Text>
              <Text style={styles.subDetailsText}>Mon · Aug 24, 2022 | 1:00-1:30PM</Text>
              </View>
              </View>
        </View>
        
        </View>
       
      </View>
      <View style={styles.btnContainer}>
          <Button
            mode='contained'
            onPress={() => navigation.replace('Home')}
            style={styles.btnStyle}>
            <Text style={styles.btnText}>Close Out</Text>
          </Button>
        </View>
    </SafeAreaView>
  );
}

export default EMJourneyCloseout;

EMJourneyCloseout.propTypes = {};

EMJourneyCloseout.defaultProps = {};