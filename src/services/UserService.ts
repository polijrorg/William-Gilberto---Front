import { AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import User from '@interfaces/User';

import api from './api';
import Investments from '@interfaces/Investment';
import Setup from '@interfaces/Setup';

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

interface UpdateInvestmentRequest {
    quota?: number;
    value?: number;
    setupId?: string;
}

interface IPasswordRequest {
    email: string;
    token: string;
    newPassword: string;
}

interface ICreateInvestment {
    quota: number;
    segment: string;
    asset: string;
    value: number;
    realWalletid?: string;
    setupId: string;
    studyWalletId?: string;
}

interface ICreateSetup {
    userid: string;
    name: string;
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
            console.log("Login request payload:", data);  // Log request data
            const response: AxiosResponse<ILoginResponse> = await api.post(
                '/sessions/login',
                data
            );
            console.log("Login response data:", response.data);  // Log response data
    
            await AsyncStorage.setItem('@app:token', response.data.token);
            await AsyncStorage.setItem('@app:useId', response.data.user.id);
    
            return response.data;
        } catch(err) {
            if (err.response) {
                console.log("Login error response:", err.response.data);  // Log detailed error response
            } else {
                console.log("Login error:", err.message);
            }
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
            console.log("cadastro");
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

    static async UpdateUser(data: IUpdateRequest): Promise<Investments> {
        const response: AxiosResponse<Investments> = await api.patch(
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


    /* Investimentos */
    static async CreateInvestment(data: ICreateInvestment): Promise<Investments> {
        try {
            const response: AxiosResponse<Investments> = await api.post(
                '/investments/create',
                data
            );

            return response.data;
        } catch (err) {
            console.log(err);
            throw new Error((err as Error).message);
        }
    }

    static async GetAllInvestments(token: string) {
        const response = await api.get('/investments/getAll', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }

    
    static async getUserInvestmentsRealWallet(id: string) {
        try {
            const response: AxiosResponse<Investments[]> = await api.get(`/investments/getUserInvestmentsRealWallet/${id}`);
            return response.data;
        } catch(err) {
            throw new Error((err as Error).message);
        }
    }

    static async getUserInvestmentsStudyWallet(id: string) {
        try {
            const response: AxiosResponse<Investments[]> = await api.get(`/investments/getUserInvestmentsStudyWallet/${id}`);
            return response.data;
        } catch(err) {
            throw new Error((err as Error).message);
        }
    }

    static async GetInvestmentById(id: string): Promise<Investments> {
        try {
            const response: AxiosResponse<Investments> = await api.get(`/investments/read/${id}`);

            return response.data;
        } catch (err) {
            throw new Error((err as Error).message);
        } 
    }

    static async DeleteInvestment(id: string): Promise<Investments> {
        try {
            const response: AxiosResponse<Investments> = await api.delete(
                `/investments/delete/${id}`
            );
            return response.data;
        } catch(err) {
            throw new Error((err as Error).message);
        };

    }

    static async UpdateInvestment(id: string, data: UpdateInvestmentRequest): Promise<Investments> {
        const response: AxiosResponse<Investments> = await api.patch(
            `/investments/update/${id}`,
            data
        );

        return response.data;
    }

    static async getAllUserSetups(userid: string): Promise<Setup[]> {
        try {
            const response: AxiosResponse<Setup[]> = await api.get(
                `/setup/getAllUserSetups/${userid}`,
            );

            return response.data;
        } catch(err) {
            throw new Error((err as Error).message);
        };
    }

    static async getUsersRealWallet(userid: string) {
        try {
            const response = await api.get(
                `/realWallet/getUserWallet/${userid}`,
            );

            return response.data;
        } catch(err) {
            throw new Error((err as Error).message);
        };
    }

    static async getUsersStudyWallet(userid: string) {
        try {
            const response = await api.get(
                `/studyWallet/getUserWallet/${userid}`,
            );

            return response.data;
        } catch(err) {
            throw new Error((err as Error).message);
        };
    }

    static async getAllSegmentsNames() {
        try {
            const response = await api.get(
                `/segments/getAllNames`,
            );

            return response.data;
        } catch(err) {
            throw new Error((err as Error).message);
        };
    }

    static async TransferInvestment(id: string) {
        try {
            const response = await api.get(
                `/investments/transfer/${id}`
            );

            return response.data;
        } catch(err) {
            throw new Error((err as Error).message);
        }
    }

    /* Indicadores */

    static async GetAllIndicators() {
        try {
            const response = await api.get(
                `/indicators/getAll`
            );
            console.log(response.data);
            return response.data;
        } catch(err) {
            console.log(err);
            throw new Error((err as Error).message);
        }
    }    

    static async CreateSetup(data: ICreateSetup): Promise<Investments> {
        try {
            const response: AxiosResponse<Investments> = await api.post(
                '/setup/create',
                data
            );

            return response.data;
        } catch (err) {
            console.log(err);
            throw new Error((err as Error).message);
        }
    }

    /* Estratégia Real */

    static async GetUserRealStrategy(userid: string) {
        try {
            const response = await api.get(
                `/realStrategy/read/${userid}`,
            );

            return response.data;
        } catch (err) {
            throw new Error((err as Error).message);
        } 
    }

    static async GetUserStudyStrategy(userid: string) {
        try {
            const response = await api.get(
                `/studyStrategy/read/${userid}`,
            );

            return response.data;
        } catch (err) {
            throw new Error((err as Error).message);
        } 
    }

    /* Teste */

    static async Teste() {
        const response = await api.get('/teste');
        return response.data;
    }

}
