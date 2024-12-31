import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { IntlProvider } from 'react-intl';
import messages from './locale/messages';
import { store } from './redux/store';
import { GlobalStyles } from './styles/globalStyles';
import AppRoutes from './routes';

import { persistStore } from 'redux-persist';

const locale = navigator.language.split('-')[0];
const persistor = persistStore(store);

const App: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <GlobalStyles />
          <AppRoutes />
        </IntlProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);

export default App;
