import { get } from 'lodash';
import { constants } from 'src/config/constants';

const getEnvVariable = <T>(
  key: string,
  defaultValue?: T,
): T extends undefined ? unknown : T => {
  const value = get(process, ['env', key], defaultValue) as T extends undefined
    ? unknown
    : T;

  return value;
};

const config = (): Readonly<EnvironmentVariables> => ({
  port: getEnvVariable(constants.PORT, 3000),
  database: {
    host: getEnvVariable(constants.DB_HOST, 'localhost'),
    port: getEnvVariable(constants.DB_PORT, 5432),
  },
});

export default config;

export interface EnvironmentVariables {
  port: number;
  database: {
    host: string;
    port: number;
  };
}
