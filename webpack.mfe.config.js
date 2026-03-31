/* eslint-disable @typescript-eslint/no-var-requires */
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;
const isDevelopment = process.env.NODE_ENV !== 'production';
const loginRemoteUrl =
  process.env.REACT_APP_AUTH_REMOTE ||
  'https://mfe-login.netlify.app/remoteEntry.js';
const widgetsRemoteUrl =
  process.env.REACT_APP_UI_REMOTE ||
  'https://mfe-components.netlify.app/remoteEntry.js';

const createPromiseRemote = (scope, remoteUrlExpression) => `promise new Promise((resolve, reject) => {
  const remoteScope = ${JSON.stringify(scope)};
  const globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
        ? self
        : window;
  const registrationDelayMs = 50;
  const maxRegistrationAttempts = 200;

  const getContainer = () =>
    globalObject[remoteScope] ||
    (typeof self !== 'undefined' ? self[remoteScope] : undefined) ||
    (typeof window !== 'undefined' ? window[remoteScope] : undefined);

  globalObject.__mfRemotePromises = globalObject.__mfRemotePromises || {};

  const existingPromise = globalObject.__mfRemotePromises[remoteScope];
  if (existingPromise) {
    existingPromise.then(resolve, reject);
    return;
  }

  const existingContainer = getContainer();
  if (existingContainer) {
    resolve({
      get: existingContainer.get.bind(existingContainer),
      init: (shareScope) => {
        try {
          return existingContainer.init(shareScope);
        } catch (error) {
          return undefined;
        }
      },
    });
    return;
  }

  globalObject.__mfRemotePromises[remoteScope] = new Promise((loaderResolve, loaderReject) => {
    const remoteUrl = ${remoteUrlExpression};
    const scriptId = 'mf-remote-' + remoteScope;

    const resolveContainer = (container) => {
      loaderResolve({
        get: container.get.bind(container),
        init: (shareScope) => {
          try {
            return container.init(shareScope);
          } catch (error) {
            return undefined;
          }
        },
      });
    };

    const waitForContainer = (attempt = 0) => {
      const loadedContainer = getContainer();

      if (loadedContainer) {
        resolveContainer(loadedContainer);
        return;
      }

      if (attempt >= maxRegistrationAttempts) {
        delete globalObject.__mfRemotePromises[remoteScope];
        loaderReject(
          new Error(
            'Remote "' + remoteScope + '" did not register after loading ' + remoteUrl
          )
        );
        return;
      }

      globalObject.setTimeout(() => {
        waitForContainer(attempt + 1);
      }, registrationDelayMs);
    };

    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      waitForContainer();
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = remoteUrl;
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      waitForContainer();
    };
    script.onerror = () => {
      delete globalObject.__mfRemotePromises[remoteScope];
      loaderReject(new Error('Unable to load remote "' + remoteScope + '" from ' + remoteUrl));
    };

    document.head.appendChild(script);
  });

  globalObject.__mfRemotePromises[remoteScope].then(resolve, reject);
})`;

const createDevelopmentRemote = (scope, port) =>
  createPromiseRemote(
    scope,
    `(typeof window !== 'undefined' && window.location && window.location.protocol
      ? window.location.protocol
      : 'http:') + '//' +
      (typeof window !== 'undefined' && window.location && window.location.hostname
        ? window.location.hostname
        : 'localhost') + ':${port}/remoteEntry.js'`
  );

const createHostedRemote = (scope, remoteUrl) =>
  createPromiseRemote(scope, JSON.stringify(remoteUrl));

module.exports = {
  mfePlugin: new ModuleFederationPlugin({
    name: 'shell_host',
    filename: 'remoteEntry.js',
    exposes: {},
    remotes: {
      auth_remote: isDevelopment
        ? createDevelopmentRemote('auth_remote', 3001)
        : createHostedRemote('auth_remote', loginRemoteUrl),
      ui_remote: isDevelopment
        ? createDevelopmentRemote('ui_remote', 3002)
        : createHostedRemote('ui_remote', widgetsRemoteUrl),
    },
    shared: {
      react: { singleton: true, requiredVersion: deps.react },
      'react-dom': {
        singleton: true,
        requiredVersion: deps['react-dom'],
      },
      'react-router-dom': {
        singleton: true,
        requiredVersion: deps['react-router-dom'],
      },
      'styled-components': {
        singleton: true,
        requiredVersion: deps['styled-components'],
      },
    },
  }),
};
