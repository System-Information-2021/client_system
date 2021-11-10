import { combineReducers } from 'redux';
import counterReducer from './Counter/counter.reducer';
import userReducer from "./User/user.reducer"
import shoppingReducer from './ShoppingCart/shopping.reducer';
import productReducer from './Product/product.reducer'

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    shopping: shoppingReducer,
    products: productReducer,
});

export default rootReducer;