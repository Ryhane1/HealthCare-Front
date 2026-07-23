export const getUser = () => {
    return {
        token: localStorage.getItem("token"),
        username: localStorage.getItem("username"),
        role: localStorage.getItem("role"),
    };
};

export const isAuthenticated = () => {
    return !!localStorage.getItem("token");
};
