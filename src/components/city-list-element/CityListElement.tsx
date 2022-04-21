import React, {useEffect, useState} from 'react';
import './city-list-element.css';
import {useActions} from "../../hooks/useActions";

interface City {
    city: string;
    tag: string;
}

const CityListElement = (props: City) => {
    const city: City = props
    const {chooseCity,fetchWeather} = useActions()

    const handleOnClick = (city: any) => {
        chooseCity(city);
        fetchWeather(city.city, city.tag)
    }

    return (
        <button onClick={() => handleOnClick(props)} className='city-button'>
            {city.city}
        </button>
    );
};

export default CityListElement;