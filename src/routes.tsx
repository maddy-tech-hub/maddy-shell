import React from 'react';
import { Routes, Route } from 'react-router-dom';

const routes: any[] = [];

const AppRoutes: React.FC = (): JSX.Element => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div>Hi Reddy</div>
      <Routes>
        {routes?.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </React.Suspense>
  );
};

export default AppRoutes;
