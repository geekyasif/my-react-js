import { createStore, applyMiddleware, compose } from '@reduxjs/toolkit'
import rootReducer from '../reducers/reducers'
import thunk from 'redux-thunk';

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))


export default store;