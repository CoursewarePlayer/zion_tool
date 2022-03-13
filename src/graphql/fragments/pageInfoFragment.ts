/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/client';

const CURSOR_FRAGMENT = gql`
  fragment CursorFragment on ConnectionCursor {
    value
  }
`;

const PAGEINFO_FRAGMENT = gql`
  fragment PageInfoFragment on PageInfo {
    hasNextPage
    hasPreviousPage
    startCursor {
      ...CursorFragment
    }
    endCursor {
      ...CursorFragment
    }
  }
`;

export { CURSOR_FRAGMENT, PAGEINFO_FRAGMENT };
