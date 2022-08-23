import React, { useState, useEffect, useRef, useMemo} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import BottomSheet from '@gorhom/bottom-sheet';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import CaptureMomentActions from 'app/store/CaptureFeedbackMomentRedux';
import Images from 'app/assets/images';
import styles from '../styles';
import * as NavigationService from 'app/services/NavigationService';


const CaptureMomentStep4 = ({ onPress }) => {
  const dispatch = useDispatch();
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => [ '25%','50%'], []);
  const { height } = Dimensions.get('window');
  const feedbackType = useSelector(state => state.captureMoment.get('step2').data);

  useEffect(() => {
    dispatch(CaptureMomentActions.fetchLayerOneTopics());
  }, []);

  return (
    <View style={styles.content}>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={Images.partyEmoji}
        resizeMode='contain'
        style={{ width: 120, height: 120 }}
      />
      <Text style={{ marginTop: 32, fontSize: 16, color: '#667080', fontWeight: '400'}}>Feedback successfully logged!</Text>
      <Text style={{ marginTop: 8, fontSize: 32, color: '#667080', fontWeight: '700', textAlign: 'center'}}>Continue adding details?</Text>
      <Text style={{ marginTop: 32, fontSize: 16, color: '#667080', fontWeight: '400', textAlign: 'center'}}>You can always set a reminder if you want to put this off for later.</Text>
      </View>

      <View style={styles.btnContainer}>
        <Button
          mode='outlined'
          onPress={() => onPress()}
          style={[styles.button, { marginBottom: 12 }]}
        >Set Reminder</Button>
         <Button
          mode='contained'
          style={[styles.button]}
        >Continue with Feedback</Button>
      </View>
      <View style={styles.spacer} />
      {/* <BottomSheet
        index={-1}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose
      ><View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red'}}><Text>Hello world</Text></View></BottomSheet> */}
    </View>
  )
}

export default CaptureMomentStep4;