import labels from 'app/locales/en';
import Images from 'app/assets/images';

const { feedbackDiscussing } = labels;

const discussingGuide = [
  {
    image: Images.cueCards,
    title: feedbackDiscussing.cueCardsTitle,
    content: feedbackDiscussing.cueCardsDesc,
  },
  {
    image: Images.voiceRecording,
    title: feedbackDiscussing.voiceRecordingTitle,
    content: feedbackDiscussing.voiceRecordingDesc,
  },
  {
    image: Images.meetingNotes,
    title: feedbackDiscussing.meetingNotesTitle,
    content: feedbackDiscussing.meetingNotesDesc,
  },
];

export default discussingGuide;