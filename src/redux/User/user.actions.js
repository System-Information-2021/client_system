import { USER_LOGIN, USER_LOGIN_LOADING, USER_LOGIN_FAIL } from "./user.types"
import { setAPIHeader } from "../../services/auth"
import { setInforUser } from "../../services/user"
import apiInstance from "../../services"
import Swal from 'sweetalert2'

export const actLogout = () => {
    localStorage.clear();
    window.location.reload();
}

export const actLogin = (payload, history) => {
    return async (dispatch) => {
        try {
            dispatch(actLoginLoading(true))

            const { data } = await apiInstance({
                url: "/login",
                method: "POST",
                data: { email: payload.email, password: payload.password }
            })
            if (data.code === 200) {
                localStorage.setItem("token", data.token)
                setInforUser(data.data)
                setAPIHeader(data.token)
                dispatch(actLoginSuccess(data.data))
                dispatch(actLoginLoading(false))
                history.push("/")
            } else {
                dispatch(actLoginFail(data.message))
                console.log("fetch data error")
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: data.message,
                })
                dispatch(actLoginLoading(false))
            }
        } catch (err) {
            let error = err;
            if (typeof err.error_code === "undefined") {
                error = {
                    error_code: 999,
                    message: "Something went wrong, please try again later",
                };
            }
            dispatch(actLoginFail(error))
            dispatch(actLoginLoading(false))
        }
    }
}

export const actLoginSuccess = (payload) => {
    return {
        type: USER_LOGIN,
        payload
    }
}
export const actLoginLoading = (payload) => {
    return {
        type: USER_LOGIN_LOADING,
        payload
    }
}
export const actLoginFail = (payload) => {
    return {
        type: USER_LOGIN_FAIL,
        payload
    }
}
