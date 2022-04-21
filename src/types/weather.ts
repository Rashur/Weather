interface WeatherArrayElement {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Weather {
    weather: WeatherArrayElement[];
    main: {temp: number | null };
}

export interface WeatherState {
    weather: Weather;
    loading: boolean;
    error: null | string;
}

export enum WeatherActionTypes {
    FETCH_WEATHER = 'FETCH_WEATHER',
    FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
    FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR',
}

interface FetchWeatherAction {
    type: WeatherActionTypes;
}

interface FetchWeatherSuccessAction {
    type: WeatherActionTypes;
    payload: any[];
}

interface FetchWeatherErrorAction {
    type: WeatherActionTypes;
    payload: string;
}

export type WeatherAction = FetchWeatherAction | FetchWeatherSuccessAction | FetchWeatherErrorAction;