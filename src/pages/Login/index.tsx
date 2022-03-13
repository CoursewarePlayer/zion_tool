import React, { useState } from 'react';
import { Ipages } from '../../types/pages';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Login from './Login';
import { useMutation } from "@apollo/client";
import { USER_LOGIN } from "../../graphql/queries";
import { Store } from '../../reducers';
import { setPageIndexAction } from '../../reducers/pages';

interface Iprops {
  pageData: Ipages;
  updatePageIdx(idx:number):void;
}

const Home:React.FC<Iprops> = ({
  pageData,
  updatePageIdx
}) => {
  
  const [userLogin, {data, loading, error}] = useMutation(USER_LOGIN);
  const [message, setMessage] = useState("");
  const handleLoginSubmit = (username:string, password:string) => {
    userLogin({
      variables: {
        username,
        password
      }
    })
    .then(data => {
      console.log(data)
      // @ts-ignore
      localStorage.setItem("token", data.data.login.accessToken)
      setMessage("登录成功");
      updatePageIdx(1);
    })
    .catch(err => setMessage(err.message))

  }

  return (
    <Login 
      handleLoginSubmit={handleLoginSubmit}
      message={message}
    />
  )
}

const mapStateToProps = (store:Store) => ({
  pageData: store.pages
});

const mapDispatchToProps = (dispatch:Dispatch) => ({
  updatePageIdx: (pageIdx:number) => dispatch(setPageIndexAction(pageIdx))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
