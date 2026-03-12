import React from 'react';
import Navbar from './components/NavBar';
import ResumeChatbot from './components/ResumeChatbot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>
      <ResumeChatbot />
    </div>
  );
};

export default Layout;
