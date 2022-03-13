export interface Iproject {
  collaboratorType?: string
  exId: string
  lastUploadedSchema?: {
    createdAt: AudioTimestamp
  }
  projectName?: string
  projectOwner?: string
}

export const SET_PROJECT_EXID = 'SET_PROJECT_EXID';

interface IsetProjectExid{
  type: typeof SET_PROJECT_EXID,
  payload: string
}

export type projectAction = IsetProjectExid;