import {connect} from 'react-redux';
import MovieDetails from './MovieDetails';
import {getMovieDetails} from './MovieDetails.actions';

const mapStateToProps = (store) => ({
    load: store.movieDetailsReducer.load,
    data: store.movieDetailsReducer.data,
    error: store.movieDetailsReducer.error
})

const mapDispatchToProps =  {
    getMovieDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)