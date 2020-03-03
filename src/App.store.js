import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from './Movies/Movies.reducer';
import movieDetailsReducer from './MovieDetails/MovieDetails.reducer';
import searchReducer from './Search/Search.reducer';
import loginReducer from './Login/Login.reducer';

const reducers = combineReducers({
    moviesReducer,
    movieDetailsReducer,
    searchReducer,
    loginReducer
})
export const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.devToolsExtension() : f => f
))