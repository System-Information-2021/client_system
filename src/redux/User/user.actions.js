import { USER_LOGIN, USER_LOGIN_LOADING, USER_LOGIN_FAIL } from "./user.types"
import { setAPIHeader } from "../../services/auth"
import apiInstance from "../../services"
import Swal from 'sweetalert2'

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
                dispatch(actGetUserDetail(data.token, (userData) => {
                    if (userData) {
                        if (userData.data.isadmin === true) {
                            history.push("/admin")
                        } else {
                            history.push("/")
                        }
                    }
                }))
                dispatch(actLoginLoading(false))
            } else {
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
            dispatch(actLoginLoading(false))
        }
    }
}

export const actGetUserDetail =
    (token, callback = () => { }) =>
        async (dispatch) => {
            try {
                await apiInstance({
                    url: "get-user-by-token",
                    method: "POST",
                    data: { token },
                })
                    .then((res) => {
                        console.log(res.data)
                        if (res.data.code === 200) {
                            setAPIHeader(res.data.token)
                            dispatch(actLoginSuccess(res.data.data))
                            dispatch(actLoginLoading(false));
                            callback(res.data)
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: res.data.message,
                            })
                            localStorage.clear()
                            console.log("fail get detail")
                            dispatch(actLoginLoading(false))
                            callback(null);
                        }
                    })
                    .catch((err) => {
                        let error = err;
                        if (typeof error.error_code === "undefined") {
                            error = {
                                error_code: 999,
                                message: "Something went wrong, please try again later",
                            };
                        }
                        callback(null);
                        console.log(err);
                    });
            } catch (err) {
                let error = err;
                if (typeof error.error_code === "undefined") {
                    error = {
                        error_code: 999,
                        message: "Something went wrong, please try again later",
                    };
                }

                callback(null);
            }
        };

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
