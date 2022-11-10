import React, { useState, useLayoutEffect, useEffect, useRef, useMemo } from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  BackHandler,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {
  ScrollView,
  NativeViewGestureHandler,
} from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ImagePicker from 'react-native-image-crop-picker';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomSheet, { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import moment from 'moment';
import { Text } from 'app/components';
import CaptureMomentActions from 'app/store/CaptureFeedbackMomentRedux';
import { getActiveCaptureStep, getMaxCaptureStep, getStaffList, getCaptureData, getMainTopics, getSubTopics } from 'app/store/selectors';
import StaffSelection from './capture-step1';
import CaptureMomentStep2 from './capture-step2';
import CaptureMomentStep3 from './capture-step3';
import CaptureMomentStep4 from './capture-step4';
import Images from 'app/assets/images';
import styles from './styles';

const hourPicker = [
  
];

const CaptureFeedbackMoment = props => {
  const { navigation } = props;
  const { height } = Dimensions.get('window');
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);
  const dispatch = useDispatch();
  const activeStep = useSelector(getActiveCaptureStep);
  const maxStep = useSelector(getMaxCaptureStep);
  const staffList = useSelector(getStaffList);
  const captureData = useSelector(getCaptureData);
  const staffName = captureData && captureData.step1;
  const feedbackType = captureData && captureData.step2;
  const layerOneTopics = useSelector(getMainTopics);
  const layerTwoTopics = useSelector(getSubTopics);
  const [selectedStaff, setSelectedStaff] = useState();
  const [selectedLayerOne, setSelectedLayerOne] = useState(null);
  const [selectedLayerTwo, setSelectedLayerTwo] = useState(null);
  const [reminderHours, setReminderHours] = useState({
    value: 0,
    currentIndex: 3,
  });
  const [sheetType, setSheetType] = useState('');
  const [attachmentList, setAttachmentList] = useState([]);
  const dateEntry = moment(new Date()).format('ddd. MMM DD, YYYY [at] hh:mm a');

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => {
        return true;
      });
  }, []);

  useLayoutEffect(() => {
    dispatch(CaptureMomentActions.fetchStaffMembers());
  }, []);

  useEffect(() => {
    if (activeStep === 3) dispatch(CaptureMomentActions.fetchLayerOneTopics());
  }, [activeStep]);

  const handleGoBack = () => {
    bottomSheetRef.current?.close();
    if (activeStep === 1) navigation.goBack();
    else dispatch(CaptureMomentActions.setCaptureActiveStep(activeStep - 1));
  };

  // const StaffSelection = () => {
  //   return (
  //     <View style={styles.listContainer}>
  //       {staffList.map((item, i) => (
  //         <TouchableOpacity
  //           key={item.id}
  //           onPress={() => setStaffSelection(item)}
  //           style={styles.namesContainer}>
  //           <View style={styles.nameAvatar} />
  //           <View style={styles.staffNameContainer}>
  //             <Text style={styles.staffNameText}>{item.name}</Text>
  //             <Text style={styles.emailText}>{item.email}</Text>
  //           </View>
  //         </TouchableOpacity>
  //       ))}
  //     </View>
  //   );
  // };

  const TopicSelection = () => {
    return (
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.mainQuestionHeader}>
          <Text style={styles.mainQuestionText}>Add topic details to your</Text>
          <View style={styles.typeContainer}>
            <Text style={styles.typeText}>{feedbackType.title}</Text>
          </View>
          <Text style={styles.mainQuestionText}>feedback</Text>
          <Text style={styles.dateTimeText}>{dateEntry}</Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={styles.descriptionText}>
            Tell us what kind of observation do you want to give to your team
            member/s.
          </Text>
        </View>
        <View style={styles.topicContainer}>
          <Text style={[styles.toText, { marginBottom: 4 }]}>Topic</Text>
          <TouchableOpacity
            onPress={() => openSheet('layer one')}
            style={styles.topicPicker}>
            <Text style={styles.topicLabel}>
              {selectedLayerOne
                ? `${selectedLayerOne.name}`
                : `*Others (Please specify)`}
            </Text>
            <Icon
              name="chevron-down-outline"
              style={{ flex: 1, color: '#667080' }}
              size={24}
            />
          </TouchableOpacity>
          {selectedLayerOne && selectedLayerOne.name !== 'Others' ? (
            <>
              <Text style={[styles.toText, { marginTop: 12, marginBottom: 4 }]}>
                Sub-topic
              </Text>
              <TouchableOpacity
                onPress={() => openSheet('layer two')}
                style={styles.topicPicker}>
                <Text style={styles.topicLabel}>
                  {selectedLayerTwo
                    ? `${selectedLayerTwo.name}`
                    : `Select sub-topic`}
                </Text>
                <Icon
                  name="chevron-down-outline"
                  style={{ flex: 1, color: '#667080' }}
                  size={24}
                />
              </TouchableOpacity>
            </>
          ) : (
            <View style={[styles.topicPicker, { marginTop: 12 }]}>
              <Text style={styles.topicLabel}>{`Write your own details*`}</Text>
            </View>
          )}
        </View>
        <View style={{ flex: 1, marginVertical: 30 }}>
          <Text style={styles.toText}>Attachments</Text>
          <View style={{ marginTop: 12, flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => openSheet('attachments')}
              style={{
                width: 72,
                height: 72,
                borderRadius: 6,
                backgroundColor: '#667080',
                opacity: 0.3,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>+</Text>
            </TouchableOpacity>
            {attachmentList.map((attach, index) => {
              return (
                <View
                  key={index}
                  style={{ width: 72, height: 72, borderRadius: 6 }}>
                  <Image source={attach} />
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.btnContainer}>
          {selectedLayerOne && selectedLayerTwo ? (
        <Button
            mode="contained"
            //disabled
            style={styles.button}
            onPress={() => handleStep3Continue()}>
            Capture Moment
          </Button>
          )
          :
          <Button
            mode="contained"
            disabled
            style={styles.button}
            onPress={() => handleStep3Continue()}>
            Capture Moment
          </Button>
  }
        </View>
        <View style={styles.spacer} />
      </ScrollView>
    );
  };

  const selectTopic = item => {
    setSelectedLayerOne(item);
    setTimeout(() => {
      dispatch(CaptureMomentActions.fetchLayerTwoTopics(item));
    }, 300);
    bottomSheetRef.current?.close();
  };

  const selectSecondLayerTopic = item => {
    setSelectedLayerTwo(item);
    bottomSheetRef.current?.close();
  };

  const handleStep3Continue = () => {
    const step3Data = {
      selectedLayerOne,
      selectedLayerTwo,
    };
    dispatch(CaptureMomentActions.setCaptureData('step3', step3Data));
    //dispatch(CaptureMomentActions.postCaptureMoment('step3'));
    dispatch(CaptureMomentActions.setCaptureActiveStep(activeStep + 1));
  };

  const handleSendFeedback = () => {
    bottomSheetRef.current?.close();
    dispatch(CaptureMomentActions.setCaptureData('step4', reminderHours));
    dispatch(CaptureMomentActions.postCaptureMoment('reminder'));
  };

  const openSheet = type => {
    switch (type) {
      case 'reminder':
        setSheetType(type);
      case 'layer one':
        setSheetType(type);
      case 'layer two':
        setSheetType(type);
      case 'attachments':
        setSheetType(type);
    }
    bottomSheetRef.current?.snapToIndex(1);
  };

  const setStaffSelection = async item => {
    setSelectedStaff(item);
    dispatch(CaptureMomentActions.setCaptureData('step1', item));
    setTimeout(() => {
      dispatch(CaptureMomentActions.setCaptureActiveStep(activeStep + 1));
    }, 300);
  };

  const handleStepContent = () => {
    switch (activeStep) {
      case 1:
        return <StaffSelection />;
      case 2:
        return <CaptureMomentStep2 />;
      case 3:
        return <TopicSelection />;
      case 4:
        return (
          <CaptureMomentStep4
            props={props}
            onPress={() => openSheet('reminder')}
          />
        );
    }
  };

  const handleSheetContent = () => {
    if (sheetType === 'reminder') {
      return <ReminderSheet />;
    } else if (sheetType === 'layer one') {
      return <LayerOneTopicsSheet />;
    } else if (sheetType === 'layer two') {
      return <LayerTwoTopicsSheet />;
    } else if (sheetType === 'attachments') {
      return <Attachments />;
    }
  };

  const Attachments = () => {
    return (
      <>
        <View style={styles.sheetTitleContainer}>
          <Text style={styles.sheetTitleText}>Add Attachment/s</Text>
          <Text
            style={[
              styles.sheetSubtitleText,
              {
                textAlign: 'center',
                lineHeight: 22,
                paddingBottom: 20,
                maxWidth: '80%',
              },
            ]}>
            Give additional context by adding media in your feedback
          </Text>
        </View>
        <View style={{ marginTop: 15, paddingHorizontal: 22 }}>
          <TouchableOpacity
            onPress={() => launchCamera()}
            style={{
              borderWidth: 1,
              borderRadius: 6,
              borderColor: '#EEF1F4',
              flexDirection: 'row',
              alignItems: 'center',
              height: 50,
              paddingHorizontal: 12,
              paddingVertical: 13,
              marginBottom: 12,
            }}>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 22,
                color: '#667080',
                fontWeight: '700',
              }}>
              Take a photo / video
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => launchGallery()}
            style={{
              borderWidth: 1,
              borderRadius: 6,
              borderColor: '#EEF1F4',
              flexDirection: 'row',
              alignItems: 'center',
              height: 50,
              paddingHorizontal: 12,
              paddingVertical: 13,
              marginBottom: 12,
            }}>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 22,
                color: '#667080',
                fontWeight: '700',
              }}>
              Choose from gallery
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 6,
              borderColor: '#EEF1F4',
              flexDirection: 'row',
              alignItems: 'center',
              height: 50,
              paddingHorizontal: 12,
              paddingVertical: 13,
              marginBottom: 12,
            }}>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 22,
                color: '#667080',
                fontWeight: '700',
              }}>
              Record audio
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const launchCamera = () => {
    ImagePicker.openCamera({
      cropping: false,
      forceJpg: true,
      mediaType: 'any',
    }).then(images => {
      console.warn('cam', images);
      // const cameraList = [images];
      // onUploadHandler(cameraList);
    });
  };

  const launchGallery = () => {
    ImagePicker.openPicker({
      cropping: false,
      multiple: true,
      mediaType: 'photo',
    }).then(images => {
      console.warn('ima', images);
      // onUploadHandler(images);
    });
  };

  const ReminderSheet = () => {
    return (
      <NativeViewGestureHandler disallowInterruption={true}>
        <View style={{ marginTop: 24, backgroundColor: 'white' }}>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={Images.bellEmoji}
              resizeMode="contain"
              style={{ width: 62, height: 62 }}
            />
            <Text
              style={{
                fontSize: 24,
                lineHeight: 30,
                fontWeight: '700',
                color: '#667080',
                textAlign: 'center',
              }}>
              Set Reminder
            </Text>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 22,
                fontWeight: '400',
                color: '#667080',
                textAlign: 'center',
                marginTop: 4,
                maxWidth: '80%',
              }}>
              How long before we remind you about this feedback?
            </Text>
          </View>

          <View style={{ marginTop: 12, height: 175, paddingHorizontal: 24 }}>
            <ScrollPicker
              dataSource={hourPicker}
              selectedIndex={reminderHours.currentIndex}
              renderItem={(data, index) => (
                <View style={{ alignItems: 'center' }}>
                  <Text
                    style={{
                      fontSize: 24,
                      lineHeight: 28,
                      fontWeight: '400',
                      color: '#667080',
                    }}>
                    {data === '1' ? `${data} hour` : `${data} hours`}
                  </Text>
                </View>
              )}
              onValueChange={(data, selectedIndex) => {
                setReminderHours({
                  value: data,
                  currentIndex: selectedIndex,
                });
              }}
              wrapperHeight={180}
              wrapperColor="#FFFFFF"
              itemHeight={60}
              highlightColor="black"
              highlightBorderWidth={1}
            />
          </View>

          <View style={{ marginTop: 50, paddingHorizontal: 24 }}>
            <Button
              mode="contained"
              onPress={() => handleSendFeedback('reminder')}
              style={[styles.button, { marginBottom: 12 }]}>
              Confirm
            </Button>
            <Button
              mode="text"
              onPress={() => bottomSheetRef.current?.close()}
              style={[styles.button]}>
              Cancel
            </Button>
          </View>
        </View>
      </NativeViewGestureHandler>
    );
  };

  const LayerOneTopicsSheet = () => {
    return (
      <>
        <View style={styles.sheetTitleContainer}>
          <Text style={styles.sheetTitleText}>Topic</Text>
          <Text style={styles.sheetSubtitleText}>
            What your feedback is related to
          </Text>
        </View>
        <View style={styles.sheetTopicsContainer}>
          {layerOneTopics.map((item, i) => (
            <TouchableOpacity
              onPress={() => selectTopic(item)}
              style={styles.sheetTopicItem}>
              <Text style={styles.topicNameText}>{item.name}</Text>
              <View style={styles.sheetTopicButton} />
            </TouchableOpacity>
          ))}
        </View>
      </>
    );
  };

  const LayerTwoTopicsSheet = () => {
    return (
      <>
        <View style={styles.sheetTitleContainer}>
          <Text style={styles.sheetTitleText}>Sub-topic</Text>
          <Text style={styles.sheetSubtitleText}>
            Detailed category about your chosen topic
          </Text>
        </View>
        <View style={styles.sheetTopicsContainer}>
          {layerTwoTopics.map((item, i) => (
            <TouchableOpacity
              onPress={() => selectSecondLayerTopic(item)}
              style={{
                height: 48,
                borderBottomWidth: 0.3,
                marginBottom: 10,
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={styles.topicNameText}>{item.name}</Text>
                <View style={styles.sheetTopicButton} />
              </View>
              <Text style={styles.requiresFaceToFaceText}>
                {item.requires_face_to_face &&
                  '*requires Face-to-Face discussion'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => handleGoBack()}
            style={styles.icon}>
            <Icon name="chevron-back-outline" size={24} />
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Give feedback</Text>
          </View>
          <View style={styles.headerSpacer} />
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
      </SafeAreaView>
      <View style={styles.contentContainer}>
        {activeStep !== 4 && (
          <View style={styles.receipientContainer}>
            <Text style={styles.toText}>To:</Text>
            {staffName && (
              <View style={styles.selectedNameContainer}>
                <View style={styles.selectedAvatar} />
                <Text style={styles.selectedName}>{staffName.name}</Text>
              </View>
            )}
          </View>
        )}
        {handleStepContent()}
      </View>
      <BottomSheet
        index={-1}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose>
        <View style={{ flex: 1 }}>{handleSheetContent()}</View>
      </BottomSheet>
    </View>
  );
};

export default CaptureFeedbackMoment;

CaptureFeedbackMoment.propTypes = {};

CaptureFeedbackMoment.defaultProps = {};
