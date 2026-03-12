import { Certification } from '../types';

const certifications: Certification[] = [
  {
    title: 'Java (Basic)',
    issuer: 'HackerRank',
    issuedDate: 'Apr 2025',
    link: 'https://www.hackerrank.com/certificates/4e463e5a88db',
    iconName: 'university',
  },
  {
    title: 'LangChain: AI Applications with LLMs',
    issuer: 'Udemy',
    issuedDate: 'May 2025',
    link: 'https://www.udemy.com/certificate/UC-b5575be6-66c9-4e38-b396-bf852debe5ab/',
    iconName: 'udemy',
  },
  {
    title: 'Data Structures & Algorithms: Java',
    issuer: 'Udemy',
    issuedDate: 'Mar 2026',
    link: 'https://www.udemy.com/certificate/UC-2a4f5da2-05d8-41fe-bb06-245f215f30ab/',
    iconName: 'udemy',
  },
  {
    title: 'Machine Learning',
    issuer: 'Udemy',
    issuedDate: 'Dec 2025',
    link: 'https://www.udemy.com/certificate/UC-995f4ffb-7b4b-42d9-b537-877688de54df',
    iconName: 'udemy',
  },
];

export async function getCertifications(): Promise<Certification[]> {
  return Promise.resolve(certifications);
}
