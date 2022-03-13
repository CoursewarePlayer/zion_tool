import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Projects from './Projects';
import { Store } from '../../reducers';
import {  } from '../../reducers/pages';
import { setProjectExidAction } from '../../reducers/project';
import { setPageIndexAction } from '../../reducers/pages'
import { useQuery } from '@apollo/client';
import { GET_ALL_PROJECTS } from '../../graphql/queries'; 

interface Iprops {
  updatePageIdx(idx:number):void;
  setProjectExid(exId:string):void;
}

const Home:React.FC<Iprops> = ({
  updatePageIdx,
  setProjectExid
}) => {
  const {data, loading, error} = useQuery(GET_ALL_PROJECTS);

  const handleProjectClick = async (projectExid:string) => {
    await setProjectExid(projectExid);
    updatePageIdx(2);
  }

  if (loading) return <div>loading...</div>
  if (error) return <div>error.message</div>
  return (
    <Projects 
      projects={data.allProjects ? data.allProjects : []}
      handleProjectClick={handleProjectClick}
    />
  )
}

const mapStateToProps = (store:Store) => ({});

const mapDispatchToProps = (dispatch:Dispatch) => ({
  updatePageIdx: (pageIdx:number) => dispatch(setPageIndexAction(pageIdx)),
  setProjectExid: (exId:string) => dispatch(setProjectExidAction(exId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
