import {
  Iaccount,
  accountAction,
  UPDATE_ACCOUNT
} from '../types/account';

export const updateAccountAction = (payload:Iaccount) => {
  return {
    type: UPDATE_ACCOUNT,
    payload
  }
}

const initialState: Iaccount = {}

export function account(
  state=initialState,
  action: accountAction
) {
  switch (action.type) {
    case UPDATE_ACCOUNT:
      console.log(action);
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}
