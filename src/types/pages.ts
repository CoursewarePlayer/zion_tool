export interface Ipages {
  pageIdx: number
}

export const SET_PAGE_INDEX = 'SET_PAGE_INDEX';
export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT';

interface IsetPageIndex{
  type: typeof SET_PAGE_INDEX,
  payload: number
}

export type pageAction = IsetPageIndex;
