import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NetflixTitle from './NetflixTitle';
import ProfilePage from './profilePage/profilePage';
import Browse from './browse/browse';
import WorkExperience from './pages/WorkExperience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Layout from './Layout';
import Music from './pages/Music';
import Reading from './pages/Reading';
import Certifications from './pages/Certifications';

const App: React.FC = () => {
  // #region agent log
  fetch('http://127.0.0.1:7431/ingest/a66d4bc7-778d-492e-9598-dee87e389a2e',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'907ae4'},body:JSON.stringify({sessionId:'907ae4',runId:'post-fix',hypothesisId:'H1',location:'src/App.tsx:20',message:'App routes initialized',data:{removedRoutes:['/recommendations','/blogs','/work-permit']},timestamp:Date.now()})}).catch(()=>{});
  // #endregion
  return (
    <Routes>
      <Route path="/" element={<NetflixTitle />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/profile/:profileName" element={<Layout><ProfilePage /></Layout>} />
      <Route path="/work-experience" element={<Layout><WorkExperience /></Layout>} />
      <Route path="/skills" element={<Layout><Skills /></Layout>} />
      <Route path="/projects" element={<Layout><Projects /></Layout>} />
      <Route path="/contact-me" element={<Layout><ContactMe /></Layout>} />
      <Route path="/music" element={<Layout><Music /></Layout>} />
      <Route path="/reading" element={<Layout><Reading /></Layout>} />
      <Route path="/certifications" element={<Layout><Certifications /></Layout>} />
    </Routes>
  );
};

export default App;
