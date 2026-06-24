import { Skill, Project, Education, Internship, Certification, LeadershipActivity, Language } from './types';

export const personalInfo = {
  name: 'Adari Ruchitha',
  title: 'AI & Computer Science Engineering Student',
  location: 'Visakhapatnam, Andhra Pradesh',
  email: 'a.ruchitha21@gmail.com',
  linkedIn: 'https://linkedin.com/in/adari-ruchitha-453185353',
  github: 'https://github.com',
  bio: 'I am an Artificial Intelligence and Computer Science Engineering student passionate about AI, Machine Learning, Web Development, and Problem Solving. I enjoy building intelligent systems and innovative solutions that create real-world impact.',
  highlights: [
    { text: 'AI Enthusiast', icon: 'BrainCircuit' },
    { text: 'Web Developer', icon: 'Code' },
    { text: 'Problem Solver', icon: 'Zap' },
    { text: 'Team Collaborator', icon: 'Users' },
    { text: 'Community Volunteer', icon: 'Heart' }
  ]
};

export const educationList: Education[] = [
  {
    id: 'edu-1',
    institution: "Vignan's Institute of Engineering for Women",
    degree: 'B.Tech in AI & CSE',
    period: '2023 – 2027',
    grade: '7.35',
    gradeType: 'CGPA',
    iconName: 'graduation'
  },
  {
    id: 'edu-2',
    institution: 'Sri Chaitanya Junior College for Women',
    degree: 'Intermediate (MPC)',
    period: '2021 – 2023',
    grade: '77.4%',
    gradeType: 'Percentage',
    iconName: 'college'
  },
  {
    id: 'edu-3',
    institution: 'Sri Chaitanya English Medium School',
    degree: 'SSC',
    period: '2020 – 2021',
    grade: '10.0',
    gradeType: 'GPA',
    iconName: 'school'
  }
];

export const internshipList: Internship[] = [
  {
    id: 'intern-1',
    role: 'AI Intern',
    company: 'Data Valley',
    period: 'May 2025 – July 2025',
    achievements: [
      'Learned Artificial Intelligence fundamentals and current industry directions.',
      'Worked with foundational Machine Learning concepts, models, and model tuning.',
      'Applied Data Analytics techniques to clean, transform, and draw insights from datasets.',
      'Developed problem-solving skills under structured real-world timelines.',
      'Gained hands-on industry experience and collaborated with senior trainers.'
    ]
  }
];

export const projectsList: Project[] = [
  {
    id: 'proj-1',
    title: 'AI-Driven Adaptive Learning Style Recommendation System',
    description: 'An intelligent educational platform that predicts student learning styles and offers custom material recommendations to maximize course comprehension and engagement.',
    features: [
      'Learning style prediction based on behavioral profiles',
      'Student academic performance analysis and tracking',
      'Personalized course and resource recommendations',
      'Real-time student feedback loop and visual analytics',
      'Machine learning-based model insights and adaptive paths'
    ],
    tech: ['Python', 'Machine Learning', 'Scikit-Learn', 'AI Algorithms', 'Pandas'],
    category: 'ai',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.example.com',
    colorScheme: 'from-blue-500 via-indigo-500 to-violet-600'
  },
  {
    id: 'proj-2',
    title: 'Fingerprint Based Door Lock System',
    description: 'A physical security solution integrating biometric verification with standard microcontroller infrastructure to enable keyless, tamper-resistant access control.',
    features: [
      'Biometric authentication via fingerprint sensor',
      'Secure access control mechanisms with low response delay',
      'Interactive entry log system to record accesses',
      'Microcontroller integration with secure power backup',
      'Active security monitoring and emergency alarm alerts'
    ],
    tech: ['Embedded Systems', 'Arduino/ESP32', 'Fingerprint Sensors', 'C/C++', 'Microcontrollers'],
    category: 'hardware',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.example.com',
    colorScheme: 'from-purple-500 via-fuchsia-500 to-pink-600'
  }
];

export const skillsList: Skill[] = [
  // Programming
  { name: 'Python', category: 'programming', level: 85 },
  { name: 'Java', category: 'programming', level: 75 },
  // Web Technologies
  { name: 'HTML5', category: 'web', level: 90 },
  { name: 'CSS3', category: 'web', level: 80 },
  // Tools
  { name: 'VS Code', category: 'tools', level: 90 },
  { name: 'Git', category: 'tools', level: 85 },
  { name: 'GitHub', category: 'tools', level: 85 },
  // Soft Skills
  { name: 'Leadership', category: 'soft', level: 90 },
  { name: 'Communication', category: 'soft', level: 85 },
  { name: 'Teamwork', category: 'soft', level: 90 },
  { name: 'Problem Solving', category: 'soft', level: 85 }
];

export const certificationsList: Certification[] = [
  {
    id: 'cert-1',
    name: 'Programming in Java',
    issuer: 'NPTEL – IIT Kharagpur',
    credentialId: 'NPTEL24CS23S123456',
    badgeColor: 'blue'
  },
  {
    id: 'cert-2',
    name: 'Software Engineering',
    issuer: 'NPTEL – IIT Kharagpur',
    credentialId: 'NPTEL24CS11S654321',
    badgeColor: 'purple'
  },
  {
    id: 'cert-3',
    name: 'Foundations of Artificial Intelligence',
    issuer: 'Data Valley',
    credentialId: 'DV-AI-2025-449',
    badgeColor: 'indigo'
  },
  {
    id: 'cert-4',
    name: 'Full Stack Development',
    issuer: 'Infosys Springboard',
    credentialId: 'INF-FSD-98310',
    badgeColor: 'emerald'
  },
  {
    id: 'cert-5',
    name: 'Advanced Web Development',
    issuer: 'IDIGITALPRENEUR Pvt. Ltd.',
    credentialId: 'IDP-AWD-55109',
    badgeColor: 'amber'
  }
];

export const leadershipList: LeadershipActivity[] = [
  {
    id: 'lead-1',
    role: 'Coordinator',
    organization: 'Street Cause NGO',
    period: '2024 – 2025',
    responsibilities: [
      'Organized social service initiatives spanning hygiene awareness, primary education resources, and old age assistance.',
      'Coordinated and mobilized 30+ passionate student volunteers across Visakhapatnam.',
      'Conducted environment and sanitation awareness campaigns targeting semi-urban communities.',
      'Managed donation drives and food relief programs for underprivileged families.'
    ]
  }
];

export const languagesList: Language[] = [
  { name: 'Telugu', proficiency: 'Native', level: 100 },
  { name: 'English', proficiency: 'Professional', level: 90 },
  { name: 'Hindi', proficiency: 'Conversational', level: 70 }
];
