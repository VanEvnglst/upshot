/* ------------- User Selectors ------------- */
export const getUserFirstName = state => state.user.get('firstName');

/* ------------- Auth Selectors ------------- */
export const getSignInState = state => state.authentication.get('isSignedIn');

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

/* ------------- Feedback History Selectors ------------- */
export const getActiveJourneys = state =>
  state.feedbackHistory.get('activeJourneyList');
export const getRecentJourneys = state =>
  state.feedbackHistory.get('recentJourneyList');

/* ------------- Feedback Documenting Selectors ------------- */
export const getDocumenting = state => state.documenting;
export const getDocumentingId = state => state.documenting.get('id');
export const getDocumentingStep = state => state.documenting.get('activeStep');
export const getDocumentingMaxSteps = state => state.documenting.get('maxStep');
export const getStep1Data = state => state.documenting.get('step1');
export const getStep2Data = state => state.documenting.get('step2');
export const getStep3Data = state => state.documenting.get('step3');
export const getStep4Data = state => state.documenting.get('step4');
export const getReminderDate = state => state.documenting.get('reminderTime');

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


/* ------------- Feedback Discussing Selectors ------------- */
export const getDiscussing = state => state.discussing;
export const getDiscussingId = state => state.discussing.get('id');


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


/* ------------- Feedback Sharing Selectors ------------- */
export const getSharing = state => state.sharing;
export const getSharingId = state => state.sharing.get('id');
export const getSharingStep = state => state.sharing.get('activeStep');
export const getSharingMaxSteps = state => state.sharing.get('maxStep');
export const getSharingStep1Data = state => state.sharing.get('step1');
export const getSharingStep2Data = state => state.sharing.get('step2');
export const getSharingStep3Data = state => state.sharing.get('step3');
