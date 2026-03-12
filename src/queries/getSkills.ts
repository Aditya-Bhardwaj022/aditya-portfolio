import { Skill } from '../types';

const skills: Skill[] = [
  // Programming Languages
  {
    name: 'Java',
    category: 'Programming Languages',
    description: 'Primary backend language used for building robust APIs and services.',
    icon: 'FaJava',
  },
  {
    name: 'Python',
    category: 'Programming Languages',
    description: 'Used for AI, ML experiments and backend scripting.',
    icon: 'FaPython',
  },
  {
    name: 'SQL',
    category: 'Programming Languages',
    description: 'Writing queries and designing relational schemas for transactional systems.',
    icon: 'SqlRed',
  },

  // Backend & Frameworks
  {
    name: 'Spring Boot',
    category: 'Backend & Frameworks',
    description: 'Building secure, production-ready REST APIs in Java.',
    icon: 'SiSpringboot',
  },
  {
    name: 'Spring JPA',
    category: 'Backend & Frameworks',
    description: 'Data access layer with clean repository patterns.',
    icon: 'JpaRed',
  },
  {
    name: 'Spring Security',
    category: 'Backend & Frameworks',
    description: 'Authentication and authorization for backend services.',
    icon: 'SpringSecurityRed',
  },
  {
    name: 'JDBC',
    category: 'Backend & Frameworks',
    description: 'Low-level database connectivity for custom data access.',
    icon: 'JdbcRed',
  },
  {
    name: 'Servlets',
    category: 'Backend & Frameworks',
    description: 'Understanding of Java web fundamentals and request handling.',
    icon: 'ServletRed',
  },

  // Tools & Platforms
  {
    name: 'Git',
    category: 'Tools & Platforms',
    description: 'Version control for collaborative software development.',
    icon: 'FaGitAlt',
  },
  {
    name: 'Postman',
    category: 'Tools & Platforms',
    description: 'Designing, testing, and debugging REST APIs.',
    icon: 'SiPostman',
  },
  {
    name: 'MySQL',
    category: 'Tools & Platforms',
    description: 'Relational database for backend applications and projects.',
    icon: 'SiMysql',
  },
  {
    name: 'PostgreSQL',
    category: 'Tools & Platforms',
    description: 'Relational database used for transactional workloads and analytics.',
    icon: 'SiPostgresql',
  },

  // Soft Skills
  {
    name: 'Communication',
    category: 'Soft Skills',
    description: 'Clearly explaining technical concepts to non-technical stakeholders.',
    icon: 'CommunicationRed',
  },
  {
    name: 'Leadership',
    category: 'Soft Skills',
    description: 'Taking initiative and driving tasks to completion.',
    icon: 'LeadershipRed',
  },

];

export async function getSkills(): Promise<Skill[]> {
  return Promise.resolve(skills);
}
