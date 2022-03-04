import labels from 'app/locales/en';

const { survey } = labels.frontliner;

const managerEval = [
  { 
    id: 1,
    key: 'provideInfo',
    question: survey.provideInfo,    
  },
  {
    id: 2,
    key: 'calmFeedback',
    question: survey.calmFeedback,
  },
  {
    id: 3,
    key: 'listenedToThoughts',
    question: survey.listenedToThoughts,
  },
  {
    id: 4,
    key: 'gaveFeedbackSoon',
    question: survey.gaveFeedbackSoon,
  },
  {
    id: 5,
    key: 'establishRapport',
    question: survey.establishRapport
  },
  { 
    id: 6,
    key: 'clearlyStatePurpose',
    question: survey.clearlyStatePurpose,
  },
  {
    id: 7,
    key: 'involveInPlan',
    question: survey.involveInPlan
  },
  { 
    id: 8,
    key: 'sentAction',
    question: survey.sentAction
  }
];

export default managerEval;