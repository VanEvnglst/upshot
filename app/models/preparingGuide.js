import labels from '../locales/en';
import Images from '../assets/images';

const { checkIn, statePurpose, describeDiscuss, createActionPlan, checkOut } =
  labels.feedbackPreparing;

const preparingGuide = [
  {
    image: Images.preparationStep1,
    step: checkIn.step,
    content: checkIn.title,
  },
  {
    image: Images.preparationStep2,
    step: statePurpose.step,
    content: statePurpose.title,
  },
  {
    image: Images.preparationStep3,
    step: describeDiscuss.step,
    content: describeDiscuss.title,
  },
  {
    image: Images.preparationStep4,
    step: createActionPlan.step,
    content: createActionPlan.title,
  },
  {
    image: Images.preparationStep5,
    step: checkOut.step,
    content: checkOut.title,
  },
];

export default preparingGuide;
