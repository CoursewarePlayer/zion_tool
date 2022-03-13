import {
  gql
} from "@apollo/client";

export const SYNC_CALLBACK_CONFIGS = gql `
  mutation callBackConfig($callbackConfigs: Json!, $deploymentEnvConfigExId: String!) {
    syncCallbackConfigs(
      callbackConfigs: $callbackConfigs,
      deploymentEnvConfigExId: $deploymentEnvConfigExId
    )
  }
`;

