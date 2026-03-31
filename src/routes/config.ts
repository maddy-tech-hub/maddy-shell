import React from 'react';
import { appRoutes } from '@src/shared/config/appRoutes';
import { lazyRemote } from '@src/shared/lib/mfe/lazyRemote';

export const routes = [
  {
    path: appRoutes.home,
    Component: React.lazy(() => import('../pages/Home')),
  },
  {
    path: appRoutes.about,
    Component: React.lazy(() => import('../pages/About')),
  },
  {
    path: appRoutes.skills,
    Component: React.lazy(() => import('../pages/Skills')),
  },
  {
    path: appRoutes.education,
    Component: React.lazy(() => import('../pages/Education')),
  },
  {
    path: appRoutes.experience,
    Component: React.lazy(() => import('../pages/Experience')),
  },
  {
    path: appRoutes.projects,
    Component: React.lazy(() => import('../pages/Projects')),
  },
  {
    path: appRoutes.contact,
    Component: React.lazy(() => import('../pages/Contact')),
  },
  {
    path: appRoutes.login,
    Component: lazyRemote(
      () => import('auth_remote/LoginScreen'),
      'auth-login-screen'
    ),
  },
  {
    path: appRoutes.signup,
    Component: lazyRemote(
      () => import('auth_remote/SignupScreen'),
      'auth-signup-screen'
    ),
  },
  {
    path: appRoutes.forgetPassword,
    Component: lazyRemote(
      () => import('auth_remote/ForgetScreen'),
      'auth-forget-screen'
    ),
  },
];
