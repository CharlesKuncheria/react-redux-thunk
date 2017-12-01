import { utility } from '../dbUtility.js'

export function fetchRepos(name) {
    return (dispatch) => {
        fetch('https://api.github.com/users/' + name + '/repos')
        .then((resp) => { 
            return resp.json() 
        })
        .then((data) => {
            if(data.message == 'Not Found') {
                dispatch({type: 'FETCHED_REPOS', payload: { repos: []}})
                dispatch({type: 'API_FAILURE', payload: {error: data.message}})
                return;
            }
            dispatch({type: 'FETCHED_REPOS', payload: { repos: data}})
            dispatch({type: 'API_SUCCESS'})
        })
        .catch((err) => {
            dispatch({type: 'FETCHED_REPOS', payload: { repos: []}})
            dispatch({type: 'API_FAILURE', payload: {error: err}})
            }
        );
    }
}

export function fetchReposLocal() {
    return(dispatch) => {
        var dbPromise = utility.dbPromise;
        if(dbPromise) {
            dbPromise.then(function(db) {
              if(!db) return;
      
              var tx = db.transaction('repos');
              var store = tx.objectStore('repos');

              store.getAll().then(function(data) {
                dispatch({type: 'FETCHED_REPOS', payload: { repos: data}})
                dispatch({type: 'API_SUCCESS'})
              })

            });
          }
    }
}