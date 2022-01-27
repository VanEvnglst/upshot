import labels from '../locales/en';

const { feedbackSignPost } = labels;

const scheduledCorrectiveSteps = [
  {
    id: 1,
    title: feedbackSignPost.documenting,
    description: feedbackSignPost.documentingDesc,
  },
  {
    id: 2,
    title: feedbackSignPost.preparing,
    description: feedbackSignPost.preparingDesc,
  },
  {
    id: 3,
    title: feedbackSignPost.discussing,
    description: feedbackSignPost.discussingDesc,
  },
  {
    id: 4,
    title: feedbackSignPost.reflecting,
    description: feedbackSignPost.reflectingDesc,
  },
];

export default scheduledCorrectiveSteps;
