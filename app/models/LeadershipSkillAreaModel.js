export const lsaScoreDefinition = [
  {
    id: 1,
    title: 'Area of Concern',
    description: "Skill areas that you must pay more attention to. These have the biggest potential for growth.",
    bg: '#FF5656',
  },
  {
    id: 2,
    title: "Area of Continued Development",
    description: "Skill areas that you are able to demonstrate with some room for improvement.",
    bg: '#FFB26A',
  },
  {
    id: 3,
    title: "Promising Area",
    description: "Skill areas that you have great strength on. Keep doing what you are doing!",
    bg: '#42EE57',
  }
];

export const aboutSkillArea = [
  {
    id: 1,
    title: 'Empathy',
    description: "The act of putting yourself in someone else's shoes or perspective to gain an understanding of another's feelings and thoughts",
    areaOfConcern: {
      whatScoreMeans: `Low scores in Empathy indicate that you may have difficulty...\n\n`,
      skillPoints: [
        'Seeing things from different perspective than your own',
        "Sensing the emotional state of others",
        "Being able to imagine what is like to be in another's shoes",
        "Accepting feedback from others that conflicts with your sense of yourself",
        "Listening deeply to others when you disagree"
      ]
    },
    areaOfContinuedDevelopment: {
      whatScoreMeans: "Moderate scores in Empathy indicate that you may...",
      skillPoints: [
        "Be forgetful of what matters to others",
        "Be insensitive to the depth of emotions others face when in stress",
        "Seek to try to solve other people's problems even before they have asked for help",
        "Not be able to quickly see and/or accept why people give you critical feedback for your behavior",
        "Have trouble understanding the reasons behind both sides of a disagreement"
      ]

    },
    promisingArea: {
      whatScoreMeans: "High scores in Empathy indicate that you likely are...",
      skillPoints: [
        "Good at being patient and fully present when another really needs you to listen",
        "Able to put into your own words what another means when they say something to you",
        "Able to notice and put into words what another is feeling based on their expression, posture or sound of their voice",
        "Perceive the likely reasons person's behavior"
      ]
    },

  },
  {
    id: 2,
    title: "Openness to Learn",
    description: "It is the strong desire to know or learn about what goes on around you. Such as, the way things work, why things are the way they are, what other's experiences and interests or motivations are",
    areaOfConcern: {
      whatScoreMeans: "Low scores in Openness to Learn indicate you may not...",
      skillPoints: [
        "Be interested in the reasons why work is organized as it is",
        "Care about another's reasons for things",
        "Engage in opportunities to learn new skills",
        "Wonder about the business' performance and future vision",
        "Seek to find better ways to do things"
      ],
    },
    areaOfContinuedDevelopment: {
      whatScoreMeans: "Moderate scores in Openness to Learn indicate that you may...",
      skillPoints: [
        "Show some interest in the business as a whole but don't try to learn more",
        "Ask some questions to understand the reasons for things but not enough to take atcion",
        "Notice opportunities for improving things but are content with things as they are",
        "Be interested enough to follow others who are curious but not lead",
      ],
    },
    promisingArea: {
      whatScoreMeans: "High scores in Openness to Learn indicate that you likely are...",
      skillPoints: [
        "Quick to notice things that you want to learn more about",
        "Interested in the thoughts, motivations, and concerns of others",
        "Often wanting to know more about why the business operates the way it does",
        "To want to find ways to contribute more or improve things"
      ],
    }
  },
  {
    id: 3,
    title: "Authenticity",
    description: `The alignment between what you say you believe in and/or is important to you and your actions; sometimes referred to as living one's core values or "walking the talk"`,
    areaOfConcern: {
      whatScoreMeans: "Low scores in Authenticity indicate you may not...",
      skillPoints: [
        "Act according to what you say is important to you",
        "Speak your opinion when it might cause tension",
        "Admit when you have made mistakes",
        "Treat everyone the same according to your values",
        "Accept your part in a difficult relationship",
      ],
    },
    areaOfContinuedDevelopment: {
      whatScoreMeans: "Moderate scores in Authenticity indicate that you may...",
      skillPoints: [
        "Confuse others about what your values are when you act differently from what you believe",
        "Not reflect on the reasons you do and say what you do in different environments",
        "Become vague when faced with a diffcult decision",
        `Have a tendency to behave differently with different people in order to "fit in"`,
      ],
    },
    promisingArea: {
      whatScoreMeans: "High score in Authenticity indicate that you likely are...",
      skillPoints: [
        "The same person in different circumstances",
        "Predictable in the way you make decisions",
        "Open and clear with others about your values",
        `Are willing to be held accountable to "walking your talk" and when you make mistakes`,
        "Honest with yourself about your strengths and needs for development"
      ],
    }
  },
  {
    id: 4,
    title: "Achievement Orientation",
    description: "It is the drive to meet/exceed an internal standard of excellence; to make a meaningful contribtion and grow your scope of responsibility and influence",
    areaOfConcern: {
      whatScoreMeans: "Low scores in Achievement-Orientation indicate you may..",
      skillPoints: [
        "Lack enthusiasm and focus to do your best",
        "Not notice or care about opportunities to learn and grow",
        "Treat mistakes as things that happen but don't motivate you to improve",
        "Not have a vision of what you would like to become"
      ],
    },
    areaOfContinuedDevelopment: {
      whatScoreMeans: "Moderate scores in Achievement-Orientation indicate you may...",
      skillPoints: [
        "Have goals and standards for your own performance but lack consistency",
        "Sometimes seek opportunities to learn and grow but may fail to follow through",
        "Have energy and drive to contribute more when it is easy but can lose motivation when difficulties arise"
      ],
    },
    promisingArea: {
      whatScoreMeans: "High scores in Achievement-Orientation indicate that you likely are...",
      skillPoints: [
        "A person on a mission to grow in achievement and influence",
        "On the lookout for opportunities that will further your career",
        "Interested in and seek feedback about your performance and then act on it",
        "Hard on yourself when you underperform",
        "Sometimes overly demanding of others who are not motivated like you"
      ],
    }
  },
  {
    id: 5,
    title: "Trust Building",
    description: "Demonstrating good character and trustworthiness both by being authentic and socially intelligent, which shows up as honesty, openness, consistency,compassion, and caring connection",
    areaOfConcern: {
      whatScoreMeans: "Low scores in Trust Building indicat you may...",
      skillPoints: [
        "Be unwilling to admit why you do what you do",
        "Sometimes take advantage of a situation to benfit yourself",
        "Be blame-seeking or fault-finding of others",
        "Have a tendency to talk about issues and others in ways that are not open or inclusive",
        "Be rude or unkind when you don't like someone",
      ],
    },
    areaOfContinuedDevelopment: {
      whatScoreMeans: "Moderate scores in Trust Building indicate that you may...",
      skillPoints: [
        "Be inconsistent in your behavior to avoid blame or conflict",
        "Admit your own mistakes when confronted but not readily",
        "Be consicious of the perspectives and needs of others but not act on them if it is difficult",
        "Not be offensive, rude or unkind but do not confront others for being so",
        "Try to ensure everyone is included in the work or conversation but not advocate for those who are ignored"
      ],
    },
    promisingArea: {
      whatScoreMeans: "High scores in Trust Building indicate that you likely are...",
      skillPoints: [
        "Supportive of the needs of others and will advocate for them if needed",
        "Quick to admit mistakes and take responsibility",
        "Willing to see the failings of others as opportunities to help them grow",
        "Always expects open conversation that includes those should be",
        "Open about why you think and act and are willing to accept criticism"
      ],
    }
  }

];

export const basisForLSA = {
  header: "The LSAs are key elements of Emotional / Social Intelligence (EQ/SQ), which has been shown over the last three decades to be competencies that make leaders highly effective.",
  howDoWeKnow: "How do we know?",
  pointOne: "Daniel Goleman introduced these concepts. Decades of EQ assessments show higher levels of EQ/SQ create more employee engagement and better results.",
  pointTwo: "The Leadership Circle and the Zenger-Folkman organizations separately gathered data from 200,000 leadership feedback surveys arriving at the same conclusions.",
  pointThree: "This data proves leaders passionately driven to succeed, even with a clear vision and great business skills but weak in EQ/SQ get only short-lived results because they do not build strong teams and cultures",
  footer: "Common sense also tells us working for a leader who cares more about their own success than their people is never as good to work for as one who has LSA strength."
}