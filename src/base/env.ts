export const ENV_VAR_NOT_SET = 'NOT_SET';

function getenvVarOrDefault(envVarName: string): string {
  return process.env[envVarName] || ENV_VAR_NOT_SET;
}

const envVars = ['NAME', 'URL'] as const;

export type envVars = (typeof envVars)[number];
export type env = {
  [k in envVars]: string;
};

const env: env = {} as env;

envVars.forEach((envVarName: string) => {
  env[envVarName] = getenvVarOrDefault(envVarName);
});

export default env;
