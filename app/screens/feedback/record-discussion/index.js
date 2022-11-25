import React, { useRef, useMemo, useState, useEffect} from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Modal,
  ImageBackground,
  ScrollView
} from 'react-native';
import {ProgressBar } from "react-native-paper";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Images from 'app/assets/images';
import BottomSheet from "@gorhom/bottom-sheet";
import styles from "./styles";
import { useDispatch, useSelector } from 'react-redux';
import FrontlinerFeedbackActions from 'app/store/frontliner/FLFeedbackRedux';
import { getManagerFeedbackResponse } from 'app/store/selectors';
import { PanGestureHandler, Swipeable } from "react-native-gesture-handler";
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import AudioRecording from "./meeting-discussion";


const RecordDiscussion = props => {
  const { navigation, route } = props;
  const feedbackData = useSelector(getManagerFeedbackResponse);
  const { managerInput, frontlinerInput } = feedbackData;
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['50%'], []);
  const [modalVisible, setModalVisible] = useState(false);
  const [contentDisplay, setContentDisplay] = useState('Discussion Guide');
  const [sheetDisplay, setSheetDisplay] = useState('');
  const [isObservationActive, setIsObservationActive] = useState(false);
  const [isImpactActive, setIsImpactActive] = useState(false);
  const [isContinueActive, setIsContinueActive] = useState(false);
  const [isDoLessActive, setIsDoLessActive] = useState(false);
  const [isStopDoingActive, setIsStopDoingActive] = useState(false);
  const [isAdditionalNotesActive, setIsAdditionalNotesActive] = useState(false);
  const [headerDisplay, setHeaderDisplay] = useState('default');
  const [headerDisplayContent, setHeaderDisplayContent] = useState('');
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  // const onGestureEvent = useAnimatedGestureHandler <PanGestureHandlerGestureEvent, {x, y}> ({
  //   onStart: (_, ctx) => {
  //     ctx.x = x.value;
  //     ctx.y = y.value;
  //   },
  //   onActive: ({ translationX, translationY }) => {
  //     x.value = ctx.x + translationX;
  //     y.value = ctx.y + translationY;
  //   }
  // });

  useEffect(() => {
    async function retrieveData() {
      dispatch(FrontlinerFeedbackActions.fetchManagerFeedbackResponse(route.params.id));
    }
    retrieveData();
  }, []);
  
  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: x.value }, {translateY: y.value},]
  }))

  const handleGuideYes = () => { 
    setModalVisible(true);
  }

  const cardContainer = () => { 
    return (
      <>
        <ImageBackground
          style={{flex: 1, 
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
          blurRadius={modalVisible ? 5 : 0}>
          {/* <PanGestureHandler onGestureEvent={onGestureEvent}> */}

             <Animated.View style={style}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={{ backgroundColor: '#353945', height: 480, width: 316, borderColor: '#777E90', borderWidth: 1, borderRadius: 16 }}>
        <View style={{ marginLeft: 24, marginTop: 32 }}>
                <Image source={Images.thoughtCloudEmoji}
                style={{ height: 104, width: 104 }}></Image>
        
        <View style={{ height: 24, width: 53, borderRadius: 8, backgroundColor: '#9757D7', justifyContent: 'center', alignItems: 'center', marginTop: 32 }}>
          <Text style={{ fontSize: 12, fontWeight: '600', lineHeight: 20, color: '#FCFCFD' }}>Tip #1</Text>
                </View>
                <View style={{ marginRight: 24, marginTop: 14, height: 228, minWidth: 268 }}>
                  <Text style={{ fontSize: 24, fontWeight: '500', lineHeight: 32, color: '#FFFFFF' }}>Ask if they understood the feedback you gave</Text>
                  <Text style={{ fontSize: 14, fontWeight: '400', lineHeight: 24, color: '#B1B5C3', marginTop: 12 }}>Always ask your team member whether they understood the feedback that you gave. If they understand, don't forget to thank them.</Text>
                  </View>
                </View>
          </View>
            </View>
            </Animated.View>
          {/* </PanGestureHandler> */}
          </ImageBackground>
      
   
      </>
    )
  }

  const discussionGuide = () => { 
    return (
      <>
         <View style={styles.detailsContainer}>
        <View style={styles.nameContainer}>
        <View style={styles.avatarIcon}>
                    <LinearGradient
              style={[styles.avatarIcon, {borderColor: '#FFFFFF', borderWidth: 1,}]}
                      colors={['#C883FF', '#6587FF']}
                      start={{ x: 0.2, y: 0 }}
                      end={{ x: 0.7, y: 1 }}>
                      <Text style={styles.avatarTextIcon}>AC</Text>
                    </LinearGradient>
          </View>
          <Text style={styles.nameText}>Andre Castro</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>1-on-1 Discussion</Text>
          <Text style={styles.subtitleText}>Start recording your 1-on-1 with this team member.</Text>
        </View>
      </View>
      <View style={styles.selectionContainer}>

        <Text style={styles.questionText}>Do you need a guide during your feedback discussion?</Text>
        <TouchableOpacity style={[styles.btnContainer, { marginTop: 52 }]}
          // onPress={() => setModalVisible(true)}>
          onPress={() => setContentDisplay('Tip')}>
          <Text style={styles.btnText}>Yes, I need guidance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnContainer, { marginTop: 16 }]}
          onPress={() => openSheet('jot details')}>
          <Text style={styles.btnText}>No need</Text>
          </TouchableOpacity>
          </View>
      </>
    )
  }

  const recordPermission = () => { 
      return (
        <>
           <View style={styles.detailsContainer}>
        <View style={styles.nameContainer}>
        <View style={styles.avatarIcon}>
                    <LinearGradient
              style={[styles.avatarIcon, {borderColor: '#FFFFFF', borderWidth: 1,}]}
                      colors={['#C883FF', '#6587FF']}
                      start={{ x: 0.2, y: 0 }}
                      end={{ x: 0.7, y: 1 }}>
                      <Text style={styles.avatarTextIcon}>AC</Text>
                    </LinearGradient>
          </View>
          <Text style={styles.nameText}>Andre Castro</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>1-on-1 Discussion</Text>
          <Text style={styles.subtitleText}>Start recording your 1-on-1 with this team member.</Text>
        </View>
      </View>
      <View style={styles.selectionContainer}>

          <Text style={styles.questionText}>Do you and your team member want to record the discussion?</Text>
            <TouchableOpacity style={[styles.btnContainer, { marginTop: 52 }]}
              onPress={() => openSheet('record reminder')}>
            <Text style={styles.btnText}>Yes, I will record our discussion</Text>
          </TouchableOpacity>
            <TouchableOpacity style={[styles.btnContainer, { marginTop: 16 }]}
            onPress={() => setContentDisplay('End Discussion')}>
            <Text style={styles.btnText}>No need</Text>
            </TouchableOpacity>
            
            </View>
        </>
      )
  }

  const tipOne = () => { 
    return (
    <>

      <View style={{ justifyContent: 'center', alignItems: 'center'}}>
     
        <View style={{ marginLeft: 24, marginTop: 83 }}>
                <Image source={Images.thoughtCloudEmoji}
                style={{ height: 104, width: 104 }}></Image>
        
        <View style={{ height: 24, width: 53, borderRadius: 8, backgroundColor: '#9757D7', justifyContent: 'center', alignItems: 'center', marginTop: 32 }}>
          <Text style={{ fontSize: 12, fontWeight: '600', lineHeight: 20, color: '#FCFCFD' }}>Tip #1</Text>
                </View>
                <View style={{ marginRight: 24, marginTop: 14, height: 228, minWidth: 268 }}>
                  <Text style={{ fontSize: 24, fontWeight: '500', lineHeight: 32, color: '#FFFFFF' }}>Ask if they understood the feedback you gave</Text>
                  <Text style={{ fontSize: 14, fontWeight: '400', lineHeight: 24, color: '#B1B5C3', marginTop: 12 }}>Always ask your team member whether they understood the feedback that you gave. If they understand, don't forget to thank them.</Text>
                  </View>
          </View>
          </View>
          <View style={{flex: 1, marginTop: 40, borderColor: '#777E904D', borderTopWidth: 1}}>
          <TouchableOpacity style={{ marginHorizontal: 12, marginTop: 16, height: 48, borderRadius: 12, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}
            onPress={() => setContentDisplay('Tip2')}>
              <Text>Next →</Text>
            </TouchableOpacity>
          </View>
 
      </>
    )
  }
  const tipTwo = () => { 
    return (
    <>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
     
        <View style={{ marginLeft: 24, marginTop: 83 }}>
                <Image source={Images.questionMarkEmoji}
                style={{ height: 104, width: 104 }}></Image>
        
        <View style={{ height: 24, width: 53, borderRadius: 8, backgroundColor: '#9757D7', justifyContent: 'center', alignItems: 'center', marginTop: 32 }}>
          <Text style={{ fontSize: 12, fontWeight: '600', lineHeight: 20, color: '#FCFCFD' }}>Tip #2</Text>
                </View>
                <View style={{ marginRight: 24, marginTop: 14, height: 228, minWidth: 268 }}>
                  <Text style={{ fontSize: 24, fontWeight: '500', lineHeight: 32, color: '#FFFFFF' }}>If they have questions...</Text>
                  <Text style={{ fontSize: 14, fontWeight: '400', lineHeight: 24, color: '#B1B5C3', marginTop: 12 }}>{"1. Listen intently without interrupting\n2. Repeat what you heard to make sure you understood it correctly and answer the question"}</Text>
                  </View>
          </View>
          </View>
          <View style={{flex: 1, marginTop: 40, borderColor: '#777E904D', borderTopWidth: 1}}>
        <TouchableOpacity style={{ marginHorizontal: 12, marginTop: 16, height: 48, borderRadius: 12, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}
          onPress={() => setContentDisplay('Feedback Summary')}>
              <Text>Next →</Text>
            </TouchableOpacity>
          </View>

      </>
    )
  }

  const feedbackSummary = () => { 
    return (
      <>
        <ScrollView>
          <View style={{ marginTop: 25.5, marginHorizontal: 24 }}>
            <View style={{ borderBottomColor: '#777E904D', borderBottomWidth: 1}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.avatarIcon}>
                    <LinearGradient
              style={[styles.avatarIcon, {borderColor: '#FFFFFF', borderWidth: 1,}]}
                      colors={['#C883FF', '#6587FF']}
                      start={{ x: 0.2, y: 0 }}
                      end={{ x: 0.7, y: 1 }}>
                      <Text style={styles.avatarTextIcon}>AC</Text>
                    </LinearGradient>
          </View>
          <Text style={styles.nameText}>Andre Castro</Text>
            </View>
            <View style={{ marginTop: 12}} >
            <Text style={{ fontSize: 24, fontWeight: '500', lineHeight: 32, color: '#FFFFFF' }}>Review your feedback</Text>
              <Text style={{ marginTop: 2, fontSize: 14, fontWeight: '400', lineHeight: 24, color: '#B1B5C3', marginBottom: 16 }}>This is the feedback that you sent to your team member. View them before continuing.</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 28, alignItems: 'center' }}>
              <Icon name={'document-text-outline'} size={18} color={'#777E90'} />
              <Text style={{marginLeft: 5, fontSize: 16, fontWeight: '700', lineHeight: 24, color: '#FFFFFF'}}>Feedback Details</Text>
            </View>

            <View style={{ marginTop: 24 }}>
              <Text style={{ fontSize: 12, fontWeight: '700', lineHeight: 12, color: '#B1B5C3' }}>Type</Text>
              <View style={{ marginTop: 12, height: 48, borderRadius: 12, justifyContent: 'center', borderColor: '#353945', borderWidth: 2}}>
              <Text style={{ marginLeft: 16, fontSize: 14, fontWeight: '500', lineHeight: 24, color: '#FCFCFD'}}>Corrective Feedback</Text>
              </View>
            </View>

            <View style={{ marginTop: 24 }}>
              <Text style={{ fontSize: 12, fontWeight: '700', lineHeight: 12, color: '#B1B5C3' }}>Topic</Text>
              <View style={{ marginTop: 12, height: 48, borderRadius: 12, justifyContent: 'center', borderColor: '#353945', borderWidth: 2}}>
              <Text style={{ marginLeft: 16, fontSize: 14, fontWeight: '500', lineHeight: 24, color: '#FCFCFD'}}>Attitude</Text>
              </View>
              <View style={{ marginTop: 12, height: 48, borderRadius: 12, justifyContent: 'center', borderColor: '#353945', borderWidth: 2}}>
              <Text style={{ marginLeft: 16, fontSize: 14, fontWeight: '500', lineHeight: 24, color: '#FCFCFD'}}>Poor Greetings</Text>
              </View>
            </View>

             <View style={styles.cardContainer}>
          <Animated.View style={styles.card}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              onPress={() => setIsObservationActive(!isObservationActive)}>
              <View style={styles.cardHeader}>
                <View
                  style={[
                    styles.cardStatus,
                    // frontlinerInput.event_clarification === ''
                    //   ? styles.disabledCardStatus
                    //   : styles.enabledCardStatus,
                  ]}>
                  <Icon
                    name={
                      // frontlinerInput.event_clarification === ''
                        // ? 'close-outline'
                          //:
                          'checkmark-outline'
                    }
                    size={16}
                    style={{ color: '#353945' }}
                  />
                </View>
                <Text
                  style={[
                    styles.cardTitleText,
                    // frontlinerInput.event_clarification === '' &&
                    //   styles.disabledCardTitleText,
                  ]}>
                  observation
                </Text>
                <Icon
                  name={
                    isObservationActive
                      ? 'chevron-up-outline'
                      : 'chevron-down-outline'
                  }
                  style={{ color: '#B1B5C3' }}
                  size={24}
                />
              </View>
            </TouchableWithoutFeedback>
            {isObservationActive && (
              <View style={styles.inputContainer}>
                {/* {frontlinerInput.event_clarification === '' ? (
                  <Text style={styles.noneProvidedText}>None provided</Text>
                ) : ( */}
                  <>
                    <Text style={styles.managerInputText}>
                      What you wrote...
                    </Text>
                    <Text style={styles.managerInputContent}>
                     testing {/* {frontlinerInput.event_clarification} */}
                    </Text>
                    <View style={styles.clarificationContainer}>
                      <Text style={styles.managerInputText}>
                        Your manager replied...
                      </Text>
                      <Text style={styles.managerInputContent}>
                        {/* {managerInput.event_clarification === ''
                          ? 'None provided.'
                          : managerInput.event_clarification} */}
                      </Text>
                    </View>
                  </>
                {/* )} */}
              </View>
            )}
              </Animated.View>

              <View style={styles.card}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              onPress={() => setIsImpactActive(!isImpactActive)}
              style={styles.card}>
              <View style={styles.cardHeader}>
                <View
                  style={[
                    styles.cardStatus,
                    // frontlinerInput.impact_clarification === ''
                    //   ? styles.disabledCardStatus
                    //   : styles.enabledCardStatus,
                  ]}>
                  <Icon
                    name={
                      // frontlinerInput.impact_clarification === ''
                      //   ? 'close-outline'
                          //   : 
                          'checkmark-outline'
                    }
                    size={16}
                    style={{ color: '#353945' }}
                  />
                </View>
                <Text
                  style={[
                    styles.cardTitleText,
                    // frontlinerInput.impact_clarification === '' && styles.disabledCardTitleText,
                  ]}>
                  impact of the behavior
                </Text>
                <Icon
                  name={
                    isImpactActive
                      ? 'chevron-up-outline'
                      : 'chevron-down-outline'
                  }
                  style={{ color: '#B1B5C3' }}
                  size={24}
                />
              </View>
            </TouchableWithoutFeedback>
            {isImpactActive && (
              <View style={styles.inputContainer}>
                {/* {frontlinerInput.impact_clarification === '' ? ( */}
                  <Text style={styles.noneProvidedText}>None provided</Text>
                {/* ) : ( */}
                  <>
                    <Text style={styles.managerInputText}>
                      What you asked...
                    </Text>
                    <Text style={styles.managerInputContent}>
                      {/* {frontlinerInput.impact_clarification} */}
                    </Text>
                    <View style={styles.clarificationContainer}>
                      <Text style={styles.managerInputText}>
                        Your manager replied...
                      </Text>
                      <Text style={styles.managerInputContent}>
                        {/* {managerInput.impact_clarification === ''
                          ? 'None provided.'
                          : managerInput.impact_clarification} */}
                      </Text>
                    </View>
                  </>
                {/* )} */}
              </View>
            )}
              </View>

              <View style={styles.card}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              onPress={() => setIsContinueActive(!isContinueActive)}
              style={styles.card}>
              <View style={styles.cardHeader}>
                <View
                  style={[
                    styles.cardStatus,
                    // frontlinerInput.continue_clarification === ''
                    //   ? styles.disabledCardStatus
                    //   : styles.enabledCardStatus,
                  ]}>
                  <Icon
                    name={
                      // frontlinerInput.continue_clarification === ''
                      //   ? 'close-outline'
                          //   : 
                          'checkmark-outline'
                    }
                    size={16}
                    style={{ color: '#353945' }}
                  />
                </View>
                <Text
                  style={[
                    styles.cardTitleText,
                    // frontlinerInput.continue_clarification === '' && styles.disabledCardTitleText,
                  ]}>
                  Items to continue and do more of
                </Text>
                <Icon
                  name={
                    isContinueActive
                      ? 'chevron-up-outline'
                      : 'chevron-down-outline'
                  }
                  style={{ color: '#B1B5C3' }}
                  size={24}
                />
              </View>
            </TouchableWithoutFeedback>
            {isContinueActive && (
              <View style={styles.inputContainer}>
                {/* {frontlinerInput.continue_clarification === '' ? ( */}
                  <Text style={styles.noneProvidedText}>None provided</Text>
                 {/* ) : ( */}
                  <>
                    <Text style={styles.managerInputText}>
                      Clarification you needed...
                    </Text>
                    <Text style={styles.managerInputContent}>
                      {/* {frontlinerInput.continue_clarification} */}
                    </Text>
                    <View style={styles.clarificationContainer}>
                      <Text style={styles.managerInputText}>
                        Your manager replied...
                      </Text>
                      <Text style={styles.managerInputContent}>
                        {/* {managerInput.continue_clarification === ''
                          ? 'None provided.'
                          : managerInput.continue_clarification} */}
                      </Text>
                    </View>
                  </>
                {/* )} */}
              </View>
            )}
              </View>
              
              <View style={styles.card}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              onPress={() => setIsDoLessActive(!isDoLessActive)}
              style={styles.card}>
              <View style={styles.cardHeader}>
                <View
                  style={[
                    styles.cardStatus,
                    // frontlinerInput.do_less_clarification === ''
                    //   ? styles.disabledCardStatus
                    //   : styles.enabledCardStatus,
                  ]}>
                  <Icon
                    name={
                      // frontlinerInput.do_less_clarification === ''
                      //   ? 'close-outline'
                          //   : 
                          'checkmark-outline'
                    }
                    size={16}
                    style={{ color: '#353945' }}
                  />
                </View>
                <Text
                  style={[
                    styles.cardTitleText,
                    // frontlinerInput.do_less_clarification === '' && styles.disabledCardTitleText,
                  ]}>
                  Items to do less of...
                </Text>
                <Icon
                  name={
                    isDoLessActive
                      ? 'chevron-up-outline'
                      : 'chevron-down-outline'
                  }
                  style={{ color: '#B1B5C3' }}
                  size={24}
                />
              </View>
            </TouchableWithoutFeedback>
            {isDoLessActive && (
              <View style={styles.inputContainer}>
                {/* {frontlinerInput.do_less_clarification === '' ? ( */}
                  <Text style={styles.noneProvidedText}>None provided</Text>
                {/* ) : ( */}
                  <>
                    <Text style={styles.managerInputText}>
                      Clarification you needed...
                    </Text>
                    <Text style={styles.managerInputContent}>
                      {/* {frontlinerInput.do_less_clarification} */}
                    </Text>
                    <View style={styles.clarificationContainer}>
                      <Text style={styles.managerInputText}>
                        Your manager replied...
                      </Text>
                      <Text style={styles.managerInputContent}>
                        {/* {managerInput.do_less_clarification === ''
                          ? 'None provided.'
                          : managerInput.do_less_clarification} */}
                      </Text>
                    </View>
                  </>
                {/* )} */}
              </View>
            )}
              </View>
              
              <View style={styles.card}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              onPress={() => setIsStopDoingActive(!isStopDoingActive)}
              style={styles.card}>
              <View style={styles.cardHeader}>
                <View
                  style={[
                    styles.cardStatus,
                    // frontlinerInput.stop_doing_clarification === ''
                    //   ? styles.disabledCardStatus
                    //   : styles.enabledCardStatus,
                  ]}>
                  <Icon
                    name={
                      // frontlinerInput.stop_doing_clarification === ''
                      //   ? 'close-outline'
                          //   : 
                          'checkmark-outline'
                    }
                    size={16}
                    style={{ color: '#353945' }}
                  />
                </View>
                <Text
                  style={[
                    styles.cardTitleText,
                    // frontlinerInput.stop_doing_clarification === '' &&
                    //   styles.disabledCardTitleText,
                  ]}>
                  Items to stop doing
                </Text>
                <Icon
                  name={
                    isStopDoingActive
                      ? 'chevron-up-outline'
                      : 'chevron-down-outline'
                  }
                  style={{ color: '#B1B5C3' }}
                  size={24}
                />
              </View>
            </TouchableWithoutFeedback>
            {isStopDoingActive && (
              <View style={styles.inputContainer}>
                {/* {frontlinerInput.stop_doing_clarification === '' ? ( */}
                  <Text style={styles.noneProvidedText}>None provided</Text>
                {/* ) : ( */}
                  <>
                    <Text style={styles.managerInputText}>
                      Clarification you needed...
                    </Text>
                    <Text style={styles.managerInputContent}>
                      {/* {frontlinerInput.stop_doing_clarification} */}
                    </Text>
                    <View style={styles.clarificationContainer}>
                      <Text style={styles.managerInputText}>
                        Your manager replied...
                      </Text>
                      <Text style={styles.managerInputContent}>
                        {/* {managerInput.stop_doing_clarification === ''
                          ? 'None provided.'
                          : managerInput.stop_doing_clarification} */}
                      </Text>
                    </View>
                  </>
                {/* )} */}
              </View>
            )}
              </View>
              
              <View style={styles.card}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              onPress={() =>
                setIsAdditionalNotesActive(!isAdditionalNotesActive)
              }
              style={styles.card}>
              <View style={styles.cardHeader}>
                <View
                  style={[
                    styles.cardStatus,
                    // frontlinerInput.additional_clarification === ''
                    //   ? styles.disabledCardStatus
                    //   : styles.enabledCardStatus,
                  ]}>
                  <Icon
                    name={
                      // frontlinerInput.additional_clarification === ''
                      //   ? 'close-outline'
                          //   : 
                          'checkmark-outline'
                    }
                    size={16}
                    style={{ color: '#353945' }}
                  />
                </View>
                <Text
                  style={[
                    styles.cardTitleText,
                    // frontlinerInput.additional_clarification === '' &&
                    //   styles.disabledCardTitleText,
                  ]}>
                  others
                </Text>
                <Icon
                  name={
                    isAdditionalNotesActive
                      ? 'chevron-up-outline'
                      : 'chevron-down-outline'
                  }
                  style={{ color: '#B1B5C3' }}
                  size={24}
                />
              </View>
            </TouchableWithoutFeedback>
            {isAdditionalNotesActive && (
              <View style={styles.inputContainer}>
                {/* {frontlinerInput.additional_clarification === '' ? ( */}
                  <Text style={styles.noneProvidedText}>None provided</Text>
                {/* ) : ( */}
                  <>
                    <Text style={styles.managerInputText}>
                      What you asked...
                    </Text>
                    <Text style={styles.managerInputContent}>
                      {/* {frontlinerInput.additional_clarification} */}
                    </Text>
                    <View style={styles.clarificationContainer}>
                      <Text style={styles.managerInputText}>
                        Your manager replied...
                      </Text>
                      <Text style={styles.managerInputContent}>
                        {/* {managerInput.additional_clarification === ''
                          ? 'None provided.'
                          : managerInput.additional_clarification} */}
                      </Text>
                    </View>
                  </>
                {/* )} */}
              </View>
            )}
          </View>
              
            </View> 
            </View>
      
        <View style={{flex: 1, marginVertical: 40, borderColor: '#777E904D', borderTopWidth: 1}}>
        <TouchableOpacity style={{ marginHorizontal: 12, marginTop: 16, height: 48, borderRadius: 12, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}
          onPress={() => setContentDisplay('Record')}>
              <Text>Next →</Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
      </>
    )
  }

  const endDiscussion = () => { 
    return (
      <>
        <View style={styles.endDiscussionContainer}>
          <View style={styles.imageContainer}>
            <Image source={Images.thoughtsIcon}
              style={styles.imageStyle} />
          </View>
          <View style={styles.screenTextContainer}>
            <Text style={styles.screenTitleText}>Are you done with your 1-on-1 discussion?</Text>
          <View style={styles.screenSubtitleContainer}>
              <Text style={[styles.screenSubtitleText, {fontWeight: '400'}]}>By ending this meeting, you confirm that you have completed your discussion with 
                <Text style={[styles.screenSubtitleText, {fontWeight: '700'}]}> Andre Castro.</Text> </Text>
            </View>
            </View>
          <View style={styles.endDiscussionBtnContainer}>
            <TouchableOpacity style={[styles.endDiscussionBtn, { borderRadius: 90, backgroundColor: '#EF466F'}]}>
              <Text style={styles.endDiscussionBtnText}>End Meeting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.endDiscussionBtn, {marginTop: 16}]}>
              <Text style={styles.endDiscussionBtnText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }

  const handleContentDisplay = () => { 
    switch (contentDisplay) { 
      case 'Discussion Guide':
        return discussionGuide();
      case 'Tip':
        return tipOne();
      case 'Tip2':
        return tipTwo();
      case 'Feedback Summary':
        return feedbackSummary();
      case 'Record':
        return recordPermission();
      case 'Audio Recording':
        bottomSheetRef.current?.close()
        return <AudioRecording/>;
      case 'End Discussion':
        return endDiscussion();
    }
  }

  const handleBottomSheetAction = () => { 
    setContentDisplay('Record');
    bottomSheetRef.current?.close()
  }

  const jotDownDetailsSheet = () => { 
    return (
      <>
        <View style={styles.bottomSheetContainer}>
          <Image source={Images.memoIcon}
            style={styles.bottomSheetImage} />
          <View style={styles.bottomSheetTextContainer}>
          <Text style={styles.bottomSheetTitle}>Jot down details</Text>
            <Text style={styles.bottomSheetSubtitle}>Please don't forget to write down the details of your discussion after your meeting. This will help you later. </Text>
          </View>
          <View style={styles.bottomSheetBtnContainer}>
            <TouchableOpacity style={styles.bottomSheetBtn}
              onPress={() => handleBottomSheetAction()}>
              <Text style={styles.bottomSheetBtnText}>Alright!</Text>
            </TouchableOpacity>
          </View>
          </View>

      </>
    )
  }

  const recordReminderSheet = () => { 
    return (
      <>
        <View style={styles.bottomSheetContainer}>
          <Image source={Images.warningEmoji}
            style={styles.bottomSheetImage} />
          <View style={styles.bottomSheetTextContainer}>
          <Text style={styles.bottomSheetTitle}>Before you proceed...</Text>
            <Text style={styles.bottomSheetSubtitle}>Ensure that you have asked permission to record from your team member. 😊 </Text>
          </View>
          <View style={styles.bottomSheetBtnContainer}>
            <TouchableOpacity style={styles.bottomSheetBtn}
              onPress={() => handleRecordingDisplay()}>
              <Text style={styles.bottomSheetBtnText}>I got permission</Text>
            </TouchableOpacity>
          </View>
          </View>

      </>
    )
  }

  const handleRecordingDisplay = () => { 
    setContentDisplay('Audio Recording');
    setHeaderDisplay('start recording');
  }

  const openSheet = type => { 
    switch (type) { 
      case 'jot details':
        setSheetDisplay(type);
      case 'record reminder':
        setSheetDisplay(type);
    }
    bottomSheetRef.current?.snapToIndex(0);
  }
  const handleSheetContent = () => { 
    if (sheetDisplay === 'jot details') {
      return jotDownDetailsSheet();
    } else if (sheetDisplay === 'record reminder') { 
      return recordReminderSheet();
    }
  }

  const handleHeaderDisplay = () => { 
    if (headerDisplay === 'start recording') {
      return recordingHeader();
    } else { 
      return defaultHeader();
    }

  }

  const defaultHeader = () => { 
    return (
      <>
        <View style={styles.headerContainer}>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => { }}
          style={styles.icon}>
          <Icon name="chevron-back-outline" size={24} color='#FFFFFF' />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Schedule Discussion</Text>
        </View>
      
        <View style={styles.headerCancel}>
          <TouchableOpacity
          acccessibilityRole='button'
        onPress={() => navigation.navigate('Home')}> 
            <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.progressBarContainer}>
      <ProgressBar
          style={styles.progressBar}
          progress={25 / 100}
          color={'#FFFFFF'}/>
      </View>
      </>
    )
  }

  const recordingHeader = () => { 
    return (
      <>
        <View style={styles.headerContainer}>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => { }}
          style={styles.icon}>
          <Icon name="chevron-back-outline" size={24} color='#FFFFFF' />
          </TouchableOpacity>
          {headerDisplayContent === 'recording' ?
            <>
        <View style={styles.headerTextContainer}>
            <View style={{ height: 8, width: 8, borderRadius: 8, backgroundColor: '#EF466F', marginRight: 4 }}></View>
            <Text style={styles.headerText}>Recording</Text>
        </View>
      
        <View style={styles.headerCancel}>
          <TouchableOpacity
              acccessibilityRole='button'
              style={{height: 30, width: 68, borderRadius: 90 ,backgroundColor: '#6200EE', justifyContent: 'center', alignItems: 'center'}}
        > 
            <Text style={styles.cancelText}>Done</Text>
            </TouchableOpacity>
            </View>
            </>
            : headerDisplayContent === 'pause' ?
            <>
            <View style={styles.headerTextContainer}>
            <View style={{ height: 8, width: 8, borderRadius: 8, backgroundColor: '#777E90', marginRight: 4 }}></View>
            <Text style={styles.headerText}>Paused</Text>
        </View>
      
        <View style={styles.headerCancel}>
          <TouchableOpacity
              acccessibilityRole='button'
              style={{height: 30, width: 68, borderRadius: 90 ,backgroundColor: '#6200EE', justifyContent: 'center', alignItems: 'center'}}
        > 
            <Text style={styles.cancelText}>Done</Text>
            </TouchableOpacity>
                </View></>
              :
              <></>
        }
      </View>
        <View style={{margin: 16, height: 10, borderBottomWidth: 1, borderBottomColor: '#777E904D'}}>
      
      </View>
      </>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
     
      { handleHeaderDisplay()} 
      
     
        {handleContentDisplay()}
        
        <Modal
            visible={modalVisible}
            transparent={true}
            animationType='slide'
          onRequestClose={() => setModalVisible(false)}
        >
          { cardContainer() }
          </Modal>

   
      <BottomSheet
        index={-1}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose
      handleStyle={{backgroundColor: '#353945'}}
      >
        <View style={{ flex: 1, backgroundColor: '#353945' }}>{handleSheetContent()}</View>
      </BottomSheet>
      </SafeAreaView>
  );
};

export default RecordDiscussion;

RecordDiscussion.propTypes = {};

RecordDiscussion.defaultProps = {};
