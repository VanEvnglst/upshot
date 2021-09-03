import labels from '../locales/en';

const { feedbackDocumenting } = labels;
var feedbackTypes = [
  {
    id: 1,
    type: 'positive',
    title: feedbackDocumenting.positive,
    hint: feedbackDocumenting.positiveHint,
  },
  {
    id: 2,
    type: 'corrective',
    title: feedbackDocumenting.corrective,
    hint: feedbackDocumenting.correctiveHint,
  },
];

export default feedbackTypes;
