import React from 'react';
import AppRoutes from './routes';
import { AppProviders } from './app/providers/AppProviders';

const App: React.FC = (): JSX.Element => (
  <AppProviders>
    <AppRoutes />
  </AppProviders>
);

export default App;
