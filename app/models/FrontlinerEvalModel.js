import labels from 'app/locales/en';

const { survey } = labels;

const frontlinerEval = [
  {
    id: 1,
    key: 'provideFacts',
    question: survey.iProvidedFacts,
  },
  {
    id: 2,
    key: 'listenToFeedback',
    question: survey.iListenedToFeedback,
  },
  {
    id: 3,
    key: 'askQuestions',
    question: survey.iAskedQuestions,
  },
  {
    id: 4,
    key: 'gaveSuggestions',
    question: survey.iGaveSuggestions,
  },
  {
    id: 5,
    key: 'honest',
    question: survey.iWasHonest,
  },
];

export default frontlinerEval;
