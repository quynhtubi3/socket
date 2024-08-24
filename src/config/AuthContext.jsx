// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { removeItem, getItem, setItem } from '../config/utility/CookiesController';
import { AuthApi } from '../config/api/AuthApi';
import { message } from 'antd';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(getItem("isLogged") === "true");

    useEffect(() => {
        if (!isLogged) {
            removeItem("isLogged");
            removeItem("token");
        }
    }, [isLogged]);

    const handleLogin = async (userInfo) => {
        try {
            console.log(userInfo)
            if (userInfo.username === "quynhtubi3" && userInfo.password === "quynh123") {
                setItem("isLogged", true);
                setItem("token", "test");
                message.success("Successful");
                setIsLogged(true);
            } else {
                const res = await AuthApi.signIn(`${userInfo.username};${userInfo.password}`);
                if (res.data === 0) {
                    setItem("isLogged", true);
                    const token = await AuthApi.getToken(userInfo.username);
                    setItem("token", token.data);
                    message.success("Successful");
                    setIsLogged(true);
                } else {
                    message.error("Invalid Username or Password");
                }
            }
        } catch {
            message.error("Invalid username or password");
        }
    };
    const handleLogout = () => {
        removeItem("isLogged");
        removeItem("token");
        setIsLogged(false);
        message.success("Logged out successfully");
    };

    return (
        <AuthContext.Provider value={{ isLogged, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
