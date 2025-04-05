import profile from '../assets/MT_NEW.png';
export const quickLinks = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' },
  { label: 'Skills', url: '/skills' },
  { label: 'Education', url: '/education' },
  { label: 'Experience', url: '/experience' },
  { label: 'Projects', url: '/projects' },
  { label: 'Contact Me', url: '/contact' },
];

export const modernDarkTheme = {
  headerBackgroundColor: '#121212',
  textColor: '#e0e0e0',
  linkColor: '#bb86fc',
  linkHoverColor: '#6200ee',
  secondaryColor: '#03dac6',
  hoverColor: '#018786',
  sidebarBackgroundColor: '#1f1f1f',
  menuIconColor: '#e0e0e0',
  shadowColor: 'rgba(0, 0, 0, 0.7)',
  backgroundColor: '#121212',
};

export const headerData = {
  menuLinks: quickLinks,
  logoSrc: profile,
  menuOpen: false,
  setMenuOpen: (value: boolean) => {},
  onLoginClick: () => console.log('Login Clicked'),
  theme: modernDarkTheme,
};

export const whatsappData = {
  phoneNumber: '8886380746',
  position: { bottom: 50, right: 30 },
  backgroundColor: '#25D366',
  iconColor: 'white',
  iconSize: 35,
  tooltipText: 'Contact us on WhatsApp',
  draggable: true,
};
