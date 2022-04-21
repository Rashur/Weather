import {Dispatch} from "redux";
import {WeatherAction, WeatherActionTypes} from "../../types/weather";
import axios from "axios";

export const fetchWeather = (city: string, cityKey: string) => {
    return async (dispatch: Dispatch<WeatherAction>) => {
        try {
            dispatch({type: WeatherActionTypes.FETCH_WEATHER})
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city},${cityKey}&appid=32571e2d0f682a9d5698ebda296e1de6`)
            dispatch({type: WeatherActionTypes.FETCH_WEATHER_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: WeatherActionTypes.FETCH_WEATHER_ERROR, payload: "Error"})
        }
    }

}