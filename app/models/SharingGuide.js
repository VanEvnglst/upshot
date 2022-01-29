import labels from 'app/locales/en';
import Images from 'app/assets/images';

const { feedbackPreparing, feedbackSharing } = labels;


const sharingGuide = [
  {
    image: Images.preparationStep1,
    step: feedbackPreparing.checkIn.step,
    content: feedbackPreparing.describeDiscuss.title,
  },
  {
    image: Images.sharingStep2,
    step: feedbackSharing.writeMessage.step,
    content: feedbackSharing.writeMessage.title,
  },
  {
    image: Images.sharingStep3,
    step: feedbackSharing.shareFeedback.step3,
    content: feedbackSharing.shareFeedback.step3Title
  }
];


export default sharingGuide;