import {combineReducers} from "redux"
import homeReducer from "./homeReducer"
import authReducer from "./authReducer";

export default combineReducers({
    homeReducer : homeReducer,
    authReducer : authReducer
})