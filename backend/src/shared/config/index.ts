import { TConfig } from 'src/shared';

const getEnvVar = (key: string) => {
  if (process.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  return process.env[key] || '';
};

const isProd = getEnvVar('NODE_ENV') === 'production';

export default (): TConfig => ({
  isProd,
  PORT: Number(getEnvVar('PORT')),
  DATABASE_URL: getEnvVar('DATABASE_URL'),
});
