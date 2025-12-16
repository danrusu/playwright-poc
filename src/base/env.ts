export const ENV_VAR_NOT_SET = 'NOT_SET';

function getEnvVarOrDefault(envVarName: string): string {
  return process.env[envVarName] || ENV_VAR_NOT_SET;
}

const envVars = ['NAME', 'URL'] as const;

export type EnvVars = (typeof envVars)[number];
export type Env = {
  [k in EnvVars]: string;
};

const env: Env = {} as Env;

envVars.forEach((envVarName: string) => {
  //@ts-ignore
  env[envVarName] = getEnvVarOrDefault(envVarName);
});

export default env;
