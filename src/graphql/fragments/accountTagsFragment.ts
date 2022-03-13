import { gql } from '@apollo/client';

export const GQL_ACCOUNT_TAGS_FRAGMENT = gql`
  fragment AccountTagsFragment on AccountTags {
    hasSeenIntro
    hasUpdatedUserProfile
    hasSeenNewDataModel
    hasSeenThirdPartyApiOperationIntro
    hasSeenGenerateFailedContactTab
    hasSetUserInfo
  }
`;
