const { execSync } = require('child_process');
const environment = process.env.ENVIRONMENT || 'development';

console.log(`Running in ${environment} environment: ${process.env.REACT_APP_API_URL}`);

const env = {
  ...process.env,
  NODE_ENV: environment,
};

const webpackCommand = `npx webpack --config webpack.config.js --mode ${environment}`;

execSync(webpackCommand, { env, stdio: 'inherit' });
