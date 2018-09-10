'use strict';

/*####################
# JABIL CO.
# TRACKCHAINER
# AUTHOR:MELVYN TIE
###################*/

import { createStore, applyMiddleware, compose } from 'redux';
import Api from '../middleware/api';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';


const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, Api, createLogger()))
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/rootReducer', () => {
      store.replaceReducer(rootReducer)
    })
  }
  return store
}
export default configureStore
