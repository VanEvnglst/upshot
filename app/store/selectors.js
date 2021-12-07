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
export const getRecentJourneys = state =>
  state.feedbackHistory.get('recentJourneyList');

/* ------------- Feedback Documenting Selectors ------------- */
export const getDocumentingId = state => state.documenting.get('id');
export const getDocumentingStep = state => state.documenting.get('activeStep');
export const getDocumentingMaxSteps = state => state.documenting.get('maxStep');
export const getStep1Data = state => state.documenting.get('step1');
export const getStep2Data = state => state.documenting.get('step2');
export const getStep3Data = state => state.documenting.get('step3');
export const getStep4Data = state => state.documenting.get('step4');



/* ------------- Feedback Preparing Selectors ------------- */
export const getPreparingLoading = state => state.preparing.get('fetching');
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
