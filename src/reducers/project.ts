import {
  Iproject,
  projectAction,
  SET_PROJECT_EXID
} from '../types/project';

export const setProjectExidAction = (payload:string) => {
  return {
    type: SET_PROJECT_EXID,
    payload
  }
}

const initialState: Iproject = {
  exId: ""
}

export function project(
  state=initialState,
  action: projectAction
) {
  switch (action.type) {
    case SET_PROJECT_EXID:
      return {
        ...state,
        exId: action.payload
      }
    default:
      return state;
  }
}