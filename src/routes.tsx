import React, { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Misc/Loader";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import { RootStateType } from "./redux/store";
import mainLogo from './assets/images/main-logo.jpeg'

// Dynamic imports
const Header = React.lazy(() => import("maddy_widget/Header"));
const Footer = React.lazy(() => import("maddy_widget/Footer"));
const WhatsAppWidget = React.lazy(() => import("maddy_widget/WhatsAppWidget"));

// Define your routes
const routes = [
  { path: "/", Component: React.lazy(() => import("maddy_login/LoginComponent")) },
  { path: "/login", Component: React.lazy(() => import("maddy_login/LoginComponent")) },
  { path: "/signup", Component: React.lazy(() => import("maddy_login/SignupComponent")) },
  { path: "/forget", Component: React.lazy(() => import("maddy_login/ForgetComponent")) },
];

const AppRoutes: React.FC = () => {
  const { location, socialLinks, companyName,phone } = useSelector((state: RootStateType) => state.contactDetailsSlice);
  const services = useSelector((state: RootStateType) => state.servicesSlice.services);
  const technologies = useSelector((state: RootStateType) => state.technologySlice.technologies);
  const [menuOpen, setMenuOpen] = useState(false);
  const intl = useIntl();
  
  const quickLinks = [
    { label: "Home", url: "/home" },
    { label: "About Us", url: "/about" },
    { label: "Services", url: "/services" },
    { label: "Contact Us", url: "/contact" },
  ];
  
  

  return (
    <React.Suspense fallback={<Loader text={intl.formatMessage({ id: 'loading' })} fullScreen={true}/>}>
      {/* Header component */}
      <Header
        menuLinks={quickLinks}
        logoSrc={mainLogo}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onLoginClick={() => console.log("Login Clicked")}
      />

      {/* Main Routes */}
      <div >
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </div>

      {/* Footer component */}
      <Footer
      quickLinks={quickLinks}
        socialLinks={socialLinks}
        services={services}
        technologies={technologies}
        logoSrc={mainLogo}
        companyName={companyName}
        address={location.address}
        themeColors={{
          background: "#333333",
          text: "#ffffff",
          accent: "#FFD700",
          linkHover: "#FFA500",
        }}
      />

      {/* WhatsApp Widget */}
      <WhatsAppWidget
        phoneNumber="8886380746"
        position={{ bottom: 50, right: 30 }}
        backgroundColor="#25D366"
        iconColor="white"
        iconSize={35}
        tooltipText="Contact us on WhatsApp"
        draggable={true}
      />
    </React.Suspense>
  );
};

export default AppRoutes;
