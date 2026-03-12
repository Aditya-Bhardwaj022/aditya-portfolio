import { Project } from '../types';
import authScanImg from '../images/authscan.png';
import aiTripPlannerImg from '../images/ai trip planner.png';

const projects: Project[] = [
  {
    title: 'AI Trip Planner (Multi-Agent System)',
    description:
      'Multi-agent travel planner with Research, Optimization, and Itinerary agents, exposing REST APIs (/plan_trip, /chat) using FastAPI and deployed on Railway.',
    techUsed: 'Python, FastAPI, REST APIs, Groq, Hugging Face, Railway',
    image: {
      url: aiTripPlannerImg,
    },
  },
  {
    title: 'AuthScan – Certificate Authenticator for Academia',
    description:
      'AI + CV pipeline using OCR/MRZ, SHA-256, and polygon hashing to verify academic documents, integrating LLaMA-vision embeddings to improve small-text and MRZ/QR detection.',
    techUsed: 'Python, Computer Vision, OCR, SHA-256, LLaMA-vision',
    image: {
      url: authScanImg,
    },
  },
];

export async function getProjects(): Promise<Project[]> {
  return Promise.resolve(projects);
}
