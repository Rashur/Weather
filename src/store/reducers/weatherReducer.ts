import {WeatherAction, WeatherActionTypes, WeatherState} from "../../types/weather";

const initialState: WeatherState = {
    weather: {weather: [], main: {temp: null} },
    loading: false,
    error: null,
}

export const weatherReducer = (state = initialState, action: any): WeatherState => {
    switch (action.type) {
        case WeatherActionTypes.FETCH_WEATHER:
            return {loading: true, error: null, weather: {weather: [], main: {temp: null}}}
        case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
            return {loading: false, error: null, weather: action.payload}
        case WeatherActionTypes.FETCH_WEATHER_ERROR:
            return {loading: false, error: action.payload, weather: {weather: [], main: {temp: null}}}
        default:
            return state;
    }
}