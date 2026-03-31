import logoImage from '../assets/MT_NEW.png';
import { appRoutes } from '@src/shared/config/appRoutes';

export const quickLinks = [
  { label: 'Home', url: appRoutes.home },
  { label: 'About', url: appRoutes.about },
  { label: 'Skills', url: appRoutes.skills },
  { label: 'Projects', url: appRoutes.projects },
  { label: 'Experience', url: appRoutes.experience },
  { label: 'Contact', url: appRoutes.contact },
];

export const modernDarkTheme = {
  headerBackgroundColor: 'rgba(7, 17, 31, 0.84)',
  textColor: '#f8fbff',
  navLinkColor: 'rgba(248, 251, 255, 0.8)',
  navLinkHoverColor: '#ffffff',
  loginLinkColor: '#f8fbff',
  loginLinkHoverColor: '#ffffff',
  secondaryColor: '#19b89b',
  hoverColor: '#117eff',
  sidebarBackgroundColor: 'rgba(10, 22, 40, 0.96)',
  menuIconColor: '#f8fbff',
  shadowColor: 'rgba(8, 24, 48, 0.24)',
  backgroundColor: '#07111f',
};

export const headerData = {
  menuLinks: quickLinks,
  logoSrc: logoImage,
  menuOpen: false,
  setMenuOpen: (value: boolean) => {},
  onLoginClick: () => console.log('Login Clicked'),
  theme: modernDarkTheme,
};

export const footerLinkSections = [
  {
    title: 'Explore',
    links: [
      { label: 'About', url: appRoutes.about },
      { label: 'Skills', url: appRoutes.skills },
      { label: 'Education', url: appRoutes.education },
      { label: 'Projects', url: appRoutes.projects },
      { label: 'Experience', url: appRoutes.experience },
      { label: 'Contact', url: appRoutes.contact },
    ],
  },
  {
    title: 'Specialties',
    links: [
      { label: 'React Architecture', url: appRoutes.about },
      { label: 'ASP.NET Web API', url: appRoutes.experience },
      { label: 'Finance Tracker', url: appRoutes.projects },
      { label: 'Micro-frontends', url: appRoutes.projects },
    ],
  },
];

export const whatsappData = {
  phoneNumber: '8886380746',
  position: { bottom: 50, right: 30 },
  backgroundColor: '#19b89b',
  iconColor: 'white',
  iconSize: 35,
  tooltipText: 'Message me on WhatsApp',
  draggable: true,
};
