const { execSync } = require('child_process');
const environment = process.env.ENVIRONMENT || 'development';

console.log(`Running in ${environment} environment`);

const env = {
  ...process.env,
  NODE_ENV: environment,
};

const webpackCommand = `npx webpack --config webpack.config.js --mode ${environment}`;

execSync(webpackCommand, { env, stdio: 'inherit' });
