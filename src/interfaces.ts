import {SerializedError} from "@reduxjs/toolkit";

export interface IFormData {
    email: string
    password: string
}

export interface ICustomFormProps {
    sendData: any
}

export interface IIsAuthState {
    value: boolean
}

export interface IWeatherFormData {
    cityName: string
}

export interface IWeatherFormProps {
    sendData: any
}

export interface IWeatherState {
    name?: string
    weather?: [
        {
            description: string
        }
    ]
    main?: {
        temp: number
        feels_like: number
        pressure: number
    }
}

export interface IWeatherInfoProps {
    state: IWeatherState
}

export interface IUser {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
}

export interface IUsers {
    users: {
        data?: IUser[]
        total: number
        per_page: number
        page: number
    }
    isLoading: boolean
    error: SerializedError | null
}

export interface IUsersListProps {
    users: IUser[]
    total: number
    perPage: number
    currentPage: number
}

export interface IUserState {
    user?: IUser
    isLoading: boolean
    error: SerializedError | null
}