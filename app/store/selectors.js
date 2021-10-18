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


/* ------------- Feedback Documenting Selectors ------------- */
export const getDocumentingStep = state => state.documenting.get('activeStep');
export const getDocumentingMaxSteps = state => state.documenting.get('maxStep');