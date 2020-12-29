import axios from "../../axios/axiosinstance";
import { PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "./action-types";



export function getProducts() {
    return async dispatch => {
        dispatch({
            type: PRODUCT_LIST_REQUEST
        })
        try {
            var res = await axios.get('getAllProduct.php');
            res = res.data;

            // console.log("RESPONSE", res);

            dispatch({ type: PRODUCT_LIST_SUCCESS, payload: res });
            return { productSuccess: true, data: res };
        } catch (e) {
            dispatch({ type: PRODUCT_LIST_FAILURE })
        }
    }
}