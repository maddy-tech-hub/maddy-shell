import { RootStateType } from '@src/redux/store';
import React, { Suspense } from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import profile from '../assets/profile.png';

// Lazy load the Profile component
const Profile = React.lazy(() => import('maddy_widget/Profile'));

const Home: React.FC = () => {
  const { siteTitle, socialLinks } = useSelector(
    (state: RootStateType) => state.contactDetailsSlice
  );
  const intl = useIntl();

  const profileData = {
    profileImage: profile,
    siteTitle: siteTitle,
    socialLinks: socialLinks,
    profileText: {
      greeting: intl.formatMessage({ id: 'greeting' }),
      name: intl.formatMessage({ id: 'name' }),
      title: intl.formatMessage({ id: 'bioTitle' }),
      description: intl.formatMessage({ id: 'description' }),
      linkText: intl.formatMessage({ id: 'linkText' }),
      linkURL: intl.formatMessage({ id: 'linkURL' }),
    },
  };

  return (
    <div className="home-container">
      <Profile {...profileData} />
    </div>
  );
};

export default Home;
