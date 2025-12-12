export interface PersonalInfo {
  name: string;
  title: string;
  avatar: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

export interface Education {
  school: string;
  degree: string;
  major: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface WorkExperience {
  company: string;
  position: string;
  startDate: string;
  endDate: string | 'present';
  location: string;
  description: string[];
  technologies?: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  highlights: string[];
}

export interface Skill {
  category: string;
  items: {
    name: string;
    level: number; // 1-5
    icon?: string;
  }[];
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  workExperience: WorkExperience[];
  projects: Project[];
  skills: Skill[];
}

