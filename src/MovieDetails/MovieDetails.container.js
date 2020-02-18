import {connect} from 'react-redux';
import MovieDetails from './MovieDetails';
import {getMovieDetails} from './MovieDetails.actions';
import {addToWishList} from '../WishList/WishList.action';

const mapStateToProps = (store) => ({
    load: store.movieDetailsReducer.load,
    data: store.movieDetailsReducer.data,
    error: store.movieDetailsReducer.error,
    wishList: store.wishListReducer.data
})

const mapDispatchToProps =  {
    getMovieDetails,
    addToWishList
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)