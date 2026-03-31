import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { IntlProvider } from 'react-intl';
import { GlobalStyles } from '@src/styles/globalStyles';
import messages from '@src/locale/messages';
import { persistor, store } from '@src/redux/store';
import Loader from '@src/components/Misc/Loader';

interface AppProvidersProps {
  children: React.ReactNode;
}

const resolveLocale = (): string => {
  const browserLocale = navigator.language.split('-')[0];
  return messages[browserLocale] ? browserLocale : 'en';
};

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  const locale = resolveLocale();

  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate
          loading={<Loader text="Loading shell..." fullScreen={true} />}
          persistor={persistor}
        >
          <IntlProvider locale={locale} messages={messages[locale]}>
            <GlobalStyles />
            {children}
          </IntlProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
};
