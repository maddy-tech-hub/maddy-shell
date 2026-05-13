import React, { Suspense, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Loader from './components/Misc/Loader';
import { RootStateType } from './redux/store';
import { useSelector } from 'react-redux';
import { footerLinkSections, headerData, whatsappData } from './Services/api';
import { routes } from './routes/config';
import ScrollToTop from './components/Misc/ScrollToTop';
import { useIntl } from 'react-intl';
import RemoteBoundary from './components/Misc/RemoteBoundary';
import RemoteUnavailable from './components/Misc/RemoteUnavailable';
import { useShellBridge } from './app/hooks/useShellBridge';
import { lazyRemote } from './shared/lib/mfe/lazyRemote';

const Header = lazyRemote(() => import('ui_remote/Header'), 'ui-header');
const Footer = lazyRemote(() => import('ui_remote/Footer'), 'ui-footer');
const WhatsAppWidget = lazyRemote(
  () => import('ui_remote/WhatsAppWidget'),
  'ui-whatsapp-widget'
);

const shellSectionFallbackStyle: React.CSSProperties = {
  margin: '1rem auto',
  maxWidth: '42rem',
  padding: '0.9rem 1rem',
  borderRadius: '12px',
  border: '1px solid #d9e4ec',
  background: '#ffffff',
  color: '#335166',
  boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
};

const ShellSectionFallback: React.FC<{ text: string }> = ({ text }) => (
  <section style={shellSectionFallbackStyle}>{text}</section>
);

const AppRoutes: React.FC = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const locationPath = useLocation();
  useShellBridge();
  const { location, socialLinks } = useSelector(
    (state: RootStateType) => state.contactDetailsSlice
  );
  const [menuOpen, setMenuOpen] = useState<boolean>(headerData.menuOpen);

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <ScrollToTop />
      <Suspense
        fallback={<ShellSectionFallback text="Loading navigation..." />}
      >
        <RemoteBoundary>
          <Header
            menuLinks={headerData.menuLinks}
            currentPath={locationPath.pathname}
            logoSrc={headerData.logoSrc}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            onLoginClick={handleLogin}
            theme={headerData.theme}
          />
        </RemoteBoundary>
      </Suspense>
      <Suspense fallback={<Loader text="Loading page..." fullScreen={true} />}>
        <RemoteBoundary
          fallback={
            <RemoteUnavailable
              title="Page content is unavailable"
              description="Start the auth and UI remotes on ports 3001 and 3002 for local development, then refresh the shell."
            />
          }
        >
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </RemoteBoundary>
      </Suspense>
      <Suspense
        fallback={<ShellSectionFallback text="Loading footer..." />}
      >
        <RemoteBoundary>
          <Footer
            address={location.value}
            logoSrc={headerData.logoSrc}
            socialLinks={socialLinks}
            companyName={intl.formatMessage({ id: 'name' })}
            showFooterBottom={true}
            linkSections={footerLinkSections}
          />
        </RemoteBoundary>
      </Suspense>
      <Suspense fallback={null}>
        <RemoteBoundary>
          <WhatsAppWidget {...whatsappData} />
        </RemoteBoundary>
      </Suspense>
    </>
  );
};

export default AppRoutes;
