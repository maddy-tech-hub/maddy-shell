import React, { Suspense, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Loader from './components/Misc/Loader';
import { RootStateType } from './redux/store';
import { useSelector } from 'react-redux';
import { RouteConfig } from './interfaces/common';
import { headerData, whatsappData } from './Services/api';
import { routes } from './routes/config';
import ScrollToTop from './components/Misc/ScrollToTop';
import { useIntl } from 'react-intl';

const Header = React.lazy(() => import('maddy_widget/Header'));
const Footer = React.lazy(() => import('maddy_widget/Footer'));
const WhatsAppWidget = React.lazy(() => import('maddy_widget/WhatsAppWidget'));

const AppRoutes: React.FC = () => {
  const intl = useIntl();
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
        <ScrollToTop />
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
          address={location.value}
          logoSrc={headerData.logoSrc}
          socialLinks={socialLinks}
          companyName= {intl.formatMessage({ id: 'name' })}
          showFooterBottom= {true}
          linkSections={[]}
        />
        <WhatsAppWidget {...whatsappData} />
      </Suspense>
    </>
  );
};

export default AppRoutes;
