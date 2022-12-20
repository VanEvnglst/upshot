import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import BottomSheet from '@gorhom/bottom-sheet';
import PropTypes from 'prop-types';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
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
import styles from '../styles';

const CaptureMomentStep3 = ({
  pressMainTopic,
  pressSubTopic,
  selectedLayerOne,
  selectedLayerTwo,
  pressAttachment
}) => {
  const dispatch = useDispatch();
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const { height } = Dimensions.get('window');
  const captureData = useSelector(getCaptureData);
  const activeStep = useSelector(getActiveCaptureStep);
  const feedbackType = captureData && captureData.step2;
  const dateEntry = moment(new Date()).format('ddd. MMM DD, YYYY [at] hh:mm a');

  useEffect(() => {
    dispatch(CaptureMomentActions.fetchLayerOneTopics());
  }, []);
  const [attachmentList, setAttachmentList] = useState([]);
  const [othersValue, setOthersValue] = useState('');
  const topicsSelected =
    (selectedLayerOne === 'Others' && othersValue !== '') ||
    (selectedLayerOne && selectedLayerTwo);

  const handleStep3Continue = () => {
    const step3Data = {
      selectedLayerOne,
      selectedLayerTwo,
    };
    dispatch(CaptureMomentActions.setCaptureData('step3', step3Data));
    dispatch(CaptureMomentActions.postCaptureMoment());
    dispatch(CaptureMomentActions.setCaptureActiveStep(activeStep + 1));
  };

  return (
    <ScrollView
      style={styles.content}
      showsVerticalScrollIndicator={false}
      bounces={false}>
      <View style={styles.mainQuestionHeader}>
        <Text type="body1" weight="bold" style={styles.mainQuestionText}>
          Add topic details to your
        </Text>
        <View style={styles.typeContainer}>
          <Text style={styles.typeText}>{feedbackType.title}</Text>
        </View>
        <Text type="body1" weight="bold" style={styles.mainQuestionText}>
          feedback
        </Text>
        <Text type="caption1" weight="regular" style={styles.dateTimeText}>
          {dateEntry}
        </Text>
      </View>
      <View style={{ marginTop: 15 }}>
        <Text type="body2" weight="regular" style={styles.descriptionText}>
          Tell us what kind of observation do you want to give to your team
          member.
        </Text>
      </View>
      <View style={styles.topicContainer}>
        <Text style={[styles.toText, { marginBottom: 4 }]}>Topic</Text>
        <TouchableOpacity onPress={pressMainTopic} style={styles.topicPicker}>
          <Text type="body2" weight="regular" style={styles.topicLabel}>
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
              onPress={pressSubTopic}
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
          <TextInput
            placeholder={'Write your own details*'}
            style={styles.inputField}
            value={othersValue}
            onChangeText={others => setOthersValue(others)}
          />
        )}
      </View>
      <View style={{ flex: 1, marginVertical: 30 }}>
          <Text style={styles.toText}>Attachments</Text>
          <View style={{ marginTop: 12, flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={pressAttachment}
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
        {topicsSelected ? (
          <Button
            mode="contained"
            //disabled
            style={styles.button}
            onPress={() => handleStep3Continue()}>
            Capture Moment
          </Button>
        ) : (
          <Button
            mode="contained"
            disabled
            style={styles.button}
            onPress={() => handleStep3Continue()}>
            Capture Moment
          </Button>
        )}
      </View>
      <View style={styles.spacer} />
      {/* <View style={styles.content}>
      <View style={styles.mainQuestionHeader}>
      <Text style={styles.mainQuestionText}>Add topic details to your</Text>
      <View style={styles.typeContainer}>
        <Text style={styles.typeText}>abcde</Text>
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
      <View style={{ marginTop: 25}}>
        <Text></Text>
      </View>
      <View style={styles.btnContainer}>
        <Button
          mode='contained'
          style={[styles.button]}
        >Record Feedback</Button>
      </View>
      <View style={styles.spacer} />
      <BottomSheet
        index={-1}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose
      ><View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red'}}><Text>Hello world</Text></View></BottomSheet> 
    </View>*/}
    </ScrollView>
  );
};

export default CaptureMomentStep3;

CaptureMomentStep3.propTypes = {
  getCaptureData: PropTypes.object,
  getActiveCaptureStep: PropTypes.number,
  selectedLayerOne: PropTypes.object,
  selectedLayerTwo: PropTypes.object,
  fetchLayerOneTopics: PropTypes.func,
  pressMainTopic: PropTypes.func,
  pressSubTopic: PropTypes.func,
  setCaptureData: PropTypes.func,
  setCaptureActiveStep: PropTypes.func,
  postCaptureMoment: PropTypes.func,
};

CaptureMomentStep3.defaultProps = {
  getCaptureData: {},
  getActiveCaptureStep: 1,
  selectedLayerOne: {},
  selectedLayerTwo: {},
  fetchLayerOneTopics: () => {},
  pressMainTopic: () => {},
  pressSubTopic: () => {},
  setCaptureData: () => {},
  setCaptureActiveStep: () => {},
  postCaptureMoment: () => {},
};
