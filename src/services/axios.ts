import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default async function getApi() {
    const token = await AsyncStorage.getItem('@app:token');

    const api = axios.create({
        baseURL: 'https://william-gilberto.polijrinternal.com'
    });

    if (token) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    return api;
}