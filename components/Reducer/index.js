import {combineReducers} from "redux"
import publicReducer from "./publicReducer"
import authReducer from "./authReducer"
import mentorReducer from "./mentorReducer"
import studentReducer from "./studentReducer"

export default combineReducers({
    auth : authReducer,
    public : publicReducer,
    mentor : mentorReducer,
    student : studentReducer,
})