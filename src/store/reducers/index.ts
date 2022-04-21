import {combineReducers} from "redux";
import {weatherReducer} from "./weatherReducer";
import {cityReducer} from "./cityReducer";


export const rootReducer = combineReducers({
    weather: weatherReducer,
    city: cityReducer
})

export type RootState = ReturnType<typeof rootReducer>;