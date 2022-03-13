import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { account } from './account';
import { pages } from './pages';
import { project } from './project';

const rootReducer = combineReducers({
  account,
  project,
  pages
})

export type Store = ReturnType<typeof rootReducer>;

export default createStore(
  rootReducer,
  composeWithDevTools()
);