import axios from "axios";

const API_KEY = 'e8ab3073c9aaa05f578ffed387d98a2b'

export const weatherAPI = {
    getWeather: (city: string) => {
        return axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${API_KEY}&units=metric`
        )
            .then(response => response.data)
    }
}