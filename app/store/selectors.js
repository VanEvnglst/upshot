/* ------------- User Selectors ------------- */
export const getUserFirstName = state => state.user.get('firstName');

/* ------------- Feedback Selectors ------------- */
export const getCurrentJourney = state => state.feedback.get('currentJourney');
export const getFeedbackFlowList = state =>
  state.feedback.get('feedbackFlow').data;
export const getFeedbackTypeList = state =>
  state.feedback.get('feedbackType').data;
export const getChosenFlow = state => state.feedback.get('chosenFlow');
