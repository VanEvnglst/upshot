import labels from 'app/locales/en';

const { feedbackDocumenting, feedbackPreparing, feedbackDiscussing, feedbackReflecting, feedbackSharing } = labels;

const confirmationModel = [
  {
    id: 1,
    type: 'documenting',
    content: `${feedbackDocumenting.confirmation.content1} \n\n\n${feedbackDocumenting.confirmation.content2}`,
  },
  {
    id: 2,
    type: 'preparing',
    content: `${feedbackPreparing.confirmation}`,
  },
  {
    id: 3,
    type: 'discussing',
    content: `${feedbackDiscussing.confirmation}`,
  },
  {
    id: 4,
    type: 'reflecting',
    content:`${feedbackReflecting.confirmation}`,
  },
  {
    id: 5,
    type: 'sharing',
    content: `${feedbackSharing.confirmation}`,
  }
];

export default confirmationModel;
