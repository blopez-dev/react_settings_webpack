import { applyMiddleware, createStore as createReduxStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import rootReducer from './reducers';

const createStore = (initialState) => createReduxStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk, promise))
);

export default createStore;
