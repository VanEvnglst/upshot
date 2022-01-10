import labels from 'app/locales/en';

const { feedbackDocumenting, feedbackPreparing } = labels;

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
    content: '',
  },
  {
    id: 4,
    type: 'reflecting',
    content: '',
  },
  {
    id: 5,
    type: 'following up',
  },
];

export default confirmationModel;
