import { gql } from '@apollo/client';

export const GQL_CALLBACK_CONFIGURATION = gql`
  fragment CallbackFragment on CallbackConfig {
    actions
    parameters
    uniqueId
  }
`;
