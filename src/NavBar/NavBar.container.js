import { connect } from "react-redux";
import NavBar from './NavBar';

const mapStateToProps = (store) => ({
    load: store.wishListReducer.load,
    data: store.wishListReducer.data,
    error: store.wishListReducer.error
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)