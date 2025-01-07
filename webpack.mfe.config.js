/* eslint-disable @typescript-eslint/no-var-requires */
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies


module.exports = {
        mfePlugin: new ModuleFederationPlugin({
            name: 'maddy-shell',
            filename: 'remoteEntry.js',
            exposes: {},             
            remotes: {
                maddy_login: "maddy_login@http://maddy-login.s3-website.ap-south-1.amazonaws.com/remoteEntry.js",
                maddy_widget: "maddy_widget@http://maddy-widgets.s3-website.ap-south-1.amazonaws.com/remoteEntry.js",
              },
            shared: {
                ...deps,
                react: { singleton: true,  requiredVersion: deps.react },
                'react-dom': {
                    singleton: true,
                    requiredVersion: deps['react-dom'],
                },
                'styled-components': {
                    singleton: true,
                    requiredVersion: deps['styled-components'],
                },
            },
        })
};
