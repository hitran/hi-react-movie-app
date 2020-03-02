import { connect } from "react-redux";
import NavBar from './NavBar';
import {searchMovies} from '../Search/Search.action';

const mapStateToProps = (store) => ({
    load: store.wishListReducer.load,
    data: store.wishListReducer.data,
    error: store.wishListReducer.error,
    login: store.loginReducer.data
})

const mapDispatchToProps = {
    searchMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)