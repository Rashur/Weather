export interface CityState {
    city: object | null;
}

export enum CityActionsTypes {
    CHOOSE_CITY = 'CHOOSE_CITY',
    RESET_CITY = 'RESET_CITY',
}
interface ChooseCity {
    type: CityActionsTypes;
    payload: object;
}

interface ResetCity {
    type: CityActionsTypes;
}

export type CityAction = ChooseCity | ResetCity;