import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './ProfilePage.css';

import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';
export type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventurer';

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const { profileName } = useParams<{ profileName: string }>();

  const gifPresets: Record<string, string> = {
    recruiter: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif",
    developer: "https://media1.tenor.com/m/DnMOr2rgYaQAAAAC/jim-carrey-jim-carrey-typing.gif",
    stalker: "https://media1.tenor.com/m/27l-9pcdYwgAAAAC/conan-obrien.gif",
    adventurer: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxib24ycWo2cjlmazh0NGV5NTZ2Mzd2YWY0M2tvam9oYXBwYW1ocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ERKMnDK6tkzJe8YVa3/giphy-downsized-large.gif"
  };

  const backgroundGif = location.state?.backgroundGif || gifPresets[profileName || 'recruiter'] || "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif";

  const profile = ['recruiter', 'developer', 'stalker', 'adventurer'].includes(profileName!)
    ? (profileName as ProfileType)
    : 'recruiter';
  return (
    <>
      <div
        className="profile-page"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      >
        <ProfileBanner
        />
      </div>
      <TopPicksRow profile={profile} />
      <ContinueWatching profile={profile} />
    </>
  );
};

export default ProfilePage;
