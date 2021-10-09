import { USER_LOGIN, USER_LOGIN_LOADING, USER_LOGIN_FAIL } from "./user.types"

export const actLogin = (payload, history) => {
    return async (dispatch) => {
        try {
            dispatch(actLoginLoading(true))

        } catch (err) {
            let error = err;
            if (typeof err.error_code === "undefined") {
                error = {
                    error_code: 999,
                    message: "Something went wrong, please try again later",
                };
            }
            dispatch(actLoginFail(error))
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
