import { forModalPresentationIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';

/* ------------- Auth Stack ------------- */
export { default as SignIn } from './sign-in';
export { default as Onboarding } from './onboarding';
export { default as StartingLineScreen } from './starting-line';
export { default as SignUp } from './sign-up';
export { default as StartingGuideScreen } from './starting-guide';

/* ------------- Leadership Assessment Stack ------------- */
export { default as LeadershipAssessment } from './leadership-assessment';
export { default as LeadershipAssessmentGuide } from './leadership-assessment/leadership-assessment-guide';
export { default as AssessmentEndLine } from './leadership-assessment/overview/overview-confirmation';
export { default as LeadershipOverviewResults } from './leadership-assessment/overview/overview-results';
export { default as BaselineScore } from './leadership-assessment/lsa-baseline-scores';
export { default as ExtendedLeadershipAssessment } from './leadership-assessment/extended';
export { default as MilestoneSignpost1 } from './leadership-assessment/lsa-milestone-signpost/milestone-signpost1';
export { default as MilestoneSignpost2 } from './leadership-assessment/lsa-milestone-signpost/milestone-signpost2';
export { default as MilestoneSignpost3 } from './leadership-assessment/lsa-milestone-signpost/milestone-signpost3';
export { default as MilestoneSignpost4 } from './leadership-assessment/lsa-milestone-signpost/milestone-signpost4';
export { default as MilestoneSignpost5 } from './leadership-assessment/lsa-milestone-signpost/milestone-signpost5';

export { default as CaptureFeedbackMoment } from './feedback/capture-moment';
export { default as RecordFeedbackEntry } from './feedback/record-entry';
export { default as ReviewFeedbackEntry } from './feedback/record-entry/review-entry';
export { default as EntryConfirmation } from './feedback/record-entry/entry-confirmation';
/* ------------- Home Stack ------------- */
export { default as HomeScreen } from './home';
export { default as Messages } from './messages';
export { default as Profile } from './profile';
export { default as Reminders } from './reminder';
export { default as ExploreScreen } from './explore'; 


/* ------------- Feedback Stack ------------- */
export { default as ActiveFeedbackJourney } from './feedback/active-journey-post';
export { default as FeedbackGuide } from './feedback/guide';
export { default as FeedbackJourneyList } from './feedback/journey-list';
export { default as FeedbackConfirmation } from './feedback/confirmation';

/* ------------- Feedback Documenting ------------- */
export { default as FeedbackFlow } from './feedback/flow';
export { default as FeedbackType } from './feedback/type';
export { default as FeedbackDocumenting } from './feedback/documenting';
export { default as DocumentingReview } from './feedback/documenting/documenting-review';

/* ------------- Feedback Preparing ------------- */
export { default as PreparingGuide } from './feedback/preparing/guide';
export { default as FeedbackPreparing } from './feedback/preparing';
export { default as PreparingSchedule } from './feedback/preparing/scheduling';
export { default as PreparingReview } from './feedback/preparing/preparing-review';

/* ------------- Feedback Discussing ------------- */
export { default as DiscussingGuide } from './feedback/discussing/guide';
export { default as DiscussingMeeting } from './feedback/discussing/meeting';
export { default as FeedbackDiscussing } from './feedback/discussing';
export { default as ActionPlanScreen } from './feedback/discussing/action-plan';
export  { default as DiscussingReview } from './feedback/discussing/discussing-review';

/* ------------- Feedback Reflecting ------------- */
export { default as ReflectingGuide } from './feedback/reflecting/guide';
export { default as FeedbackReflecting } from './feedback/reflecting';

/* ------------- Feedback Sharing ------------- */
export { default as SharingGuide } from './feedback/sharing/guide';
export { default as FeedbackSharing } from './feedback/sharing';
export { default as SharingReview } from './feedback/sharing/sharing-review';

/* ------------- Frontliner Stack ------------- */
export { default as MessageThreadScreen } from './frontliner/message-thread';
export { default as SurveyDiscussion } from './frontliner/survey/discussion';
export { default as SurveyGuide } from './frontliner/survey/guide';
export { default as FrontlinerSurvey } from './frontliner/survey';
export { default as SurveyConfirmation } from './frontliner/survey/confirmation';

/* ------------- Insights Panel Stack ------------- */
export { default as InsightsPanel } from './insights';