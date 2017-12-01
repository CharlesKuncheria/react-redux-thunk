import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import Thunk from 'redux-thunk'
import { utility } from './dbUtility.js'

var store = createStore(reducer, applyMiddleware(Thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));

// register sw
if ('serviceWorker' in navigator) {
  // Register a service worker hosted at the root of the
  // site using a more restrictive scope.
  navigator.serviceWorker.register('/sw.js').then(function (registration) {
    //console.log('Service worker registration succeeded:', registration);
  }).catch(function (error) {
    console.log('Service worker registration failed:', error);
  });
} else {
  console.log('Service workers are not supported.');
}

// subscribe to store for FETCHED_REPOS event, add to idb
let subscription = store.subscribe(() => {
  // add to object store.
  let repos = store.getState().repos;
  if (repos) {
    var dbPromise = utility.dbPromise;
    if(dbPromise) {
      dbPromise.then(function(db) {
        if(!db) return;

        var tx = db.transaction('repos', 'readwrite');
        var store = tx.objectStore('repos');

        store.clear();

        repos.forEach(repo => {
          store.put(repo);
        });
      });
    }
  }
});