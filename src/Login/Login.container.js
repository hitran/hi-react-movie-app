import { connect } from "react-redux";
import {login, logout} from './Login.action';
import Login from './Login';

const mapStateToProps = (store) => ({
    load: store.loginReducer.load,
    data: store.loginReducer.data,
    error: store.loginReducer.error
})

const mapDispatchToProps = {
    login,
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);