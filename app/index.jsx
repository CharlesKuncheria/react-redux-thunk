import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import Thunk from 'redux-thunk'

var store = createStore(reducer, applyMiddleware(Thunk));
 
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app'));
