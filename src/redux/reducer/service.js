import { LANGUAGE_FAILURE, LANGUAGE_REQUEST, LANGUAGE_SUCCESS, SERVICE_FAILURE, SERVICE_REQUEST, SERVICE_SUCCESS } from "../action/action-types"

const initalState = {
    allServices: [],
    languages: [],
    isLoading: false
}


export const serviceReducer = (state = initalState, action) => {
    switch (action.type) {
        case SERVICE_REQUEST:
            return { ...state, isLoading: true }
        case SERVICE_SUCCESS:
            return { ...state, isLoading: false, allServices: action.payload }
        case SERVICE_FAILURE:
            return { ...state, isLoading: false }


        case LANGUAGE_REQUEST:
            return { ...state }
        case LANGUAGE_SUCCESS:
            return { ...state, languages: action.payload }
        case LANGUAGE_FAILURE:
            return { ...state }
        default:
            return state
    }
}