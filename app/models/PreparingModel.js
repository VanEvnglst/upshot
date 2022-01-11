import labels from 'app/locales/en';

const { describeDiscuss, createActionPlan, checkOut } =
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

const preparingCheckout = [
  {
    id: 1,
    title: checkOut.checkoutFeelings
  },
  {
    id: 2,
    title: checkOut.checkoutComfortable
  },
  {
    id: 3,
    title: checkOut.anythingElse
  }
]


export { preparingObservations, preparingActionPlan, preparingSuggestions, preparingCheckout };



