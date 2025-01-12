import React from 'react';

export const routes = [
  {
    path: '/',
    Component: React.lazy(() => import('../pages/Home')),
  },
  {
    path: '/about',
    Component: React.lazy(() => import('../pages/About')),
  },
  {
    path: '/skills',
    Component: React.lazy(() => import('../pages/Skills')),
  },
  {
    path: '/education',
    Component: React.lazy(() => import('../pages/Education')),
  },
  {
    path: '/experience',
    Component: React.lazy(() => import('../pages/Experience')),
  },
  {
    path: '/projects',
    Component: React.lazy(() => import('../pages/Projects')),
  },
  {
    path: '/login',
    Component: React.lazy(() => import('maddy_login/LoginComponent')),
  },
  {
    path: '/signup',
    Component: React.lazy(() => import('maddy_login/SignupComponent')),
  },
  {
    path: '/forget',
    Component: React.lazy(() => import('maddy_login/ForgetComponent')),
  },
];
