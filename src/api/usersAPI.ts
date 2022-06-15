import axios from "axios";

const instance = axios.create({
    baseURL: 'https://reqres.in/api'
})

export const usersAPI = {
    getUsers: (page: number = 1) => {
        return instance.get(`users?page=${page}`)
            .then(response => response.data)
    },
    getUserById: (id: number) => {
        return instance.get(`users/${id}`)
            .then(response => response.data)
    }
}