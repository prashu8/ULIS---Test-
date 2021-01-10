import { HEADERS, URL } from "../../URLConstants/AppDefines";
import {
    LANGUAGE_FAILURE, LANGUAGE_REQUEST,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE, LANGUAGE_SUCCESS,
    LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,
    SERVICE_FAILURE, SERVICE_REQUEST, SERVICE_SUCCESS
} from "./action-types";



export function login(data) {
    return async dispatch => {
        dispatch({
            type: LOGIN_REQUEST
        })
        try {

            var res = await fetch(URL + 'login/Login', {
                method: 'POST',
                headers: HEADERS,
                body: data
            })
                .then((response) => response.json())
                .then((res) => {
                    if (res.status == "Success") {
                        return { data: res };
                    } else {
                        return { data: res };
                    }
                })

            console.log("Login Response for Redux", res);
            if (res.data.status == "Success") {
                dispatch({ type: LOGIN_SUCCESS, payload: res.data });
                return { loginSuccess: true, data: res.data };
            } else {
                dispatch({ type: LOGIN_FAILURE, payload: res.data });
                return { loginSuccess: false, data: res.data };
            }


        } catch (e) {
            dispatch({ type: LOGIN_FAILURE });
            // alert("Please check your internet connectioin!");
        }
    }
}


export function services() {
    return async dispatch => {
        dispatch({
            type: SERVICE_REQUEST
        })
        try {
            var res = await fetch(URL + 'masters/Service', {
                method: 'GET',
                headers: HEADERS
            })
                .then((response) => response.json())
                .then((res) => {
                    if (res.status == "Success") {
                        return { data: res };
                    } else {
                        return { data: res };
                    }
                })

            // console.log("Services Response for Redux", res.data.data);
            if (res.data.status == "Success") {
                dispatch({ type: SERVICE_SUCCESS, payload: res.data.data });
                return { serviceSuccess: true, data: res.data.data };
            } else {
                dispatch({ type: SERVICE_FAILURE });
                return { serviceSuccess: false, data: res.data.data };
            }


        } catch (e) {
            dispatch({ type: SERVICE_FAILURE });
            // alert("Please check your internet connectioin!");
        }
    }
}

export function languageApi() {
    return async dispatch => {
        dispatch({
            type: LANGUAGE_REQUEST
        })
        try {
            var res = await fetch(URL + 'masters/Language', {
                method: 'GET',
                headers: HEADERS
            })
                .then((response) => response.json())
                .then((res) => {
                    if (res.status == "Success") {
                        return { data: res };
                    } else {
                        return { data: res };
                    }
                })

            // console.log("Language Response for Redux", res.data.data);
            if (res.data.status == "Success") {
                dispatch({ type: LANGUAGE_SUCCESS, payload: res.data.data });
                return { serviceSuccess: true, data: res.data.data };
            } else {
                dispatch({ type: LANGUAGE_FAILURE });
                return { serviceSuccess: false, data: res.data.data };
            }


        } catch (e) {
            dispatch({ type: LANGUAGE_FAILURE });
            // alert("Please check your internet connectioin!");
        }
    }
}



export function logOut() {
    return async dispatch => {
        dispatch({ type: LOGOUT_REQUEST });
        try {

            console.log("logout ho gaya");
            dispatch({ type: LOGOUT_SUCCESS });
            return { logout: true };
        } catch (e) {
            dispatch({ type: LOGOUT_FAILURE });
            return { logout: false };
        }
    }
}






