import {CityAction, CityActionsTypes, CityState} from "../../types/city";

const initialState: CityState = {
    city: null,
}

export const cityReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CityActionsTypes.CHOOSE_CITY:
            return {city: action.payload}
        case CityActionsTypes.RESET_CITY:
            return {city: null}
        default:
            return state
    }
}