import {combineReducers} from "redux"
import publicReducer from "./publicReducer"
import authReducer from "./authReducer"
import mentorReducer from "./mentorReducer"

export default combineReducers({
    auth : authReducer,
    public : publicReducer,
    mentor : mentorReducer,
})