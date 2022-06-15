import axios from "axios";

import {IFormData} from "../interfaces";

const instance = axios.create({
    baseURL: 'https://reqres.in/api/',
});

export const authAPI = {
    signIn: (data: IFormData) => {
        return instance.post('login', data)
            .then(response => response.data)
    },
    signUp: (data: IFormData) => {
        return instance.post('register', data)
    }
}