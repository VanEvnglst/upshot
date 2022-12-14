import React, {
  useState,
  useLayoutEffect,
  useEffect,
  useRef,
  useMemo,
} from 'react';
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
import BottomSheet, {
  BottomSheetTextInput,
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import moment from 'moment';
import { Text } from 'app/components';
import CaptureMomentActions from 'app/store/CaptureFeedbackMomentRedux';
import {
  getActiveCaptureStep,
  getMaxCaptureStep,
  getStaffList,
  getCaptureData,
  getMainTopics,
  getSubTopics,
} from 'app/store/selectors';
import StaffSelection from './capture-step1';
import CaptureMomentStep2 from './capture-step2';
import CaptureMomentStep3 from './capture-step3';
import CaptureMomentStep4 from './capture-step4';
import reminderHoursData from 'app/models/ReminderModel';
import Images from 'app/assets/images';
import styles from './styles';
import FeedbackActions from 'app/store/feedback/FeedbackRedux';


const hourPicker = reminderHoursData;

const CaptureFeedbackMoment = props => {
  const { navigation } = props;
  const { height } = Dimensions.get('window');
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);
  const dispatch = useDispatch();
  const activeStep = useSelector(getActiveCaptureStep);
  const maxStep = useSelector(getMaxCaptureStep);
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

  const handleStepContent = () => {
    switch (activeStep) {
      case 1:
        return <StaffSelection />;
      case 2:
        return <CaptureMomentStep2 />;
      case 3:
        return (
          <CaptureMomentStep3
            pressMainTopic={() => openSheet('layer one')}
            pressSubTopic={() => openSheet('layer two')}
            selectedLayerOne={selectedLayerOne}
            selectedLayerTwo={selectedLayerTwo}
            pressAttachment={() => openSheet('attachments')}
          />
        );
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
      //dispatch(FeedbackActions.postCaptureAttachment(images));
      onUploadHandler(images);
    });
  };

  const onUploadHandler = files => { 
    console.log('attach', files);
    // commented the post capture attachment first - need to connect it properly
    //dispatch(FeedbackActions.postCaptureAttachment(files));
  }

  const ReminderSheet = () => {
    return (
      // <NativeViewGestureHandler disallowInterruption={true}>
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
        <View style={{ marginTop: 12, height: '40%', paddingHorizontal: 24 }}>
          <ScrollPicker
            dataSource={hourPicker}
            selectedIndex={reminderHours.currentIndex}
            renderItem={(data, index) => (
              <BottomSheetView
                style={{
                  alignItems: 'center',
                }}>
                <Text
                  key={index}
                  style={{
                    fontSize: 24,
                    lineHeight: 28,
                    fontWeight: '400',
                    color: '#667080',
                  }}>
                  {data === '1' ? `${data} hour` : `${data} hours`}
                </Text>
              </BottomSheetView>
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
            highlightColor="#667080"
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
      //  </NativeViewGestureHandler>
    );
  };

  const LayerOneTopicsSheet = () => {
    return (
      <>
        <View style={styles.sheetTitleContainer}>
          <Text type="body2" weight="bold" style={styles.sheetTitleText}>
            Topic
          </Text>
          <Text type="body2" weight="regular" style={styles.sheetSubtitleText}>
            What your feedback is related to
          </Text>
        </View>
        <View style={styles.sheetTopicsContainer}>
          {layerOneTopics.map((item, i) => (
            <TouchableOpacity
              onPress={() => selectTopic(item)}
              style={styles.sheetTopicItem}>
              <Text type="body2" weight="bold" style={styles.topicNameText}>
                {item.name}
              </Text>
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
          <Text type="body2" weight="bold" style={styles.sheetTitleText}>
            Sub-topic
          </Text>
          <Text type="body2" weight="regular" style={styles.sheetSubtitleText}>
            Detailed category about your chosen topic
          </Text>
        </View>
        <View style={styles.sheetTopicsContainer}>
          {layerTwoTopics.map((item, i) => (
            <TouchableOpacity
              onPress={() => selectSecondLayerTopic(item)}
              style={styles.sheetTopicItem}>
              <View>
                <Text
                  type="body2"
                  weight="bold"
                  style={[styles.topicNameText, { paddingTop: 10 }]}>
                  {item.name}
                </Text>
                {item.requires_face_to_face && (
                  <Text
                    type="caption1"
                    weight="regular"
                    style={styles.requiresFaceToFaceText}>
                    *requires Face-to-Face discussion
                  </Text>
                )}
              </View>
              <View style={styles.sheetTopicButton} />
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
          {activeStep !== 4 && (
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => handleGoBack()}
            style={styles.icon}>
            <Icon name="chevron-back-outline" size={24} color={'#667080'} />
          </TouchableOpacity>
          )}
          <View style={styles.headerTextContainer}>
            <Text type="body2" weight="bold" style={styles.headerText}>
              Give feedback
            </Text>
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
                <Text type="body2" weight="regular" style={styles.selectedName}>
                  {staffName.name}
                </Text>
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
