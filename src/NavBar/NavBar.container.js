import { connect } from "react-redux";
import NavBar from './NavBar';
import {searchMovies} from '../Search/Search.action';

const mapStateToProps = (store) => ({
    load: store.loginReducer.load,
    data: store.loginReducer.data,
    error: store.loginReducer.error,
})

const mapDispatchToProps = {
    searchMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)