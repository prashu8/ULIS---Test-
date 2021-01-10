import { combineReducers } from "redux";
import { authReducer } from "./reducer/auth";
import { serviceReducer } from "./reducer/service";


export default combineReducers({
    auth: authReducer,
    service: serviceReducer
})

