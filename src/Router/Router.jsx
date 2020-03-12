import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Loader from '../common/Loader/Loader';

const Movies = React.lazy(() => import('../Movies/Movies.container'));
const Login = React.lazy(() => import('../Login/Login.container'));
const MovieDetails = React.lazy(() => import('../MovieDetails/MovieDetails.container'));
const WishList = React.lazy(() => import('../WishList/WishList.container'));
const Search = React.lazy(() => import('../Search/Search.container'));
const Documentation = React.lazy(() => import('../Documentation/Documentation'));

export default function router() {
    return(
        <React.Suspense fallback = {<Loader/>}>
            <Switch>
            <Route path="/" exact>
                <Movies/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/movie/:movieId">
                <MovieDetails/>
            </Route>
            <Route path="/my-wish-list">
                <WishList/>
            </Route>
            <Route path="/search">
                <Search/>
            </Route>
            <Route path="/documentation">
                <Documentation/>
            </Route>
        </Switch>
        </React.Suspense>
    )
}

