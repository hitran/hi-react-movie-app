import { connect } from "react-redux"
import WishList from './WishList';
import {addToWishList, removeFromWishList} from './WishList.action';


const mapStateToProps = (store) => ({
    load: store.wishListReducer.load,
    data: store.wishListReducer.data,
    error: store.wishListReducer.error
})

const mapDispatchToProps = {
    addToWishList,
    removeFromWishList
}

export default connect(mapStateToProps, mapDispatchToProps)(WishList)