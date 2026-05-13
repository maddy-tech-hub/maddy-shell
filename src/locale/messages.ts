import {
  EXPERIENCE_JOIN_DATE,
  getRoundedExperienceLabel,
} from '@src/shared/utils/experience';

const experience = getRoundedExperienceLabel(EXPERIENCE_JOIN_DATE);

const english = {
  loading: 'Loading...',
  greeting: "Hi, I'm",
  name: 'Madhava Reddy Vemireddy',
  bioTitle: 'Senior Full-Stack React & .NET Developer',
  description: `I build scalable products with <b>React</b>, <b>TypeScript</b>, and <b>ASP.NET Web API</b>, backed by ${experience} of professional delivery. My work covers reusable UI systems, secure integrations, and PostgreSQL-backed workflows across auction, appraisal, loan payoff, and finance platforms. I enjoy turning complex requirements into clean experiences that feel polished for users and practical for teams to maintain.`,
  aboutLinkText: 'About Me',
  aboutLinkURL: '/about',
  cvLinkText: 'View Resume',
  skillTitle: 'Skills and Expertise',
  skillSubTitle:
    'Technologies, tooling, and delivery practices I use to ship polished products',
  educationTitle: 'Educational Background',
  educationSubTitle: 'Foundations that shaped my engineering approach',
  experienceTitle: 'Professional Experience',
  experienceSubTitle:
    'Shipping scalable interfaces, APIs, and product workflows in real teams',
  independentProjectTitle: 'Independent Solutions',
  independentProjectSubTitle:
    'Independent products where I explore architecture, UX, and full-stack delivery',
  professionalProjectTitle: 'Professional Projects',
  professionalProjectSubTitle:
    'Enterprise platforms and client-facing systems delivered in production teams',
  contactTitle: 'Contact Me',
  fullNameLabel: 'Your Full Name',
  emailLabel: 'Email Address',
  mobileLabel: 'Mobile Number',
  messageLabel: 'Write Message',
  buttonLabel: 'Send Message',
  successMessageTitle: 'Thank you for your message.',
  successMessage: 'I will get back to you shortly.',
};

const messages: Record<string, Record<string, string>> = {
  en: english,
  fr: english,
  es: english,
};

export default messages;
