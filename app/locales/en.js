const labels = {
  common: {
    continue: 'Continue',
    next: 'Next',
    back: 'Back',
    cancel: 'Cancel',
    start: 'Start',
    inputHint: 'Something else',
    inputDesc: 'Write your own description',
    today: 'Today',
    yesterday: 'Yesterday',
    dateHint: 'On a different date',
    review: 'Review',
    inProgress: 'In Progress',
    giveFeedback: 'Give Feedback',
    yesIDid: 'Yes, I did',
    notToday: 'Not today',
    readMore: 'Read More',
    saveClose: 'Save & Close',
    saveChanges: 'Save changes',
  },
  homeScreen: {
    guidedJourney: 'Guided Journeys',
    comingSoon: 'Coming Soon',
  },
  bottomNavigation: {
    home: 'Home',
    messages: 'Message',
    activity: 'Activity',
  },
  feedbackIntro: {
    action: 'I want to',
    prepareFeedback: 'Prepare for a feedback discussion I will have later',
    prepareFeedbackHint:
      'When you set aside time to deliver weightier feedback',
    onTheSpotFeedback: 'Learn from on-the-spot feedback I gave someone earlier',
    onTheSpotFeedbackHint:
      'When you gave feedback right after observing an event',
    feedbackCoaching: 'Feedback Coaching',
    feedbackFor: 'Feedback for',
  },
  feedbackSignPost: {
    title: 'The feedback journey',
    description:
      "Below is an overview of the five steps of the feedback journey. We'll be here to guide you through each step when you start.",
    documenting: 'Documenting',
    documentingDesc: 'Taking notes to remember the details of the event',
    preparing: 'Preparing',
    preparingDesc:
      'Walking through the steps of an effective feedback  discussion',
    discussing: 'Discussing',
    discussingDesc:
      'Accurately capturing the discussion between you and your employee',
    reflecting: 'Reflecting',
    reflectingDesc: 'Learning from self-reflection and feedback from others',
    followUp: 'Following up',
    followUpDesc: "Sustaining your employee's improved performance",
  },
  feedbackDocumenting: {
    giveFeedbackTo: 'I want to give feedback to',
    feedbackToGive: 'The feedback I want to give is',
    positive: 'Positive',
    positiveHint: 'When you tell others what they are doing well',
    corrective: 'Corrective',
    correctiveHint: 'When you tell others what they need to improve on',
    feedbackRelation: 'My feedback is related to',
    dateOfFeedback: "I'm giving feedback about something that happened",
    qualityImprovement: 'Quality - Mistakes or Improvement',
    customerSatisfaction: 'Quality - Customer Satisfaction',
    serviceTime: 'Service Level - Time',
    productivity: 'Productivity',
    attitude: 'Attitude',
    skills: 'Demonstrated Skills',
    confirmation: {
      title: 'You did it!',
      content1: `You've finished "Documenting" - the first step on our guided journey of giving feedback.`,
      content2: `Would you like to continue on to the second step, "Preparing"? - this step takes 15 minutes.`,
    },
  },
  feedbackPreparing: {
    prepareDiscussion: 'Prepare for your discussion with your employee',
    prepareDesc:
      "Preparing your comments can make the feedback discussion a positive experience. We'll be guiding you through an effective discussion process with your employee. The goal is to align understanding of the situation, collaborate on action plans, and committing to follow up meetings.",
    fiveStepGuide: 'Below are the five steps to guide your discussion:',
    checkIn: {
      step: 'Step 1',
      title: 'Check-in',
      content: `It's important to set a positive tone at the start of the meeting to establish a safe environment to openly discuss issues. Aside from the usual "How's your day?", what can you say to establish rapport with the employee and make them feel at ease? \n\nConsider checking in with them about something you both know has been an important event or situation, such as their experience with a new assignment or of a new team member, or something with respect to family.`,
      checkInHint: 'What can you say to check-in?',
    },
    statePurpose: {
      step: 'Step 2',
      title: 'State the purpose of the discussion',
      content:
        "It's important for your employee to know the intention of the meeting, and that it's going to be a two-way conversation between both of you. \n\nChoose below what you might say:",
      statePurposeBtn:
        'I would like to discuss an observation and my intention is to have a two-way conversation on what happened and what we can do to address it',
    },
    describeDiscuss: {
      step: 'Step 3',
      title: 'Descibe and discuss the observations',
      describeEvent:
        'Describe the event. Be specific about the details surrounding the event. Mention the date, place, and circumstances',
      describeAction:
        "Describe their actions. Provide specific, actionable, and relevant observations about your employee's behavior. Avoid words that are subjective, judgmental, and derogatory.",
      describeImpact:
        "Describe the impact of your employee's actions on themselves, others, or your organization or department.",
      describeEventHint: 'Describe the event',
      describeActionHint: 'Describe their actions',
      describeImpactHint: 'Describe the result',
      observationQuestion: `What question can you ask to gather your employee's thoughts about your observations`,
      observeOption1: 'May I know your thoughts about what I shared?',
      observeOption2: 'Were my observations aligned with what you experienced?',
      listenToResponse: `Important: Listen to your employee's response`,
      threeCContent:
        'One way to establish trust is by listening to understand where the other person is coming from rather than just telling them what happened and what must be done. Remember to listen deeply, avoiding these 3 common mind traps:',
      simpleStories: 'Simple Stories',
      simpleStoriesContent:
        'Be careful not to jump to conclusions before listening to everything. The story you believe may be simpler than what really happened.',
      rightness: 'Rightness',
      rightnessContent: `You may feel it's important for you to be right, but bosses don't really know everything. Humility on your part will be received as strength.`,
      agreeableness: 'Agreeableness',
      agreeablenessContent: `Your employee might get upset, but don't let this make you become too agreeable. You need to solve the problem and "tough love" is honest and more respected.`,
    },
    createActionPlan: {
      step: 'Step 4',
      title: 'Create an action plan together',
      content: `This step must be a collaborative effort between you and your employee.\n\nFirst, you will brainstorm possible solutions or actions. What questions do you want to ask to start brainstorming together?`,
      brainstormOption1: 'What do you think can be done to address the situation?',
      brainstormOption2: 'What are the options we can explore to solve the problem?',
      getSuggestions: `After getting your employee's suggestions, you can also provide your own. After exhausting possible options, you may want to evaluate which of the actions would be most effective.`,
      suggestionOption1: 'What are the pros and cons of each option?',
      suggestionOption2: 'Which option will generate high impact with least effort?',
      suggestionOption3: 'Which option you like best? Why?',
      defineNextSteps: 'Lastly, you and your employee will need to define the next steps by answering the following questions:',
      defineWhat: 'What',
      defineWhatContent: 'What specific actions are we going to take?',
      defineWhen: 'When',
      defineWhenContent: 'When will this happen? Is it recurring?',
      defineWho: 'Who',
      defineWhoContent: 'Who will make it happen?',
      actionItalic: 'What, When, By Who, and How?',
      actionPlanCont:
        'You may want to write your actions down in a table like the one below:',
    },
    checkOut: {
      step: 'Step 5',
      title: 'Check-out and agree on a follow-up date',
      content:
        "Just like in Step 1 (Check-in), it's important to end the conversation on a positive note and schedule a follow-up meeting to sustain improved performanct. \n\n What questions do you want to ask at the end of your discussion?",
      checkoutFeelings: 'How do you feel about this conversation?',
      checkoutComfortable:
        'How comfortable are you with what we have agreeed on?',
      anythingElse:
        'If there is anything that could have made this conversation better? What would that be?',
      checkoutAcknowledge:
        'Acknowledge the employee for their inputs and offer any support they might need from you. What could you say to thank them, and let you know they have your full support?',
      checkoutInput:
        'Thank you for your input, and for having this discussion with me. Let me know if you think of other ways I can support you to be successful.',
      checkoutDate: 'Agree on a the follow-up date for next discussion.',
      checkoutTouchbase:
        'When can we touch base again to check how we are progressing and how I can help you further?',
    },
    confirmation: `You've finished "Preparing". We've created a discussion guide for you to review and use during your feedback session. \n\n Now that you're prepared, it's time to schedule your face-to-face discussion.`,
    confirmationHint:
      'The best time to give feedback is shortly after the moment has occurred, and no later than a week from the incident. The longer you wait, the longer the incident affects the way you think - and the way the other person acts.',
    schedule: 'Schedule discussion',
  },
  schedulingDiscussion: {
    schedFaceToFace: 'Schedule your face-to-face discussion with',
    chooseDate: 'Choose a date',
    chooseTime: 'Choose a time',
    setAlert: 'Set an alert',
    sendInvite: 'Send Invite',
    reviewSchedule: "You've scheduled your discussion with",
    discussionBelow: 'Below is your discussion guide:',
    inviteSent: 'Invite sent',
    listenTip: "Important: Listen to your employee's response.",
    actionPlanTip: 'Define your action plan using',
  },
  deleteFeedback: {
    action: 'Delete feedback',
    whyDelete: 'Why are you deleting your feedback?',
    testingOut: 'I was just testing it out',
    changeType: 'I want to change the type of feedback I give',
    issueResolved: 'The issue was resolved without my feedback',
  },

  reminders: {
    morningReminder: 'Today is a new day, ',
    triviaReminder: ' did you know...',
    morningContent:
      'Be mindful of moments throughout your day where you can help someone do better by giving them constructive feedback. \n\n Also be mindful of moments where you can motivate someone by recognizing a job well done. \n\n Take a look at your calendar today and anticipate these possible moments.',
    morningCardHeader: "Today's mindful moment",
    afternoonCardHeader: 'Did you know?',
  },
};

export default labels;
