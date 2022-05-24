const labels = {
  common: {
    continue: 'Continue',
    next: 'Next',
    back: 'Back',
    cancel: 'Cancel',
    ok: 'Ok',
    start: 'Start',
    inputHint: 'Something else',
    inputDesc: 'Write your own description',
    ownQuestionDesc: "Write your own question",
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
    closeFeedback: 'Close your feedback for now?',
    gotIt: 'Got it',
    keepGoing: 'Keep Going',
    remindMeLater: 'Remind me later',
    youDidIt: 'You did it!',
    logIn: 'Log in',
    review: 'Review'
  },
  errors: {
    emailRequired: "Email is required",
    passwordRequired: 'Password is required',
    validEmail: 'Please enter a valid email address',
  },
  homeScreen: {
    guidedJourney: 'Guided Journeys',
    feedbackDesc:
      'Feedback Coaching Module enables managers to adopt effective leadership practices and habits in providing timely and objective performance feedback to their employees resulting in high-performing and engaged team members',
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
    created: 'Created',
    history: 'History',
    feedbackToGive: 'The feedback I want to give is',
    positive: 'Positive',
    positiveHint: 'When you tell others what they are doing well',
    corrective: 'Corrective',
    correctiveHint: 'When you tell others what they need to improve on',
    journeyEndTitle: 'Woohoo!',
    journeyEndContent: `Congratulations! You completed your feedback. You can now find this journey under History.`,
  },
  feedbackSignPost: {
    scheduledCorr: 'Giving corrective feedback in 4 steps',
    scheduledCorrDesc:
      "Below is an overview of the four steps of the feedback journey. We'll be here to guide you through each step when you start.",
    scheduledPos: 'Giving positive feedback in 3 steps',
    scheduledPosDesc: `Below is an overview of your positive feedback journey. We'll be here to guide you through each one when you start.`,
    onTheSpotTitle: 'Learning from your feedback in 2 steps',
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
    sharing: 'Sharing',
    sharingDesc: 'Communicating your feedback to your employee and your team',
  },
  feedbackDocumenting: {
    giveFeedbackTo: 'I want to give',
    giveFeedbackToCont: 'feedback to',
    feedbackRelation: 'My feedback is related to',
    dateOfFeedback: "I'm giving feedback about something that happened",
    firstOrFollowUpTitle: 'This is',
    firstTime: "The first time I'm giving feedback to",
    firstTimeCont: 'about this observation',
    followUp: 'A follow up with ',
    followUpTitle: 'This is my',
    firstFollowUp: 'First follow up with ',
    secondFollowUp: 'Second follow up with ',
    thirdFollowUp: 'Third follow up with ',
    aboutObservation: 'about this observation',
    confirmation: {
      content1: `You've finished "Documenting" - the first step of our feedback coaching journey.`,
      content2: `Would you like to continue on to the second step, "Preparing?" - this step takes 15 minutes.`,
      schedPosContent: `Would you like to continue on to the next part, "Sharing?" - this usually takes around 15 minutes.`,
    },
    dateToGiveFeedback: `I'm giving feedback about something that happened`,
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
        'I would like to discuss an observation with you. My intention is to have a two-way conversation on what happened and what we can do to address it.',
      statementHint: "Write your own statement",
    },
    describeDiscuss: {
      step: 'Step 3',
      title: 'Describe and discuss the observations',
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
      brainstormOption1:
        'What do you think can be done to address the situation?',
      brainstormOption2:
        'What are the options we can explore to solve the problem?',
      getSuggestions: `After getting your employee's suggestions, you can also provide your own. After exhausting possible options, you may want to evaluate which of the actions would be most effective.\n\nWhat questions do you want to ask to evaluate your options?`,
      suggestionOption1: 'What are the pros and cons of each option?',
      suggestionOption2:
        'Which option will generate high impact with least effort?',
      suggestionOption3: 'Which option do you like best? Why?',
      defineNextSteps:
        'Lastly, you and your employee will need to define the next steps by answering the following questions:',
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
      title: 'Check-out',
      content:
        "Just like in Step 1 (Check-in), it's important to end the conversation on a positive note and schedule a follow-up meeting to sustain improved performance. \n\n What questions do you want to ask at the end of your discussion?",
      checkoutFeelings: 'How do you feel about this conversation?',
      checkoutComfortable:
        'How comfortable are you with what we have agreeed on?',
      anythingElse:
        'If there is anything that could have made this conversation better? What would that be?',
      checkoutAcknowledge:
        'Acknowledge the employee for their inputs and offer any support they might need from you. What could you say to thank them, and let you know they have your full support?',
      checkoutInput:
        'Thank you for your input, and for having this discussion with me. Let me know if you think of other ways I can support you to be successful.',
    },
    confirmation: `You've finished "Preparing." Using your answers, we created a discussion guide that you can review at any time. \n\nNow that you're set up, it's time to schedule your meeting with `,
    confirmationHint:
      'The best time to give feedback is shortly after the moment has occurred, and no later than a week from the incident. The longer you wait, the longer the incident affects the way you think - and the way the other person acts.',
    schedule: 'Schedule discussion',
    scheduleTitle: 'Schedule your feedback discussion with',
    schedulingHint: `Already had your discussion?\n\nPick the date and time you did it in the past. We won't send an invite.`,
    setAlert: 'Set alert'
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
  feedbackDiscussing: {
    comingSoon: 'Coming soon!',
    discussingDesc: `We've created a few tools for you to use during your discussion. These are optional. Feel free to use whatever feels comfortable and natural to you.`,
    cueCardsTitle: 'cue cards',
    cueCardsDesc: `We've turned the discussion points you prepared into cue cards. Swipe through them during your meeting, or refer to them at the end to make sure you haven't missed anything important.`,
    voiceRecordingTitle: 'Voice Recording',
    voiceRecordingDesc: `Record your discussion so you can listen deeply, without the distraction of taking notes. This is a great way to accurately capture what's been said.`,
    meetingNotesTitle: 'Meeting notes',
    meetingNotesDesc: `Use this space to jot down anything important that comes up during your discussion. Notes and voice recordings are automatically saved when you tap "end meeting"`,
    discussingFootNote: `We strongly recommend you record every discussion. Why? Research shows that people forget an average of 50% of new information within just one hour. After 24 hours, it's 70%. And one week later? 90% of that information has been lost.`,
    cueCards: {
      checkIn: 'Check in',
      checkInContent: `Set a positive tone.\n\nEstablish a safe environment to openly discuss issues.\n\nTalk about a topic that's personal to the employee.\n\nTalk about events both of you have experienced.`,
      statePurpose: 'State the purpose of this meeting',
      statePurposeContent:
        'Let them know what your intention is for this meeting.\n\nLet them know you want this to be a two-way conversation.',
      observation: 'Describe your observations',
      observationContent: `1.) Describe the event. Be specific about the details surrounding the event. Mention the date, place, and circumstances.\n\n2.) Describe their actions.Provide specific, actionable, and relevant observations about your employee's behavior. Avoid words that are subjective, judgmental, and derogatory.\n\n3.) Describe the impact of your employee’s actions on themselves, others, or your organization or department. `,
      listenDeeply: 'Listen deeply',
      listenDeeplyContent: `Ask for their thoughts about your observations.\n\nListen to understand where they're coming from.\n\nDon't just tell them what happened and what must be done.`,
      brainstorm: 'Brainstorm an action plan together',
      brainstormContent: `This step must be a collaborative effort between you and your employee.\n\nGet their ideas on what they think can be done to address the situation.\n\nYou can also provide your own suggestions.`,
      evaluateIdeas: 'Evaluate ideas together',
      evaluateIdeasContent: `Together, evaluate which of their actions would be most effective.`,
      nextSteps: 'Agree on your next steps',
      nextStepsContent: `Define the next steps by answering the following questions: `,
      checkOut: 'Check-out',
      checkOutContent: `End the conversation on a positive note.\n\nAsk how they feel about your conversation.\n\nSeek their input for anything that could have made the conversation better.`,
      thankAndSupport: 'Thank and support them',
      thankAndSupportContent: `Acknowledge them for their input.\n\nOffer any support they might need from you.`,
    },
    discussingActionPlan: {
      title: 'Send the action plan to your employee',
      description: `While you may have already agreed on an action plan during your meeting, it's good practice to write it down and send it to your employee. This way, you can check that you have a shared understanding of what's going to happen next.`,
      descDuring: '',
      descCont: ``,
      specificAction: 'What is the specific action?',
      whenWillThisHappen: 'When will this happen?',
      whoWillMakeIt: 'Who will make it happen?',
      addAnother: 'Add another item',
    },
    discussingNextSteps: {
      title: 'Did you agree on a follow up date and time?',
      description:
        'Following up with your employee increases your chances of good results because it: ',
      reason1:
        '(1) Shows you are committed to providing support to improve performance.',
      reason2: '(2) Provides encouragement and recognition as appropriate, and',
      reason3: '(3) Allows you to adjust and change strategies as needed',
    },
    confirmation: `You've finished "Discussing." You can review your notes and audio recording any time.\n\nWould you like to continue on to the next part, "Reflecting?" - this usually takes around 10 minutes.`,
    confirmationHint: `People forget an average of 70% of what was discussed after 24 hours.\n\nThe sooner you start your reflection, the easier it will be for you to remember what you were thinking and how you were feeling during your feedback discussion.`,
    review: {
      actionPlan: 'Review your action plan',
    },
  },
  feedbackReflecting: {
    guideContent: `Self-reflection is the key to self-awareness. It allows you to look neutrally at your thoughts, feelings, emotions, and actions. It enables you to identify areas where you are strong, but also areas where you can improve.`,
    listenToRecording: 'Would you like to listen to your audio recording?',
    listenToRecordingDesc: `It looks like you recorded your feedback discussion! You can listen to it while you're answering the next questions. Pause, play, and rewind at any time.`,
    howDidYouFeel: 'How did you feel after giving feedback?',
    howDidyouDo: 'How did you do during your discussion?',
    provideInfo:
      'I provided specific information about the event, the action, and the result',
    calmFeedback:
      'I gave feedback in a calm, objective, and non-judgmental manner',
    listenToEmployee: `I listened to my employee's thoughts and questions with empathy and curiosity`,
    gaveFeedbackSoon: 'I gave my feedback soon after the event occurred',
    establishRapport: 'I established rapport with my employee',
    clearlyStatePurpose: 'I clearly stated the purpose of the meeting',
    involveEmployee: 'I involved my employee in developing an action plan',
    documentAndSend:
      'I documented and sent the agreed action plan to my employee',
    feedbackFromTeam: 'Looking at feedback from your team',
    feedbackFromTeamDesc: `Getting feedback from your team members is another way to increase self-awareness. Being willing to look at yourself through others' eyes will help you gain invaluable insight into how you can become a more effective leader.\n\nEvery time you give feedback, we ask your employees for their input. When we receive at least 5 responses, we share the results with you.`,
    notEnoughResponses: `Hmm... It looks like you don't have enough employee responses right now`,
    allFeedback: 'All Feedback',
    preparedFeedback: 'Prepared Feedback',
    youProvideInfo:
      'You provided specific information about the event, the action, and the result',
    youCalmFeedback:
      'You gave feedback in a calm, objective, and non-judgmental manner',
    youListenToEmployee: `You listened to your employee's thoughts and questions with empathy and curiosity`,
    youGaveFeedbackSoon: 'You gave your feedback soon after the event occurred',
    youEstablishRapport: 'You established rapport with your employee',
    youClearlyStatePurpose: 'You clearly stated the purpose of the meeting',
    youInvolveEmployee:
      'You involved your employee in developing an action plan',
    youDocumentAndSend:
      'You documented and sent the agreed action plan to your employee',
    developmentPlan: 'Your development plan',
    developmentPlanDesc:
      'Based on your self-reflection and feedback from your team members, what do you commit to...',
    stopDoing: 'Stop doing',
    startDoing: 'Start doing',
    continueDoing: 'Continue doing',
    reviewActionPlan: 'Review your action plan',
    reviewActionPlanDesc:
      'Based on your reflection, is there anything you would like to add in the action plans you developed with your employee?',
    confirmation: `You've finished "Reflecting". Reflecting will help you to develop your feedback skills and review their effectiveness. It allows you to question, in a positive way, what you do and why you do it and then deciding whether there is a better, or more efficient, way of doing it in the future.`,
  },
  feedbackSharing: {
    description: `Preparing your commments can make the feedback discussion a positive experience. Describe the observations made to support your feedback.\n\nOnce done, you can choose to share your positive feedback with everyone.`,
    writeMessage: {
      step: 'Step 2',
      title: 'Write a message',
      content: 'Would you like to add a short message to',
    },
    shareFeedback: {
      step: 'Step 3',
      title: 'Review and send feedback',
      content: 'Review your feedback before sharing',
    },
    event: 'Event',
    action: 'Action',
    result: 'Result',
    skippedStep: 'You skipped this step',
    confirmation: `You've finished "Sharing" You can review your feedback any time.\n\nWould you like to continue on to the next part, "Reflecting?" - this usually takes around 10 minutes.`,
    reviewDesc: `You've shared your positive feedback with`,
    reviewDescCont: `in your message below. Your feedback will also appear in the weekly newsletter.`,
    reviewTitle: 'Part 2 - Sharing'
  },
  reminders: {
    morningReminder: 'Today is a new day, ',
    triviaReminder: ' did you know...',
    morningContent:
      'Be mindful of moments throughout your day where you can help someone do better by giving them constructive feedback. \n\n Also be mindful of moments where you can motivate someone by recognizing a job well done. \n\n Take a look at your calendar today and anticipate these possible moments.',
    morningCardHeader: "Today's mindful moment",
    afternoonCardHeader: 'Did you know?',
  },
  frontliner: {
    survey: {
      title: 'Survey',
      descHelp: 'Help',
      descCont:
        'give better feedback. Your responses are anonymous. Your manager will only see their average scores once 5 or more employees have submitted this survey. You have until',
      descLast: 'to submit your responses.',
      overallSatisfaction:
        'Overall, how satisfied are you with the feedback you received?',
      closeSurvey:
        'Close the survey for now? You have until to submit your responses.',
      feeling: 'How did you feel after receiving the feedback?',
      howDidManagerDo: 'How did ',
      howDidManagerDoCont: 'do during your discussion?',
      questionCount: '8 questions',
      provideInfo:
        'My manager provided specific information about the event, action and the result:',
      calmFeedback:
        'My manager gave feedback in a calm, objective, and non-judgmental manner:',
      listenedToThoughts:
        'My manager listened to my thoughts and questions with empathy and curiosity:',
      gaveFeedbackSoon:
        'My manager gave their feedback soon after the event occurred:',
      establishRapport: 'My manager established rapport with me:',
      clearlyStatePurpose: 'My manager stated the purpose of the meeting:',
      involveInPlan: 'My manager involved me in developing the action plan:',
      sentAction: 'My manager sent the agreed action plan to me:',
      selfSurvey: 'For your eyes only - How did you do during your discussion?',
      selfQuestionCount: '5 questions',
      iProvidedFacts: 'I provided facts:',
      iListenedToFeedback: 'I listened to feedback openly:',
      iAskedQuestions: 'I asked questions to clarify:',
      iGaveSuggestions: 'I gave suggestions on how to address the situation:',
      iWasHonest: 'I was honest about my commitment to the action plan: ',
      confirmation: 'Thank you for your responses! Your ratings will help',
      confirmationCont:
        ' give better feedback in the future.\n\nRest assured, each survey you answer is anonymous and your manager will only see their average scores.',
    },
  },
};

export default labels;
