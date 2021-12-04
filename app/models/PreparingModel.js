import labels from 'app/locales/en';

const { describeDiscuss, createActionPlan } =
  labels.feedbackPreparing;

const preparingObservations = [
  {
    id: 1,
    title: describeDiscuss.observeOption1
  },
  {
    id: 2,
    title: describeDiscuss.observeOption2
  },
];

export default preparingObservations;

const preparingActionPlan = [
  {
    id: 1,
    title: createActionPlan.brainstormOption1
  },
  {
    id: 2,
    title: createActionPlan.brainstormOption2
  },
];

export default preparingActionPlan;

const preparingSuggestions = [
  {
    id: 1,
    title: createActionPlan.suggestionOption1
  },
  {
    id: 2,
    title: createActionPlan.suggestionOption2
  },
  {
    id: 3,
    title: createActionPlan.suggestionOption3
  }
];

export default preparingSuggestions;


