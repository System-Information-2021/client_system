import { combineReducers } from 'redux';
import counterReducer from './Counter/counter.reducer';
import userReducer from "./User/user.reducer"

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
});

export default rootReducer;