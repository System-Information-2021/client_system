
export const setInforUser = (user) => {
    if (user) {
        localStorage.setItem("user", JSON.stringify(user));
    }
}