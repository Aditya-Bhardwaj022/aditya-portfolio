import { ProfileBanner } from '../types';

const banner: ProfileBanner = {
  backgroundImage: {
    url: '',
  },
  headline: 'Aditya Bhardwaj - Java Developer',
  resumeLink: {
    url: 'https://drive.google.com/file/d/13sLAH_Y6wx7RZZEFUJAsmDTNVt2IhEql/view?usp=sharing',
  },
  linkedinLink: 'https://www.linkedin.com/in/aditya-bhardwaj-9572a3260/',
  profileSummary:
    'Backend developer with a strong foundation in Java, Python, and AI-driven backend architecture. I specialize in designing secure, scalable REST APIs, integrating LLM and AI pipelines into production systems, and optimizing data flows between services and databases. I enjoy building robust, well-tested backend services, improving performance through careful profiling and refactoring, and deploying applications on cloud platforms where reliability and observability are first-class concerns.',
};

export async function getProfileBanner(): Promise<ProfileBanner> {
  return Promise.resolve(banner);
}
