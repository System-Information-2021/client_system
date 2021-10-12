import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";


/**
 * @typedef UserProperties
 * @type {object}
 * @property {(object|null)} data - User data info, get from API.
 * @property {(object|null)} error - User error when login.
 * @property {boolean} isLoading - User is in login process or not.
 * @property {(object|null)} tokenError - Token in localStorage get error.
 * @property {function} logout - Logout function, remove all user data.
 */

/**
 * All about user utilities
 *
 * @returns {UserProperties} Object user, include data, error, tokenError, logout(), etc...
 */
const useUser = () => {
    const userData = useSelector((state) => state.user.userData);
    const userError = useSelector((state) => state.user.error);
    const userLoading = useSelector((state) => state.user.loading);
    const userTokenError = useSelector((state) => state.user.tokenError);
    const history = useHistory();

    return {
        data: userData,
        error: userError,
        isLoading: userLoading,
        tokenError: userTokenError,
        logout: () => {
            localStorage.clear();
            history.push("/");
            window.location.reload();
        },
    };
};

export default useUser;