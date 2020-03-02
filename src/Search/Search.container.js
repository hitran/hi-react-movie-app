import { connect } from "react-redux";
import Search from './Search';
import {searchMovies} from './Search.action';

const mapStateToProps = (store) => ({
    load: store.searchReducer.load,
    data: store.searchReducer.data,
    error: store.searchReducer.error
})
const mapDispatchToProps = {
    searchMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)