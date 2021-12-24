import { createStore, applyMiddleware, compose } from 'redux'
import allReducers from '../reducers'
import thunk from 'redux-thunk';

const store = createStore(allReducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

export default store;