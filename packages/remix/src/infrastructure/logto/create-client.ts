import LogtoClient, { LogtoConfig } from '@logto/node';

import { LogtoStorage } from './create-storage';

export const makeLogtoClient =
  (config: LogtoConfig, storage: LogtoStorage) =>
  // Have to deactivate the eslint rule here as the `LogtoClient`
  // awaits a `navigate` function.
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  (navigate: (url: string) => void = () => {}) => {
    return new LogtoClient(config, { storage, navigate });
  };

export type CreateLogtoClient = ReturnType<typeof makeLogtoClient>;

export { type LogtoConfig } from '@logto/node';
