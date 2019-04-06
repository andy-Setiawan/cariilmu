import {combineReducers} from "redux"
import homeReducer from "./homeReducer"
import authReducer from "./authReducer";
import profileReducer from "./profileReducer"

export default combineReducers({
    homeReducer : homeReducer,
    authReducer : authReducer,
    profileReducer : profileReducer
})