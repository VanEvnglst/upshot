import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  BackHandler,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import BottomSheet from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/Ionicons';
import CaptureMomentActions from 'app/store/CaptureFeedbackMomentRedux';
import Images from 'app/assets/images';
import styles from './styles';
import CatchAttentionEntry from './catch-attention';
import ImpactBehaviorEntry from './impact-behavior';
import ContinueEntry from './continue-more';
import DoLessEntry from './do-less';
import StopDoingEntry from './stop-doing';
import AddMoreEntry from './add-more';
import ReviewFeedbackEntry from './review-entry';
import FlashMessage, { showMessage } from 'react-native-flash-message';

const RecordFeedbackEntry = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const activeStep = useSelector(state => state.captureMoment.get('entryActiveStep'));
  const maxStep = useSelector(state => state.captureMoment.get('entryMaxStep'));
  const staffName = useSelector(state => state.captureMoment.get('data'));
  const feedbackType = useSelector(
    state => state.captureMoment.get('data'),
  );
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);
  const layerTwo = useSelector(state => state.captureMoment.get('data').step3);
  
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
    if (layerTwo.selectedLayerTwo.requires_face_to_face)
      dispatch(CaptureMomentActions.setCaptureMaxStep(7));
  }, []);

  const handleGoBack = () => {
    if (activeStep === 1) navigation.goBack();
    else dispatch(CaptureMomentActions.setEntryActiveStep(activeStep - 1));
  };
  const EntryQuestion2 = () => {

  }
  const handleContinue = () => {
   navigation.navigate('Review Entry')
  }

  const handleStepContent = () => {
    if(maxStep === 7) {
      switch(activeStep) {
        case 1:
          return <CatchAttentionEntry {...props}/>
        case 2:
          return <ImpactBehaviorEntry {...props}/>
        case 3:
          return <ContinueEntry {...props}/>
        case 4:
          return <DoLessEntry {...props}/>
        case 5:
          return <StopDoingEntry {...props} />
        case 6:
          return <AddMoreEntry {...props}/>
        case 7:
          return <ReviewFeedbackEntry {...props}/>
      }
    } else 
    switch(activeStep) {
      case 1:
        return <CatchAttentionEntry {...props}/>
      case 2:
        return <ImpactBehaviorEntry {...props}/>
      case 3:
        return <ContinueEntry {...props}/>
      case 4:
        return <DoLessEntry {...props}/>
      case 5:
        return <AddMoreEntry {...props}/>
      case 6:
        return <ReviewFeedbackEntry {...props}/>
    }
  }

  const handleSave = () => { 
    dispatch(CaptureMomentActions.postEditEMEntry('saving'));
    showMessage({
      message: "Feedback entry saved!",
      //type: "success",
      backgroundColor: "#3AB549", // background color
      color: "#FFFFFF", // text color
      icon: props => <Image source={Images.checkmarkEmoji} {...props} />,
    })
    bottomSheetRef.current?.close();
  }

  

  const openSheet = () => { 
    bottomSheetRef.current?.snapToIndex(1);
    return <handleSheetContent />
  }

  const handleSheetContent = () => { 
    return (
      <>
        <View style={{marginTop: 24, marginHorizontal: 25.5}}>
          <View style={{alignItems: 'center', justifyContent: 'center', minWidth: 327}}>
            <Text style={{lineHeight: 30, fontWeight: '700', fontSize: 24}}>Save Progress?</Text>
            <Text style={{lineHeight: 22, fontWeight: '400', fontSize: 16, textAlign: 'center', marginTop: 12}}>If you discard now, you will lose any progress you made.</Text>
          </View>
          <View>
            <TouchableOpacity style={{ borderWidth: 2, borderColor: '#667080', minWidth: 332, height: 48, borderRadius: 6, justifyContent: 'center', alignItems: 'center', marginTop: 32, flexDirection: 'row' }}
              onPress={() => handleSave() }>
              <Icon name="save-outline" size={18} style={{color: "#667080"}} />
              <Text style={{marginLeft: 5, lineHeight: 22, fontWeight: '700', fontSize: 16, color: "#667080"}}>Save draft</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth: 2, borderColor: '#667080', minWidth: 332, height: 48, borderRadius: 6, justifyContent: 'center', alignItems: 'center', marginTop: 10, flexDirection: 'row' }}
            onPress={() => navigation.navigate('Home')}>
              <Icon name="trash-outline" size={18} style={{color: "#667080"}}/>
              <Text style={{marginLeft: 5, lineHeight: 22, fontWeight: '700', fontSize: 16, color: "#667080"}}>Discard draft</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ minWidth: 332, height: 48, borderRadius: 6, justifyContent: 'center', alignItems: 'center', marginTop: 10, backgroundColor: "#667080" }}
            onPress={() => bottomSheetRef.current?.close()}>
              <Text style={{color: '#FFFFFF', lineHeight: 22, fontWeight: '700', fontSize: 16}}>Keep editing</Text>
            </TouchableOpacity>
          </View>
      </View>
      </>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {activeStep === maxStep ? 
        <>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', borderBottomWidth: 1, borderBottomColor: "#B1B5C3", paddingBottom: 20}}>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => handleGoBack()}
          style={{paddingLeft: 24, color: '#667080'}}>
          <Icon name="chevron-back-outline" size={24} />
        </TouchableOpacity>
        <View>
              <Text style={{fontSize: 24, lineHeight: 30, fontWeight: '700', color: '#667080', paddingTop: 20}}>Review Details</Text>
              <Text style={styles.selectedName}>Are these feedback details correct?</Text>
            </View>
            </View>
        </>
      :
        <>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => handleGoBack()}
          style={styles.icon}>
          <Icon name="chevron-back-outline" size={24} />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>{feedbackType.step2.title} Feedback</Text>
        </View>
      
        <View style={styles.headerSave}>
          <TouchableOpacity
          acccessibilityRole='button'
        onPress={() => openSheet()}> 
            <Text style={styles.saveText}>Cancel</Text>
            </TouchableOpacity>
          </View>
          
      </View>
      <View style={styles.stepsContainer}>
        {Array.apply(null, { length: maxStep }).map((item, i) => (
          <View
            key={i}
            style={
              i + 1 <= activeStep ? styles.activeStep : styles.inactiveStep
            }
          />
        ))}
          </View>
          </>
      }
      <View style={styles.contentContainer}>
      {activeStep !== maxStep && <View style={styles.selectedNameContainer}>
          <View style={styles.selectedAvatar} />
          <Text style={styles.selectedName}>{staffName.step1.name}</Text>
        </View>}
        {handleStepContent()}
      </View> 
      <FlashMessage position="top" />
      <BottomSheet
        index={-1}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose>
        <View style={{ flex: 1 }}>{handleSheetContent()}</View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default RecordFeedbackEntry;

RecordFeedbackEntry.propTypes = {};

RecordFeedbackEntry.defaultProps = {};

