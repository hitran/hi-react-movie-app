import { connect } from "react-redux";
import Movies from './Movies';
import {getPopularMoviesList, getLatestMoviesList, getTopRatedMoviesList} from './Movies.actions';


const mapStateToProps = (store) => ({
    load: store.moviesReducer.load,
    data: store.moviesReducer.data,
    error: store.moviesReducer.error
})

const mapDispatchToProps = {
    getPopularMoviesList,
    getLatestMoviesList,
    getTopRatedMoviesList
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
