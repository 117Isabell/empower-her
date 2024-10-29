export const quizQuestions = [
  {
    question: "How do you typically feel before a job interview?",
    options: [
      { text: "Very anxious and overwhelmed", score: 1 },
      { text: "Somewhat nervous but manageable", score: 2 },
      { text: "Calm with slight anticipation", score: 3 },
      { text: "Confident and excited for the opportunity", score: 4 }
    ]
  },
  {
    question: "When asked about your achievements, how comfortable are you discussing them?",
    options: [
      { text: "I prefer not to discuss my achievements", score: 1 },
      { text: "I downplay my achievements", score: 2 },
      { text: "I can discuss them but feel somewhat uncomfortable", score: 3 },
      { text: "I confidently share my achievements", score: 4 }
    ]
  },
  {
    question: "How do you handle technical questions you're unsure about?",
    options: [
      { text: "I panic and struggle to respond", score: 1 },
      { text: "I try to guess but feel very uncertain", score: 2 },
      { text: "I admit uncertainty but try to reason through it", score: 3 },
      { text: "I confidently discuss what I know and am honest about what I don't", score: 4 }
    ]
  },
  {
    question: "When negotiating salary, how confident do you feel?",
    options: [
      { text: "I accept whatever is offered", score: 1 },
      { text: "I feel very uncomfortable negotiating", score: 2 },
      { text: "I can negotiate but feel anxious about it", score: 3 },
      { text: "I confidently advocate for my worth", score: 4 }
    ]
  },
  {
    question: "How do you feel about speaking up in team meetings?",
    options: [
      { text: "I rarely speak up", score: 1 },
      { text: "I speak up only when directly asked", score: 2 },
      { text: "I contribute occasionally when feeling confident", score: 3 },
      { text: "I regularly share my ideas and opinions", score: 4 }
    ]
  }
];

export const getConfidenceLevel = (scores: number[]) => {
  const average = scores.reduce((a, b) => a + b, 0) / scores.length;
  
  if (average <= 1.5) return "developing";
  if (average <= 2.5) return "emerging";
  if (average <= 3.5) return "confident";
  return "very_confident";
};

export const confidenceFeedback = {
  developing: {
    title: "Developing Confidence",
    description: "You're at the beginning of your confidence journey. This is a great starting point for growth!",
    tips: [
      "Start with small challenges and gradually increase difficulty",
      "Practice positive self-talk daily",
      "Set small, achievable goals and celebrate your wins",
      "Consider working with a mentor or coach"
    ]
  },
  emerging: {
    title: "Emerging Confidence",
    description: "You're building confidence but still have room to grow. Keep pushing your boundaries!",
    tips: [
      "Practice speaking up more in meetings",
      "Document your achievements regularly",
      "Role-play difficult conversations with friends",
      "Join professional networks or communities"
    ]
  },
  confident: {
    title: "Confident Professional",
    description: "You have a good foundation of confidence. Focus on consistency and growth!",
    tips: [
      "Mentor others to reinforce your own confidence",
      "Take on leadership opportunities",
      "Share your expertise through presentations or writing",
      "Practice advanced negotiation techniques"
    ]
  },
  very_confident: {
    title: "Very Confident Leader",
    description: "You have strong confidence! Focus on maintaining and sharing your confidence with others.",
    tips: [
      "Lead workshops or training sessions",
      "Write about your experiences to help others",
      "Take on challenging projects",
      "Help build confidence in your team members"
    ]
  }
};