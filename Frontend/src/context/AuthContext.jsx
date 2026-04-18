import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(() => sessionStorage.getItem("token") || null);
    const isLoggedIn = !!token;

    function login(newToken) {
        sessionStorage.setItem("token", newToken);
        setToken(newToken);
    }

    function logout() {
        sessionStorage.removeItem("token");
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
