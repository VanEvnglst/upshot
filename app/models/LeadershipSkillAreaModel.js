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
    id: 5, 
    title: "Achievement Orientation",
    description: "It is the drive to meet/exceed an internal standard of excellence; to make a meaningful contribtion and grow your scope of responsibility and influence",
    areaOfConcern: {
      whatScoreMeans: "Low indicators in Achievement-Orientation implies you may...",
      skillPoints:
        `• Lack motivation in doing your best work
• Not notice or care about growth opportunities
• May not be motivated to improve from your mistakes
• Not have a clear vision of what you would like to become`
    },
    areaOfContinuedDevelopment: {
      whatScoreMeans: "Moderate indicator in Achievement-Orientation implies you may...",
      skillPoints:
       `• Set goals but have difficulty finishing them
• Look for opportunities to grow but have difficulty following through
• Have difficulty staying motivated when things get difficult`
    },
    promisingArea: {
      whatScoreMeans: "High indicator in Achievement-Orientation implies that you likely are...",
      skillPoints:
        `• Always looking for opportunities to further your career
• A person who strives  to grow in achievement and influence
• Seeking feedback about your performance and acting on it
• Hard on yourself when you underperform
• Sometimes overly demanding of others who are less motivated`
    }
    
  },
  {
    id: 4,
    title: "Openness to Learn",
    description: "It is the strong desire to know or learn about what goes on around you. Such as, the way things work, why things are the way they are, what other's experiences and interests or motivations are",
    areaOfConcern: {
      whatScoreMeans: "Low indicator in Openness to Learn implies you may not...",
      skillPoints:
        `• Be interested in the reasons work is done a certain way
• Look for better ways to do things
• Be open to try learning new things
• Care about another's reasons for things
• Care about the business' performance and future vision
• Think about the company's vision for the future`
    },
    areaOfContinuedDevelopment: {
      whatScoreMeans: "Moderate indicator in Openness to Learn implies that you may...",
      skillPoints:
        `• Mostly stick to what you know
• Show interest in how things are done but not enough to try improving them
• Be interested enough to follow along with others who are curious but not lead`
    },
    promisingArea: {
      whatScoreMeans: "High indicator in Openness to Learn indicate that you likely are...",
      skillPoints:
        `• Often looking for new things to learn
• Interested in the thoughts, motivations, and concerns of others
• Willing to suggest ways to improve things
• Often trying to know more about why things are done`
    }
   
  },
  {
    id: 2,
    title: "Trust Building",
    description: "Demonstrating good character and trustworthiness both by being authentic and socially intelligent, which shows up as honesty, openness, consistency,compassion, and caring connection",
    areaOfConcern: {
      whatScoreMeans: "Low indicator in Trust Building implies you may...",
      skillPoints:
        `• Sometimes take advantage of a situation to benefit yourself
• Have a tendency to gossip
• Be rude or unkind when you don't like someone
• Be blame-seeking or fault-finding of others
• Be unwilling to admit why you do what you do`

    },
    areaOfContinuedDevelopment: {
      whatScoreMeans: "Moderate indicator in Trust Building implies that you may...",
      skillPoints:
        `• Seek to avoid blame or deal with conflict
• Admit your own mistakes only when confronted
• Know the  needs of others but not act on it them if it is difficult
• Let others get away with being rude and offensive
• Try to include everyone  but not advocate for those who are ignored`
    },
    promisingArea: {
      whatScoreMeans: "High indicator in Trust Building implies that you likely are...",
      skillPoints:
        `• Supportive of the needs of others; advocating for them if needed
• Honest about the mistakes you make
• Take responsibility for your actions
• Open about how you think and act and willing to hear criticism
• Encouraging people to learn and grow when they fail at something
• Supporting open conversation that includes those who should be`
    }
  },
  {
    id: 3,
    title: 'Empathy',
    description: "The act of putting yourself in someone else's shoes or perspective to gain an understanding of another's feelings and thoughts",
    areaOfConcern: {
      whatScoreMeans: `Low indicator in Empathy implies that you may have difficulty...`,
      skillPoints:
        `• Listening attentively to other people's opinions
• Understanding other people's perspectives
• Knowing how other people feel
• Accepting negative feedback you don't agree with`
    },
    areaOfContinuedDevelopment: {
      whatScoreMeans: "Moderate indicator in Empathy implies that you may...",
      skillPoints:
        `• Sometimes have a good idea of how other people feel
• Try to solve other people's problems instead of listening first
• Sometimes be insensitive to the emotions others have
• Find it hard to see or accept why people give you critical feedback
• Find it difficult to understand both sides of a disagreement`
    },
    promisingArea: {
      whatScoreMeans: "High indicator in Empathy implies that you likely are...",
      skillPoints: 
        `• Patient and focused when someone needs you to listen
• Able to understand the reasons behind other people's actions
• Very good at understanding and describing what people are feeling
• Able to describe what another means when they say something`
    },
  },
  {
    id: 1,

    title: "Authenticity",
    description: `The alignment between what you say you believe in and/or is important to you and your actions; sometimes referred to as living one's core values or "walking the talk"`,
    areaOfConcern: {
      whatScoreMeans: "Low indicator in Authenticity implies you may not...",
      skillPoints:
      `• Do what you think is right
• Give your opinion when it could get awkward
• Admit when you have made mistakes
• Treat everyone the same according to your values
• Accept your part in a difficult relationship`
    },
    areaOfContinuedDevelopment: {
      whatScoreMeans: "Moderate indicator in Authenticity implies that you may...",
      skillPoints:
        `• Confuse others when you act differently from what you believe
• Become vague when faced with a difficult decision
• Have a tendency to behave in ways just to fit in
• Not reflect on the reasons you do and say what you do`
    },
    promisingArea: {
      whatScoreMeans: "High indicator in Authenticity implies that you likely are...",
      skillPoints:
        `• The same person with different people
• Able to stick to your values in difficult situations
• Open and clear about what you believe in
• Able to admit and face the consequences of your actions
• Honest with yourself about your strengths and development needs
• Predictable in the way you make decisions`
    }
  },
  
  
  

];

export const basisForLSA = {
  header: "The LSAs are key elements of Emotional / Social Intelligence (EQ/SQ), which has been shown over the last three decades to be competencies that make leaders highly effective.",
  howDoWeKnow: "How do we know?",
  pointOne: "Daniel Goleman introduced these concepts. Decades of EQ assessments show higher levels of EQ/SQ create more employee engagement and better results.",
  pointTwo: "The Leadership Circle and the Zenger-Folkman organizations separately gathered data from 200,000 leadership feedback surveys arriving at the same conclusions.",
  pointThree: "This data proves leaders passionately driven to succeed, even with a clear vision and great business skills but weak in EQ/SQ get only short-lived results because they do not build strong teams and cultures",
  footer: "Common sense also tells us working for a leader who cares more about their own success than their people is never as good to work for as one who has LSA strength."
}