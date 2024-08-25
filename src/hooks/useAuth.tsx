import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useState, createContext, useLayoutEffect } from 'react';

import api from '@services/api';

import UserService from '@services/UserService';

import User from '../interfaces/User';

interface ILoginRequest {
    email: string;
    password: string;
}

interface AuthContextData {
    user: User;
    Login: (data: ILoginRequest) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children?: React.ReactNode | undefined }> = ({ children }) => {
    const [user, setUser] = useState({} as User);

    const Login = async (data: ILoginRequest) => {
        try {
            const response = await UserService.login(data);

            api.defaults.headers.common = {
                Authorization: `Bearer ${response.token}`
            };
            setUser(response.user);
            AsyncStorage.setItem('@app:token', response.token);
            AsyncStorage.setItem('@app:useId', response.user.id);
        } catch (err) {
            throw new Error((err as Error).message);
        }
    };

    const logout = () => {
        setUser({} as User);

        delete api.defaults.headers.common.Authorization;
        
        AsyncStorage.removeItem('@app:token');
        AsyncStorage.removeItem('@app:useId');
    };

    useLayoutEffect(() => {
        const refreshUser = async () => {
            const token = await AsyncStorage.getItem('@app:token');
            if (token !== undefined) {
                api.defaults.headers.common = {
                    Authorization: `Bearer ${token}`
                };
                const userId = AsyncStorage.getItem('@app:userId');
                try{
                    const response = await UserService.GetUserById(await userId);
                    setUser(response);
                } catch(err) {
                    new Error((err as Error).message);
                };
            }
        };
        refreshUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, Login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default () => useContext(AuthContext);
