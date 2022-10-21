import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { UserAvatar } from 'app/components';
import Images from 'app/assets/images';
import styles from './styles';

const JourneyDetails = props => {
  const { navigation, route } = props;
  const dispatch = useDispatch();
  const [captureFeedback, setCaptureFeedback] = useState({
    inProgress: true,
    done: false,
  });
  const [recordEntry, setRecordEntry] = useState({
    inProgress: false,
    done: false,
  });
  const [reviewFeedback, setReviewFeedback] = useState({
    inProgress: false,
    done: false,
  });
  const [feedbackReceived, setFeedbackReceived] = useState({
    inProgress: false,
    done: false,
    needsClarification: false,
  });
  const [respondClarification, setRespondClarification] = useState({
    inProgress: false,
    done: false,
  });
  const [reflectDiscussion, setReflectDiscussion] = useState({
    inProgress: false,
    done: false,
  });

  const resetValue = () => {
    setCaptureFeedback({ inProgress: true, done: false });
    setRecordEntry({ inProgress: false, done: false });
    setReviewFeedback({ inProgress: false, done: false });
    setFeedbackReceived({
      inProgress: false,
      done: false,
      needsClarification: false,
    });
    setRespondClarification({
      inProgress: false,
      done: false,
      clarified: false,
    });
    setReflectDiscussion({ inProgress: false });
  };

  const capture = () => {
    setCaptureFeedback({ inProgress: false, done: true });
    setRecordEntry({ ...recordEntry, inProgress: true });
  };

  const record = () => {
    setRecordEntry({ inProgress: false, done: true });
    setReviewFeedback({ ...reviewFeedback, inProgress: true });
  };

  const review = () => {
    setReviewFeedback({ inProgress: false, done: true });
    setFeedbackReceived({ ...feedbackReceived, inProgress: true });
  };

  const receive = () => {
    setReviewFeedback({ inProgress: false, done: true });
    setFeedbackReceived({
      ...feedbackReceived,
      inProgress: true,
    });

    setTimeout(() => {
      setFeedbackReceived({
        inProgress: false,
        done: true,
        needsClarification: false,
      });
      setReflectDiscussion({
        ...reflectDiscussion,
        inProgress: true,
      });
    }, 5000);
  };

  const needsClarify = () => {
    setReviewFeedback({ inProgress: false, done: true });
    setFeedbackReceived({
      ...feedbackReceived,
      inProgress: true,
    });

    setTimeout(() => {
      setFeedbackReceived({
        inProgress: false,
        done: true,
        needsClarification: true,
      });
      setRespondClarification({
        ...respondClarification,
        inProgress: true,
      });
    }, 5000);
  };

  const respond = () => {
    setRespondClarification({
      inProgress: false,
      clarified: true,
      done: true,
    });
    setReflectDiscussion({
      ...reflectDiscussion,
      inProgress: true,
    });
  };

  const CaptureFeedbackProgress = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        {/* This should be date completed  */}
        <View style={styles.dateContainer}>
          {captureFeedback.done ? (
            <Text style={styles.progressText}>Oct 20, 5:00 PM</Text>
          ) : null}
        </View>
        <View style={styles.signPostContainer}>
          <View
            style={[
              styles.signPost,
              captureFeedback.inProgress && styles.inProgressTaskPost,
              captureFeedback.done && styles.completedTaskPost,
            ]}>
            <Icon name={'checkmark-sharp'} size={14} color={'#777E90'} />
          </View>
          <View
            style={[
              styles.postLine,
              captureFeedback.done && styles.completedTaskPost,
            ]}
          />
        </View>
        <View style={styles.progressContent}>
          {captureFeedback.inProgress ? (
            <>
              <Text style={styles.inProgressLabel}>In Progress</Text>
              <Text style={styles.taskTitleText}>Capture Feedback</Text>
              <Text style={styles.progressText}>
                Complete your feedback by including additional details.
              </Text>
              <Button
                mode="contained"
                onPress={() => capture()}
                style={styles.continueButton}>
                <Text style={styles.continueText}>Continue</Text>
                <Icon name={'arrow-forward'} size={14} color={'white'} />
              </Button>
            </>
          ) : captureFeedback.done ? (
            <Text style={styles.progressText}>
              You finished capturing feedback for Ivan Evangelista.
            </Text>
          ) : (
            <Text style={styles.progressText}>
              You finished capturing feedback for Ivan Evangelista.
            </Text>
          )}
        </View>
      </View>
    );
  };

  const RecordEntriesProgress = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        {/* This should be date completed  */}
        <View style={styles.dateContainer}>
          {recordEntry.done ? (
            <Text style={styles.progressText}>Oct 20, 5:15 PM</Text>
          ) : null}
        </View>
        <View style={styles.signPostContainer}>
          <View
            style={[
              styles.signPost,
              recordEntry.inProgress && styles.inProgressTaskPost,
              recordEntry.done && styles.completedTaskPost,
            ]}>
            <Icon name={'checkmark-sharp'} size={14} color={'#777E90'} />
          </View>
          <View
            style={[
              styles.postLine,
              recordEntry.done && styles.completedTaskPost,
            ]}
          />
        </View>
        <View style={styles.progressContent}>
          {recordEntry.inProgress ? (
            <>
              <Text style={styles.inProgressLabel}>In Progress</Text>
              <Text style={styles.taskTitleText}>Record Entries</Text>
              <Text style={styles.progressText}>
                Complete your feedback by including additional details.
              </Text>
              <Button
                mode="contained"
                onPress={() => record()}
                style={styles.continueButton}>
                <Text style={styles.continueText}>Continue</Text>
                <Icon name={'arrow-forward'} size={14} color={'white'} />
              </Button>
            </>
          ) : recordEntry.done ? (
            <Text style={styles.progressText}>
              You completed your feedback document by recording entries.
            </Text>
          ) : (
            <Text style={styles.progressText}>
              You record additional entries to your feedback.
            </Text>
          )}
        </View>
      </View>
    );
  };

  const ReviewAndSubmitProgress = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        {/* This should be date completed  */}
        <View style={styles.dateContainer}>
          {reviewFeedback.done ? (
            <Text style={styles.progressText}>Oct 20, 5:25 PM</Text>
          ) : null}
        </View>
        <View style={styles.signPostContainer}>
          <View
            style={[
              styles.signPost,
              reviewFeedback.inProgress && styles.inProgressTaskPost,
              reviewFeedback.done && styles.completedTaskPost,
            ]}>
            <Icon name={'checkmark-sharp'} size={14} color={'#777E90'} />
          </View>
          <View
            style={[
              styles.postLine,
              reviewFeedback.done && styles.completedTaskPost,
            ]}
          />
        </View>
        <View style={styles.progressContent}>
          {reviewFeedback.inProgress ? (
            <>
              <Text style={styles.inProgressLabel}>In Progress</Text>
              <Text style={styles.taskTitleText}>{`Review & Submit`}</Text>
              <Text style={styles.progressText}>
                Review your whole feedback and submit it for Ivan Evangelista to
                read.
              </Text>
              <Button
                mode="contained"
                onPress={() => receive()}
                style={styles.continueButton}>
                <Text style={styles.continueText}>Continue</Text>
                <Icon name={'arrow-forward'} size={14} color={'white'} />
              </Button>
              <Button
                mode="contained"
                onPress={() => needsClarify()}
                style={styles.continueButton}>
                <Text style={styles.continueText}>Clarify</Text>
                <Icon name={'arrow-forward'} size={14} color={'white'} />
              </Button>
            </>
          ) : reviewFeedback.done ? (
            <Text style={styles.progressText}>
              You reviewed your feedback and sent it for submission.
            </Text>
          ) : (
            <Text style={styles.progressText}>
              You review and submit feedback entries.
            </Text>
          )}
        </View>
      </View>
    );
  };

  const ReceiveFeedbackProgress = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        {/* This should be date completed  */}
        <View style={styles.dateContainer}>
          {feedbackReceived.done ? (
            <Text style={styles.progressText}>Oct 20, 5:45 PM</Text>
          ) : null}
          {/**/}
        </View>
        <View style={styles.signPostContainer}>
          <View
            style={[
              styles.signPost,
              feedbackReceived.inProgress && styles.inProgressTaskPost,
              feedbackReceived.done && styles.completedTaskPost,
            ]}>
            <Icon name={'checkmark-sharp'} size={14} color={'#777E90'} />
          </View>
          <View
            style={[
              styles.postLine,
              feedbackReceived.done && styles.completedTaskPost,
              !feedbackReceived.done && styles.toContinuePostLine,
            ]}
          />
          {!feedbackReceived.done ? (
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 6,
                backgroundColor: '#777E90',
              }}
            />
          ) : null}
        </View>
        <View style={styles.progressContent}>
          {feedbackReceived.inProgress ? (
            <>
              <Text style={styles.inProgressLabel}>In Progress</Text>
              <Text style={styles.taskTitleText}>Waiting for response...</Text>
              <Text style={styles.progressText}>
                Wait for Ivan Evangelista to view the feedback you sent them to
                know the next steps.
              </Text>
            </>
          ) : feedbackReceived.done ? (
            <Text style={styles.progressText}>
              {feedbackReceived.needsClarification
                ? 'Ivan Evangelista viewed your feedback.'
                : 'Ivan Evangelista viewed and understood your feedback.'}
            </Text>
          ) : (
            <Text style={styles.progressText}>
              Ivan Evangelista receives your feedback.
            </Text>
          )}
        </View>
      </View>
    );
  };

  const WaitingForResponseProgress = () => {
    console.log('return here');
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.dateContainer}>
          {respondClarification.done ? (
            <Text style={styles.progressText}>Oct 20, 6:15 PM</Text>
          ) : null}
        </View>
        <View style={styles.signPostContainer}>
          <View
            style={[
              styles.signPost,
              respondClarification.inProgress &&
                respondClarification.clarified &&
                styles.inProgressTaskPost,
              respondClarification.done && styles.completedTaskPost,
            ]}>
            <Icon name={'checkmark-sharp'} size={14} color={'#777E90'} />
          </View>
          <View
            style={[
              styles.postLine,
              respondClarification.inProgress &&
                !respondClarification.clarified &&
                styles.toContinuePostLine,
              respondClarification.done && styles.completedTaskPost,
            ]}
          />
          {respondClarification.inProgress &&
          !respondClarification.clarified ? (
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 6,
                backgroundColor: '#777E90',
              }}
            />
          ) : null}
        </View>
        <View style={styles.progressContent}>
          {respondClarification.clarified && !respondClarification.done ? (
            <>
              <Text style={styles.inProgressLabel}>In Progress</Text>
              <Text style={styles.taskTitleText}>Waiting for response...</Text>
              <Text style={styles.progressText}>
                Wait for Ivan Evangelista to view the feedback you sent them to
                know the next steps.
              </Text>
            </>
          ) : respondClarification.done ? (
            <Text style={styles.progressText}>
              Ivan Evangelista viewed your response.
            </Text>
          ) : (
            <Text style={styles.progressText}>
              Ivan Evangelista viewed your response.
            </Text>
          )}
        </View>
      </View>
    );
  };

  const RespondClarificationsProgress = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        {/* This should be date completed  */}
        <View style={styles.dateContainer}>
          {respondClarification.done ? (
            <Text style={styles.progressText}>Oct 20, 6:00 PM</Text>
          ) : null}
          {/**/}
        </View>
        <View style={styles.signPostContainer}>
          <View
            style={[
              styles.signPost,
              respondClarification.inProgress && styles.inProgressTaskPost,
              respondClarification.done && styles.completedTaskPost,
            ]}>
            <Icon name={'checkmark-sharp'} size={14} color={'#777E90'} />
          </View>
          <View
            style={[
              styles.postLine,
              respondClarification.done && styles.completedTaskPost,
              feedbackReceived.waitingForResponse && styles.toContinuePostLine,
            ]}
          />
        </View>
        <View style={styles.progressContent}>
          {respondClarification.inProgress ? (
            <>
              <Text style={styles.inProgressLabel}>In Progress</Text>
              <Text style={styles.taskTitleText}>
                Respond to Clarifications
              </Text>
              <Text style={styles.progressText}>
                Answer to Ivan Evangelista's request for clarity.
              </Text>
              <Button
                mode="contained"
                onPress={() => respond()}
                style={styles.continueButton}>
                <Text style={styles.continueText}>View Responses</Text>
                <Icon name={'arrow-forward'} size={14} color={'white'} />
              </Button>
            </>
          ) : respondClarification.done ? (
            <Text style={styles.progressText}>
              You responded to Ivan Evangelista's request for clarity.
            </Text>
          ) : null}
        </View>
      </View>
    );
  };

  const ReflectDiscussionProgress = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        {/* This should be date completed  */}
        <View style={styles.dateContainer}>
          {reflectDiscussion.done ? (
            <Text style={styles.progressText}>Oct 20, 5:00 PM</Text>
          ) : null}
          {/**/}
        </View>
        <View style={styles.signPostContainer}>
          <View
            style={[
              styles.signPost,
              reflectDiscussion.inProgress && styles.inProgressTaskPost,
            ]}>
            <Icon name={'checkmark-sharp'} size={14} color={'#777E90'} />
          </View>
          <View style={[styles.postLine]} />
          {reflectDiscussion.inProgress ? (
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 6,
                backgroundColor: '#777E90',
              }}
            />
          ) : null}
        </View>
        <View style={styles.progressContent}>
          {reflectDiscussion.inProgress ? (
            <>
              <Text style={styles.inProgressLabel}>In Progress</Text>
              <Text style={styles.taskTitleText}>Reflect on Discussion</Text>
              <Text style={styles.progressText}>
                Proceed to the post discussion reflection checklist.
              </Text>
              <Button
                mode="contained"
                onPress={() => console.log('continue')}
                style={styles.transparentButton}>
                <Text style={styles.continueText}>Continue</Text>
                <Icon name={'arrow-forward'} size={14} color={'white'} />
              </Button>
            </>
          ) : null}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            accessibility="button"
            onPress={() => navigation.replace('Home')}>
            <Icon
              name="chevron-back-outline"
              size={20}
              color={'white'}
              // style={styles.iconColor}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitleText}>Feedback Session</Text>
          <Image
            source={Images.upshotLogo}
            resizeMode="contain"
            style={styles.headerIcon}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            paddingTop: 24,
          }}>
          <UserAvatar style={{ width: 62, height: 62 }} />
          <Text style={styles.memberNameText}>Ivan Evangelista</Text>
          <Text style={styles.roleText}>Team Member</Text>
          <View style={styles.feedbackStatusContainer}>
            <View
              style={[
                styles.typeContainer,
                styles.correctiveContainer,
                { marginRight: 4 },
              ]}>
              <Text style={[styles.typeText, styles.correctiveText]}>
                Corrective Feedback
              </Text>
            </View>
            <View style={[styles.typeContainer, styles.ongoingContainer]}>
              <Text style={[styles.typeText, styles.ongoingText]}>Ongoing</Text>
            </View>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <CaptureFeedbackProgress />
          <RecordEntriesProgress />
          <ReviewAndSubmitProgress />
          <ReceiveFeedbackProgress />
          {feedbackReceived.done && feedbackReceived.needsClarification ? (
            <>
              <RespondClarificationsProgress />
              <WaitingForResponseProgress />
            </>
          ) : null}
          {(feedbackReceived.done && !feedbackReceived.needsClarification) ||
          (respondClarification.done && respondClarification.clarified) ? (
            <ReflectDiscussionProgress />
          ) : null}
          {true ? (
            <Button
              mode="contained"
              onPress={() => resetValue()}
              style={styles.continueButton}>
              Close feedback
            </Button>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

export default JourneyDetails;

JourneyDetails.propTypes = {
  navigation: PropTypes.object,
};

JourneyDetails.defaultProps = {
  navigation: {},
};
