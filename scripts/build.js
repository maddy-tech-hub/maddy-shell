const { execSync } = require('child_process');
const environment = process.env.ENVIRONMENT || 'production';

const env = {
  ...process.env,
  NODE_ENV: environment,
};
console.log(`Running in ${environment} environment: ${process.env.REACT_APP_API_URL}`);

if (environment === 'production') {
    execSync('npx webpack --config webpack.config.js --mode production', { env, stdio: 'inherit' });
} else {
    execSync('npx webpack --config webpack.config.js --mode development', { env, stdio: 'inherit' });
}
console.log('Environment Variables Passed:', env.REACT_APP_API_URL);
