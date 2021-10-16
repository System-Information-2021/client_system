import apiInstance from ".";
const tokenKey = "token";




export const setAPIHeader = (token = localStorage.getItem(tokenKey)) => {
    if (token) apiInstance.defaults.headers.common["token"] = token;
};
