import {
  Ipages,
  pageAction,
  SET_PAGE_INDEX
} from '../types/pages';

export const setPageIndexAction = (payload:number) => {
  return {
    type: SET_PAGE_INDEX,
    payload
  }
}

const initialState: Ipages = {
  pageIdx: 0
}

export function pages(
  state=initialState,
  action: pageAction
) {
  switch (action.type) {
    case SET_PAGE_INDEX:
      return {
        ...state,
        pageIdx: action.payload
      }
    default:
      return state;
  }
}
