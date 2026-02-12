import { RootStateType } from '@src/redux/store';
import React, { Suspense } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import profile from '../assets/image.png';
import cv from '../assets/Madhava_Reddy_React_Dev_2026.docx';

// src\assets\
// Lazy load the Profile component
const Profile = React.lazy(() => import('maddy_mfe/Profile'));
const Contact = React.lazy(() => import('../pages/Contact'));

const Home: React.FC = () => {
  const intl = useIntl();
  const { siteTitle, socialLinks } = useSelector(
    (state: RootStateType) => state.contactDetailsSlice
  );

  const profileData = {
    profileImage: profile,
    siteTitle: siteTitle,
    socialLinks: socialLinks,
    profileText: {
      greeting: intl.formatMessage({ id: 'greeting' }),
      name: intl.formatMessage({ id: 'name' }),
      title: intl.formatMessage({ id: 'bioTitle' }),
      description: (
      <FormattedMessage
        id="description"
        values={{ b: (chunks) => <strong>{chunks}</strong> }}
      />
    ),
      aboutLinkText: intl.formatMessage({ id: 'aboutLinkText' }),
      aboutLinkURL: intl.formatMessage({ id: 'aboutLinkURL' }),
      cvLinkText: intl.formatMessage({ id: 'cvLinkText' }),
      cvLinkURL: cv,
    },
  };

  return (
    <div className="home-container">
      <Profile {...profileData} />
      <Contact />
    </div>
  );
};

export default Home;
