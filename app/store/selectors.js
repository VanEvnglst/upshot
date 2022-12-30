/* ------------- User Selectors ------------- */
export const getUserName = state => state.user.get('userName');
export const getUserRole = state => state.user.get('role');

/* ------------- Auth Selectors ------------- */
export const getSignInState = state => state.authentication.get('isSignedIn');
export const getSignUpState = state => state.authentication.get('newSignUp');
export const getAuthLoading = state => state.authentication.get('fetching');
export const getSignInError = state => state.authentication.get('error');

/* ------------- Feedback Selectors ------------- */
export const getCurrentJourney = state => state.feedback.get('currentJourney');
// export const getStaffList = state => state.feedback.get('teamMembers').data;
export const getStaffName = state => state.feedback.get('chosenTeamMember');
export const getActiveJourneyError = state =>
  state.feedback.get('currentJourney').error;
export const getExchangeMaxStep = state => state.feedback.get('exchangeMaxStep');
export const getExchangeActiveStep = state => state.feedback.get('exchangeActiveStep');
export const getFeedbackExchange = state => state.feedback.get('exchangeData');

/* ------------- Feedback History Selectors ------------- */
export const getActiveJourneys = state =>
  state.feedbackHistory.get('activeJourneyList');
export const getRecentJourneys = state =>
  state.feedbackHistory.get('recentJourneyList');
export const getJourneyError = state => state.feedbackHistory.get('error');
export const getAssessmentProgress = state => state.feedbackHistory.get('assessmentProgress');
export const getUpcomingDiscussions = state => state.feedbackHistory.get('upcomingDiscussions');
export const getOngoingJourneysCount = state => state.feedbackHistory.get('ongoingJourneys');
export const getScheduledCount = state => state.feedbackHistory.get('scheduledDiscussions');
export const getCompletedJourneysCount = state => state.feedbackHistory.get('completedJourneys');
export const getTotalJourneysCount = state => state.feedbackHistory.get('totalJourneys');
export const getOngoingJourneysList = state => state.feedbackHistory.get('ongoingJourneysList');

/* ------------- Capture Feedback Moment Selectors ------------- */
export const getActiveCaptureStep = state =>
state.captureMoment.get('activeStep');
export const getMaxCaptureStep = state => state.captureMoment.get('maxStep');
export const getStaffList = state => state.captureMoment.get('staffMembers');
export const getCaptureData = state => state.captureMoment.get('data');
export const getMainTopics = state => state.captureMoment.get('layerOneTopics');
export const getSubTopics = state => state.captureMoment.get('layerTwoTopics');

/* ------------- Record Entries Selectors ------------- */
export const getRecordEntryActiveStep = state => state.recordEntry.get('activeStep');
export const getRecordEntryMaxStep = state => state.recordEntry.get('maxStep');


/* ------------- Frontliner Feedback Selectors ------------- */
export const getFLFeedbackId = state => state.frontlinerFeedback.get('selectedFeedback').id;
export const getFLFeedbackType = state => state.frontlinerFeedback.get('selectedFeedback').cor_or_pos;
export const getFLFeedbackDate = state => state.frontlinerFeedback.get('selectedFeedback').date;
export const getFLFeedbackData = state => state.frontlinerFeedback.get('selectedFeedback');
export const getFLResponseData = state => state.frontlinerFeedback.get('clarifications');
export const getFLResponseMaxStep = state => state.frontlinerFeedback.get('maxStep');
export const getFLResponseActiveStep = state => state.frontlinerFeedback.get('activeStep');
export const getManagerFeedbackResponse = state => state.frontlinerFeedback.get('managerResponse');

/* ------------- Leadership Assessment Selectors ------------- */
export const getOverviewStep = state => state.leadershipSkillArea.get('overviewActiveStep');
export const getOverviewMaxStep = state => state.leadershipSkillArea.get('overviewMaxStep');
export const getExtendedStep = state => state.leadershipSkillArea.get('extendedActiveStep');
export const getExtendedMaxStep = state => state.leadershipSkillArea.get('extendedMaxStep');
export const getCategoryStep = state => state.leadershipSkillArea.get('categoryActiveStep');
export const getCategoryMaxStep = state => state.leadershipSkillArea.get('categoryMaxStep');
export const getCategoryStatus = state => state.leadershipSkillArea.get('skillAreaTestSteps');
export const getCompletedCount = state => state.leadershipSkillArea.get('testFinishedCount');
export const getExtendedTestResults = state => state.leadershipSkillArea.get('extendedTestResults');