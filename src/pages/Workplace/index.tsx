import React, { useState } from 'react';
import { Iproject } from '../../types/project';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Workplace from './Workplace';
import { useMutation } from "@apollo/client";
import { USER_LOGIN } from "../../graphql/queries";
import { Store } from '../../reducers';
import { setPageIndexAction } from '../../reducers/pages';
import { useQuery } from '@apollo/client';
import { FETCH_PROJECT_DETAIL_BY_EXID } from '../../graphql/queries'; 


interface Iprops {
  project:Iproject;
  updatePageIdx(idx:number):void;
}

const Index:React.FC<Iprops> = ({
  project,
  updatePageIdx
}) => {
  
  let {data, loading, error} = useQuery(FETCH_PROJECT_DETAIL_BY_EXID, {
    variables: {
      projectExId: project.exId
    }
  })

  if (loading) return <div>loading</div>
  if (error) return <div>error</div>

  const {
    lastUploadedSchema,
    projectName
  } = data.project;
  const { actionFlows } = lastUploadedSchema.appSchema;

  return (
    <Workplace 
      projectName={projectName}
      actionFlows={actionFlows}
    />
  )
}

const mapStateToProps = (store:Store) => ({
  project: store.project
});

const mapDispatchToProps = (dispatch:Dispatch) => ({
  updatePageIdx: (pageIdx:number) => dispatch(setPageIndexAction(pageIdx))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);