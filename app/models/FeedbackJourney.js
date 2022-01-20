import labels from '../locales/en';

const { feedbackSignPost } = labels;

const feedbackJourneySteps = [
  {
    id: 1,
    title: feedbackSignPost.documenting,
    description: feedbackSignPost.documentingDesc,
    forOnTheSpot: true
  },
  {
    id: 2,
    title: feedbackSignPost.preparing,
    description: feedbackSignPost.preparingDesc,
    forOnTheSpot: false
  },
  {
    id: 3,
    title: feedbackSignPost.discussing,
    description: feedbackSignPost.discussingDesc,
    forOnTheSpot: false
  },
  {
    id: 4,
    title: feedbackSignPost.reflecting,
    description: feedbackSignPost.reflectingDesc,
    forOnTheSpot: true
  },
];

export default feedbackJourneySteps;
