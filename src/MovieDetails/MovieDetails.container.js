import {connect} from 'react-redux';
import MovieDetails from './MovieDetails';
import {getMovieDetails} from './MovieDetails.actions';
import {updateUserInfo} from '../Login/Login.action';

const mapStateToProps = (store) => ({
    load: store.movieDetailsReducer.load,
    data: store.movieDetailsReducer.data,
    error: store.movieDetailsReducer.error,
    user: store.loginReducer.data
})

const mapDispatchToProps =  {
    getMovieDetails,
    updateUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)