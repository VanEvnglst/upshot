import labels from '../locales/en';

const { feedbackIntro } = labels;
var discussionTypes = [
  {
    id: 1,
    type: 'prepared',
    title: feedbackIntro.prepareFeedback,
    hint: feedbackIntro.prepareFeedbackHint,
  },
  {
    id: 2,
    type: 'onTheSpot',
    title: feedbackIntro.onTheSpotFeedback,
    hint: feedbackIntro.onTheSpotFeedbackHint,
  },
];

export default discussionTypes;
