import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  BackHandler,
  Image,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import { Text } from 'app/components';
import Icon from 'react-native-vector-icons/Ionicons';
import CaptureMomentActions from 'app/store/feedback/CaptureFeedbackMomentRedux';
import RecordEntryActions from 'app/store/feedback/RecordEntryRedux';
import { getRecordEntryActiveStep, getRecordEntryMaxStep } from 'app/store/selectors';
import Images from 'app/assets/images';
import styles from './styles';

const ReviewFeedbackEntry = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const activeStep = useSelector(getRecordEntryActiveStep);
  const maxStep = useSelector(getRecordEntryMaxStep);
  const feedbackData = useSelector(state => state.captureMoment.get('data'));
  const dateLogged = useSelector(
    state => state.captureMoment.get('data').dateLogged,
  );
  const topics = useSelector(state => state.captureMoment.get('data').step3);

  const meetingSched = useSelector(
    state => state.captureMoment.get('entryDetails')['f2fSchedule'],
  );
  const entry = useSelector(state => state.recordEntry.get('entryDetails'));

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

  // const handleContinue = () => {
  //   activeStep = activeStep + 1;
  // }

  const handleSendFeedback = () => {
    if (topics.selectedLayerTwo.requires_face_to_face) {
      dispatch(CaptureMomentActions.postFaceToFaceSchedule());
    }
    dispatch(RecordEntryActions.postRecordEntry());
    // navigation.navigate('Feedback Entry Confirmation')
  };

  const handleAttentionTextChange = newText => {
    setAttentionDetail(newText);
    setTimeout(() => {
      dispatch(
        RecordEntryActions.setEntryData('catchAttention', newText),
      );
    }, 300);
  };

  const handleImpactTextChange = newText => {
    setImpactBehavior(newText);
    setTimeout(() => {
      dispatch(
        RecordEntryActions.setEntryData('impactBehavior', newText),
      );
    }, 300);
  };

  const handleDoMoreTextChange = newText => {
    setDoMoreData(newText);
    setTimeout(() => {
      dispatch(RecordEntryActions.setEntryData('doMore', newText));
    }, 300);
  };

  const handleDoLessTextChange = newText => {
    setDoLessData(newText);
    setTimeout(() => {
      dispatch(RecordEntryActions.setEntryData('doLess', newText));
    }, 300);
  };

  const handleStopDoingTextChange = newText => {
    setStopDoingData(newText);
    setTimeout(() => {
      dispatch(
        RecordEntryActions.setEntryData('stopDoing', newText),
      );
    }, 300);
  };

  const handleAdditionalTextChange = newText => {
    setAdditionalData(newText);
    setTimeout(() => {
      dispatch(
        RecordEntryActions.setEntryData('additionalNotes', newText),
      );
    }, 300);
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View>
          <View
            style={{
              marginBottom: 12,
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: '#B1B5C3',
              paddingBottom: 20,
            }}>
            <View
              style={{
                width: 24,
                height: 24,
                borderRadius: 32,
                backgroundColor: '#667080',
                opacity: 0.5,
                marginRight: 12,
              }}
            />
            <View>
              <Text
                style={{
                  fontSize: 16,
                  marginBottom: 4,
                  color: '#667080',
                  fontWeight: '700',
                  lineHeight: 22,
                }}>
                {feedbackData.step1.name}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 22,
                  color: '#667080',
                  fontWeight: '400',
                }}>
                {dateLogged}
              </Text>
            </View>
          </View>
          <View style={styles.topicContainer}>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 22,
                fontWeight: '700',
                color: '#667080',
              }}>
              Feedback Details
            </Text>
            <Text
              style={[styles.topicLabel, { marginBottom: 4, marginTop: 12 }]}>
              Type
            </Text>
            <View style={styles.topicPicker}>
              <Image
                source={
                  feedbackData.step2.title === 'Corrective'
                    ? Images.penEmoji
                    : Images.redHeartEmoji
                }
                resizeMode="contain"
                style={{ width: 24, height: 24, marginRight: 8 }}
              />
              <Text style={styles.topicLabel}>
                {feedbackData.step2.title} Feedback
              </Text>
            </View>

            <Text
              style={[styles.topicLabel, { marginBottom: 4, marginTop: 12 }]}>
              Topic
            </Text>
            <View style={styles.topicPicker}>
              <Text style={styles.topicLabel}>
                {topics.selectedLayerOne.name}
              </Text>
            </View>
            <Text
              style={[styles.topicLabel, { marginBottom: 4, marginTop: 12 }]}>
              Sub-topic
            </Text>
            <View style={styles.topicPicker}>
              <Text style={styles.topicLabel}>
                {topics.selectedLayerTwo.name}
              </Text>
            </View>
          </View>

          {/* start of added details */}
          {topics.selectedLayerTwo.requires_face_to_face && (
            <>
              <View
                style={{
                  marginTop: 24,
                  borderTopWidth: 1,
                  borderTopColor: '#B1B5C3',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 25,
                  }}>
                  <Text
                    style={{
                      color: '#667080',
                      fontWeight: '700',
                      fontSize: 16,
                      lineHeight: 24,
                    }}>
                    Schedule Details
                  </Text>
                </View>

                <View style={{ marginTop: 24 }}>
                  <Text
                    style={{
                      color: '#667080',
                      fontWeight: '700',
                      fontSize: 12,
                      lineHeight: 12,
                      textTransform: 'uppercase',
                    }}>
                    Date
                  </Text>
                  <View
                    style={{
                      minWidth: 327,
                      height: 48,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      borderWidth: 1,
                      borderColor: '#667080',
                      borderRadius: 12,
                      alignItems: 'center',
                      marginTop: 12,
                    }}>
                    <Text
                      style={{
                        color: '#667080',
                        fontWeight: '500',
                        fontSize: 14,
                        lineHeight: 24,
                        marginLeft: 18,
                      }}>
                      {meetingSched?.date}
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  marginTop: 24,
                  minWidth: 327,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  paddingBottom: 30,
                  borderBottomWidth: 1,
                  borderBottomColor: '#B1B5C3',
                }}>
                <View style={{ minWidth: 157.5, justifyContent: 'flex-start' }}>
                  <Text
                    style={{
                      color: '#667080',
                      fontWeight: '700',
                      fontSize: 12,
                      lineHeight: 12,
                      textTransform: 'uppercase',
                      width: 157.5,
                    }}>
                    Start time
                  </Text>

                  <View
                    style={{
                      height: 48,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      borderWidth: 1,
                      borderColor: '#667080',
                      borderRadius: 12,
                      alignItems: 'center',
                      marginTop: 12,
                    }}>
                    <Text
                      style={{
                        color: '#667080',
                        fontWeight: '500',
                        fontSize: 14,
                        lineHeight: 24,
                        marginLeft: 18,
                      }}>
                      {meetingSched.startTime}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    minWidth: 157.5,
                    justifyContent: 'flex-start',
                    marginLeft: 12,
                  }}>
                  <Text
                    style={{
                      color: '#667080',
                      fontWeight: '700',
                      fontSize: 12,
                      lineHeight: 12,
                      textTransform: 'uppercase',
                    }}>
                    End time
                  </Text>

                  <View
                    style={{
                      height: 48,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      borderWidth: 1,
                      borderColor: '#667080',
                      borderRadius: 12,
                      alignItems: 'center',
                      marginTop: 12,
                    }}>
                    <Text
                      style={{
                        color: '#667080',
                        fontWeight: '500',
                        fontSize: 14,
                        lineHeight: 24,
                        marginLeft: 18,
                      }}>
                      {meetingSched.endTime}
                    </Text>
                  </View>
                </View>
              </View>
            </>
          )}
          {/* end of added details */}
          <Text
            style={{
              fontSize: 16,
              lineHeight: 22,
              fontWeight: '700',
              color: '#667080',
              marginTop: 16,
            }}>
            Feedback Details
          </Text>
          <View style={styles.noteContainer}>
            <Text style={styles.noteText}>
              Check your feedback details before sending it to your team member.
              You can't edit your feedback once they are sent.
            </Text>
          </View>
          <View style={styles.entriesContainer}>
            <Text style={styles.topicLabel}>
              What did your team member do that caught your attention?
            </Text>
            <View style={styles.answerContainer}>
              <TextInput
                style={styles.answerText}
                multiline
                numberOfLines={30}
                textAlignVertical="top"
                value={attentionDetail}
                onChangeText={newText => handleAttentionTextChange(newText)}
              />
            </View>
            <Text style={styles.topicLabel}>
              What impact does this behavior have on the business or the team?
            </Text>
            <View style={styles.answerContainer}>
              <TextInput
                style={styles.answerText}
                multiline
                numberOfLines={30}
                textAlignVertical="top"
                value={impactBehavior}
                onChangeText={newText => handleImpactTextChange(newText)}
              />
            </View>
            <Text style={styles.topicLabel}>
              I want my team member to continue and do more...
            </Text>
            <View style={styles.answerContainer}>
              <TextInput
                style={styles.answerText}
                multiline
                numberOfLines={30}
                textAlignVertical="top"
                value={doMoreData}
                onChangeText={newText => handleDoMoreTextChange(newText)}
              />
            </View>
            <Text style={styles.topicLabel}>
              I want my team member to do less...
            </Text>
            <View style={styles.answerContainer}>
              <TextInput
                style={styles.answerText}
                multiline
                numberOfLines={30}
                textAlignVertical="top"
                value={doLessData}
                onChangeText={newText => handleDoLessTextChange(newText)}
              />
            </View>
            {feedbackData.step2.title === 'Corrective' && (
              <>
                <Text style={styles.topicLabel}>
                  I want my team member to stop doing...
                </Text>
                <View style={styles.answerContainer}>
                  <TextInput
                    style={styles.answerText}
                    multiline
                    numberOfLines={30}
                    textAlignVertical="top"
                    value={stopDoingData}
                    onChangeText={newText => handleStopDoingTextChange(newText)}
                  />
                </View>
              </>
            )}
            <Text style={styles.topicLabel}>Anything else to add?</Text>
            <View style={styles.answerContainer}>
              <TextInput
                style={styles.answerText}
                multiline
                numberOfLines={30}
                textAlignVertical="top"
                value={additionalData}
                onChangeText={newText => handleAdditionalTextChange(newText)}
              />
            </View>
          </View>
          <Button
            mode="contained"
            onPress={() => handleSendFeedback()}
            style={{
              marginTop: 24,
              marginBottom: 30,
              height: 48,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            Send Feedback
          </Button>
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

