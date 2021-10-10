import { USER_LOGIN, USER_LOGIN_LOADING, USER_LOGIN_FAIL } from "./user.types"
import { setAPIHeader } from "../../services/auth"
import { setInforUser } from "../../services/user"
import apiInstance from "../../services"

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
            console.log(data.code);
            if (data.code === 200 && data.status === "ok" && data.token !== "underfine") {
                localStorage.setItem("token", data.token)
                setInforUser(data.user)
                setAPIHeader(data.token)
                dispatch(actLoginSuccess(data.user))
                dispatch(actLoginLoading(false))
                history.push("/")
            } else {
                // dispatch(actLoggingFail(data.data.error_message));
                console.log("fetch data error")
                dispatch(actLoginLoading(false))
            }
        } catch (err) {
            // let error = err;
            // if (typeof err.error_code === "undefined") {
            //     error = {
            //         error_code: 999,
            //         message: "Something went wrong, please try again later",
            //     };
            // }
            // dispatch(actLoginFail(error))
            console.log(err)
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
