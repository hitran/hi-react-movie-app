import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Loader from '../Loader/Loader';

const Movies = React.lazy(() => import('../Movies/Movies.container'));
const Login = React.lazy(() => import('../Login/Login'));
const MovieDetails = React.lazy(() => import('../MovieDetails/MovieDetails.container'));

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
        </Switch>
        </React.Suspense>
    )
}

