import { Question, AssessmentSection } from "@/types/assessment";

export const assessmentQuestions: Question[] = [
  // Interest Scale (7 items)
  {
    id: "interest_1",
    text: "I enjoy helping people feel confident in new environments.",
    type: "scale",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: { min: "Strongly Disagree", max: "Strongly Agree" },
    category: "interest",
    framework: "Interest Scale"
  },
  {
    id: "interest_2", 
    text: "I find satisfaction in creating structure for others.",
    type: "scale",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: { min: "Strongly Disagree", max: "Strongly Agree" },
    category: "interest",
    framework: "Interest Scale"
  },
  {
    id: "interest_3",
    text: "I get energized when I see someone successfully complete a process I've designed.",
    type: "scale",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: { min: "Strongly Disagree", max: "Strongly Agree" },
    category: "interest",
    framework: "Interest Scale"
  },
  {
    id: "interest_4",
    text: "I enjoy explaining complex processes in simple terms.",
    type: "scale",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: { min: "Strongly Disagree", max: "Strongly Agree" },
    category: "interest",
    framework: "Interest Scale"
  },
  {
    id: "interest_5",
    text: "I like being the first point of contact for newcomers.",
    type: "scale",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: { min: "Strongly Disagree", max: "Strongly Agree" },
    category: "interest",
    framework: "Interest Scale"
  },
  {
    id: "interest_6",
    text: "I feel motivated by improving processes based on user feedback.",
    type: "scale",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: { min: "Strongly Disagree", max: "Strongly Agree" },
    category: "interest",
    framework: "Interest Scale"
  },
  {
    id: "interest_7",
    text: "I prefer roles where I can directly impact someone's first impression of an organization.",
    type: "scale",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: { min: "Strongly Disagree", max: "Strongly Agree" },
    category: "interest",
    framework: "Interest Scale"
  },

  // Personality Compatibility (Big Five Focus - 8 items)
  {
    id: "personality_1",
    text: "I like to organize tasks so others can follow them easily.",
    type: "scale",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: { min: "Strongly Disagree", max: "Strongly Agree" },
    category: "personality",
    framework: "Big Five - Conscientiousness"
  },
  {
    id: "personality_2",
    text: "I stay calm when people feel confused or frustrated.",
    type: "scale",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: { min: "Strongly Disagree", max: "Strongly Agree" },
    category: "personality",
    framework: "Big Five - Agreeableness"
  },
  {
    id: "personality_3",
    text: "I naturally notice when someone might need extra support or guidance.",
    type: "scale",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: { min: "Strongly Disagree", max: "Strongly Agree" },
    category: "personality",
    framework: "Big Five - Agreeableness"
  },
  {
    id: "personality_4",
    text: "I adapt well when processes need to be changed or improved.",
    type: "scale",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: { min: "Strongly Disagree", max: "Strongly Agree" },
    category: "personality",
    framework: "Big Five - Openness"
  },
  {
    id: "personality_5",
    text: "I pay attention to details to ensure accuracy in my work.",
    type: "scale",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: { min: "Strongly Disagree", max: "Strongly Agree" },
    category: "personality",
    framework: "Big Five - Conscientiousness"
  },
  {
    id: "personality_6",
    text: "I can handle multiple people with different needs at the same time.",
    type: "scale",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: { min: "Strongly Disagree", max: "Strongly Agree" },
    category: "personality",
    framework: "Big Five - Emotional Stability"
  },
  {
    id: "personality_7",
    text: "I enjoy learning about new tools and technologies that could improve workflows.",
    type: "scale",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: { min: "Strongly Disagree", max: "Strongly Agree" },
    category: "personality",
    framework: "Big Five - Openness"
  },
  {
    id: "personality_8",
    text: "I prefer working with checklists and repeatable processes.",
    type: "scale",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: { min: "Strongly Disagree", max: "Strongly Agree" },
    category: "personality",
    framework: "Big Five - Conscientiousness"
  },

  // Motivation & Resilience (6 items)
  {
    id: "motivation_1",
    text: "I feel motivated by seeing others succeed because of my help.",
    type: "scale",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: { min: "Strongly Disagree", max: "Strongly Agree" },
    category: "motivation",
    framework: "Self-Determination Theory"
  },
  {
    id: "motivation_2",
    text: "Even if someone resists, I keep trying to guide them constructively.",
    type: "scale",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: { min: "Strongly Disagree", max: "Strongly Agree" },
    category: "motivation",
    framework: "Grit Scale"
  },
  {
    id: "motivation_3",
    text: "I persist through challenges when helping someone learn a new process.",
    type: "scale",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: { min: "Strongly Disagree", max: "Strongly Agree" },
    category: "motivation",
    framework: "Grit Scale"
  },
  {
    id: "motivation_4",
    text: "I find intrinsic satisfaction in making complex things simple for others.",
    type: "scale",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: { min: "Strongly Disagree", max: "Strongly Agree" },
    category: "motivation",
    framework: "Self-Determination Theory"
  },
  {
    id: "motivation_5",
    text: "I can stay positive even when dealing with difficult or anxious new employees.",
    type: "scale",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: { min: "Strongly Disagree", max: "Strongly Agree" },
    category: "motivation",
    framework: "Emotional Regulation"
  },
  {
    id: "motivation_6",
    text: "I'm motivated by continuous improvement rather than just completing tasks.",
    type: "scale",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: { min: "Strongly Disagree", max: "Strongly Agree" },
    category: "motivation",
    framework: "Growth Mindset"
  },

  // General Aptitude (8 items)
  {
    id: "aptitude_1",
    text: "You're onboarding a new employee who doesn't understand the payroll system. What's your first step?",
    type: "multiple-choice",
    options: [
      "Direct them to HR immediately",
      "Ask what specific part they're confused about and assess their current understanding",
      "Give them the user manual to read",
      "Schedule a meeting for next week to go through it"
    ],
    category: "aptitude",
    framework: "Communication Logic"
  },
  {
    id: "aptitude_2",
    text: "If you notice a pattern of new hires struggling with the same part of your onboarding process, what would you do?",
    type: "multiple-choice",
    options: [
      "Assume they'll figure it out eventually",
      "Analyze the feedback and redesign that part of the process",
      "Add more documentation about that step",
      "Spend more one-on-one time with each person"
    ],
    category: "aptitude",
    framework: "Problem-solving"
  },
  {
    id: "aptitude_3",
    text: "When creating an onboarding timeline, which approach is most effective?",
    type: "multiple-choice",
    options: [
      "Front-load all important information in the first day",
      "Spread critical information evenly across the first month",
      "Sequence information based on what people need to know to do their job effectively",
      "Let each department handle their own onboarding timing"
    ],
    category: "aptitude",
    framework: "Sequencing"
  },
  {
    id: "aptitude_4",
    text: "A new hire seems overwhelmed by all the information. How would you respond?",
    type: "multiple-choice",
    options: [
      "Tell them it's normal and they'll adjust",
      "Reduce the amount of information they receive",
      "Check in with them to identify which parts are causing stress and adjust accordingly",
      "Pair them with a buddy for the rest of the week"
    ],
    category: "aptitude",
    framework: "Empathy & Assessment"
  },
  {
    id: "aptitude_5",
    text: "How would you measure the success of your onboarding process?",
    type: "multiple-choice",
    options: [
      "Time to complete all onboarding tasks",
      "New hire satisfaction scores only",
      "Multiple metrics: time-to-productivity, satisfaction, retention, and manager feedback",
      "Whether people show up to all the meetings"
    ],
    category: "aptitude",
    framework: "Analytical Thinking"
  },
  {
    id: "aptitude_6",
    text: "What's the best way to handle conflicting priorities from different departments during onboarding?",
    type: "multiple-choice",
    options: [
      "Let each department fight it out",
      "Always prioritize HR requirements first",
      "Facilitate a discussion to align on what's most critical for the new hire's success",
      "Create separate onboarding tracks for each department"
    ],
    category: "aptitude",
    framework: "Stakeholder Management"
  },
  {
    id: "aptitude_7",
    text: "A new hire is not completing their onboarding tasks on time. What's your approach?",
    type: "multiple-choice",
    options: [
      "Send reminder emails until they complete everything",
      "Report them to their manager immediately",
      "Investigate if there are barriers preventing completion and provide targeted support",
      "Extend their deadline automatically"
    ],
    category: "aptitude",
    framework: "Problem-solving"
  },
  {
    id: "aptitude_8",
    text: "Which scenario best represents effective onboarding communication?",
    type: "multiple-choice",
    options: [
      "Sending all information via email before their start date",
      "Explaining everything verbally in person on day one",
      "Using multiple formats (visual, written, verbal) and checking for understanding",
      "Providing access to a knowledge base and letting them explore"
    ],
    category: "aptitude",
    framework: "Communication Strategy"
  },

  // Technical Knowledge (8 items)
  {
    id: "technical_1",
    text: "What is the primary purpose of an LMS (Learning Management System) in onboarding?",
    type: "multiple-choice",
    options: [
      "To replace all human interaction in onboarding",
      "To track, deliver, and manage learning content and progress",
      "To store employee personal information",
      "To schedule meeting rooms"
    ],
    category: "technical",
    framework: "HR Technology"
  },
  {
    id: "technical_2",
    text: "In onboarding workflow design, what does 'progressive disclosure' mean?",
    type: "multiple-choice",
    options: [
      "Revealing information gradually based on need and readiness",
      "Making all information available immediately",
      "Only sharing information when asked",
      "Hiding information until the end of onboarding"
    ],
    category: "technical",
    framework: "UX Principles"
  },
  {
    id: "technical_3",
    text: "Which metric is most valuable for measuring onboarding effectiveness?",
    type: "multiple-choice",
    options: [
      "Number of documents read",
      "Time spent in onboarding activities",
      "Time to productivity and role competency",
      "Number of questions asked"
    ],
    category: "technical",
    framework: "Analytics"
  },
  {
    id: "technical_4",
    text: "What's the best practice for handling sensitive information during onboarding?",
    type: "multiple-choice",
    options: [
      "Share everything via email for documentation",
      "Use secure platforms with role-based access control",
      "Only discuss sensitive information verbally",
      "Wait until after probation period to share sensitive information"
    ],
    category: "technical",
    framework: "Compliance & Security"
  },
  {
    id: "technical_5",
    text: "In stakeholder alignment for onboarding, who should typically be involved?",
    type: "multiple-choice",
    options: [
      "Only HR and the new hire's direct manager",
      "HR, direct manager, IT, and key team members the new hire will work with",
      "Just HR",
      "Everyone in the company"
    ],
    category: "technical",
    framework: "Stakeholder Management"
  },
  {
    id: "technical_6",
    text: "What's the most effective way to gather feedback on your onboarding process?",
    type: "multiple-choice",
    options: [
      "Annual surveys only",
      "Multiple touchpoints: during onboarding, at 30/60/90 days, and from managers",
      "Exit interviews when people leave",
      "Informal conversations only"
    ],
    category: "technical",
    framework: "Continuous Improvement"
  },
  {
    id: "technical_7",
    text: "When should compliance training typically occur in the onboarding process?",
    type: "multiple-choice",
    options: [
      "Before the first day",
      "During the first week, integrated with role-specific training",
      "After 30 days when they're settled",
      "Only when there's a compliance issue"
    ],
    category: "technical",
    framework: "Compliance"
  },
  {
    id: "technical_8",
    text: "How should you handle onboarding for remote vs. in-person employees?",
    type: "multiple-choice",
    options: [
      "Use exactly the same process for both",
      "Only focus on in-person onboarding",
      "Adapt the process to address unique needs while maintaining core consistency",
      "Let remote employees figure it out themselves"
    ],
    category: "technical",
    framework: "Process Design"
  }
];

export const assessmentSections: AssessmentSection[] = [
  {
    title: "Interest & Motivation Assessment",
    description: "Explore your natural interests and what motivates you in helping others succeed.",
    questions: assessmentQuestions.filter(q => q.category === 'interest' || q.category === 'motivation'),
    estimatedTime: 8
  },
  {
    title: "Personality & Work Style",
    description: "Assess your personality traits and how they align with onboarding specialist requirements.",
    questions: assessmentQuestions.filter(q => q.category === 'personality'),
    estimatedTime: 6
  },
  {
    title: "Practical Aptitude",
    description: "Test your problem-solving and decision-making skills in onboarding scenarios.",
    questions: assessmentQuestions.filter(q => q.category === 'aptitude'),
    estimatedTime: 10
  },
  {
    title: "Technical Knowledge",
    description: "Evaluate your understanding of tools, processes, and best practices in onboarding.",
    questions: assessmentQuestions.filter(q => q.category === 'technical'),
    estimatedTime: 8
  }
];