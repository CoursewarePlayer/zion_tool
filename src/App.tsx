import React, {useState} from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Login from './pages/Login';
import { Box } from '@mui/material';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Store } from './reducers';
import {
  createHttpLink,
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { API_GRAPHQL } from './graphql/config';
import { Ipages } from './types/pages';
import ProjectList from './pages/ProjectList';
import Workplace from './pages/Workplace';

const httpLink = createHttpLink({
  uri: API_GRAPHQL,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    addTypename: false
  }),
  defaultOptions: {
    query: { fetchPolicy: 'no-cache' },
    watchQuery: { fetchPolicy: 'no-cache' }
  }
});

interface Iprops {
  pageData:Ipages
}

function App(props:Iprops) {

  const { pageData } = props;
  const { pageIdx } = pageData;

  const Page = () => {
    switch (pageIdx) {
      case 0:
        return <Login />
      case 1:
        return <ProjectList />
      case 2:
        return <Workplace />
      default:
        return <div />
    }
  }

  return (
    <ApolloProvider client={client}>
      <Box sx={{
        backgroundColor: 'primary.dark',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
        }}
      >
        <Page />
      </Box>
      
    </ApolloProvider>
    
  );
}

const mapStateToProps = (store:Store) => ({
  pageData: store.pages
});

const mapDispatchToProps = (dispatch:Dispatch) => ({
 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
