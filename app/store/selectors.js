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
export const getStaffList = state => state.feedback.get('teamMembers').data;


/* ------------- Feedback History Selectors ------------- */
export const getActiveJourneys = state =>
  state.feedbackHistory.get('activeJourneyList');
export const getRecentJourneys = state => state.feedbackHistory.get('recentJourneyList');


/* ------------- Feedback Documenting Selectors ------------- */
export const getDocumentingStep = state => state.documenting.get('activeStep');
export const getDocumentingMaxSteps = state => state.documenting.get('maxStep');
export const getStep1Data = state => state.documenting.get('step1');
export const getStep2Data = state => state.documenting.get('step2');
export const getStep3Data = state => state.documenting.get('step3');
export const getStep4Data = state => state.documenting.get('step4');


/* ------------- Feedback Preparing Selectors ------------- */
export const getPreparingStep = state => state.preparing.get('activeStep');
export const getPreparingMaxSteps = state => state.preparing.get('maxStep');