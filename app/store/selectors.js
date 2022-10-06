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
export const getFeedbackFlowList = state =>
  state.feedback.get('feedbackFlow').data;
export const getFeedbackTypeList = state =>
  state.feedback.get('feedbackType').data;
export const getRelatedTopicsList = state =>
  state.feedback.get('relatedTopics').data;
export const getChosenFlow = state => state.feedback.get('chosenFlow');
export const getChosenType = state => state.feedback.get('chosenType');
export const getStaffList = state => state.feedback.get('teamMembers').data;
export const getStaffName = state => state.feedback.get('chosenTeamMember');
export const getActiveJourneyError = state =>
  state.feedback.get('currentJourney').error;

/* ------------- Feedback History Selectors ------------- */
export const getActiveJourneys = state =>
  state.feedbackHistory.get('activeJourneyList');
export const getRecentJourneys = state =>
  state.feedbackHistory.get('recentJourneyList');
export const getJourneyError = state => state.feedbackHistory.get('error');

/* ------------- Feedback Documenting Selectors ------------- */
export const getDocumenting = state => state.documenting;
export const getDocumentingFetching = state =>
  state.documenting.get('fetching');
export const getDocumentingId = state => state.documenting.get('id');
export const getDocumentingStep = state => state.documenting.get('activeStep');
export const getDocumentingMaxSteps = state => state.documenting.get('maxStep');
export const getStep1Data = state => state.documenting.get('step1');
export const getStep2Data = state => state.documenting.get('step2');
export const getStep3Data = state => state.documenting.get('step3');
export const getStep4Data = state => state.documenting.get('step4');
export const getStep5Data = state => state.documenting.get('step5');
export const getReminderDate = state => state.documenting.get('reminderTime');
export const getOtherTopic = state => state.documenting.get('otherTopic');

/* ------------- Feedback Preparing Selectors ------------- */
export const getPreparing = state => state.preparing;
export const getPreparingLoading = state => state.preparing.get('fetching');
export const getPreparingId = state => state.preparing.get('id');
export const getPreparingStep = state => state.preparing.get('activeStep');
export const getPreparingMaxSteps = state => state.preparing.get('maxStep');
export const getPrepStep1Data = state => state.preparing.get('step1');
export const getPrepStep2Data = state => state.preparing.get('step2');
export const getPrepStep3Data = state => state.preparing.get('step3');
export const getPrepStep3BData = state => state.preparing.get('step3B');
export const getPrepStep4Data = state => state.preparing.get('step4');
export const getPrepStep4BData = state => state.preparing.get('step4B');
export const getPrepStep5Data = state => state.preparing.get('step5');
export const getPrepStep5BData = state => state.preparing.get('step5B');
export const getPrepStep5CData = state => state.preparing.get('step5C');
export const getPreparingSched = state => state.preparing.get('discussionSchedule');

/* ------------- Feedback Discussing Selectors ------------- */
export const getDiscussing = state => state.discussing;
export const getDiscussingId = state => state.discussing.get('id');
export const getDiscussingData = state => state.discussing.get('data');
export const getDiscussingFetching = state => state.discussing.get('fetching');
export const getDiscussingPlans = state => state.discussing.get('actionPlan');

/* ------------- Feedback Reflecting Selectors ------------- */
export const getReflecting = state => state.reflecting;
export const getReflectingStep = state => state.reflecting.get('activeStep');
export const getReflectingMaxSteps = state => state.reflecting.get('maxStep');
export const getReflectingId = state => state.reflecting.get('id');
export const getReflectStep1Data = state => state.reflecting.get('step1');
export const getReflectStep2Data = state => state.reflecting.get('step2');
export const getReflectStep4Data = state => state.reflecting.get('step4');
export const getReflectingCriteria = state =>
  state.reflecting.get('reflectingCriteria');
export const getReflectingError = state =>
  state.reflecting.get('error');
export const getActionPlan = state => state.reflecting.get('actionPlan');

/* ------------- Feedback Sharing Selectors ------------- */
export const getSharing = state => state.sharing;
export const getSharingId = state => state.sharing.get('id');
export const getSharingStep = state => state.sharing.get('activeStep');
export const getSharingMaxSteps = state => state.sharing.get('maxStep');
export const getSharingStep1Data = state => state.sharing.get('step1');
export const getSharingStep2Data = state => state.sharing.get('step2');
export const getSharingStep3Data = state => state.sharing.get('step3');
export const getSharingFetching = state =>
  state.sharing.get('fetching');


/* ------------- Messages  Selectors ------------- */
export const getMessagesFetching = state => state.messages.get('fetching');
export const getCurrentMessage = state => state.messages.get('currentMessage');
export const getMessages = state => state.messages.get('messages');



/* ------------- Direct Report Survey Selectors ------------- */
export const getSurveyStep = state => state.survey.get('activeStep');
export const getSurveyMaxStep = state => state.survey.get('maxStep');
export const getSurveyFetching = state => state.survey.get('fetching');
export const getSurveyId = state => state.survey.get('id');
export const getDRCriteria = state => state.survey.get('selfEvalCriteria');
export const getSelfEval = state => state.survey.get('selfEvaluation');
export const getManagerCriteria = state => state.survey.get('managerCriteria');
export const getManagerEval = state => state.survey.get('managerEvaluation');
export const getSatisfactionData = state => state.survey.get('overallSatisfaction');
export const getFeelingData = state => state.survey.get('howDidYouFeel');
export const getManagerName = state => state.survey.get('manager');

/* ------------- Frontliner Feedback Selectors ------------- */
export const getFLFeedbackId = state => state.frontlinerFeedback.get('selectedFeedback').id;
export const getFLFeedbackType = state => state.frontlinerFeedback.get('selectedFeedback').cor_or_pos;
export const getFLFeedbackDate = state => state.frontlinerFeedback.get('selectedFeedback').date;
export const getFLFeedbackData = state => state.frontlinerFeedback.get('selectedFeedback');
export const getFLResponseData = state => state.frontlinerFeedback.get('clarifications');
export const getFLResponseMaxStep = state => state.frontlinerFeedback.get('maxStep');
export const getFLResponseActiveStep = state => state.frontlinerFeedback.get('activeStep');

/* ------------- Leadership Assessment Selectors ------------- */
export const getOverviewStep = state => state.leadershipSkillArea.get('overviewActiveStep');
export const getOverviewMaxStep = state => state.leadershipSkillArea.get('overviewMaxStep');
export const getExtendedStep = state => state.leadershipSkillArea.get('extendedActiveStep');
export const getExtendedMaxStep = state => state.leadershipSkillArea.get('extendedMaxStep');
export const getCategoryStep = state => state.leadershipSkillArea.get('categoryActiveStep');
export const getCategoryMaxStep = state => state.leadershipSkillArea.get('categoryMaxStep');
