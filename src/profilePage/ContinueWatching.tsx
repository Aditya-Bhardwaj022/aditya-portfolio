import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';
import certificationsImg from '../images/certfications.png';
import mrBeanGif from '../images/mr bean gif.gif';

import { ProfileType } from './profilePage';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  recruiter: [
    { title: "Skills", imgSrc: "https://media1.tenor.com/m/pw9_ErAU0j8AAAAC/crowley-demon.gif", link: "/skills" },
    { title: "Music", imgSrc: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2M0bDNhNmtxdTl1Y3M5ZGljYm84OThsNXhidnlyMmw2c2Nmbm5wNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4oMoIbIQrvCjm/giphy.gif", link: "/music" },
    { title: "Reading", imgSrc: "https://media1.tenor.com/m/sPxBHc3552MAAAAC/cute-baby.gif", link: "/reading" },
    { title: "Experience", imgSrc: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjVkZWUwc3Fua2YxNGFwMWNoenZlNjR0c3VqYmN6M2RpMDU2cDBpbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rQ5cWOkvXfoTUZLIPh/giphy.gif", link: "/work-experience" },
    { title: "Contact Me", imgSrc: mrBeanGif, link: "/contact-me", state: { backgroundGif: mrBeanGif } }
  ],
  developer: [
    { title: "Skills", imgSrc: "https://media1.tenor.com/m/re4zaC9nMBkAAAAC/mrbean-wink.gif", link: "/skills" },
    { title: "Music", imgSrc: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2M0bDNhNmtxdTl1Y3M5ZGljYm84OThsNXhidnlyMmw2c2Nmbm5wNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4oMoIbIQrvCjm/giphy.gif", link: "/music" },
    { title: "Reading", imgSrc: "https://media1.tenor.com/m/sPxBHc3552MAAAAC/cute-baby.gif", link: "/reading" },
    { title: "Projects", imgSrc: "https://media1.tenor.com/m/JPA20xBsUtIAAAAC/curious-searching.gif", link: "/projects" },
    { title: "Experience", imgSrc: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjVkZWUwc3Fua2YxNGFwMWNoenZlNjR0c3VqYmN6M2RpMDU2cDBpbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rQ5cWOkvXfoTUZLIPh/giphy.gif", link: "/work-experience" },
    { title: "Certifications", imgSrc: certificationsImg, link: "/certifications" },
    { title: "Contact Me", imgSrc: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3M1dWkwcjV1eHh4MWJrZHltMjk3bm16Z2pjZHozcWEybXpyeGRhNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3yRHVLXGeodopGpq7l/giphy.gif", link: "/contact-me" }
  ],
  stalker: [
    { title: "Skills", imgSrc: "https://media1.tenor.com/m/re4zaC9nMBkAAAAC/mrbean-wink.gif", link: "/skills" },
    { title: "Projects", imgSrc: "https://media1.tenor.com/m/VdCtelFMyhwAAAAC/aujaar-kaat-dekh-wasseypur.gif", link: "/projects" },
    { title: "Reading", imgSrc: "https://media1.tenor.com/m/AsWsbpGDXPwAAAAC/knowledge-brain.gif", link: "/reading" },
    { title: "Certifications", imgSrc: "https://media1.tenor.com/m/v-evxu0nZ70AAAAC/rec-camera.gif", link: "/certifications" },
    { title: "Contact Me", imgSrc: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWs2amZpY2RvYW1oem9kaGVlY2poMzJvOXI2eWhzdG1paGhkYmpmaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8Bkr9UJQTuqEnzkOae/giphy.gif", link: "/contact-me" }
  ],
  adventurer: [
    { title: "Skills", imgSrc: "https://media1.tenor.com/m/re4zaC9nMBkAAAAC/mrbean-wink.gif", link: "/skills" },
    { title: "Music", imgSrc: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2M0bDNhNmtxdTl1Y3M5ZGljYm84OThsNXhidnlyMmw2c2Nmbm5wNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4oMoIbIQrvCjm/giphy.gif", link: "/music" },
    { title: "Projects", imgSrc: "https://media1.tenor.com/m/Cz9cymaGnrEAAAAC/looking-seyi-awolowo.gif", link: "/projects" },
    { title: "Reading", imgSrc: "https://media1.tenor.com/m/AsWsbpGDXPwAAAAC/knowledge-brain.gif", link: "/reading" },
    { title: "Certifications", imgSrc: certificationsImg, link: "/certifications" },
    { title: "Contact Me", imgSrc: "https://media1.tenor.com/m/IYmf53O__HIAAAAC/telephone-phone.gif", link: "/contact-me" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick: any, index: number) => (
          <Link to={pick.link} key={index} className="pick-card" state={pick.state}>
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
