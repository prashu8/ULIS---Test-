import { combineReducers } from "redux";
import { productReducer } from "./reducer/product";


export default combineReducers({
    product: productReducer
})

