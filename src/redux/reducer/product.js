import { PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../action/action-types"

const initalState = {
    productList: [],
    isLoading: false
}


export const productReducer = (state = initalState, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { ...state, isLoading: true }
        case PRODUCT_LIST_SUCCESS:
            return { ...state, isLoading: false, productList: action.payload }
        case PRODUCT_LIST_FAILURE:
            return { ...state, isLoading: false }



        default:
            return state
    }
}