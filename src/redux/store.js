import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import apiInstance from "../services/index"


const store = createStore(rootReducer, process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(thunk.withExtraArgument(apiInstance)))
    : composeWithDevTools(applyMiddleware(thunk.withExtraArgument(apiInstance))));

export default store;