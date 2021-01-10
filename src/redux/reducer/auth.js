import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "../action/action-types"

const initalState = {
    userData: "",
    isLoading: false
}


export const authReducer = (state = initalState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, isLoading: true }
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, userData: action.payload }
        case LOGIN_FAILURE:
            return { ...state, isLoading: false }


        case LOGOUT_REQUEST:
            return { ...state }
        case LOGOUT_SUCCESS:
            return { ...state, userData: "" }
        case LOGOUT_FAILURE:
            return { ...state }


        default:
            return state
    }
}