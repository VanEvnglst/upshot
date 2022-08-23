import React, { useState, useEffect, useRef, useMemo} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import BottomSheet from '@gorhom/bottom-sheet';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import CaptureMomentActions from 'app/store/CaptureFeedbackMomentRedux';
import styles from '../styles';


const CaptureMomentStep3 = ({ onPress }) => {
  const dispatch = useDispatch();
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => [ '25%','50%'], []);
  const { height } = Dimensions.get('window');
  const feedbackType = useSelector(state => state.captureMoment.get('step2').data);

  useEffect(() => {
    dispatch(CaptureMomentActions.fetchLayerOneTopics());
  }, []);


  const openSheet = () => {
    bottomSheetRef.current?.snapToIndex(0);
  }

  return (
    <View style={styles.content}>
      <View style={styles.mainQuestionHeader}>
      <Text style={styles.mainQuestionText}>Add topic details to your</Text>
      <View style={styles.typeContainer}>
        <Text style={styles.typeText}>{feedbackType.title}</Text>
      </View>
      <Text style={styles.mainQuestionText}>feedback</Text>
      </View>
      <View style={{ marginTop: 25}}>
      <Text style={styles.descriptionText}>Tell us what kind of observation do you want to give to your direct report</Text>
      </View>
      <View style={styles.topicContainer}>
        <Text style={[styles.toText, { marginBottom: 4, }]}>Topic</Text>
        <TouchableOpacity 
          onPress={() => onPress()}
        style={styles.topicPicker}>
          <Text style={styles.topicLabel}>{`*Others (Please specify)`}</Text>
          <Icon
            name='chevron-down-outline'
            style={{flex: 1, color: '#667080'}}
            size={24}
          />
        </TouchableOpacity>
        <View style={[styles.topicPicker, { marginTop: 12}]}>
          <Text style={styles.topicLabel}>{`Write your own details*`}</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button
          mode='contained'
          style={[styles.button]}
        >Continue</Button>
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

export default CaptureMomentStep3;