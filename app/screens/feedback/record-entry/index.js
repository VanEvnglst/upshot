import React, { useEffect, useRef, useMemo } from 'react';
import {
  View,
  SafeAreaView,
  BackHandler,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import BottomSheet from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, StoryProgress } from 'app/components';
import RecordEntryActions from 'app/store/feedback/RecordEntryRedux';
import CatchAttentionEntry from './catch-attention';
import ImpactBehaviorEntry from './impact-behavior';
import ContinueEntry from './continue-more';
import DoLessEntry from './do-less';
import StopDoingEntry from './stop-doing';
import AddMoreEntry from './add-more';
import ReviewFeedbackEntry from './review-entry';
import { getRecordEntryActiveStep, getRecordEntryMaxStep,getCurrentJourney } from 'app/store/selectors';
import Images from 'app/assets/images';
import styles from './styles';


const RecordFeedbackEntry = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const activeStep = useSelector(getRecordEntryActiveStep);
  const maxStep = useSelector(getRecordEntryMaxStep);
  const journey = useSelector(getCurrentJourney);
  const feedbackType = useSelector(
    state => state.captureMoment.get('data'),
  );
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);
  // const layerTwo = useSelector(state => state.captureMoment.get('data').step3);
  
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
    if (feedbackType.step2.title === 'Corrective') {
      dispatch(RecordEntryActions.setEntryMaxStep(7))
    } else { 
      dispatch(RecordEntryActions.setEntryMaxStep(6))
    };
  }, []);

  console.log('feedback type', feedbackType.step2.title + ", " + maxStep)

  const handleGoBack = () => {
    if (activeStep === 1) navigation.goBack();
    else dispatch(RecordEntryActions.setEntryActiveStep(activeStep - 1));
  };

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
    dispatch(RecordEntryActions.postEditEntry());
    showMessage({
      message: "Feedback entry saved!",
      //type: "success",
      backgroundColor: "#3AB549", // background color
      color: "#FFFFFF", // text color
      icon: () => <Image source={Images.checkmarkEmoji}/>,
    })
    bottomSheetRef.current?.close();
  }

  const handleDiscard = () => {
    dispatch(RecordEntryActions.resetEntryStep())
    bottomSheetRef.current?.close();
    navigation.navigate('Home')
  }

  const openSheet = () => { 
    bottomSheetRef.current?.snapToIndex(1);
  }

  const BottomSheetContent = () => { 
    return (
        <View style={styles.bottomSheetContainer}>
          <View style={{alignItems: 'center', justifyContent: 'center', minWidth: 327}}>
            <Text 
              type='body1' 
              weight='bold'
              style={styles.bottomSheetHeaderText}
            >Save Progress?</Text>
            <Text 
              type='body2' 
              weight='regular' 
              style={styles.bottomSheetDescriptionText}
            >If you discard now, you will lose any progress you made.</Text>
          </View>
          <View>
            <TouchableOpacity
              accessibilityRole='button'
              onPress={() => handleSave()}
              style={[styles.bottomSheetOption, { marginTop: 32 }]}
              >
              <Icon 
                name="save-outline" 
                size={18} 
                style={{color: "#667080"}} 
              />
              <Text 
                type='body2' 
                weight='bold'
                style={styles.optionText}>Save draft</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            accessibilityRole='button'
            onPress={() => handleDiscard()}
            style={[styles.bottomSheetOption, { marginTop: 10 }]}
            >
              <Icon 
                name="trash-outline" 
                size={18} 
                style={{color: "#667080"}}
              />
              <Text 
                type='body2'
                weight='bold'
                style={styles.optionText}>Discard draft</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            accessibilityRole='button'
            onPress={() => bottomSheetRef.current?.close()}
            style={[ styles.bottomSheetOption, { marginTop: 10 }]}
            >
              <Text 
                type='body2'
                weight='bold'
                style={styles.optionText}>Keep editing</Text>
            </TouchableOpacity>
          </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {activeStep === maxStep ? 
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', borderBottomWidth: 1, borderBottomColor: "#B1B5C3", paddingBottom: 20}}>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => handleGoBack()}
          style={{paddingLeft: 24, color: '#667080'}}>
          <Icon name="chevron-back-outline" size={24} />
        </TouchableOpacity>
        <View>
              <Text 
                type='body1' 
                weight='bold' 
                style={{color: '#667080', paddingTop: 20}}>Review Details</Text>
              <Text style={styles.selectedName}>Are these feedback details correct?</Text>
            </View>
            </View>
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
          <Text type='body2' weight='bold' style={styles.headerText}>{feedbackType.step2.title} Feedback</Text>
        </View>
      
        <View style={styles.headerSave}>
          <TouchableOpacity
          acccessibilityRole='button'
        onPress={() => openSheet()}> 
            <Text type='body2' weight='regular' style={styles.saveText}>Cancel</Text>
            </TouchableOpacity>
          </View>
          
      </View>
      <View style={styles.stepsContainer}>
        <StoryProgress
          length={maxStep}
          activeStep={activeStep}
          type={'light'}
        />
          </View>
          </>
      }
      <View style={styles.contentContainer}>
      {activeStep !== maxStep && <View style={styles.selectedNameContainer}>
          <View style={styles.selectedAvatar} />
          <Text style={styles.selectedName}>{journey.frontliner}</Text>
        </View>}
        {handleStepContent()}
      </View> 
      <FlashMessage position="top" />
      <BottomSheet
        index={-1}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose>
        <View style={{ flex: 1 }}>
          <BottomSheetContent />
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default RecordFeedbackEntry;

RecordFeedbackEntry.propTypes = {
  navigation: PropTypes.object,
  getRecordEntryActiveStep: PropTypes.number,
  getRecordEntryMaxStep: PropTypes.number,
  getCurrentJourney: PropTypes.object,
  setEntryMaxStep: PropTypes.func,
  setEntryActiveStep: PropTypes.func,
  postEditEntry: PropTypes.func,
  resetEntryStep: PropTypes.func,

};

RecordFeedbackEntry.defaultProps = {
  navigation: {},
  getRecordEntryActiveStep: 1,
  getRecordEntryMaxStep: 6,
  getCurrentJourney: {},
  setEntryActiveStep: () => {},
  setEntryMaxStep: () => {},
  postEditEntry: () => {},
  resetEntryStep: () => {},
};

