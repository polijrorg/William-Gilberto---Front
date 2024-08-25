import { AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import User from '@interfaces/User';

import api from './api';

// import { setCookie } from 'nookies';

interface ILoginRequest {
    email: string;
    password: string;
}

interface ILoginResponse {
    token: string;
    user: User;
}

interface ListPiuRequest {
    token: string;
}

interface ICadastroRequest {
    name: string;
    email: string;
    cpf: string;
    password: string;
    confirmpassword: string;
}

interface IUpdateRequest {
    id: string;
    name: string;
    email: string;
    password: string;
}

interface IPasswordRequest {
    email: string;
    token: string;
    newPassword: string;
}

export default class UserService {
    static async RestorePassword(email: string): Promise<string> {
        try {
            const response: AxiosResponse<string> = await api.post(
                '/users/restore-password',
                email
            )

            return response.data;
        } catch(err) {
            throw new Error((err as Error).message);
        }
    }

    static async RedefinePassword(data: IPasswordRequest): Promise<string> {
        try {
            const response: AxiosResponse<string> = await api.patch(
                '/users/new-password',
                data
            )

            return response.data;
        } catch(err) {
            throw new Error((err as Error).message);
        }
    }

    static async login(data: ILoginRequest): Promise<ILoginResponse> {
        try {
            const response: AxiosResponse<ILoginResponse> = await api.post(
                '/sessions/login',
                data
            );
    

            // setCookie("@app:token",response.data.token);
            await AsyncStorage.setItem('@app:token', response.data.token);
            await AsyncStorage.setItem('@app:useId', response.data.user.id);
            return response.data;
        } catch(err) {
            throw new Error((err as Error).message);
        }
    }

    static async cadastro(data: ICadastroRequest): Promise<User> {
        try {
            const response: AxiosResponse<User> = await api.post(
                '/users/register',
                data
            );

            return response.data;
        } catch (err) {
            console.log(err);
            throw new Error((err as Error).message);
        }
    }

    static async GetUserById(id: string): Promise<User> {
        try {
            const response: AxiosResponse<User> = await api.get(`/users/read/${id}`);

            return response.data;
        } catch (err) {
            throw new Error((err as Error).message);
        }
    }
    
    static async GetAllUsers(data: ListPiuRequest) {
        const response = await api.get('/users/getAll', {
            headers: {
                Authorization: `Bearer ${data.token}`
            }
        });
        return response.data;
    }

    static async UpdateUser(data: IUpdateRequest): Promise<User> {
        const response: AxiosResponse<User> = await api.patch(
            `/users/update/${data.id}`,
            (data.name, data.email, data.password)
        );

        return response.data;
    }

    static async DeleteUser(id: string): Promise<User> {
        const response: AxiosResponse<User> = await api.patch(
            `/users/delete/${id}`
        );

        return response.data;
    }
}
