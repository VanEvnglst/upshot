const lsaScoreDefinition = [
  {
    id: 1,
    title: 'Area of Concern',
    description: "Skill areas that you must pay more attention to. These have the biggest potential for growth.",
  },
  {
    id: 2,
    title: "Area of Continued Development",
    description: "Skill areas that you are able to demonstrate with some room for improvement.",
  },
  {
    id: 3,
    title: "Promising Area",
    description: "Skill areas that you have great strength on. Keep doing what you are doing!"
  }
];

const aboutSkillArea = [
  {
    id: 1,
    title: 'Empathy',
    description: "The act of putting yourself in someone else's shoes or perspective to gain an understanding of another's feelings and thoughts",
    areaOfConcern: {
      whatScoreMeans: `Low scores in Empathy indicate that you may have difficulty...`,
      skillPoints: [
        '* seeing things from different perspective than your own',
        "* sensing the emotional state of others",
        "* being able to imagine what is like to be in another's shoes",
        "* accepting feedback from others that conflicts with your sense of yourself",
        "listening deeply to others when you disagree"
      ]
    },
    areaOfContinuedDevelopment: {
      whatScoreMeans: "Moderate scores in Empathy indicate that you may...",
      skillPoints: [
        "* be forgetful of what matters to others",
        "* be insensitive to the depth of emotions others face when in stress",
        "* seek to try to solve other people's problems even before they have asked for help",
        "* not be able to quickly see and/or accept why people give you critical feedback for your behavior",
        "* have trouble understanding the reasons behind both sides of a disagreement"
      ]

    },
    promisingArea: {
      whatScoreMeans: "High scores in Empathy indicate that you likely are...",
      skillPoints: [
        "* good at being patient and fully present when another really needs you to listen",
        "* able to put into your own words what another means when they say something to you",
        "* able to notice and put into words what another is feeling based on their expression, posture or sound of their voice",
        "* perceive the likely reasons person's behavior"
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
        "* be interested in the reasons why work is organized as it is",
        "* care about another's reasons for things",
        "* engage in opportunities to learn new skills",
        "* wonder about the business' performance and future vision",
        "* seek to find better ways to do things"
      ],
    },
    areaOfContinuedDevelopment: {
      whatScoreMeans: "Moderate scores in Openness to Learn indicate that you may...",
      skillPoints: [
        "* Show some interest in the business as a whole but don't try to learn more",
        "* Ask some questions to understand the reasons for things but not enough to take atcion",
        "* notice opportunities for improving things but are content with things as they are",
        "* be interested enough to follow others who are curious but not lead",
      ],
    },
    promisingArea: {
      whatScoreMeans: "High scores in Openness to Learn indicate that you likely are...",
      skillPoints: [
        "* quick to notice things that you want to learn more about",
        "* interested in the thoughts, motivations, and concerns of others",
        "* often wanting to know more about why the business operates the way it does",
        "* to want to find ways to contribute more or improve things"
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
        "* act according to what you say is important to you",
        "* speak your opinion when it might cause tension",
        "* admit when you have made mistakes",
        "* treat everyone the same according to your values",
        "* accept your part in a difficult relationship",
      ],
    },
    areaOfContinuedDevelopment: {
      whatScoreMeans: "Moderate scores in Authenticity indicate that you may...",
      skillPoints: [
        "* confuse others about what your values are when you act differently from what you believe",
        "* not reflect on the reasons you do and say what you do in different environments",
        "* become vague when faced with a diffcult decision",
        `* have a tendency to behave differently with different people in order to "fit in"`,
      ],
    },
    promisingArea: {
      whatScoreMeans: "High score in Authenticity indicate that you likely are...",
      skillPoints: [
        "* the same person in different circumstances",
        "* predictable in the way you make decisions",
        "* open and clear with others about your values",
        `* are willing to be held accountable to "walking your talk" and when you make mistakes`,
        "* honest with yourself about your strengths and needs for development"
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
        "* lack enthusiasm and focus to do your best",
        "* not notice or care about opportunities to learn and grow",
        "* treat mistakes as things that happen but don't motivate you to improve",
        "* not have a vision of what you would like to become"
      ],
    },
    areaOfContinuedDevelopment: {
      whatScoreMeans: "Moderate scores in Achievement-Orientation indicate you may...",
      skillPoints: [
        "* have goals and standards for your own performance but lack consistency",
        "* sometimes seek opportunities to learn and grow but may fail to follow through",
        "* have energy and drive to contribute more when it is easy but can lose motivation when difficulties arise"
      ],
    },
    promisingArea: {
      whatScoreMeans: "High scores in Achievement-Orientation indicate that you likely are...",
      skillPoints: [
        "* a person on a mission to grow in achievement and influence",
        "* on the lookout for opportunities that will further your career",
        "* interested in and seek feedback about your performance and then act on it",
        "* hard on yourself when you underperform",
        "* sometimes overly demanding of others who are not motivated like you"
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
        "* be unwilling to admit why you do what you do",
        "* sometimes take advantage of a situation to benfit yourself",
        "* be blame-seeking or fault-finding of others",
        "* have a tendency to talk about issues and others in ways that are not open or inclusive",
        "* be rude or unkind when you don't like someone",
      ],
    },
    areaOfContinuedDevelopment: {
      whatScoreMeans: "Moderate scores in Trust Building indicate that you may...",
      skillPoints: [
        "* be inconsistent in your behavior to avoid blame or conflict",
        "* admit your own mistakes when confronted but not readily",
        "* be consicious of the perspectives and needs of others but not act on them if it is difficult",
        "* not be offensive, rude or unkind but do not confront others for being so",
        "* try to ensure everyone is included in the work or conversation but not advocate for those who are ignored"
      ],
    },
    promisingArea: {
      whatScoreMeans: "High scores in Trust Building indicate that you likely are...",
      skillPoints: [
        "* supportive of the needs of others and will advocate for them if needed",
        "* quick to admit mistakes and take responsibility",
        "* willing to see the failings of others as opportunities to help them grow",
        "* always expects open conversation that includes those should be",
        "* open about why you think and act and are willing to accept criticism"
      ],
    }
  }

];

const basisforLSA = {
  header: "The LSAs are key elements of Emotional / Social Intelligence (EQ/SQ), which has been shown over the last three decades to be competencies that make leaders highly effective.",
  howDoWeKnow: "How do we know?",
  pointOne: "* Daniel Goleman introduced these concepts. Decades of EQ assessments show higher levels of EQ/SQ create more employee engagement and better results.",
  pointTwo: "* The Leadership Circle and the Zenger-Folkman organizations separately gathered data from 200,000 leadership feedback surveys arriving at the same conclusions.",
  pointThree: "* This data proves leaders passionately driven to succeed, even with a clear vision and great business skills but weak in EQ/SQ get only short-lived results because they do not build strong teams and cultures",
  footer: "Common sense also tells us working for a leader who cares more about their own success than their people is never as good to work for as one who has LSA strength."
}

export default lsaScoreDefinition; aboutSkillArea;
basisforLSA;