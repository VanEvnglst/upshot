import React, { useState } from "react";
import {
  View,
  Text,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Modal,
  ImageBackground,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ProgressBar, Button } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
  OutputFormatAndroidType,
} from 'react-native-audio-recorder-player';
import { DeviceUtil } from 'app/utils';



const audioRecorderPlayer = new AudioRecorderPlayer();

const AudioRecording = props => { 
  const { normalize } = DeviceUtil;

  const [recordSecs, setRecordSecs] = useState(0);
  const [recordTime, setRecordTime] = useState('00:00:00');
  const [currentPositionSec, setCurrentPositionSec] = useState(0);
  const [currentDurationSec, setCurrentDurationSec] = useState(0);
  const [playTime, setPlayTime] = useState('00:00:00');
  const [duration, setDuration] = useState('00:00:00');
  const [isLoggingIn, setStatus] = useState(false);
  const [isRecording, setRecordingStatus] = useState(false);
  const [pauseRecording, setPauseRecordingStatus] = useState(false);

  const path = Platform.select({
    ios: undefined,
    android: undefined,
  });

 
  audioRecorderPlayer.setSubscriptionDuration(0.1);

  const onStartRecord = async () => {
    console.log('start recording', path);
    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
      OutputFormatAndroid: OutputFormatAndroidType.AAC_ADTS,
    };
    const result = await audioRecorderPlayer.startRecorder();
    console.log('record', result);
    audioRecorderPlayer.addRecordBackListener((e) => {
      console.log('e', e);
    setRecordSecs(e.currentPosition);
    setRecordTime(audioRecorderPlayer.mmssss(
      Math.floor(e.currentPosition)))
  });
  console.log(result);
  };
  
  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setRecordSecs(0);
    console.log(result);
  };

  const onPauseRecord = async () => {
    try {
      const r = await audioRecorderPlayer.pauseRecorder();
      console.log(r);
    } catch (err) {
      console.log('pauseRecord', err);
    }
  };

  const onResumeRecord = async () => {
    await audioRecorderPlayer.resumeRecorder();
  };

  const onStartPlay = async () => {
    console.log('onStartPlay');
    const msg = await audioRecorderPlayer.startPlayer();
    console.log(msg);
    audioRecorderPlayer.addPlayBackListener((e) => {
      setCurrentPositionSec(e.currentPosition);
      setCurrentDurationSec(e.duration);
      setPlayTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));
    });
  };
  
  const onPausePlay = async () => {
    await audioRecorderPlayer.pausePlayer();
  };
  
  const onStopPlay = async () => {
    console.log('onStopPlay');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };

  const handleRecording = () => { 
    if (isRecording === false && recordTime === '00:00:00') {
      console.log("recording status", isRecording)
      setRecordingStatus(!isRecording);
      return onStartRecord();
    } else if (isRecording === true && recordTime != '00:00:00') {
      console.log("recording status is pause", isRecording)
      setRecordingStatus(!isRecording);
      return onPauseRecord();
    } else if (isRecording === false && recordTime != '00:00:00') { 
      console.log("recording status is resume", isRecording)
      setRecordingStatus(!isRecording);
      return onResumeRecord();
    }

  }

  return (
    <>
      <ScrollView>
    <View style={{justifyContent: 'center', alignItems: 'center'}}>

        <View style={styles.iconContainer}>
          <View style={[styles.avatarIcon, {position: 'absolute', left: normalize(30)}]}>
                    <LinearGradient
              style={[styles.avatarIcon, {borderColor: '#FFFFFF', borderWidth: 1,}]}
                      colors={['#C883FF', '#6587FF']}
                      start={{ x: 0.2, y: 0 }}
                      end={{ x: 0.7, y: 1 }}>
                      <Text style={styles.avatarTextIcon}>AC</Text>
                    </LinearGradient>
          </View>
          <View style={[styles.avatarIcon, {position: 'absolute', top: normalize(40), left: normalize(100)}]}>
                    <LinearGradient
              style={[styles.avatarIcon, {borderColor: '#FFFFFF', borderWidth: 1,}]}
                      colors={['#C883FF', '#6587FF']}
                      start={{ x: 0.2, y: 0 }}
                      end={{ x: 0.7, y: 1 }}>
                      <Text style={styles.avatarTextIcon}>AC</Text>
                    </LinearGradient>
          </View>
        </View>

        <View style={styles.recordingTitleContainer}>
          <Text style={styles.recordingTitle}>Record your meeting</Text>
          <Text style={styles.recordingSubtitle}>Tap to start recording</Text>
        </View>

        <View style={styles.recordingBtnContainer}>
          <View style={{marginVertical: 20, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{marginTop: 32, color: 'white', fontSize: 20, textAlignVertical: 'center', fontWeight: '200', fontFamily: 'Helvetica Neue', letterSpacing: 3,}}>{recordTime}</Text>
            </View>
            <View style={styles.recordingStatusContainer}>
              <View style={styles.recordingIconBorder}>
                <TouchableOpacity style={[styles.recordingIconContainer, !isRecording ? { backgroundColor: '#9763F0' } : null]}
                onPress={() => handleRecording()}>
                  <Icon name={isRecording ? "pause" : "mic"} size={20} color={isRecording ? "#9763F0" : 'black'} />
                </TouchableOpacity>

              </View>
            </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            {/* <Button onPress={() => onStartRecord()}>Start Record</Button> */}
            <Button style={{ marginLeft: 10 }}
              onPress={() => onStopRecord()}>Stop Record</Button>
            {/* <Button style={{ marginLeft: 10 }}
                onPress={() => onPauseRecord()}>Pause Record</Button>
              <Button style={{ marginLeft: 10 }}
            onPress={() => onResumeRecord()}>Resume Record</Button> */}
          </View>
          {/* <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            <Button onPress={() => onStartPlay()}>Play</Button>
            <Button onPress={() => onPausePlay()}>Pause</Button>
            <Button onPress={() => onStopPlay()}>Stop</Button>
          </View> */}
        </View>
        {/* <View>
            <Text style={{ marginTop: 32, color: 'white', fontSize: 20, textAlignVertical: 'center', fontWeight: '200', fontFamily: 'Helvetica Neue', letterSpacing: 3, }}>{playTime} / {duration}</Text>
          </View> */}
        </View>
        </ScrollView>
      </>
  )
}

export default AudioRecording;

AudioRecording.propTypes = {};

AudioRecording.defaultProps = {};
