import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  BackHandler,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import CaptureMomentActions from 'app/store/CaptureFeedbackMomentRedux';
import Images from 'app/assets/images';

const ReviewFeedbackEntry = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const activeStep = useSelector(state => state.captureMoment.get('entryActiveStep'));
  const maxStep = useSelector(state => state.captureMoment.get('entryMaxStep'));
  const feedbackData = useSelector(state => state.captureMoment.get('data'));
  const dateLogged = useSelector(
    state => state.captureMoment.get('data').dateLogged,
  );
  const topics = useSelector(state => state.captureMoment.get('data').step3);
  
  const meetingSched = useSelector(state => state.captureMoment.get('entryDetails')['f2fSchedule'])
  const entry = useSelector(state => state.captureMoment.get('entryDetails'));
  
  const [attentionDetail, setAttentionDetail] = useState(entry.catchAttention);
  const [impactBehavior, setImpactBehavior] = useState(entry.impactBehavior);
  const [doMoreData, setDoMoreData] = useState(entry.doMore);
  const [doLessData, setDoLessData] = useState(entry.doLess);
  const [stopDoingData, setStopDoingData] = useState(entry.stopDoing);
  const [additionalData, setAdditionalData] = useState(entry.additionalNotes);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => {
        return true;
      });
  }, []);

  const handleContinue = () => {
    activeStep = activeStep + 1;
  }

  const handleSendFeedback = () => { 
    dispatch(CaptureMomentActions.postFaceToFaceSchedule());
    dispatch(CaptureMomentActions.postRecordEMEntry('record'));
    navigation.navigate('Feedback Entry Confirmation')
  }

  const handleAttentionTextChange = (newText) => { 
    setAttentionDetail(newText)
    setTimeout(() => {
      dispatch(CaptureMomentActions.setFeedbackMomentData('catchAttention', newText))
    }, 300);
  }

  const handleImpactTextChange = (newText) => { 
    setImpactBehavior(newText)
    setTimeout(() => {
      dispatch(CaptureMomentActions.setFeedbackMomentData('impactBehavior', newText))
    }, 300);
  }

  const handleDoMoreTextChange = (newText) => { 
    setDoMoreData(newText)
    setTimeout(() => {
      dispatch(CaptureMomentActions.setFeedbackMomentData('doMore', newText))
    }, 300);
  }

  const handleDoLessTextChange = (newText) => { 
    setDoLessData(newText)
    setTimeout(() => {
      dispatch(CaptureMomentActions.setFeedbackMomentData('doLess', newText))
    }, 300);
  }

  const handleStopDoingTextChange = (newText) => { 
    setStopDoingData(newText)
    setTimeout(() => {
      dispatch(CaptureMomentActions.setFeedbackMomentData('stopDoing', newText))
    }, 300);
  }

  const handleAdditionalTextChange = (newText) => { 
    setAdditionalData(newText)
    setTimeout(() => {
      dispatch(CaptureMomentActions.setFeedbackMomentData('additionalNotes', newText))
    }, 300);
  }

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
      {/* <View style={styles.headerContainer}>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => navigation.goBack()}
          style={styles.icon}>
          <Icon name="chevron-back-outline" size={24} />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Corrective feedback</Text>
        </View>
        <View style={styles.headerSave}>
          <Text style={styles.saveText}>Save</Text>
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
      </View> */}
      <View>
        <Text style={{ fontWeight: '400', fontSize: 16, lineHeight: 22, color: '#667080', marginTop: 20}}>Are these feedback details correct?</Text>
        <View style={{ marginTop: 30, marginBottom: 12, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#667080', opacity: 0.5, marginRight: 12 }}/>
          <View>
            <Text style={{ fontSize: 24, marginBottom: 4, color: '#667080', fontWeight: '700'}}>{feedbackData.step1.name}</Text>
            <Text style={{ fontSize: 14, lineHeight: 22, color: '#667080', fontWeight: '400'}}>Logged: {dateLogged}</Text>
          </View>
        </View>
        <View style={{ borderWidth: 1, height: 40, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: '#F6EEFE', borderRadius: 4, borderColor: '#E0CAFF'}}>
          <Image
            source={feedbackData.step2.title === 'Corrective' ? Images.penEmoji : Images.redHeartEmoji}
            resizeMode='contain'
            style={{ width: 24, height: 24, marginRight: 8}}
          />
          <Text style={{ color: '#A76AFF', fontsize: 14, lineHeight: 22, fontWeight: '400'}}>{feedbackData.step2.title} Feedback</Text>
        </View>
        <View style={styles.topicContainer}>
        <Text style={[styles.toText, { marginBottom: 4, }]}>Topic</Text>
        <View 
          // onPress={() => onPress()}
        style={styles.topicPicker}>
              <Text style={styles.topicLabel}>{topics.selectedLayerOne.name}</Text>
          {/* <Icon
            name='chevron-down-outline'
            style={{flex: 1, color: '#667080'}}
            size={24}
          /> */}
        </View>
        <View style={[styles.topicPicker, { marginTop: 12}]}>
              <Text style={styles.topicLabel}>{topics.selectedLayerTwo.name}</Text>
        </View>
      </View>

{/* start of added details */}
{topics.selectedLayerTwo.requires_face_to_face && (
  <>
      <View style={{marginTop: 24, borderTopWidth: 1, borderTopColor: '#B1B5C3'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 25}}>
          <Text style={{ color: '#667080', fontWeight: '700', fontSize: 16, lineHeight: 24}}>Schedule Details</Text>
        </View>

        <View style={{ marginTop: 24 }}>
          <Text style={{ color: '#667080', fontWeight: '700', fontSize: 12, lineHeight: 12, textTransform: 'uppercase' }}>Date</Text>
          <View style={{ minWidth: 327, height: 48, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#667080', borderRadius: 12, alignItems: 'center', marginTop: 12}}>
              <Text style={{ color: '#667080', fontWeight: '500', fontSize: 14, lineHeight: 24, marginLeft: 18 }}>{meetingSched?.date}</Text>
            
            </View>
        </View>
        </View>

        <View style={{ marginTop: 24, minWidth: 327, flexDirection: 'row', justifyContent: 'flex-start' }}>
          <View style={{minWidth: 157.5, justifyContent: 'flex-start' }}>
          <Text style={{ color: '#667080', fontWeight: '700', fontSize: 12, lineHeight: 12, textTransform: 'uppercase', width: 157.5 }}>Start time</Text>
            
            <View style={{ height: 48, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#667080', borderRadius: 12, alignItems: 'center', marginTop: 12 }}>
                <Text style={{ color: '#667080', fontWeight: '500', fontSize: 14, lineHeight: 24, marginLeft: 18 }}>{meetingSched.startTime}</Text>
            
              </View>
              
          </View>
          <View style={{minWidth: 157.5, justifyContent: 'flex-start', marginLeft: 12  }}>
            <Text style={{ color: '#667080', fontWeight: '700', fontSize: 12, lineHeight: 12, textTransform: 'uppercase' }}>End time</Text>
            
          <View style={{ height: 48, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#667080', borderRadius: 12, alignItems: 'center', marginTop: 12}}>
              <Text style={{ color: '#667080', fontWeight: '500', fontSize: 14, lineHeight: 24, marginLeft: 18 }}>{ meetingSched.endTime }</Text>
            
              </View>
              
          </View>
          </View>
          </>
          )}
        {/* end of added details */}

      <View style={styles.noteContainer}>
        <Text style={styles.noteText}>Check your feedback details before sending it to your team member. You can't edit your feedback once they are sent.</Text>
      </View>
      <View style={styles.entriesContainer}>
        <Text style={styles.topicLabel}>What did your team member do that caught your attention?</Text>
        <View style={styles.answerContainer}>
        <TextInput style={styles.answerText}
          multiline
          numberOfLines={30}
          textAlignVertical='top'
          value={attentionDetail}
          onChangeText={newText => handleAttentionTextChange(newText)}
        />
        </View>
        <Text style={styles.topicLabel}>What impact does this behavior have on the business or the team?</Text>
        <View style={styles.answerContainer}>
        <TextInput style={styles.answerText}
                multiline
                numberOfLines={30}
                textAlignVertical='top'
                value={impactBehavior}
                onChangeText={newText => handleImpactTextChange(newText)}
              />
        </View>
        <Text style={styles.topicLabel}>I want my team member to continue and do more...</Text>
        <View style={styles.answerContainer}>
          <TextInput style={styles.answerText}
                multiline
                numberOfLines={30}
                textAlignVertical='top'
                value={doMoreData}
                onChangeText={newText => handleDoMoreTextChange(newText)}
              />
        </View>
        <Text style={styles.topicLabel}>I want my team member to do less...</Text>
        <View style={styles.answerContainer}>
        <TextInput style={styles.answerText}
                multiline
                numberOfLines={30}
                textAlignVertical='top'
                value={doLessData}
                onChangeText={newText => handleDoLessTextChange(newText)}
              />
        </View>
            {topics.selectedLayerTwo.requires_face_to_face && (
          <>
            <Text style={styles.topicLabel}>I want my team member to stop doing...</Text>
            <View style={styles.answerContainer}>
              <TextInput style={styles.answerText}
                multiline
                numberOfLines={30}
                textAlignVertical='top'
                value={stopDoingData}
                onChangeText={newText => handleStopDoingTextChange(newText)}
              />
            </View>
          </>
        )}
        <Text style={styles.topicLabel}>Anything else to add?</Text>
        <View style={styles.answerContainer}>
          <TextInput style={styles.answerText}
                multiline
                numberOfLines={30}
                textAlignVertical='top'
                value={additionalData}
                onChangeText={newText => handleAdditionalTextChange(newText)}
              />
        </View>
      </View>
      <Button
            mode='contained'
            onPress={() => handleSendFeedback()}
            style={{ marginTop: 24, marginBottom: 30, height: 48, justifyContent: 'center', alignItems: 'center' }}
          >Send Feedback</Button> 
        {/* <View style={styles.selectedNameContainer}>
          <View style={styles.selectedAvatar} />
          <Text style={styles.selectedName}>name</Text>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.mainQuestionText}>
            What did your{' '}
            <Text style={styles.highlightedText}>team member do</Text> that
            caught your attention?
          </Text>
          <Text style={styles.logDateText}>Mon. Aug 23, 2022</Text>
        </View>
        <KeyboardAvoidingView style={{marginTop: 24, marginBottom: 50, height: '50%'}}>
          <TextInput
            placeholder='Text goes here'
            multiline
          />
        </KeyboardAvoidingView>
*/}
      </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ReviewFeedbackEntry;

ReviewFeedbackEntry.propTypes = {};

ReviewFeedbackEntry.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    flex: 1,
    paddingLeft: 24,
  },
  headerTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    flex: 2,
    fontSize: 16,
    lineHeight: 22,
    color: '#667080',
    fontWeight: '700',
  },
  headerSave: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 24,
  },
  saveText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#667080',
  },
  stepsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingHorizontal: 24,
    borderBottomWidth: 0.3,
  },
  activeStep: {
    backgroundColor: '#BAC0CA',
    height: 4,
    borderRadius: 4,
    width: 50,
  },
  inactiveStep: {
    opacity: 0.5,
    backgroundColor: '#BAC0CA',
    height: 4,
    borderRadius: 4,
    width: 50,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 30,
  },
  selectedNameContainer: {
    flexDirection: 'row',
    borderWidth: 0.3,
    paddingVertical: 5,
    paddingHorizontal: 8,
    height: 35,
    borderRadius: 6,
    alignItems: 'center',
    maxWidth: '40%',
  },
  selectedAvatar: {
    width: 24,
    height: 24,
    borderRadius: 21,
    backgroundColor: '#667080',
    marginRight: 4,
    opacity: 0.6,
  },
  selectedName: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    color: '#667080',
  },
  questionContainer: {
    marginTop: 15,
    maxWidth: '95%',
  },
  mainQuestionText: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    color: '#667080',
    // marginBottom: 24,
  },
  highlightedText: {
    color: '#A76AFF',
  },
  logDateText: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: '#667080',
  },



  topicContainer: {
    flex: 1,
    marginTop: 40,
  },
  topicPicker: {
    borderWidth: 1,
    borderColor: '#667080',
    height: 48,
    borderRadius: 6,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  topicLabel: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    color: '#667080',
    flex: 10,
  },
  noteContainer: {
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#B5E0FF',
    backgroundColor: '#FAFCFF',
    padding: 12,
    borderRadius: 4,
  },
  noteText: {
    color: '#5495EF',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400'
  },
  entriesContainer: {
    marginTop: 24,
    borderBottomWidth: 0.3,
  },
  answerContainer: {
    borderColor: '#667080',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 13,
    paddingVertical: 12,
    minHeight: 160,
    marginBottom: 24,
  },
  answerText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    color: '#667080',
    opacity: 0.7
  }
});
