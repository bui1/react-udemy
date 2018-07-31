import axios from "axios";
const API_KEY = "ae6ea832046711774d12ead537d316a8";

export const FETCH_WEATHER = "FETCH_WEATHER";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

// action creator
export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    console.log(request);

    return { // return a action
        type: FETCH_WEATHER,
        payload: request
    };
}