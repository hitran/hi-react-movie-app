import React from 'react';
import MoviesGrid from '../common/MoviesGrid/MoviesGrid';

export default function Search(props){

    return (
        <div>
            <h1>Search Results:</h1>
            <MoviesGrid movies = {props.data}/>
        </div>
    )
}