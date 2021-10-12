import { USER_LOGIN, USER_LOGIN_LOADING, USER_LOGIN_FAIL } from "./user.types"
const INITIAL_STATE = {
    loading: false,
    userData: null || JSON.parse(localStorage.getItem("user")),
    tokenError: null,
    error: null,
    token: null || localStorage.getItem("token")
}

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case USER_LOGIN:
            state.userData = payload;
            state.error = null;
            state.tokenError = null;
            return { ...state };
        case USER_LOGIN_FAIL:
            state.data = null;
            state.error = payload;
            return { ...state }
        case USER_LOGIN_LOADING:
            state.loading = payload;
            return { ...state };

        default:
            return state;
    }
}

export default userReducer