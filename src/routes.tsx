import React, { Suspense, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Loader from './components/Misc/Loader';
import { RootStateType } from './redux/store';
import { useSelector } from 'react-redux';
import { RouteConfig } from './interfaces/common';
import { headerData, whatsappData } from './Services/api';

const Header = React.lazy(() => import('maddy_widget/Header'));
const Footer = React.lazy(() => import('maddy_widget/Footer'));
const WhatsAppWidget = React.lazy(() => import('maddy_widget/WhatsAppWidget'));

// Define the routes array
const routes: RouteConfig[] = [
  {
    path: '/',
    label: 'Home',
    Component: React.lazy(() => import('./pages/Home')),
  },
  {
    path: '/about',
    label: 'About',
    Component: React.lazy(() => import('./pages/About')),
  },
  {
    path: '/skills',
    label: 'Skills',
    Component: React.lazy(() => import('./pages/Skills')),
  },
  {
    path: '/education',
    label: 'Education',
    Component: React.lazy(() => import('./pages/Education')),
  },
  {
    path: '/experience',
    label: 'Experience',
    Component: React.lazy(() => import('./pages/Experience')),
  },
  {
    path: '/projects',
    label: 'Projects',
    Component: React.lazy(() => import('./pages/Projects')),
  },
  { path: "/login",
    label: 'login',
    Component: React.lazy(() => import("maddy_login/LoginComponent"))
  },
  { path: "/signup",
    label: 'signup',
    Component: React.lazy(() => import("maddy_login/SignupComponent"))
  },
  { path: "/forget",
    label: 'forget',
    Component: React.lazy(() => import("maddy_login/ForgetComponent"))
  },
];

const AppRoutes: React.FC = () => {
  const navigate = useNavigate();
  const { location, socialLinks } = useSelector(
    (state: RootStateType) => state.contactDetailsSlice
  );
  const [menuOpen, setMenuOpen] = useState<boolean>(headerData.menuOpen);

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <Suspense fallback={<Loader text="Loading..." fullScreen={true} />}>
        <Header
          menuLinks={headerData.menuLinks}
          logoSrc={headerData.logoSrc}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          onLoginClick={handleLogin}
          theme={headerData.theme}
        />
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
        <Footer
          address={location.address}
          logoSrc={headerData.logoSrc}
          socialLinks={socialLinks}
          linkSections={[]}
        />
        <WhatsAppWidget {...whatsappData} />
      </Suspense>
    </>
  );
};

export default AppRoutes;
