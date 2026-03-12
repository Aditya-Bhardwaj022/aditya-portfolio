import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaCode, FaBriefcase, FaCertificate, FaProjectDiagram, FaEnvelope, FaMusic, FaBook } from 'react-icons/fa';
import certificationsImg from '../images/certfications.png';
import mrBeanGif from '../images/mr bean gif.gif';

import { ProfileType } from './profilePage';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    { title: "Skills", imgSrc: "https://media1.tenor.com/m/pw9_ErAU0j8AAAAC/crowley-demon.gif", icon: <FaCode />, route: "/skills" },
    { title: "Experience", imgSrc: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjVkZWUwc3Fua2YxNGFwMWNoenZlNjR0c3VqYmN6M2RpMDU2cDBpbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rQ5cWOkvXfoTUZLIPh/giphy.gif", icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Certifications", imgSrc: certificationsImg, icon: <FaCertificate />, route: "/certifications" },
    { title: "Projects", imgSrc: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaW5wb2ViODExM24weXBjY2JidnFpN3hpZnYxdXNkOGh3eWhycmd4OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kd9BlRovbPOykLBMqX/giphy.gif", icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Contact Me", imgSrc: mrBeanGif, icon: <FaEnvelope />, route: "/contact-me", state: { backgroundGif: mrBeanGif } }
  ],
  developer: [
    { title: "Skills", imgSrc: "https://media1.tenor.com/m/re4zaC9nMBkAAAAC/mrbean-wink.gif", route: "/skills", icon: <FaCode /> },
    { title: "Projects", imgSrc: "https://media1.tenor.com/m/JPA20xBsUtIAAAAC/curious-searching.gif", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Certifications", imgSrc: certificationsImg, route: "/certifications", icon: <FaCertificate /> },
    { title: "Experience", imgSrc: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjVkZWUwc3Fua2YxNGFwMWNoenZlNjR0c3VqYmN6M2RpMDU2cDBpbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rQ5cWOkvXfoTUZLIPh/giphy.gif", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Contact Me", imgSrc: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3M1dWkwcjV1eHh4MWJrZHltMjk3bm16Z2pjZHozcWEybXpyeGRhNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3yRHVLXGeodopGpq7l/giphy.gif", route: "/contact-me", icon: <FaEnvelope /> }
  ],
  stalker: [
    { title: "Skills", imgSrc: "https://media1.tenor.com/m/re4zaC9nMBkAAAAC/mrbean-wink.gif", route: "/skills", icon: <FaCode /> },
    { title: "Contact Me", imgSrc: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWs2amZpY2RvYW1oem9kaGVlY2poMzJvOXI2eWhzdG1paGhkYmpmaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8Bkr9UJQTuqEnzkOae/giphy.gif", route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Projects", imgSrc: "https://media1.tenor.com/m/VdCtelFMyhwAAAAC/aujaar-kaat-dekh-wasseypur.gif", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Experience", imgSrc: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM25vM2Q3MGE0eW45cnA2ZXd2cThlNmVlZDRtbWYyMnZjbTd1N3MzdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PlnQNcQ4RYOhG/giphy.gif", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Certifications", imgSrc: "https://media1.tenor.com/m/v-evxu0nZ70AAAAC/rec-camera.gif", route: "/certifications", icon: <FaCertificate /> },
  ],
  adventurer: [
    { title: "Skills", imgSrc: "https://media1.tenor.com/m/re4zaC9nMBkAAAAC/mrbean-wink.gif", route: "/skills", icon: <FaCode /> },
    { title: "Music", imgSrc: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2M0bDNhNmtxdTl1Y3M5ZGljYm84OThsNXhidnlyMmw2c2Nmbm5wNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4oMoIbIQrvCjm/giphy.gif", route: "/music", icon: <FaMusic /> },
    { title: "Projects", imgSrc: "https://media1.tenor.com/m/Cz9cymaGnrEAAAAC/looking-seyi-awolowo.gif", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Reading", imgSrc: "https://media1.tenor.com/m/AsWsbpGDXPwAAAAC/knowledge-brain.gif", route: "/reading", icon: <FaBook /> },
    { title: "Contact Me", imgSrc: "https://media1.tenor.com/m/IYmf53O__HIAAAAC/telephone-phone.gif", route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Certifications", imgSrc: certificationsImg, route: "/certifications", icon: <FaCertificate /> }
  ]
};


const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
        {topPicks.map((pick: any, index: number) => (
          <div
            key={index}
            className="pick-card"
            onClick={() => navigate(pick.route, { state: pick.state })}
            style={{ animationDelay: `${index * 0.2}s` }} // Adding delay based on index
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
