import { connect } from "react-redux";
import Movies from './Movies';
import {getMoviesList} from './Movies.actions';


const mapStateToProps = (store) => ({
    load: store.moviesReducer.load,
    data: store.moviesReducer.data,
    error: store.moviesReducer.error
})

const mapDispatchToProps = {
    getMoviesList
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
