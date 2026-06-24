export interface Skill {
  name: string;
  category: 'programming' | 'web' | 'tools' | 'soft';
  level: number; // 0 to 100 for visual progress indicators
}

export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  tech: string[];
  category: 'ai' | 'hardware';
  githubUrl?: string;
  liveUrl?: string;
  colorScheme: string; // Gradient color theme for card highlight
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  grade: string;
  gradeType: 'CGPA' | 'Percentage' | 'GPA';
  iconName: 'graduation' | 'college' | 'school';
}

export interface Internship {
  id: string;
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  credentialId?: string;
  badgeColor: string;
}

export interface LeadershipActivity {
  id: string;
  role: string;
  organization: string;
  period: string;
  responsibilities: string[];
}

export interface Language {
  name: string;
  proficiency: string;
  level: number; // 0 to 100
}
