import { connect } from "react-redux"
import WishList from './WishList';
import {updateUserInfo} from '../Login/Login.action';


const mapStateToProps = (store) => ({
    load: store.loginReducer.load,
    data: store.loginReducer.data,
    error: store.loginReducer.error
})

const mapDispatchToProps = {
    updateUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(WishList)