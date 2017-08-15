import { combineReducers } from 'redux'
import Api from './api'
import Repos from './repos'

var initialState = {}

let reducer = combineReducers({
    status: Api,
    repos: Repos
});

export default reducer;