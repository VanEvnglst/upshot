import labels from '../locales/en';

const { feedbackDocumenting } = labels;
var feedbackTopics = [
  {
    id: 1,
    type: 'quality-improvement',
    title: feedbackDocumenting.qualityImprovement,
  },
  {
    id: 2,
    type: 'customer-satisfaction',
    title: feedbackDocumenting.customerSatisfaction,
  },
  {
    id: 3,
    type: 'serviceTime',
    title: feedbackDocumenting.serviceTime,
  },
  {
    id: 4,
    type: 'productivity',
    title: feedbackDocumenting.productivity,
  },
  {
    id: 5,
    type: 'attitude',
    title: feedbackDocumenting.attitude,
  },
  {
    id: 6,
    type: 'skills',
    title: feedbackDocumenting.skills
  },
];

export default feedbackTopics;
