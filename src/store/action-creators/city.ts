import {Dispatch} from "react";
import {CityAction, CityActionsTypes} from "../../types/city";
import {fetchWeather} from "./weather";

export const chooseCity = (city: any) => {
    return async (dispatch: Dispatch<CityAction>) => {
        fetchWeather(city.city, city.tag);
        dispatch({type: CityActionsTypes.CHOOSE_CITY, payload: city})
    }
}